var obj_json = '{"name": "Ali", "age": 3}'; // string representation of JSON text
var object_translated = JSON.parse(obj_json); // Parse JSON text
// Print types and values of obj_json and object_translated
console.log("obj_json: ", obj_json);
console.log("object after parsing: ", object_translated);
console.log("type of obj_json: ", typeof obj_json);
console.log("type of object_translated: ", typeof object_translated);
