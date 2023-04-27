//Practice #1
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


//Practice #2
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


//Practice #3
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
    
    if (hasMoney === true) {
        return error
    } else if (cashIn.value === "" || 0) {
        rItem.textContent = "Add Money"
    } else if (totalCash.value === 5) {
        hasMoney = true
    } else if (cashIn.value === "1") {
        totalCash.value += 1
            totalCash.textContent = "Total\: \$" + totalCash.value
                cashIn.value = ""  
    } else if (cashIn.value === "5" || "10" || "20") {
        totalCash.value = cashIn.value
            totalCash.textContent += totalCash.value
                rItem.textContent = "Pick Item"
                    cashIn.value = ""
                        hasMoney = true
    }
})

select.addEventListener("click", function() {
    if (letInp.value === "A" && numInp.value < 5) {
        rItem.textContent = "\$2 " + items.A[numInp.value]
            clearInputs()
    } else if (letInp.value === "B" && numInp.value < 5) {
        rItem.textContent = "\$3 " + items.B[numInp.value]
            clearInputs()
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
            bag.textContent += items[letInp.value][numInp.value]
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

function resetEl() {
    hasMoney = false
    continueBuy = true
    addMoney = false
    endPurchase = false
    rItem.textContent += ""
    totalCash.textContent += ""
    bag.textContent += ""
    change.textContent += ""
}

function reset() {
    setTimeout(resetEl(), 3000);   
}
