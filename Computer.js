const Player = require("./Player");

class Computer extends Player{
    constructor(name){
        super(name);
    }

    chooseWeapon(weapon){
        let weaponChoice =weapon.selectRandomWeapon();
        return weaponChoice;
    }

    selectAllWeapon(weaponArr){
        let selection = 0;

        for(let i = 0; i < weaponArr.length; i ++){
            let chosenWeapon = this.selectAllWeapon(weaponArr[i]);
            weaponChoice += chosenWeapon;
        }

        return weaponChoice;
    }



}
module.exports =Computer