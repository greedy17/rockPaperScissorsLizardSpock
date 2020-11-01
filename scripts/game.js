"use strict";

class Game {
  constructor(playerOne, playerTwo, score, gesture){
    this.playerOne = playerOne;
    this.playerTwo = playerTwo;
    this.score = score;
    this.gesture = gesture;
  }

  playGame(){
    this.gameRules();
    this.singleOrMultiplayer();
    this.gameWinner();
  }

  gameRules(){
    alert("The rules: Scissors cuts paper, paper covers rock, rock crushes lizard, lizard poisons Spock, Spock smashes scissors, scissors decapitates lizard, lizard eats paper, paper disproves Spock, Spock vaporizes rock, and as it always has, rock crushes scissors.")
  }

  singleOrMultiplayer(){
    let numberOfPlayers = prompt("How many players, 1 or 2?");
    switch(numberOfPlayers){
      case "1":
      this.singlePlayer();  
      break;
      case "2":
      this.multiPlayer();  
      break;
      default:
      this.Playgame();
    }
  } 
  
  singlePlayer(){
    this.playerOne = new Human("Player One", 0);
    this.playerTwo = new Computer("Player two", 0, ["rock", "paper", "scissors", "lizard", "spock"]);
    while(this.playerOne.score < 3 && this.playerTwo.score < 3){
    this.playerOne.selectGesture();
    this.playerTwo.selectGesture();
    this.compareGestures()
    }
  }

  multiPlayer(){
    this.playerOne = new Human("Player One", 0);
    this.playerTwo = new Human("Player two", 0);
    while(this.playerOne.score < 3 && this.playerTwo.score < 3){
    this.playerOne.selectGesture();
    this.playerTwo.selectGesture();
    this.compareGestures()
    }
  }

  compareGestures(){
    if (this.playerOne.gesture === "rock" && this.playerTwo.gesture === "scissors"){
      alert("Player one scores!")
      this.playerOne.score += 1;
    }else if(this.playerOne.gesture === "rock" && this.playerTwo.gesture === "lizard"){
      alert("Player one scores!")
      this.playerOne.score += 1;
    }
    else if(this.playerOne.gesture === "paper" && this.playerTwo.gesture === "rock"){
      alert("Player one scores!")
      this.playerOne.score += 1;
    }
    else if(this.playerOne.gesture === "paper" && this.playerTwo.gesture === "spock"){
      alert("Player one scores!")
      this.playerOne.score += 1;
    }
    else if(this.playerOne.gesture === "scissors" && this.playerTwo.gesture === "paper"){
      alert("Player one scores!")
      this.playerOne.score += 1;
    }
    else if(this.playerOne.gesture === "scissors" && this.playerTwo.gesture === "lizard"){
      alert("Player one scores!")
      this.playerOne.score += 1;
    }
    else if(this.playerOne.gesture === "lizard" && this.playerTwo.gesture === "spock"){
      alert("Player one scores!")
      this.playerOne.score += 1;
    }
    else if(this.playerOne.gesture === "lizard" && this.playerTwo.gesture === "paper"){
      alert("Player one scores!")
      this.playerOne.score += 1;
    }
    else if(this.playerOne.gesture === "spock" && this.playerTwo.gesture === "scissors"){
      alert("Player one scores!")
      this.playerOne.score += 1;
    }
    else if(this.playerOne.gesture === "spock" && this.playerTwo.gesture === "rock"){
      alert("Player one scores!")
      this.playerOne.score += 1;
    }
      else if (this.playerTwo.gesture === "rock" && this.playerOne.gesture === "scissors"){
        alert("Player two scores!")
        this.playerTwo.score += 1;
      }else if(this.playerTwo.gesture === "rock" && this.playerOne.gesture === "lizard"){
        alert("Player two scores!")
        this.playerTwo.score += 1;
      }
      else if(this.playerTwo.gesture === "paper" && this.playerOne.gesture === "rock"){
        alert("Player two scores!")
        this.playerTwo.score += 1;
      }
      else if(this.playerTwo.gesture === "paper" && this.playerOne.gesture === "spock"){
        alert("Player two scores!")
        this.playerTwo.score += 1;
      }
      else if(this.playerTwo.gesture === "scissors" && this.playerOne.gesture === "paper"){
        alert("Player two scores!")
        this.playerTwo.score += 1;
      }
      else if(this.playerTwo.gesture === "scissors" && this.playerOne.gesture === "lizard"){
        alert("Player two scores!")
        this.playerTwo.score += 1;
      }
      else if(this.playerTwo.gesture === "lizard" && this.playerOne.gesture === "spock"){
        alert("Player two scores!")
        this.playerTwo.score += 1;
      }
      else if(this.playerTwo.gesture === "lizard" && this.playerOne.gesture === "paper"){
        alert("Player two scores!")
        this.playerTwo.score += 1;
      }
      else if(this.playerTwo.gesture === "spock" && this.playerOne.gesture === "scissors"){
        alert("Player two scores!")
        this.playerTwo.score += 1;
      }
      else if(this.playerTwo.gesture === "spock" && this.playerOne.gesture === "rock"){
        alert("Player two scores!")
        this.playerTwo.score += 1;
      }else if (this.playerOne.gesture === this.playerTwo.gesture){
        alert("tie!");
      }else{
        alert("invalid selection!");
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
    this.gesture = null;
  }
  
  selectGesture(){
    this.gesture = prompt(this.name + " select a gesture: rock, paper, scissors, lizard, or spock");
  }
}

class Human extends Player {
  constructor(name, score, gesture){
    super(name, score, gesture);
    this.name = name;
    this.score = 0;
    this.gesture = null;
  }

  selectGesture(){
    this.gesture = prompt(this.name + " select a gesture: rock, paper, scissors, lizard, or spock");
  }
}

class Computer extends Player {
  constructor(name, score, gesture){
    super(name, score, gesture);
    this.name = name;
    this.score = 0;
    this.gesture = gesture;
  }
  selectGesture(){
    this.gesture = this.gesture[Math.floor(Math.random() * this.gesture.length)];
  };
}

/*const rpsls = [
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
  ] */
