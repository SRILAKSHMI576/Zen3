const fs = require("fs");
fs.readFile("./datafile.json", "utf8", (err, jsonString) => {
  if (err) {
    console.log("Error reading file from disk:", err);
    return;
  }
  try {
    const data_Keys = JSON.parse(jsonString);
    console.log("keys:", data_Keys.keys);
  } catch (err) {
    console.log("Error parsing JSON string:", err);
  }
});
