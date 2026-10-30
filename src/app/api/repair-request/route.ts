import { NextResponse } from "next/server";
import ExcelJS from "exceljs";
import path from "path";
import fs from "fs";

// Mutex queue to prevent file-write collisions during simultaneous submissions
let writeQueue = Promise.resolve();

const DATA_DIR = path.join(process.cwd(), "data");
const FILE_PATH = path.join(DATA_DIR, "repairs.xlsx");

const COLUMNS = [
  { header: "Date & Time", key: "date", width: 22 },
  { header: "Brand", key: "brand", width: 16 },
  { header: "Model", key: "model", width: 22 },
  { header: "Issue", key: "issue", width: 25 },
  { header: "Description", key: "description", width: 45 },
  { header: "Customer Name", key: "name", width: 22 },
  { header: "Email", key: "email", width: 28 },
  { header: "Phone", key: "phone", width: 18 },
];

function styleHeaderRow(worksheet: ExcelJS.Worksheet) {
  const headerRow = worksheet.getRow(1);
  headerRow.font = { name: "Arial", size: 11, bold: true, color: { argb: "FFFFFFFF" } };
  headerRow.fill = {
    type: "pattern",
    pattern: "solid",
    fgColor: { argb: "FF0C223A" }, // Dark navy brand color
  };
  headerRow.alignment = { vertical: "middle", horizontal: "left" };
  headerRow.height = 28;
}

async function addEntryToExcel(entry: {
  date: string;
  brand: string;
  model: string;
  issue: string;
  description: string;
  name: string;
  email: string;
  phone: string;
}) {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }

  const workbook = new ExcelJS.Workbook();

  if (fs.existsSync(FILE_PATH)) {
    await workbook.xlsx.readFile(FILE_PATH);
  }

  let worksheet = workbook.getWorksheet("Repair Requests");
  if (!worksheet) {
    worksheet = workbook.addWorksheet("Repair Requests");
    worksheet.columns = COLUMNS;
    styleHeaderRow(worksheet);
  } else {
    worksheet.columns = COLUMNS;
  }

  const newRow = worksheet.addRow({
    date: entry.date,
    brand: entry.brand,
    model: entry.model,
    issue: entry.issue,
    description: entry.description,
    name: entry.name,
    email: entry.email,
    phone: entry.phone,
  });

  newRow.alignment = { vertical: "middle", wrapText: true };
  newRow.font = { name: "Arial", size: 10 };

  await workbook.xlsx.writeFile(FILE_PATH);
}

// Forward data to Google Sheets via Google Apps Script Web App
async function sendToGoogleSheet(entry: {
  date: string;
  brand: string;
  model: string;
  issue: string;
  description: string;
  name: string;
  email: string;
  phone: string;
}) {
  const googleSheetUrl = process.env.GOOGLE_SHEET_WEBHOOK_URL;
  if (!googleSheetUrl) {
    return false;
  }

  const response = await fetch(googleSheetUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(entry),
    redirect: "follow",
  });

  if (!response.ok) {
    throw new Error(`Google Sheets responded with status ${response.status}`);
  }

  return true;
}

export async function GET() {
  try {
    if (!fs.existsSync(FILE_PATH)) {
      return NextResponse.json(
        { error: "No repairs.xlsx file found yet." },
        { status: 404 }
      );
    }

    const fileBuffer = fs.readFileSync(FILE_PATH);

    return new NextResponse(fileBuffer, {
      headers: {
        "Content-Type":
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        "Content-Disposition": `attachment; filename="repairs.xlsx"`,
      },
    });
  } catch (err: any) {
    console.error("Error reading repairs.xlsx:", err);
    return NextResponse.json(
      { error: "Failed to read Excel file." },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { brand, model, issue, description, name, email, phone } = body;

    if (!brand || !model || !issue || !name || !email || !phone) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const entry = {
      date: new Date().toLocaleString("en-NZ", {
        timeZone: "Pacific/Auckland",
        dateStyle: "medium",
        timeStyle: "short",
      }),
      brand: String(brand).trim(),
      model: String(model).trim(),
      issue: String(issue).trim(),
      description: String(description || "").trim(),
      name: String(name).trim(),
      email: String(email).trim(),
      phone: String(phone).trim(),
    };

    // 1. Send to Google Sheets if configured
    let sentToGoogleSheets = false;
    if (process.env.GOOGLE_SHEET_WEBHOOK_URL) {
      try {
        sentToGoogleSheets = await sendToGoogleSheet(entry);
      } catch (sheetError) {
        console.error("Failed to push to Google Sheet:", sheetError);
      }
    }

    // 2. Also save to local Excel as fallback / local backup
    try {
      await new Promise<void>((resolve, reject) => {
        writeQueue = writeQueue
          .then(() => addEntryToExcel(entry))
          .then(() => resolve())
          .catch((err) => reject(err));
      });
    } catch (excelErr) {
      console.warn("Local Excel write skipped or failed:", excelErr);
    }

    return NextResponse.json({
      success: true,
      googleSheets: sentToGoogleSheets,
    });
  } catch (err: any) {
    console.error("Error processing repair request:", err);
    return NextResponse.json(
      { error: "Failed to save request. Please try again later." },
      { status: 500 }
    );
  }
}
