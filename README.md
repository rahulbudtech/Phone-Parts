# Phone Parts & Accessories — Web Application

Professional device repair service platform built with Next.js (App Router), React, and Tailwind CSS.

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Google Sheets Integration (Optional for Testing)
To receive live form submissions into your own Google Sheet:

1. Create a new Google Sheet at [sheets.new](https://sheets.new).
2. Go to **Extensions** → **Apps Script**.
3. Replace any code with the script below:

```javascript
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);
    
    // Add header row if empty
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(["Date & Time", "Brand", "Model", "Issue", "Description", "Customer Name", "Email", "Phone"]);
      var headerRange = sheet.getRange(1, 1, 1, 8);
      headerRange.setBackground("#0c223a");
      headerRange.setFontColor("#ffffff");
      headerRange.setFontWeight("bold");
    }
    
    // Append submission
    sheet.appendRow([
      data.date || new Date().toLocaleString(),
      data.brand || "",
      data.model || "",
      data.issue || "",
      data.description || "",
      data.name || "",
      data.email || "",
      data.phone || ""
    ]);
    
    return ContentService.createTextOutput(JSON.stringify({ status: "success" }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ status: "error", message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

4. Click **Deploy** → **New deployment** → Select type **Web app**.
   - **Execute as**: `Me`
   - **Who has access**: `Anyone`
5. Copy the generated **Web app URL**.
6. Create or edit `.env.local` in the project root:
```env
GOOGLE_SHEET_WEBHOOK_URL=https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec
```

*(Note: If no Google Sheet URL is provided, submissions are automatically saved to `data/repairs.xlsx` locally as a fallback).*

---

### 3. Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to test. Fill out the repair inquiry form, submit, and see the entry appear instantly in your Google Sheet!

---

## 🛠️ Tech Stack
- **Framework**: Next.js 16 (App Router)
- **UI Library**: React 19, Lucide Icons, Tailwind CSS v4
- **Backend / Storage**: Next.js Route Handlers, Google Sheets Webhook, ExcelJS fallback
