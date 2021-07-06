const Weapon = require("./Weapon");

class Paper extends Weapon{

    constructor(weapon, wins, loses){
        super(weapon, wins, loses);

        this.weapon = "Paper";
        this.wins = ['Rock','Spock']
        this.loses = ['Scissors','Lizard']
    }
}
module.exports = Paper;