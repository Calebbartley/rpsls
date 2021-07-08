const Player = require("./Player");
const prompt = require('prompt-sync')();


class Human extends Player{
    constructor(name){
        super(name);
    }

    chooseWeapon(){
        let weaponChoice =prompt(`Choose Your Weapon!!!!! '1' for ${this.weaponLists[0]} Rock, '2' for ${this.weaponLists[1]} Paper,'3' for ${this.weaponLists[2]} Scissors,'4' for ${this.weaponLists[3]} Lizard,'5' for ${this.weaponLists[4]} Spok.`);
        let weapon ;
        if(weaponChoice == '1'){
            console.log('Rock! Great choice!')
            weapon = this.weaponLists[0]
            return weapon;
        }
        else if(weaponChoice == '2'){
            console.log('Paper! Noted!')
        }
        else if(weaponChoice == '3'){
            console.log('Scissors! Nice snip-snip')
        }
        else if(weaponChoice == '4'){
            console.log('Lizard! What sound does a lizard make?')
        }
        else if(weaponChoice == '5'){
            console.log('Spok! BAZINGA!')
        }
    
    }
}

module.exports = Human