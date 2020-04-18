const fs = require('fs');
const XLSX = require('xlsx');

var workbook = XLSX.readFile('SampleExcelSheet.xlsx');
var sheet_name_list = workbook.SheetNames;
var xlData = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);

xlData.map(x => {
    console.log(x);
})