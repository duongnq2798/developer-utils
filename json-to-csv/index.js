const fs = require("fs");

function jsonToCsv(jsonData, fileName) {
  const data = typeof jsonData !== "object" ? JSON.parse(jsonData) : jsonData;
  const keys = Object.keys(data[0]);

  const csvHeader = keys.join(",") + "\n";

  const csvRows = data
    .map((row) => {
      return keys
        .map((key) => {
          const cellData = row[key] === undefined ? "" : row[key];
          return JSON.stringify(cellData);
        })
        .join(",");
    })
    .join("\n");

  if (fileName !== undefined) {
    fs.writeFileSync(fileName, csvHeader + csvRows);
  } else {
    return csvHeader + csvRows;
  }
}

const jsonData = require("./data.json");

jsonToCsv(jsonData, "mydata.csv");
