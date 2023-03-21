let cards = []
let card = 0
let dealercard = Math.floor( (Math.random() * 5 + 18) ) //Assuming 
let sum = 0
let cardsEl = document.getElementById("cards")
let sumEl = document.getElementById("sum")
let btnStartgameEl = document.getElementById("btn-startgame")

let startgameEl = document.getElementById("startgame")
let buttonsEl = document.querySelector(".buttons")
btnStartgameEl.addEventListener("click", startgame)



function drawCard() {
    if (sum<22) {
        card = Math.floor( (Math.random() * 11 + 1) )
        sum += card
        cards.push(card)
        cardsEl.textContent += card + "  "
        sumEl.textContent = "Sum: " + sum
    }
    else if (sum === 21) {
        buttonsEl.innerHTML = `
            <br/>
            <div class="Result">
                <p>YOU WON</p>
                <p>Sum of Dealer's Cards: ${dealercard}</p>
                <p>Sum of Your Cards: ${sum}</p>
            </div>
        `
    }
    else if (dealercard === 21) {
        buttonsEl.innerHTML = `
            <br/>
            <div class="Result">
                <p>YOU LOST</p>
                <p>Sum of Dealer's Cards: ${dealercard}</p>
                <p>Sum of Your Cards: ${sum}</p>
            </div>
        `
    }
    else {
        buttonsEl.innerHTML = `
            <br/>
            <div class="Result">
                <p>YOU LOST</p>
                <p>Sum of Dealer's Cards: ${dealercard}</p>
                <p>Sum of Your Cards: ${sum}</p>
            </div>
        `
    }
    
}

function startgame() {
    startgameEl.innerHTML = "<h2>Draw a new card</h2>"
    buttonsEl.innerHTML = `<button id="drawcard" class="button" onclick="drawCard()">Draw Card</button>`
}
