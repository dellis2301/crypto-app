function caesarEncrypt(text, shift) {
  return text
    .split("")
    .map(char => {
      if (char.match(/[a-z]/i)) {
        const code = char.charCodeAt(0);
        const base = code >= 65 && code <= 90 ? 65 : 97;
        return String.fromCharCode(((code - base + shift) % 26) + base);
      }
      return char;
    })
    .join("");
}

function caesarDecrypt(text, shift) {
  return caesarEncrypt(text, 26 - shift);
}

// CLI usage
const args = process.argv.slice(2);
const mode = args[0];
const text = args[1];
const shift = parseInt(args[2]);

if (mode === "encrypt") {
  console.log("Encrypted:", caesarEncrypt(text, shift));
} else if (mode === "decrypt") {
  console.log("Decrypted:", caesarDecrypt(text, shift));
} else {
  console.log("Usage:");
  console.log("node cipher.js encrypt \"hello\" 3");
  console.log("node cipher.js decrypt \"khoor\" 3");
}
