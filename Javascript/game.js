class Game {
    constructor() {
        this.player1 = new Player("Charles","Van den Bergh","yellow","play");
        this.player2 = new Player("Aurelie","Van den Bergh","red","wait"); 
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



    // checkIfHorizontalWinnerRed(this.board.grid,number) {
    //     var timesInARowYellow = 0;
    //     for(var i=0; i<this.board.grid.length;i++) {
    //         for(var j=0; j + number<this.board.grid[i].length; j++) {
    //             if(this.board.grid[i][j] == coin && coin.color == "red") {
    //                 timesInARowYellow++
    //             }
    //         }
    //     }
    //     console.log(timesInARowYellow)
    //     if(timesInARowYellow === 4) {
    //         console.log("Red has in a row!")
    //         return "Winner"
    //     }
    // }



    // checkIfVerticalWinnerYellow(this.board.grid,number) {}

    // checkIfDiagonalWinnerYellow(this.board.grid,number) {}

    // checkIfGameHasWinnerYellow(this.board.grid,number) {
    //     checkIfHorizontalWinnerYellow()
    //     checkIfVerticalWinnerYellow()
    //     checkIfDiagonalWinnerYellow()
    // }
}

let game = new Game();





function highlightFourInARow() {}