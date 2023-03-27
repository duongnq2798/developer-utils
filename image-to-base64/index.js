const fs = require("fs");

// Read the file as a binary data
const image = fs.readFileSync("./image.png");

// Convert binary data to base64 string
const base64Image = Buffer.from(image).toString("base64");

if (base64Image !== undefined) {
  fs.writeFileSync("base64", base64Image);
}
