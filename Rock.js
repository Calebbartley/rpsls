const Weapon = require("./Weapon");

class Rock extends Weapon{

    constructor(weapon, wins, loses){
        super(weapon, wins, loses);

        this.weapon = "Rock";
        this.wins = ['Lizard','Scissors']
        this.loses = ['Paper','Spok']
    }
}
module.exports = Rock;