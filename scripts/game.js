"use strict";

/*class Game {
  constructor(){
    this.playerOne = new Human("Player One");
    this.playerTwo = null;
  }

  Playgame(){
    this.gameRules();
    this.singleOrMultiplayer();
    this.playerOne.score < 3 && this.playerTwo.score < 3){
      this.playerOne.selectGesture();
      this.playerTwo.selectGesture();
      this.compareGestures();
    };
    this.gameWinner();
  }

  gameRules(){
    alert("The rules: Scissors cuts paper, paper covers rock, rock crushes lizard, lizard poisons Spock, Spock smashes scissors, scissors decapitates lizard, lizard eats paper, paper disproves Spock, Spock vaporizes rock, and as it always has, rock crushes scissors.")
  }

  singleOrMultiplayer(){
    let numberOfPlayers = prompt("How many players, 1 or 2?");
    switch(numberOfPlayers){
      case "1":
        this.playerTwo = new Computer("AI");
      break;
      case "2":
        this.playerTwo = new Human("Player Two");
      break;
      default:
      this.Playgame();
    }
  }  

  compareGestures(){
    let pog = this.playerOne.gesture;
    let ptg = this.playerTwo.gesture;
    if(pog === "scissors" && ptg === "paper"){
      alert("Scissors custs paper!");
      this.playerOne.score += 1;
    }
  }

  gameWinner(){
    if(this.playerOne.score === 3){
      alert("Player one wins!");
    }else if(this.playerTwo.score === 3){
      alert("Player two wins!");
    }
  }

}

class Player {
  constructor(name){
    this.name = name;
    this.score = 0;
    this.gestures = ["rock, paper, scissors, lizard, spock"];
  }
  
  selectGesture(){
    gesture = prompt(this.name + " select a gesture: rock, paper, scissors, lizard, or spock");
  }
}

class Human extends Player {
  constructor(name, score, gesture){
    super(name, score, gesture);
    this.name = name;
    this.score = 0;
    this.gesture = gesture;
  }

  selectGesture(){
    let gesture = prompt("Select a gesture: rock, paper, scissors, lizard, or spock");
  }
}

class Computer extends Player {
  constructor(name){
    super(name, score, gestures);
  }
  selectGesture(){
    gesture = this.gestures[Math.floor(Math.random() * this.gestures.length)];
  };
}*/

let rpsls = [
  
{gesture: "rock",
 beats: ["lizard", "scissors"],
 losesTo: ["paper", "spock"]}
 ,
 {gesture: "paper",
 beats: ["rock", "spock"],
 losesTo: ["scissors", "lizard"]}
 ,
 {gesture: "scissors",
 beats: ["paper", "lizard"],
 losesTo: ["rock", "spock"]}
 ,
 {gesture: "lizard",
 beats: ["spock", "paper"],
 losesTo: ["scissors", "rock"]}
 ,
 {gesture: "spock",
 beats: ["rock", "scissors"],
 losesTo: ["paper", "lizard"]},

]