const Player = require('./Player');
const Human = require('./Human');

class Game{
    constructor(){
        // this.playerOne ;
        // this.playerTwo ;
        this.playerOne = new Human('name')
        this.playerTwo = new Human('name')

        // this.weapon = [];

        // this.weapon.push(new Weapon('Rock'));
        // this.weapon.push(new Weapon('Paper'));
        // this.weapon.push(new Weapon('Scissors'));
        // this.weapon.push(new Weapon('Lizard'));
        // this.weapon.push(new Weapon('Spock'));

    }


    runGame(){
        this.displayRules();

        while(this.playerOne.score < 3 && this.playerTwo.score < 3) {
          let playerOneWeapon = this.playerOne.chooseWeapon();
          let playerTwoWeapon = this.playerTwo.chooseWeapon();

          if(playerOneWeapon=== this.Human.weaponLists[0] && playerTwoWeapon=== this.Human.weaponLists[3] || this.Human.Human.weaponLists[2]) {
            console.log(this.playerOne.name + " wins this round!");
            this.playerOne.score++;
          }
          else if(playerTwoWeapon === this.Human.weaponLists[0] && playerOneWeapon === this.Human.weaponLists[3] || this.Human.weaponLists[2]) {
            console.log(this.playerTwo.name + " wins this round!");
            this.playerTwo.score++;
          }
          else if (playerOneWeapon === this.Human.weaponLists[1] && playerTwoWeapon === this.Human.weaponLists[0] || this.Human.weaponLists[4]){
            console.log(this.playerOne.name + " wins this round!");
            this.playerOne.score++;
          }
          else if (playerTwoWeapon === this.Human.weaponLists[1] && playerOneWeapon === this.Human.weaponLists[0] || this.Human.weaponLists[4]){
            console.log(this.playerTwo.name + " wins this round!");
            this.playerTwo.score++;
          }
          else if (playerOneWeapon === this.Human.weaponLists[2] && playerTwoWeapon === this.Human.weaponLists[1] || this.Human.weaponLists[3]){
            console.log(this.playerOne.name + " wins this round!");
            this.playerOne.score++;
          }
          else if (playerTwoWeapon === this.Human.weaponLists[2] && playerOneWeapon === this.Human.weaponLists[1] || this.Human.weaponLists[3]){
            console.log(this.playerTwo.name + " wins this round!");
            this.playerTwo.score++;
          }
          else if (playerOneWeapon === this.Human.weaponLists[3] && playerTwoWeapon === this.Human.weaponLists[1] || this.Human.weaponLists[4]){
            console.log(this.playerOne.name + " wins this round!");
            this.playerOne.score++;
          }
          else if (playerTwoWeapon === this.Human.weaponLists[3] && playerOneWeapon === this.Human.weaponLists[1] || this.Human.weaponLists[4]){
            console.log(this.playerTwo.name + " wins this round!");
            this.playerTwo.score++;
          }
          else if (playerOneWeapon === this.Human.weaponLists[4] && playerTwoWeapon === this.Human.weaponLists[0] || this.Human.weaponLists[2]){
            console.log(this.playerOne.name + " wins this round!");
            this.playerOne.score++;
          }
          else if (playerTwoWeapon === this.Human.weaponLists[4] && playerOneWeapon === this.Human.weaponLists[0] || this.Human.weaponLists[2]){
            console.log(this.playerTwo.name + " wins this round!");
            this.playerTwo.score++;
          }
          else if (playerTwoWeapon === this.Human.weaponLists[4] && playerOneWeapon === this.Human.weaponLists[4]){
            console.log(this.playerTwo.name + "Tie!!! No Score");

          }
          else if (playerTwoWeapon === this.Human.weaponLists[3] && playerOneWeapon === this.Human.weaponLists[3]){
            console.log(this.playerTwo.name + "Tie!!! No Score");
          }
          else if (playerTwoWeapon === this.Human.weaponLists[2] && playerOneWeapon === this.Human.weaponLists[2]){
            console.log(this.playerTwo.name + "Tie!!! No Score");

          }
          else if (playerTwoWeapon === this.Human.weaponLists[1] && playerOneWeapon === this.Human.weaponLists[1]){
            console.log(this.playerTwo.name + "Tie!!! No Score");

          }
          else if (playerTwoWeapon === this.Human.weaponLists[0] && playerOneWeapon === this.Human.weaponLists[0]){
            console.log(this.playerTwo.name + "Tie!!! No Score");

          }
        this.displayGameWinner();
        }
    }


    displayRules() {
        console.log("Welcome to the 'RPSLS' Tournament!")
        console.log("Two players will select a weapon and compare their results.")
        console.log("The winning weapon will earn that player a point");
        console.log("The first player to three points will win the game!");
      }


      displayGameWinner() {
        if(this.playerOne.score > this.playerTwo.score) {
          console.log(this.playerOne.name + " wins this game!");
        }
        else {
          console.log(this.playerTwo.name + " wins this game!");
        }
      }


}
module.exports = Game;