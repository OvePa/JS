let src = "Just a string"; // The string to be copied
let lsrc = src.length; // Calculating the length of src
let dst = ""; // Creating an empty string

for (let index = 0; index < lsrc; index++) {
  dst += src[index]; // Copying data from src to dst character by character
}

console.log(src);
console.log(dst);
