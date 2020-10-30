"use strict";

class Game {
  constructor(){
    this.playerOne = new Player("player one");
    this.playerTwo = new Player("player two");
    this.aiPlayer = new Computer("AI");

  }
  Playgame(){
    this.gameRules();
    this.singleOrMultiplayer();
    
  }

  singleOrMultiplayer(){
    numberOfPlayers = prompt("How many players, 1 or 2?");
    game;
    switch(numberOfPlayers){
      case "1":
      game = singlePlayerGame();
      break;
      case "2":
      game = multiPlayerGame();
      break;
      default:
      this.Playgame();
    }
  }

  singlePlayerGame(){
    this.playerOne.selectGesture();
    this.aiPlayer.selectGesture();
  }

  gameRules(){
    alert("The rules: Scissors cuts paper, paper covers rock, rock crushes lizard, lizard poisons Spock, Spock smashes scissors, scissors decapitates lizard, lizard eats paper, paper disproves Spock, Spock vaporizes rock, and as it always has, rock crushes scissors.")
  }

}

class Player {
  constructor(){
    this.name = name;
    this.score = 0;
    this.gestures = ["rock, paper, scissors, lizard, spock"];
  }
  
  selectGesture(){
    gesture = prompt("Select a gesture: rock, paper, scissors, lizard, or spock");
  }
}

class Computer extends Player {
  constructor(){
    super(name, score, gestures);
  }
  selectGesture(){
    gesture = this.gestures[Math.floor(Math.random() * this.gestures.length)]
  };
}




/*Rock crushes Scissors
Scissors cuts Paper
Paper covers Rock
Rock crushes Lizard
Lizard poisons Spock
Spock smashes Scissors
Scissors decapitates Lizard
Lizard eats Paper
Paper disproves Spock
Spock vaporizes Rock*/