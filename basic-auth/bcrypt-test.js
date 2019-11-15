const bcrypt = require("bcrypt");
const saltRounds = 10;

const plainPassword1 = "germantastico";
const plainPassword2 = "germantastico";

const salt = bcrypt.genSaltSync(saltRounds);

const hash1 = bcrypt.hashSync(plainPassword1, salt);
const hash2 = bcrypt.hashSync(plainPassword2, salt);

console.log("Hash 1 -", hash1);
console.log("Hash 2 -", hash2);