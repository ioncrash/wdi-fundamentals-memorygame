var board = document.getElementById("game-board");
var createBoard = function() {
	var newCard;
	for (var i = 0; i < cards.length; i+=1) {
		newCard = document.createElement("div");
		newCard.className = "card";
		newCard.setAttribute('data-card', cards[i]);
		newCard.addEventListener('click', isTwoCards);
		board.appendChild(newCard);
	}
}

var isTwoCards = function() {
	cardsInPlay.push(this.getAttribute('data-card'));
	if (this.getAttribute('data-card') === 'king') {
		this.innerHTML = '<img src="king.png" alt="King of Hearts" />';
	} else if (this.getAttribute('data-card') === 'queen') {
		this.innerHTML = '<img src="queen.png" alt="Queen of Spades" />';
	} else {
		alert("something's weird!");
	}
	if (cardsInPlay.length === 2) {
		isMatch(cardsInPlay);
		cardsInPlay = [];
	}
}

var isMatch = function() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("it's a match!");
	} else {
		alert("you lose!");
	}
	for (i=0; i < document.getElementsByClassName('card').length; i++) {
		document.getElementsByClassName('card')[i].innerHTML = '';
	}
}

var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

createBoard(); 
