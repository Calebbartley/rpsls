const Player = require("./Player");
const prompt = require('prompt-sync')();


class Computer extends Player{
    constructor(name){
        super(name);
    }

    chooseWeapon(weapon){
        let weaponChoice =prompt("Choose Your Weapon!!!!! '1' for Rock, '2' for Paper,'3' for Scissors,'4' for Lizard,'5' for Spok.");
        if(weaponChoice == '1'){
            console.log('Rock! Great choice!')
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
        return weaponChoice;
    }
}