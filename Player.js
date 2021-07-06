const weapon = require('./Weapon')

class Player{
    constructor(name){
        this.score = 0;
        this.name = name;
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
module.exports =Player