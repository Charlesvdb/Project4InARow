class Game {
    constructor() {
        this.player1 = new Player("Charles","Van den Bergh","yellow","play");
        this.player2 = new Player("Christophe","Gillis","red","wait"); 
        this.board = new Board(this);
        this.chronometer = new Chronometer()
        this.currentTime = 0;
        this.intervalId = 0;
    }

    startNewGame() {
        alert(`READY TO PLAY, ${this.player1.firstname} ${this.player1.lastname}!`);
        this.whosTurnIsIt()
    }

    whosTurnIsIt() {
        if(this.player1.state === "play" && this.player2.state === "wait") {
            document.querySelector(".whosturn").innerHTML = `${this.player1.firstname} ${this.player1.lastname}`
            return this.player1;
        } else if (this.player1.state === "wait" && this.player2.state === "play") {
            document.querySelector(".whosturn").innerHTML = `${this.player2.firstname} ${this.player2.lastname}`
            return this.player2;
        }
    }

    changePlayer() {
        if(this.player1.state == "play" && this.player2.state == "wait") {
            this.player1.state = "wait";
            this.player2.state = "play";
        } else if (this.player1.state == "wait" && this.player2.state == "play") {
            this.player1.state = "play";
            this.player2.state = "wait";
        }
    }

    countAmountOfCoins() {
        var coinsCounter = 0;
        for(let i=0; i<this.board.grid.length;i++) {
            for(let j=0; j<this.board.grid[i].length;j++) {
                if(this.board.grid[i][j] != null) {
                    coinsCounter++
                }
        }
        console.log(coinsCounter)
        var coinsRender = document.querySelector(".coinsinthegame");
        coinsRender.innerHTML = `${coinsCounter}`      
        }
    }

    checkIfFourInARow() {
        for(var i=0; i<this.board.grid.length; i++) {
            
        }
    }

    checkIfHorizontalWinner() {}

    checkIfVerticalWinner() {}

    checkIfDiagonalWinner() {}

    checkIfGameHasWinner() {
        checkIfHorizontalWinner()
        checkIfVerticalWinner()
        checkIfDiagonalWinner()
    }
}

let game = new Game();





function highlightFourInARow() {}