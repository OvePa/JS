import { setup, mapper, group, reducer } from "./reduceMap";

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

console.log(mapreduce(arr));
