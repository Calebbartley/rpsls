const Weapon = require("./Weapon");

class Scissors extends Weapon{

    constructor(weapon, wins, loses){
        super(weapon, wins, loses);

        this.weapon = "Scissors";
        this.wins = ['Paper','Lizard']
        this.loses =['Rock','Spok']
    }
}
module.exports = Scissors;