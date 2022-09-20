const { character } = require("./character.js");
const weapon = require("./weapon.js");

weapon.create("Frostmourne", "Sword");
character.create("Fullstackmac", weapon);
console.log(character.printStats());