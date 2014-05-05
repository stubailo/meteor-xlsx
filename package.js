Package.describe({
  summary: "Use XLSX spreadsheets as source files"
});

Package._transitional_registerBuildPlugin({
  name: "compileXlsx",
  use: [],
  sources: [
    'plugin/compile-xlsx.js'
  ],
  npmDependencies: {"xlsx": "0.6.1"}
});