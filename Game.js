const Player = require('./Player');
const Human = require('./Human');
const prompt = require('prompt-sync')()
class Game{
    constructor(){
        // this.playerOne ;
        // this.playerTwo ;
        this.playerOne = new Human(prompt('Player #1 enter Name:'));
        

        this.playerTwo = new Human(prompt('Player #2 Enter Name:'));


        // this.weapon = [];

        // this.weapon.push(new Weapon('Rock'));
        // this.weapon.push(new Weapon('Paper'));
        // this.weapon.push(new Weapon('Scissors'));
        // this.weapon.push(new Weapon('Lizard'));
        // this.weapon.push(new Weapon('Spock'));

    }


    runGame(){
        this.displayRules();

        do {
          let playerOneWeapon = this.playerOne.chooseWeapon();
          let playerTwoWeapon = this.playerTwo.chooseWeapon();

          if(playerOneWeapon === this.playerOne.weaponLists[0] && (playerTwoWeapon === this.playerTwo.weaponLists[2]  || this.playerTwo.weaponLists[3])) {
            console.log(this.playerOne.name + " wins this round!" + "score", this.playerOne.score);
            this.playerOne.score++;
          }
          else if(playerTwoWeapon === this.playerTwo.weaponLists[0] && (playerOneWeapon === this.playerOne.weaponLists[3] || this.playerOne.weaponLists[4])) {
            console.log(this.playerTwo.name + " wins this round!" + "score", this.playerOne.score);
            this.playerTwo.score++;
          }
          else if (playerOneWeapon === this.playerOne.weaponLists[1] && (playerTwoWeapon === this.playerTwo.weaponLists[0] || this.playerTwo.weaponLists[4])){
            console.log(this.playerOne.name + " wins this round!");
            this.playerOne.score++;
          }
          else if (playerTwoWeapon === this.playerTwo.weaponLists[1] && (playerOneWeapon === this.playerOne.weaponLists[0] || this.playerOne.weaponLists[4])){
            console.log(this.playerTwo.name + " wins this round!");
            this.playerTwo.score++;
          }
          else if (playerOneWeapon === this.playerOne.weaponLists[2] && (playerTwoWeapon === this.playerTwo.weaponLists[1] || this.playerTwo.weaponLists[3])){
            console.log(this.playerOne.name + " wins this round!");
            this.playerOne.score++;
          }
          else if (playerTwoWeapon === this.playerTwo.weaponLists[2] && (playerOneWeapon === this.playerOne.weaponLists[1] || this.playerOne.weaponLists[3])){
            console.log(this.playerTwo.name + " wins this round!");
            this.playerTwo.score++;
          }
          else if (playerOneWeapon === this.playerOne.weaponLists[3] && (playerTwoWeapon === this.playerTwo.weaponLists[1] || this.playerTwo.weaponLists[4])){
            console.log(this.playerOne.name + " wins this round!");
            this.playerOne.score++;
          }
          else if (playerTwoWeapon === this.playerTwo.weaponLists[3] && (playerOneWeapon === this.playerOne.weaponLists[1] || this.playerOne.weaponLists[4])){
            console.log(this.playerTwo.name + " wins this round!");
            this.playerTwo.score++;
          }
          else if (playerOneWeapon === this.playerOne.weaponLists[4] && (playerTwoWeapon === this.playerTwo.weaponLists[0] || this.playerTwo.weaponLists[2])){
            console.log(this.playerOne.name + " wins this round!");
            this.playerOne.score++;
          }
          else if (playerTwoWeapon === this.playerTwo.weaponLists[4] && (playerOneWeapon === this.playerOne.weaponLists[0] || this.playerOne.weaponLists[2])){
            console.log(this.playerTwo.name + " wins this round!");
            this.playerTwo.score++;
          }
          else if (playerTwoWeapon === this.playerTwo.weaponLists[4] && (playerOneWeapon === this.playerOne.weaponLists[4])){
            console.log(this.playerTwo.name + "Tie!!! No Score");

          }
          else if (playerTwoWeapon === this.playerTwo.weaponLists[3] && (playerOneWeapon === this.playerOne.weaponLists[3])){
            console.log(this.playerTwo.name + "Tie!!! No Score");
          }
          else if (playerTwoWeapon === this.playerTwo.weaponLists[2] && (playerOneWeapon === this.playerOne.weaponLists[2])){
            console.log(this.playerTwo.name + "Tie!!! No Score");

          }
          else if (playerTwoWeapon === this.playerTwo.weaponLists[1] && (playerOneWeapon === this.playerOne.weaponLists[1])){
            console.log(this.playerTwo.name + "Tie!!! No Score");

          }
          else if (playerTwoWeapon === this.playerTwo.weaponLists[0] && (playerOneWeapon === this.playerOne.weaponLists[0])){
            console.log(this.playerTwo.name + "Tie!!! No Score");

          }
        this.displayGameWinner();
        } while(this.playerOne.score < 3 && this.playerTwo.score < 3)
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