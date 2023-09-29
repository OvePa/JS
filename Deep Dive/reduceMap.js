function setup(arr) {
  let friends = {};
  arr.forEach((x) => {
    let friend1 = x[0];
    let friend2 = x[1];
    if (friend1 in friends) {
      friends[friend1].push(friend2);
      console.log(friends);
    } else {
      friends[friend1] = [friend2];
      console.log(friends);
    }
    if (friend2 in friends) {
      friends[friend2].push(friend1);
      console.log(friends);
    } else {
      friends[friend2] = [friend1];
      console.log(friends);
    }
  });
  return friends;
}

function mapper(setup_arr) {
  let arr = [];
  for (x in setup_arr) {
    setup_arr[x].forEach((i) => {
      let key = x > i ? i + x : x + i;
      let temp = new Object();
      temp[key] = Array.from(setup_arr[x]);
      arr.push(temp);
    });
  }
  return arr;
}

function group(mapped_arr) {
  let obj = {};
  mapped_arr.forEach((x) => {
    let key = Object.keys(x)[0];
    if (key in obj) {
      obj[key].push(Array.from(x[key]));
    } else {
      obj[key] = [Array.from(x[key])];
    }
  });
  return obj;
}

function reducer(grouped_obj) {
  for (x in grouped_obj) {
    let arr1 = grouped_obj[x][0];
    let arr2 = grouped_obj[x][1];
    grouped_obj[x] = arr1.filter(
      (i) => arr2.indexOf(i) !== -1 && x.charAt(0) !== i && x.charAt(1) !== i
    );
  }
  return grouped_obj;
}

function mapreduce(friends) {
  let initial = setup(friends);
  let mapped = mapper(initial);
  let grouped = group(mapped);
  let reduced = reducer(grouped);
  return reduced;
}
let arr = [
  ["A", "B"],
  ["A", "C"],
  ["A", "D"],
  ["B", "C"],
  ["B", "D"],
  ["B", "E"],
  ["C", "D"],
  ["C", "E"],
  ["D", "E"],
];
let setup_arr = {
  A: ["B", "C", "D"],
  B: ["A", "C", "D", "E"],
  C: ["A", "B", "D", "E"],
  D: ["A", "B", "C", "E"],
  E: ["B", "C", "D"],
};
var mapped_arr = [
  { AB: ["B", "C", "D"] },
  { AC: ["B", "C", "D"] },
  { AD: ["B", "C", "D"] },
  { AB: ["A", "C", "D", "E"] },
  { BC: ["A", "C", "D", "E"] },
  { BD: ["A", "C", "D", "E"] },
  { BE: ["A", "C", "D", "E"] },
  { AC: ["A", "B", "D", "E"] },
  { BC: ["A", "B", "D", "E"] },
  { CD: ["A", "B", "D", "E"] },
  { CE: ["A", "B", "D", "E"] },
  { AD: ["A", "B", "C", "E"] },
  { BD: ["A", "B", "C", "E"] },
  { CD: ["A", "B", "C", "E"] },
  { DE: ["A", "B", "C", "E"] },
  { BE: ["B", "C", "D"] },
  { CE: ["B", "C", "D"] },
  { DE: ["B", "C", "D"] },
];

let grouped_obj = {
  AB: [
    ["B", "C", "D"],
    ["A", "C", "D", "E"],
  ],
  AC: [
    ["B", "C", "D"],
    ["A", "B", "D", "E"],
  ],
  AD: [
    ["B", "C", "D"],
    ["A", "B", "C", "E"],
  ],
  BC: [
    ["A", "C", "D", "E"],
    ["A", "B", "D", "E"],
  ],
  BD: [
    ["A", "C", "D", "E"],
    ["A", "B", "C", "E"],
  ],
  BE: [
    ["A", "C", "D", "E"],
    ["B", "C", "D"],
  ],
  CD: [
    ["A", "B", "D", "E"],
    ["A", "B", "C", "E"],
  ],
  CE: [
    ["A", "B", "D", "E"],
    ["B", "C", "D"],
  ],
  DE: [
    ["A", "B", "C", "E"],
    ["B", "C", "D"],
  ],
};
console.log("Setup");
console.log(setup(arr));
console.log("Map");
console.log(mapper(setup_arr));
console.log("Group");
console.log(group(mapped_arr));
console.log("Reducer");
console.log(reducer(grouped_obj));
console.log("MapReducer");
console.log(mapreduce(arr));

//export { setup, mapper, group, reducer };
