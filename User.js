class Computer{
    constructor(name){
        this.score = 0;
        this.name = 'Computer';
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