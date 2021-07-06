const Rock = require('./Rock');
const Paper = require('./Paper')
const Scissors = require('./Scissors')
const Lizard = require('./Lizard')
const Spok = require('./Spok')


class Weapon {

    constructor(weapon, wins, loses){
        this.weapon = weapon;
        this.wins = [];
        this.loses= [];

    }

    selectRandomWeapon(){
        let randomWeapon = math.floor(math.random()*this.weapon)+1;
        return randomWeapon;
    }
}

module.exports = Weapon