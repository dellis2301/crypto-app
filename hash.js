const crypto = require("crypto");
const fs = require("fs");

// Hash a string
function hashString(input) {
  const hash = crypto.createHash("sha256").update(input).digest("hex");
  console.log("SHA-256 Hash:", hash);
}

// Hash a file
function hashFile(filePath) {
  const fileBuffer = fs.readFileSync(filePath);
  const hash = crypto.createHash("sha256").update(fileBuffer).digest("hex");
  console.log("File SHA-256 Hash:", hash);
}

// CLI usage
const args = process.argv.slice(2);

if (args[0] === "string") {
  hashString(args[1]);
} else if (args[0] === "file") {
  hashFile(args[1]);
} else {
  console.log("Usage:");
  console.log("node hash.js string \"hello\"");
  console.log("node hash.js file sample.txt");
}
