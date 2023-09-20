let str1 = "Just a"; // The string 1
let str2 = " string"; // The string 2
let str3 = ""; // Creating empty string to store the concatenation result

for (let ind = 0; ind < str1.length; ind++) {
  str3 += str1[ind]; // Appending the values of str1 to str3
}
for (let ind2 = 0; ind2 < str2.length; ind2++) {
  str3 += str2[ind2]; // Appending the values of str3 to str2
}
console.log(str1);
console.log(str2);
console.log(str3);
