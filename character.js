const character = {
    id: null,
    name: null,
    strength: null,
    intelligence: null,
    agility: null,
    weapon: null,
    inventory: null,
  
    getHealth: function () {
      const defaultHealth = 100;
      const health = defaultHealth * this.strength;
      return Math.floor(health);
    },
    getMana: function () {
      const defaultMana = 500;
      const mana = defaultMana * (this.intelligence * 0.4);
      return Math.floor(mana);
    },
    getSpeed: function () {
      const defaultSpeed = 0.05;
      const speed = defaultSpeed * (this.strength * this.agility);
      return Math.floor(speed);
    },
    printStats: function () {
      return `
          Name: ${this.name}
  
          Strength: ${this.strength}
          Agility: ${this.agility}
          Intelligence: ${this.intelligence}
  
          HP: ${this.getHealth()}
          Mana: ${this.getMana()}
          Speed: ${this.getSpeed()}
  
          Weapon: ${this.weapon.print()}
        `;
    },
    create: function (name, weapon) {
      this.id = getRandomStats();
      this.name = name;
      this.weapon = weapon;
      this.strength = getRandomStats();
      this.intelligence = getRandomStats();
      this.agility = getRandomStats();
    },
    equip: function () {},
    loot: function () {},
    attack: function () {},
  };
  
  function getRandomStats() {
    return Math.floor(Math.random() * 100);
  }
  
  module.exports = { character, getRandomStats };
