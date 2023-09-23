let obj = { one: 1, two: 2, three: 3 };
console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));

/*----------------------- */

let keys = Object.keys(obj); // Create an array of keys of obj

for (var i = 0; i < keys.length; i++) {
  console.log("key:", keys[i], "value:", obj[keys[i]]); // print key and value
}
/*----------------------- */
for (let i in obj) {
  console.log("keys", i, "values", obj[i]);
}
