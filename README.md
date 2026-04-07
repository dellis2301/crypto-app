# crypto-app


# Overview
This project demonstrates three basic cryptographic concepts using Node.js:

SHA-256 Hashing

Generates a SHA-256 hash for input strings or files

Uses Node.js built-in crypto module


Caesar Cipher

Implements a simple substitution cipher

Supports encryption and decryption using a shift value

Digital Signatures

Uses OpenSSL-generated RSA keys

Signs a file with a private key and verifies it with a public key



# How to Run
1. Open your terminal then run these commands

Hashing

node hash.js string "hello"

node hash.js file sample.txt

Cipher

node cipher.js encrypt "hello" 3

node cipher.js decrypt "khoor" 3

Digital Signature

Generate keys:

openssl genrsa -out private.pem 2048

openssl rsa -in private.pem -pubout -out public.pem

Sign file:

node sign.js

Verify signature:

node verify.js
