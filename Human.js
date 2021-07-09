const Player = require("./Player");
const prompt = require('prompt-sync')();


class Human extends Player{
    constructor(name){
        super(name);
        this.weaponLists =['Rock','Paper','Scissors','Lizard','Spock'];
        this.score = 0;
        this.name = name
        
    }

    chooseWeapon(){
        console.log(`${this.name} Choose Your Weapon!!!!! '1' for ${this.weaponLists[0]} , '2' for ${this.weaponLists[1]} ,'3' for ${this.weaponLists[2]} ,'4' for ${this.weaponLists[3]} ,'5' for ${this.weaponLists[4]}.`);
        let weaponChoice = prompt()
        let weapon ;
        if(weaponChoice == '1'){
            // console.log('Rock! Great choice!')
            weapon = this.weaponLists[0]
            return weapon;
        }
        else if(weaponChoice == '2'){
            weapon = this.weaponLists[1]
            return weapon;
            // console.log('Paper! Noted!')
        }
        else if(weaponChoice == '3'){
            weapon = this.weaponLists[2]
            return weapon;
            // console.log('Scissors! Nice snip-snip')
        }
        else if(weaponChoice == '4'){
            weapon = this.weaponLists[3]
            return weapon;
            // console.log('Lizard! What sound does a lizard make?')
        }
        else if(weaponChoice == '5'){
            weapon = this.weaponLists[4]
            return weapon;
            // console.log('Spok! BAZINGA!')
        }
        return weapon;

    }

}

module.exports = Human