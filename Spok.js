const Weapon = require("./Weapon");

class Spok extends Weapon{

    constructor(weapon, wins, loses){
        super(weapon, wins, loses);

        this.weapon = "Spok";
        this.wins = ['Scissors','Rock']
        this.loses =['Lizard','Paper']
    }
}
module.exports = Spok;