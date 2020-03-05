class Board {
    constructor(game) {
            this.grid = [
            [null,null,null,null,null,null,null],
            [null,null,null,null,null,null,null],
            [null,null,null,null,null,null,null],
            [null,null,null,null,null,null,null],
            [null,null,null,null,null,null,null],
            [null,null,null,null,null,null,null]]         
            
            this.game = game;     
            this.initBoard();
    }
    
    initBoard() {
        let circles = document.querySelectorAll(".circle");
        for(let i=0; i < circles.length; i++){
                circles[i].addEventListener("click", (e) => {
                    let cIndex = this.whichColumnClicked(e.target);
                    this.addCoin(cIndex);   
            })
        }
    }

    whichColumnClicked($circle) {
        let columnIndexClass = $circle.classList[2];
        let extractCIndexString = columnIndexClass.split("-")[1];
        let extractCIndexNumber = parseInt(extractCIndexString);
        return extractCIndexNumber;
    }

    addCoin(cIndex) {
        for(let j=0; j<this.grid.length; j++) {
            if(this.grid[j][cIndex] != null && j == 0) {
                return "The column is already full!"
            } else if(this.grid[j][cIndex] == null && j < 5 && j >= 0) {
                continue
            } else if(this.grid[j][cIndex] != null && j <= 5 && j > 0) {
                this.grid[j-1][cIndex] = this.createCoin();
                console.log("Let's add a coin 1 row higher")
                console.log(j-1,cIndex)
                this.renderCoin(j-1,cIndex)
                return
            } else if (this.grid[j][cIndex] == null && j == 5) {
                this.grid[j][cIndex] = this.createCoin();
                console.log("Let's add a coin on this row as it's the bottom row")
                console.log(j,cIndex)
                this.renderCoin(j,cIndex)
                return
            }
        }
    }

    createCoin() {        
        if(game.whosTurnIsIt() == game.player1) {
            return new Coin(game.player1.color);    
        } else if (game.whosTurnIsIt() == game.player2) {
            return new Coin(game.player2.color); 
        }
    }

    renderCoin(row,column) {    
        var classIdentifierRow = `r-${row}`;
        var classIdentifierColumn = `c-${column}`;

        var circleElement = document.querySelector(`.${classIdentifierRow} .${classIdentifierColumn}`);
        
        if(game.whosTurnIsIt() == game.player1) {
        circleElement.classList.add(`${game.player1.color}`);
        } else if (game.whosTurnIsIt() == game.player2) {
        circleElement.classList.add(`${game.player2.color}`);
        }

        game.changePlayer()
        game.whosTurnIsIt()
        game.countAmountOfCoins()
    }
}




