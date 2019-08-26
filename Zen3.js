const fs = require("fs");
fs.readFile("./datafile.json", "utf8", (err, jsonString) => {
  if (err) {
    console.log("File read failed:", err);
    return;
  }
  const data = JSON.parse(jsonString);
  const result = getTerminal(data);
  console.log(result);
});

function getTerminal(data) {
  const result = Object.keys(data).map(x => {
    let tempTerminal = data[x];
    let prevTerminal = tempTerminal;
    while (!tempTerminal) {
      prevTerminal = tempTerminal;
      tempTerminal = data[tempTerminal];
      if (!tempTerminal) {
        break;
      }
    }

    return { [x]: prevTerminal };
  });
  return result;
}
