const moves = prompt("enter some moves: ");
const letters = ["L", "U", "F", "R", "D", "B"];
const names = ["left", "up", "front", "right", "down", "back"];

let english = [];

english = moves.split(/\s+/).map(move => {
  const direction =
    move.length == 1
      ? "clockwise"
      : move[1] == "'"
        ? "counterclockwise"
        : "twice";
  return `turn the ${names[letters.indexOf(move[0])]} face ${direction}`;
})

var /* troll emoji */ englishString = english.join(", ");

// tidy up grammar a bit
englishString = englishString[0].toUpperCase() + englishString.substring(1) + ".";

console.log(englishString);