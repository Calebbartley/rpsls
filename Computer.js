const Player = require("./Player");

class Computer extends Player{
    constructor(name){
        super(name);
        this.weaponLists =['Rock','Paper','Scissors','Lizard','Spock'];
        this.score = 0;
        this.name = 'AI'
    }

    chooseWeapon(){
        this.weaponLists =['Rock','Paper','Scissors','Lizard','Spock'];
        let weaponChoice =this.weaponLists.selectRandomWeapon();
        return weaponChoice;
    }

    selectAllWeapon(){
        let weapon = 0;

        for(let i = 0; i < this.weaponLists.length; i ++){
            let chosenWeapon = this.selectAllWeapon(this.weaponLists[i]);
            weaponChoice += chosenWeapon;
        }

        return weaponChoice;
    }



}
module.exports =Computer