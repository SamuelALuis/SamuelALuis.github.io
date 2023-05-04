//Practice #1///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let num1 = document.getElementById("num1")// num 1 refers to the first input box, .value would be the input 
let num2 = document.getElementById("num2")// num 2 refers to the second input box, .value would be the input 
const outputBtn = document.getElementById("output-btn")// output refers back to the button in html
let answer = document.getElementById("answer")// answer refers to the value of the two input boxes values added/ multiplied 

outputBtn.addEventListener("click", function() {// output is a function that when clicked runs the functions code
    if (num1.value * num2.value <= 1000) {// if statement that states if the values of the two input boxes are less then or equal to 1000 when multipied will return the two values multiplied
        return answer.textContent = num1.value * num2.value
    } else if (num1.value * num2.value > 1000) {// else if statement that states if the valuse of the two input boxes are more then 1000 when multipied will return the two values added instead
        return answer.textContent = (+num1.value) + (+num2.value)
    }
})


//Practice #2///////////////////////////////////////////////////////////////////////////////////////////////////////
let colorCh = document.getElementById("box1") // element id that refers back to the div containg practice #2
let tempEl = document.getElementById("temp-el")
const tempOutputBtn = document.getElementById("tempOutput-btn")
let tempLvlEl = document.getElementById("tempLvl-el")

//a function that when clicked will run the inout value and determin what condition it fits into
tempOutputBtn.addEventListener("click", function() {
    if (tempEl.value < 21) {
        return (tempLvlEl.textContent = tempEl.value + " Freezing")
    } else if (tempEl.value < 41) {
        return (tempLvlEl.textContent = tempEl.value + " Too Cold")
    } else if (tempEl.value < 51) {
        return (tempLvlEl.textContent = tempEl.value + " Cold")
    } else if (tempEl.value < 61) {
        return (tempLvlEl.textContent = tempEl.value + " Warm")
    } else if (tempEl.value < 81) {
        return (tempLvlEl.textContent = tempEl.value + " Too Hot")
    } else if (tempEl.value < 101) {
        return (tempLvlEl.textContent = tempEl.value + " Steaming")
    } else {
        return (tempLvlEl.textContent = "an error has occured")
    }
})

tempOutputBtn.addEventListener("click", function() {
    if (tempEl.value < 21) {
        // changes the background color and font color of div by refering to the assigned element while returning the text of 0 
        return (colorCh.style.background = "blue") && (colorCh.style.color = "aqua")
    } else if (tempEl.value < 41) {
        return (colorCh.style.background = "aqua") && (colorCh.style.color = "blue")
    } else if (tempEl.value < 51) {
        return (colorCh.style.background = "lightblue") && (colorCh.style.color = "black")
    } else if (tempEl.value < 61) {
        return (colorCh.style.background = "orange") && (colorCh.style.color = "black")
    } else if (tempEl.value < 81) {
        return (colorCh.style.background = "pink") && (colorCh.style.color = "red")
    } else if (tempEl.value < 101) {
        return (colorCh.style.background = "red") && (colorCh.style.color = "pink")
    } else {
        return (colorCh.style.background = "grey") && (colorCh.style.color = "black")
    }
})


//Practice #3//////////////////////////////////////////////////////////////////////////////////////////////////////
let items = {
    A: ["Coke", "Pepsi", "Cola", "Sprite", "Fanta"],
    B: ["Cheetos", "Doritos", "Lay\'s", "Takis", "Ruffles"]}
let combos1 = ["A0", "A1", "A2", "A3", "A4"]
let combos2 = ["B0", "B1", "B2", "B3", "B4"]
const drinksSection =  document.getElementById("drinks-section")
const chipsSection = document.getElementById("chips-section")

let hasMoney = false
let continueBuy = true
let addMoney = false
let endPurchase = false

let cashIn = document.getElementById("cash-in")
const cashEnt = document.getElementById("cash-ent")
let totalCash = document.getElementById("total-cash")

let letInp = document.getElementById("let-input")
let numInp = document.getElementById("num-input")
const select = document.getElementById("select")
let rItem = document.getElementById("r-item")
const buyBtn = document.getElementById("buy-btn")

const buymoreBTn = document.getElementById("buymore-btn")
const endsaleBtn = document.getElementById("endsale-btn")

let bag = document.getElementById("bag")
let change = document.getElementById("change")

for (i = 0; i < items.A.length; i++) {
    drinksSection.innerHTML += `
    <p>${combos1[i]}</p>
    <p class="item">${items.A[i]}<p>`
}

for (i = 0; i < items.B.length; i++) {
    chipsSection.innerHTML += `
    <p>${combos2[i]}</p> 
    <p class="item">${items.B[i]}<p>`
}

totalCash.value = 0
cashEnt.addEventListener("click", function() {
    if (hasMoney === true || cashIn.value > 20) {
        return error
    } else if (cashIn.value === "") {
        rItem.textContent = "Add Money"
    } else if (totalCash.value === 5) {
        hasMoney = true
    } else if (cashIn.value === "1") {
        totalCash.value += 1
            totalCash.textContent = "Total\: \$" + totalCash.value
                cashIn.value = ""  
    } else if (cashIn.value === "5") {
        totalCash.value = 5
            totalCash.textContent += totalCash.value
                rItem.textContent = "Pick Item"
                    cashIn.value = ""
                        hasMoney = true
    } else if (cashIn.value === "10") {
        totalCash.value = 10
            totalCash.textContent += totalCash.value
                rItem.textContent = "Pick Item"
                    cashIn.value = ""
                        hasMoney = true
    } else if (cashIn.value === "20") {
        totalCash.value = 20
            totalCash.textContent += totalCash.value
                rItem.textContent = "Pick Item"
                    cashIn.value = ""
                        hasMoney = true
    } else { 
        return error
    }
})

select.addEventListener("click", function() {
    if (letInp.value === "A" && numInp.value < 5) {
        rItem.textContent = "\$2 " + items.A[numInp.value]
    } else if (letInp.value === "B" && numInp.value < 5) {
        rItem.textContent = "\$3 " + items.B[numInp.value]
    } 
})

function clearInputs() {
    letInp.value = ""
    numInp.value = ""
}

buyBtn.addEventListener("click", function() {
    if (continueBuy === false) {
        return error
    } else if (hasMoney === false && letInp.value === "A" && totalCash.value > 1 && continueBuy === true) {
        totalCash.value -= 2 
            bag.textContent += items[letInp.value][numInp.value]
                totalCash.textContent = "Total\: \$" + totalCash.value
                    hasMoney = true
                        continueBuy = false
                            clearInputs()
    } else if (hasMoney === false && letInp.value === "B" && totalCash.value > 2 && continueBuy === true) {
        totalCash.value -= 3  
            bag.textContent += items[letInp.value][numInp.value]
                totalCash.textContent = "Total\: \$" + totalCash.value
                    hasMoney = true
                        continueBuy = false
                            clearInputs()
    } else if (hasMoney === true && letInp.value === "A" && totalCash.value > 1 && continueBuy === true) {
        totalCash.value -= 2
            bag.textContent += items[letInp.value][numInp.value]
                totalCash.textContent = "Total\: \$" + totalCash.value
                    continueBuy = false
                        clearInputs()
    } else if (hasMoney === true && letInp.value === "B" && totalCash.value > 2 && continueBuy === true) {
        totalCash.value -= 3
            bag.textContent += items[letInp.value][numInp.value]
                totalCash.textContent = "Total\: \$" + totalCash.value
                    continueBuy = false
                        clearInputs()
    }    
})

buymoreBTn.addEventListener("click", function() {
    if (totalCash.value === 0) {
        return error
    } else if (letInp.value === "A" && totalCash.value > 1 && continueBuy === false) {
        totalCash.value -= 2  
            bag.textContent += items[letInp.value][numInp.value]
                totalCash.textContent = "Total\: \$" + totalCash.value
                    clearInputs()
    } else if (letInp.value === "B" && totalCash.value > 2 && continueBuy === false) {
        totalCash.value -= 3  
            bag.textContent += " " + items[letInp.value][numInp.value]
                totalCash.textContent = "Total\: \$" + totalCash.value
                    clearInputs()
    }
})

endsaleBtn.addEventListener("click", function() {
    if (endPurchase === true) {
        return error
    } else if ( totalCash.value === 0 && continueBuy === false) {
        change.textContent += "\$0"
            endPurchase = true
                reset()
    } else if (totalCash.value > 0 && continueBuy === false) {
        change.textContent += "\$" + totalCash.value
            totalCash.value = 0
                totalCash.textContent = "Total\: \$0"
                    endPurchase = true   
                        rItem.textContent = "Come Again :]"  
                            reset()        
    }
})

function reset() {
    setTimeout(function resetEl() {
        hasMoney = false
        continueBuy = true
        addMoney = false
        endPurchase = false
        rItem.textContent = "Welcome :]"
        totalCash.textContent = "Total: \$"
        bag.textContent = "Bag:"
        change.textContent = "Change:"    
    }, 3000);   
}

//Practice #4///////////////////////////////////////////////////////////////////////////////////////////////
let TTTBoard = document.getElementById("tik-board")
const playBtn = document.getElementById("play-btn")
const weaponText = document.getElementById("weapon-text")
const markX = document.getElementById("mark-x")
const markO = document.getElementById("mark-o")
markX.value = "X"
markO.value = "O"
let playerOne = document.getElementById("player-one")
let playerTwo = document.getElementById("player-two")
let displayBrd =  document.getElementById("display-board")
//row 1
let squareA =  document.getElementById("a-square")
let squareB =  document.getElementById("b-square")
let squareC =  document.getElementById("c-square")
//row 2
let squareD =  document.getElementById("d-square")
let squareE =  document.getElementById("e-square")
let squareF =  document.getElementById("f-square")
//row 3
let squareG =  document.getElementById("g-square")
let squareH =  document.getElementById("h-square")
let squareI =  document.getElementById("i-square")

let markSelect = false
let yourTurn = true
let gameStart = false

let markedA =  false
let markedB =  false
let markedC =  false
let markedD =  false
let markedE =  false
let markedF =  false
let markedG =  false
let markedH =  false
let markedI =  false

const newTTTGame = document.getElementById("newTTTGame")

playBtn.addEventListener("click", function() {
    if (markSelect === true) {
        return error
    } else if (markSelect === false) {
        show()
        playBtn.style.visibility = "hidden"
    }
})

function show() {
    weaponText.style.visibility = "visible"
            markX.style.visibility = "visible"
                markO.style.visibility = "visible"
                    playerOne.style.visibility = "visible"
                        playerTwo.style.visibility = "visible"
}

function hide() {
    weaponText.style.visibility = "hidden"
        markX.style.visibility = "hidden"
            markO.style.visibility = "hidden"
}

markX.addEventListener("click", function() {
    if (markSelect === true) {
        return error
    } else if (markSelect === false) {
        playerOne.value = markX.value
            playerOne.textContent += playerOne.value
                playerTwo.value = markO.value
                    playerTwo.textContent += playerTwo.value
                        markSelect = true
                            gameStart =  true
                                displayBrd.textContent = "Player1 Go First"
                                    hide()
    }
})

markO.addEventListener("click", function() {
    if (markSelect === true) {
        return error
    } else if (markSelect === false) {
        playerOne.value = markO.value
            playerOne.textContent += playerOne.value
                playerTwo.value = markX.value
                    playerTwo.textContent += playerTwo.value
                        markSelect = true
                            gameStart = true
                                displayBrd.textContent = "Player1 goes First"
                                    hide()
                                    
    }
})

//row 1
squareA.addEventListener("click", function() {
    if (yourTurn === false || gameStart === false) {
        return error
    } else if (markedA === true) {
        return error
    } else if (gameStart === true && yourTurn === true) {
        squareA.textContent = playerOne.value
        squareA.value = playerOne.value
            displayBrd.textContent = "Player2 Turn"
                yourTurn = false
                    markedA = true
                    win()
                        playerBot()
                            
    }
})

squareB.addEventListener("click", function() {
    if (yourTurn === false || gameStart === false) {
        return error
    } else if (markedB === true) {
        return error
    } else if (gameStart === true && yourTurn === true) {
        squareB.textContent = playerOne.value
        squareB.value = playerOne.value
            displayBrd.textContent = "Player2 Turn"
                yourTurn = false
                    markedB = true
                    win()
                        playerBot()
                            
    }
})

squareC.addEventListener("click", function() { 
    if (yourTurn === false || gameStart === false) {
        return error
    } else if (markedC === true) {
        return error
    } else if (gameStart === true && yourTurn === true) {
        squareC.textContent = playerOne.value
        squareC.value = playerOne.value
            displayBrd.textContent = "Player2 Turn"
                yourTurn = false
                    markedC = true
                    win()
                        playerBot()
                            
    }
})
//row 2
squareD.addEventListener("click", function() { 
    if (yourTurn === false || gameStart === false) {
        return error
    } else if (markedD === true) {
        return error
    } else if (gameStart === true && yourTurn === true) {
        squareD.textContent = playerOne.value
        squareD.value = playerOne.value
            displayBrd.textContent = "Player2 Turn"
                yourTurn = false
                    markedD = true
                    win()
                        playerBot()
                            
    }   
})

squareE.addEventListener("click", function() {
    if (yourTurn === false || gameStart === false) {
        return error
    } else if (markedE === true) {
        return error
    } else if (gameStart === true && yourTurn === true) {
        squareE.textContent = playerOne.value
        squareE.value = playerOne.value
            displayBrd.textContent = "Player2 Turn"
                yourTurn = false
                    markedE = true
                    win()
                        playerBot()
                            
    }
})

squareF.addEventListener("click", function() {
    if (yourTurn === false || gameStart === false) {
        return error
    } else if (markedF === true) {
        return error
    } else if (gameStart === true && yourTurn === true) {
        squareF.textContent = playerOne.value
        squareF.value = playerOne.value
            displayBrd.textContent = "Player2 Turn"
                yourTurn = false
                    markedF = true
                    win()
                        playerBot()
                             
    }
})
//row 3
squareG.addEventListener("click", function() {   
    if (yourTurn === false || gameStart === false) {
        return error
    } else if (markedG === true) {
        return error
    } else if (gameStart === true && yourTurn === true) {
        squareG.textContent = playerOne.value
        squareG.value = playerOne.value
            displayBrd.textContent = "Player2 Turn"
                yourTurn = false
                    markedG = true
                    win()
                        playerBot()
                            
    }
})

squareH.addEventListener("click", function() { 
    if (yourTurn === false || gameStart === false) {
        return error
    } else if (markedH === true) {
        return error
    } else if (gameStart === true && yourTurn === true) {
        squareH.textContent = playerOne.value
        squareH.value = playerOne.value
            displayBrd.textContent = "Player2 Turn"
                yourTurn = false
                    markedH = true
                    win()
                        playerBot()
                            
    }
})

squareI.addEventListener("click", function() {
    if (yourTurn === false || gameStart === false) {
        return error
    } else if (markedI === true) {
        return error
    } else if (gameStart === true && yourTurn === true) {
        squareI.textContent = playerOne.value
        squareI.value = playerOne.value
            displayBrd.textContent = "Player2 Turn"
                yourTurn = false
                    markedI = true
                    win()
                        playerBot()
                            
    }
})

function randomSquare() {
    let randomNum = Math.floor( Math.random() * 9) + 1
    if (randomNum === 1 && markedA === true) {
        randomSquare()
    } else if (randomNum === 2 && markedB === true) {
        randomSquare()
    } else if (randomNum === 3 && markedC === true) {
        randomSquare()
    } else if (randomNum === 4 && markedD === true) {
        randomSquare()
    } else if (randomNum === 5 && markedE === true) {
        randomSquare()
    } else if (randomNum === 6 && markedF === true) {
        randomSquare()
    } else if (randomNum === 7 && markedG === true) {
        randomSquare()
    } else if (randomNum === 8 && markedH === true) {
        randomSquare()
    } else if (randomNum === 9 && markedI === true) {
        randomSquare()
    } else if (randomNum === 1 && markedA === false) {
        squareA.textContent = playerTwo.value
        squareA.value = playerTwo.value
        markedA = true
        win()
    } else if (randomNum === 2 && markedB === false) {
        squareB.textContent = playerTwo.value
        squareB.value = playerTwo.value
        markedB = true
        win()
    } else if (randomNum === 3 && markedC === false) {
        squareC.textContent = playerTwo.value
        squareC.value = playerTwo.value
        markedC = true
        win()
    } else if (randomNum === 4 && markedD === false) {
        squareD.textContent = playerTwo.value
        squareD.value = playerTwo.value
        markedD = true
        win()
    } else if (randomNum === 5 && markedE === false) {
        squareE.textContent = playerTwo.value
        squareE.value = playerTwo.value
        markedE = true
        win()
    } else if (randomNum === 6 && markedF === false) {
        squareF.textContent = playerTwo.value
        squareF.value = playerTwo.value
        markedF = true
        win()
    } else if (randomNum === 7 && markedG === false) {
        squareG.textContent = playerTwo.value
        squareG.value = playerTwo.value
        markedG = true
        win()
    } else if (randomNum === 8 && markedH === false) {
        squareH.textContent = playerTwo.value
        squareH.value = playerTwo.value
        markedH = true
        win()
    } else if (randomNum === 9 && markedI === false) {
        squareI.textContent = playerTwo.value
        squareI.value = playerTwo.value
        markedI = true
        win()
    }     
}       

function playerBot() {
    if (gameStart === false) {
        return error
    } else if (gameStart === true) {
        setTimeout(function botTurn() {
            displayBrd.textContent = "Player1 Turn"
            yourTurn = true
            randomSquare()
        }, 1000);   
    }
}

function win() {
    if (squareA.value === playerOne.value && squareB.value === playerOne.value && squareC.value === playerOne.value) {
        gameStart = false
        displayBrd.textContent = "Player1 Won!"
        newTTTGame.style.visibility = "visible"
    } else if (squareD.value === playerOne.value && squareE.value === playerOne.value && squareF.value === playerOne.value) {
        gameStart = false
        displayBrd.textContent = "Player1 Won!"
        newTTTGame.style.visibility = "visible"
    } else if (squareG.value === playerOne.value && squareH.value === playerOne.value && squareI.value === playerOne.value) {
        gameStart = false
        displayBrd.textContent = "Player1 Won!"
        newTTTGame.style.visibility = "visible"
    } else if (squareA.value === playerOne.value && squareD.value === playerOne.value && squareG.value === playerOne.value) {
        gameStart = false
        displayBrd.textContent = "Player1 Won!"
        newTTTGame.style.visibility = "visible"
    } else if (squareB.value === playerOne.value && squareE.value === playerOne.value && squareH.value === playerOne.value) {
        gameStart = false
        displayBrd.textContent = "Player1 Won!"
        newTTTGame.style.visibility = "visible"
    } else if (squareC.value === playerOne.value && squareF.value === playerOne.value && squareI.value === playerOne.value) {
        gameStart = false
        displayBrd.textContent = "Player1 Won!"
        newTTTGame.style.visibility = "visible"
    } else if (squareA.value === playerOne.value && squareE.value === playerOne.value && squareI.value === playerOne.value) {
        gameStart = false
        displayBrd.textContent = "Player1 Won!"
        newTTTGame.style.visibility = "visible"
    } else if (squareG.value === playerOne.value && squareE.value === playerOne.value && squareC.value === playerOne.value) {
        gameStart = false
        displayBrd.textContent = "Player1 Won!"
        newTTTGame.style.visibility = "visible"
    } else if (squareA.value === playerTwo.value && squareB.value === playerTwo.value && squareC.value === playerTwo.value) {
        gameStart = false
        displayBrd.textContent = "Player2 Won!"
        newTTTGame.style.visibility = "visible"
    } else if (squareD.value === playerTwo.value && squareE.value === playerTwo.value && squareF.value === playerTwo.value) {
        gameStart = false
        displayBrd.textContent = "Player2 Won!"
        newTTTGame.style.visibility = "visible"
    } else if (squareG.value === playerTwo.value && squareH.value === playerTwo.value && squareI.value === playerTwo.value) {
        gameStart = false
        displayBrd.textContent = "Player2 Won!"
        newTTTGame.style.visibility = "visible"
    } else if (squareA.value === playerTwo.value && squareD.value === playerTwo.value && squareG.value === playerTwo.value) {
        gameStart = false
        displayBrd.textContent = "Player2 Won!"
        newTTTGame.style.visibility = "visible"
    } else if (squareB.value === playerTwo.value && squareE.value === playerTwo.value && squareH.value === playerTwo.value) {
        gameStart = false
        displayBrd.textContent = "Player2 Won!"
        newTTTGame.style.visibility = "visible"
    } else if (squareC.value === playerTwo.value && squareF.value === playerTwo.value && squareI.value === playerTwo.value) {
        gameStart = false
        displayBrd.textContent = "Player2 Won!"
        newTTTGame.style.visibility = "visible"
    } else if (squareA.value === playerTwo.value && squareE.value === playerTwo.value && squareI.value === playerTwo.value) {
        gameStart = false
        displayBrd.textContent = "Player2 Won!"
        newTTTGame.style.visibility = "visible"
    } else if (squareG.value === playerTwo.value && squareE.value === playerTwo.value && squareC.value === playerTwo.value) {
        gameStart = false
        displayBrd.textContent = "Player2 Won!"
        newTTTGame.style.visibility = "visible"
    }
}

newTTTGame.addEventListener("click", function() {
    newTTTGame.style.visibility = "hidden"
    displayBrd.textContent = ""
    playerOne.value = ""
    playerOne.textContent = "Player1:"
    playerTwo.value = ""
    playerTwo.textContent = "Player2:"
    markSelect = false
    yourTurn = true
    gameStart = false
    markedA =  false
    markedB =  false
    markedC =  false
    markedD =  false
    markedE =  false
    markedF =  false
    markedG =  false
    markedH =  false
    markedI =  false
    squareA.textContent = ""
    squareA.value = null
    squareB.textContent = ""
    squareB.value = ""
    squareC.textContent = ""
    squareC.value = ""
    squareD.textContent = ""
    squareD.value = ""
    squareE.textContent = ""
    squareE.value = ""
    squareF.textContent = ""
    squareF.value = ""
    squareG.textContent = ""
    squareG.value = ""
    squareH.textContent = ""
    squareH.value = ""
    squareI.textContent = ""
    squareI.value = ""
    show()
})