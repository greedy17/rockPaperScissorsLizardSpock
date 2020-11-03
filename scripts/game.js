"use strict";

class Game {
  constructor(playerOne, playerTwo, score, gesture, selection){
    this.playerOne = playerOne;
    this.playerTwo = playerTwo;
    this.score = score;
    this.gesture = gesture;
    this.selection = selection;
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
      this.singleOrMultiplayer();
    }
  } 
  
  singlePlayer(){
    this.playerOne = new Human("Player One", 0);
    this.playerTwo = new Computer("Player two", 0);
  }

  multiPlayer(){
    this.playerOne = new Human("Player One", 0);
    this.playerTwo = new Human("Player Two", 0);
  }

  compareGestures(){
    this.playerOne.selectGesture();
    this.playerTwo.selectGesture();
    this.playerOne.selectObject(this.playerOne.selection);
    if(this.playerOne.gesture[0].losesTo.includes(this.playerTwo.selection)){
      this.playerTwo.score += 1;
      alert("Player two scores!");
    }else if(this.playerOne.gesture[0].beats.includes(this.playerTwo.selection)){
      this.playerOne.score += 1;
      alert("Player one scores!")
    }else if(this.playerOne.gesture === this.playerTwo.gesture){
      alert("tie!")
    }else{
      this.compareGestures();
    }
  }


  gameWinner(){
    if(this.playerOne.score === 3){
      alert("Player one wins!");
    }else if(this.playerTwo.score === 3){
      alert("Player two wins!");
    }
  }

  playGame(){
    this.gameRules();
    this.singleOrMultiplayer();
    while(this.playerOne.score < 3 && this.playerTwo.score < 3){
    this.compareGestures();
   }
   this.gameWinner();
 }

}

class Player {
  constructor(name,score,selection, gesture){
    this.name = name;
    this.score = score;
    this.selection = selection;
    this.gesture = gesture;
    this.gestures = [
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
      losesTo: ["paper", "lizard"]}
      ];
  
  }

  selectGesture(){
    this.selection = prompt(this.name + " select a gesture: rock, paper, scissors, lizard, or spock");
  }

  selectObject(selection){
    this.selection === selection;
    this.gesture = this.gestures.filter(function(i){
      if(i.gesture === this.selection){
        return true;
      }else{
        return false;
      }
    })
    return this.gesture[0];
  }

}

class Human extends Player {
  constructor(name, score, selection, gesture){
    super(name, score, selection, gesture);
    this.name = name;
    this.score = 0;
    this.selection = selection;
    this.gesture = gesture;
  }

  selectGesture(){
    this.selection = prompt(this.name + " select a gesture: rock, paper, scissors, lizard, or spock");
  }

  selectObject(selection){
    this.gesture = this.gestures.filter(function(i){
      if(i.gesture === selection){
        return true;
      }else{
        return false;
      }
    })
    return this.gesture[0];
  }

}

class Computer extends Player {
  constructor(name, score, gesture, random, selection){
    super(name, score, gesture, random);
    this.name = name;
    this.score = 0;
    this.selection = selection;
    this.random = ["rock", "paper", "scissors", "lizard", "spock"];
  }
  selectGesture(){
    this.selection = this.random[Math.floor(Math.random() * this.random.length)];
  };
}