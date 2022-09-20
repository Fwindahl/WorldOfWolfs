const { getRandomStats } = require("./character");

const raritys = ["Trash", "Common", "Epic", "Legendary"];

// Update so logic lets us get legendary
const getRarity = () => {
  const multiplier = 10;
  const randomNumber = (Math.random() * multiplier) % 3;
  const index = Math.floor(randomNumber);
  return raritys[index];
};

const weapon = {
  id: null,
  type: null,
  rarity: null,
  damage: null,
  name: null,
  getDamage: function (strength) {
    return this.damage * strength;
  },
  create: function (name, type) {
    this.name = name;
    this.type = type;
    this.id = getRandomStats();
    this.damage = getRandomStats() * 10 + 20;
    this.rarity = getRarity();
  },
  print: function () {
    return `
        ${this.name}
        ${this.type}
        ${this.rarity}
        Damage: ${this.damage}
      `;
  },
};

module.exports = weapon;


