const fs = require("fs");
const crypto = require("crypto");

const privateKey = fs.readFileSync("private.pem", "utf8");
const data = fs.readFileSync("sample.txt");

const sign = crypto.createSign("SHA256");
sign.update(data);
sign.end();

const signature = sign.sign(privateKey, "hex");
fs.writeFileSync("signature.txt", signature);

console.log("File signed. Signature saved to signature.txt");
