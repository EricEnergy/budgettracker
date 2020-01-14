const config = {
    entry: {
      app: "./src/app.js",
      chart: "./src/expenseChart.js"
    },
    output: {
      path: __dirname + "/public",
      filename: "[name].bundle.js"
    },
    mode: "development",
  };

  module.exports = config;
  