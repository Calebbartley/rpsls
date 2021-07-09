const Player = require("./Player");

class Computer extends Player{
    constructor(name){
        super(name);
        this.weaponLists =['Rock','Paper','Scissors','Lizard','Spock'];
        this.score = 0;
        this.name = 'Sunny'
        
    }

    chooseWeapon(){

        let weapon =this.weaponLists[Math.floor(Math.random() * this.weaponLists.length)] ;
        // add dice game math and test. everything else works fine except for the scoring and game repeat

        return weapon;

    }

    // selectAllWeapon(){
    //     let weapon = 0;

    //     for(let i = 0; i < this.weaponLists.length; i ++){
    //         let chosenWeapon = this.selectAllWeapon(this.weaponLists[i]);
    //         weaponChoice += chosenWeapon;
    //     }

    //     return weaponChoice;
    // }



}
module.exports =Computer