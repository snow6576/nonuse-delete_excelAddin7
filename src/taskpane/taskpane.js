/*
 * Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license.
 * See LICENSE in the project root for license information.
 */

/* global console, document, Excel, Office */

Office.onReady((info) => {
  if (info.host === Office.HostType.Excel) {
    document.getElementById("sideload-msg").style.display = "none";
    document.getElementById("app-body").style.display = "flex";
   // Assign event handlers and other initialization logic.
    document.getElementById("create-table").onclick = () => tryCatch(createTable);
    document.getElementById("make-Slicer").onclick = () => tryCatch(makeSlicer);
    document.getElementById("make-File").onclick = () => tryCatch(makeFile);
    document.getElementById("delete-Nonuse").onclick = () => tryCatch(deleteNonuse);
  }
});

async function deleteNonuse() {
  await Excel.run(async (context) => {
    const sheet = context.workbook.worksheets.getActiveWorksheet();
    const expensesTable = sheet.tables.getItem("ExpensesTable");
    expensesTable.columns.load("Items");
    expensesTable.rows.load("Items");
    await context.sync();

    const insertRange = sheet.getRange("A:A").getResizedRange(0, expensesTable.columns.items.length);
    insertRange.insert(Excel.InsertShiftDirection.right);

    const slicer = context.workbook.slicers.getItem("SlicerA");
    slicer.load("caption")
    await context.sync();
    
    const titleValue = slicer.caption;
    const targetCell = sheet.getRange("A1");
    targetCell.formulas = [["=ExpensesTable[#Headers]"]];

    let headerRange = expensesTable.getHeaderRowRange();
    let visibleRange = expensesTable.getDataBodyRange().getVisibleView();
    headerRange.load("values");
    visibleRange.load("values");
    visibleRange.load("format");
    visibleRange.load("rowCount");
    await context.sync();
    
    console.log(visibleRange.values );
    console.log(visibleRange.rowCount);
    const  newHeaderRange = sheet.getRange("A1").getResizedRange(0, expensesTable.columns.items.length-1);
    newHeaderRange.values = headerRange.values;
    const newBodyRange = sheet.getRange("A2").getResizedRange(visibleRange.rowCount-1, expensesTable.columns.items.length-1);
    
    newBodyRange.values = visibleRange.values;
    
    sheet.getRange("A1").copyFrom(expensesTable.getRange(), Excel.RangeCopyType.formats)
    sheet.getUsedRange().format.autofitColumns();
    newBodyRange.format.fill.color = "white";
    console.log(51);
    
    slicer.clearFilters();
    const saveRange = sheet.getRange("A:A").getResizedRange(0, expensesTable.columns.items.length);
    saveRange.copyFrom(saveRange,Excel.RangeCopyType.values);
    expensesTable.delete();
    await context.sync();
  });
}

    
    

async function makeFile() {
  // Retrieve the external workbook file and set up a `FileReader` object.
  let myFile = document.getElementById("file");
  let reader = new FileReader();

  reader.onload = function(event) {
    Excel.run(function(context) {
      // Remove the metadata before the base64-encoded string.
      let startIndex = reader.result.toString().indexOf("base64,");
      let externalWorkbook = reader.result.toString().substr(startIndex + 7);

      Excel.createWorkbook(externalWorkbook);
      return context.sync();
    });
  };

  // Read the file as a data URL so we can parse the base64-encoded string.

  reader.readAsDataURL(myFile.files[0]);
  console.log("ファイル作成");
}


async function makeSlicer() {
  await Excel.run(async (context) => {
    const sheet = context.workbook.worksheets.getActiveWorksheet();
    const tableCollection = sheet.tables;
    tableCollection.load("name");
    await context.sync();

    if (tableCollection.items.length == 0) {
      let usedRange = sheet.getUsedRange();
      let expensesTable = sheet.tables.add(usedRange, true /*hasHeaders*/);
      expensesTable.name = "ExpensesTable";
    } else {
      let expensesTable = tableCollection.getItemAt(0);
      expensesTable.load("name");
      await context.sync();
      expensesTable.name = "ExpensesTable";
    }

    const activeCell = context.workbook.getActiveCell().load("values");
    await context.sync();
    const field = activeCell.values[0][0];

    let slicer = sheet.slicers.add(
      "ExpensesTable" /* The slicer data source. For PivotTables, this can be the PivotTable object reference or name. */,
      field /* The field in the data to filter by. For PivotTables, this can be a PivotField object reference or ID. */
    );
    slicer.name = "SlicerA";
    slicer.left = 395;
    slicer.top = 15;

    await context.sync();
  });
}

async function createTable() {
  await Excel.run(async (context) => {

      // TODO1: Queue table creation logic here.
      const currentWorksheet = context.workbook.worksheets.getActiveWorksheet();
      const expensesTable = currentWorksheet.tables.add("A1:D1", true /*hasHeaders*/);
      expensesTable.name = "ExpensesTable";
      // TODO2: Queue commands to populate the table with data.
      expensesTable.getHeaderRowRange().values =
      [["Date", "Merchant", "Category", "Amount"]];
  
  expensesTable.rows.add(null /*add at the end*/, [
      ["1/1/2017", "The Phone Company", "Communications", "120"],
      ["1/2/2017", "Northwind Electric Cars", "Transportation", "142.33"],
      ["1/5/2017", "Best For You Organics Company", "Groceries", "27.9"],
      ["1/10/2017", "Coho Vineyard", "Restaurant", "33"],
      ["1/11/2017", "Bellows College", "Education", "350.1"],
      ["1/15/2017", "Trey Research", "Other", "135"],
      ["1/15/2017", "Best For You Organics Company", "Groceries", "97.88"]
  ]);
      // TODO3: Queue commands to format the table.
      expensesTable.columns.getItemAt(3).getRange().numberFormat = [['\u20AC#,##0.00']];
      expensesTable.getRange().format.autofitColumns();
      expensesTable.getRange().format.autofitRows();
      await context.sync();
  });
}

/** Default helper for invoking an action and handling errors. */
async function tryCatch(callback) {
  try {
      await callback();
  } catch (error) {
      // Note: In a production add-in, you'd want to notify the user through your add-in's UI.
      console.error(error);
  }
}
