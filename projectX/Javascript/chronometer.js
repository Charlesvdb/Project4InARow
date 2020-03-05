class Chronometer {
    constructor() {
        this.currentTime = 0;
        this.intervalId = 0;
        this.minutes = 0;
        this.seconds = 0;
        this.twoDigitsNumber = this.twoDigitsNumber.bind(this)
        this.stopClick = this.stopClick.bind(this)
        this.resetClick = this.resetClick.bind(this)
    }

    startClick(callback) {
        this.intervalId = setInterval(() => {
            this.currentTime++
        }, 1000);        
    }

    getMinutes() {
        this.minutes = Number(Math.floor(this.currentTime / 60));
        return this.minutes;
    }

    getSeconds() {
        if(this.currentTime < 60) {
            this.seconds = this.currentTime;
            return this.seconds;
        } else if (this.currentTime >= 60) {
            this.seconds = this.currentTime % 60
            return this.seconds; 
        }
    }

    twoDigitsNumber(value) {
        if(value<10) {
            return `0${value}`
        } else if (value >=10) {
            return `${value}`
        }
    }

    stopClick() {
        clearInterval(this.intervalId)
    }

    resetClick() {
        this.currentTime = 0
    }

    printSeconds() {
    let secondsNumber = this.getSeconds()
    let secondsString = this.twoDigitsNumber(secondsNumber)

    let secondsPrint = document.querySelector(".secondscounter")
    secondsPrint.innerHTML = secondsString
    }

    printMinutes() {
    let minutesNumber = this.getMinutes()
    let minutesString = this.twoDigitsNumber(minutesNumber)

    let minutesPrint = document.querySelector(".minutescounter")
    minutesPrint.innerHTML = minutesString
    }
    
    printTime() {
        this.printSeconds()
        this.printMinutes()
    }
}

let currInterval = setInterval(function(){
    game.chronometer.printTime();    
},1000);