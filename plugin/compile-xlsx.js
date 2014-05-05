var XLSX = Npm.require('xlsx');

Plugin.registerSourceHandler("xlsx", function (compileStep) {
  var workbook = XLSX.read(compileStep.read().toString("base64"));
  var source = "if (typeof ExcelFiles === 'undefined') ExcelFiles = {};" +
    "ExcelFiles['" + compileStep.inputPath + "'] = " + JSON.stringify(workbook);
  
  var outputFile = compileStep.inputPath + ".js";

  compileStep.addJavaScript({
    path: outputFile,
    sourcePath: compileStep.inputPath,
    data: source
  });
});