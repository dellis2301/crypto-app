const fs = require("fs");
const crypto = require("crypto");

const publicKey = fs.readFileSync("public.pem", "utf8");
const data = fs.readFileSync("sample.txt");
const signature = fs.readFileSync("signature.txt", "utf8");

const verify = crypto.createVerify("SHA256");
verify.update(data);
verify.end();

const isValid = verify.verify(publicKey, signature, "hex");

console.log("Signature valid:", isValid);
