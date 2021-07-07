const Player = require('./Player');
const Human = require('./Human');

class Game{
    constructor(){
        this.playerOne = new Player('Player #1');
        this.playerTwo = new Player('Player #2');

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
          let playerOneTotal = this.playerOne.chooseWeapon(this.weapon);
          let playerTwoTotal = this.playerTwo.chooseWeapon(this.weapon);
    
          if(playerOneTotal > playerTwoTotal) {
            console.log(this.playerOne.name + " wins this round!");
            this.playerOne.score++;
          }
          else if(playerTwoTotal > playerOneTotal) {
            console.log(this.playerTwo.name + " wins this round!");
            this.playerTwo.score++;
          }
          else {
            console.log("Wow! You managed to tie after each choosing " + this.chooseWeapon + "!");
          }
        }

        this.displayGameWinner();
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