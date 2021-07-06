const Weapon = require("./Weapon");

class Lizard extends Weapon{

    constructor(weapon, wins, loses){
        super(weapon, wins, loses);

        this.weapon = "Lizard";
        this.wins = ['Spok','Paper']
        this.loses =['Rock','Scissors']
    }
}
module.exports = Lizard;