var object = { name: "Ali", age: 3 }; // JavaScript object assigned to object
var json_obj = JSON.stringify(object); // convert JavaScript object into JSON text
// Print types and values of object and json_obj
console.log("object: ", object);
console.log("object after JSON.stringify: ", json_obj);
console.log("type of object: ", typeof object);
console.log("type of json_obj: ", typeof json_obj);
