const $buttonStone1 = document.querySelector('.button-stone1')
const $buttonStone2 = document.querySelector('.button-stone2')
const $buttonPaper1 = document.querySelector('.button-paper1')
const $buttonPaper2 = document.querySelector('.button-paper2')
const $buttonScissors1 = document.querySelector('.button-scissors1')
const $buttonScissors2 = document.querySelector('.button-scissors2')

const $playerWinner = document.querySelector('.title')

const $scoreboardPlayer1 = document.querySelector('.scoreboard-player1')
const $scoreboardPlayer2 = document.querySelector('.scoreboard-player2')

const $fieldPlayer1 = document.querySelector('.field-1')
const $fieldPlayer2 = document.querySelector('.field-2')

const $buttonStart = document.querySelector('.button-start')
const $buttonReset = document.querySelector('.button-reset')

let clickPlayer1 = ''
let clickPlayer2 = ''
let winner = null
let scoreboard1 = 0
let scoreboard2 = 0
let gameStart = false


function verifyWinner() {
	if (clickPlayer1 == 'stone' && clickPlayer2 == 'scissors') {
		winner = 1;
	} else if (clickPlayer1 == 'stone' && clickPlayer2 == 'paper') {
		winner = 2;
	} else if (clickPlayer1 == 'paper' && clickPlayer2 == 'scissors') {
		winner = 2;
	} else if (clickPlayer1 == 'paper' && clickPlayer2 == 'stone') {
		winner = 1;
	} else if (clickPlayer1 == 'scissors' && clickPlayer2 == 'stone') {
		winner = 2;
	} else if (clickPlayer1 == 'scissors' && clickPlayer2 == 'paper') {
		winner = 1;
	} else if (clickPlayer1 == clickPlayer2)
		winner = 0;
}

function printPlayerWinner(winner) {
	if (winner == 1) {
		$playerWinner.innerHTML = ('Jogador 1 Ganhou')
	} else if (winner == 2) {
		$playerWinner.innerHTML = ('Jogador 2 Ganhou')
	} else if (winner == 0) {
		$playerWinner.innerHTML = ('Empatou')
	}
}

function printPlayerGameover(winner) {
	if (winner == 1) {
		$fieldPlayer1.classList.add('field-winner')
		$fieldPlayer2.classList.add('field-gameover')

	} else if (winner == 2) {
		$fieldPlayer2.classList.add('field-winner')
		$fieldPlayer1.classList.add('field-gameover')

	} else if (winner == 0) {
		$fieldPlayer1.classList.add('field-gameover')
		$fieldPlayer2.classList.add('field-gameover')
	}
}

function giveScoreboard(winner) {
	if (winner == 1) {
		scoreboard1 = scoreboard1 + 1
	} else if (winner == 2) {
		scoreboard2 = scoreboard2 + 1
	}
}

function printScoreboard(winner) {
	if (winner == 1) {
		$scoreboardPlayer1.innerHTML = scoreboard1
	} else if (winner == 2) {
		$scoreboardPlayer2.innerHTML = scoreboard2
	}
}

function resetPrintPlayer() {
	$fieldPlayer1.classList.remove('field-winner')
	$fieldPlayer1.classList.remove('field-gameover')
	$fieldPlayer2.classList.remove('field-winner')
	$fieldPlayer2.classList.remove('field-gameover')
}

function resetScore() {
	$scoreboardPlayer1.innerHTML = '0'
	$scoreboardPlayer2.innerHTML = '0'
}

function resetScoreVariables() {
	scoreboard1 = 0
	scoreboard2 = 0
}

function resetFields() {
	$fieldPlayer1.innerHTML = ''
	$fieldPlayer2.innerHTML = ''
}


function resetVariables() {
	clickPlayer1 = ''
	clickPlayer2 = ''
	winner = null
}

function resetTitle() {
	$playerWinner.innerHTML = 'Vencedor'
}


function resetAll() {
	resetFields()
	resetTitle()
	resetVariables()
	resetScoreVariables()
	resetScore()
	resetPrintPlayer()
}

$buttonStart.addEventListener('click', function () {
	if (gameStart == false) {
		gameStart = true
		$buttonStart.classList.add('button-play')
		$buttonStart.innerHTML = ('Parar')
	} else {
		gameStart = false
		$buttonStart.classList.remove('button-play')
		$buttonStart.innerHTML = ('Iniciar')
	}
})

$buttonReset.addEventListener('click', resetAll)

$buttonStone1.addEventListener('click', function () {
	if (gameStart == false) return
	$fieldPlayer1.innerHTML = ('<img class="image-buttons" src="scr/img/stone.png">')
	clickPlayer1 = 'stone'
	verifyWinner()
	if (winner != null) {
		printPlayerGameover(winner)
		printPlayerWinner(winner)
		giveScoreboard(winner)
		printScoreboard(winner)
		setTimeout(resetPrintPlayer, 1000)
		setTimeout(resetFields, 1000)
		resetVariables()
	}
})

$buttonStone2.addEventListener('click', function () {
	if (gameStart == false) return
	$fieldPlayer2.innerHTML = ('<img class="image-buttons" src="scr/img/stone.png">')
	clickPlayer2 = 'stone'
	verifyWinner()
	if (winner != null) {
		printPlayerGameover(winner)
		printPlayerWinner(winner)
		giveScoreboard(winner)
		printScoreboard(winner)
		setTimeout(resetPrintPlayer, 1000)
		setTimeout(resetFields, 1000)
		resetVariables()
	}

})

$buttonPaper1.addEventListener('click', function () {
	if (gameStart == false) return
	$fieldPlayer1.innerHTML = ('<img class="image-buttons" src="scr/img/paper.png">')
	clickPlayer1 = 'paper'
	verifyWinner()
	if (winner != null) {
		printPlayerGameover(winner)
		printPlayerWinner(winner)
		giveScoreboard(winner)
		printScoreboard(winner)
		setTimeout(resetPrintPlayer, 1000)
		setTimeout(resetFields, 1000)
		resetVariables()
	}
})

$buttonPaper2.addEventListener('click', function () {
	if (gameStart == false) return
	$fieldPlayer2.innerHTML = ('<img class="image-buttons" src="scr/img/paper.png">')
	clickPlayer2 = 'paper'
	verifyWinner()
	if (winner != null) {
		printPlayerGameover(winner)
		printPlayerWinner(winner)
		giveScoreboard(winner)
		printScoreboard(winner)
		setTimeout(resetPrintPlayer, 1000)
		setTimeout(resetFields, 1000)
		resetVariables()
	}
})

$buttonScissors1.addEventListener('click', function () {
	if (gameStart == false) return
	$fieldPlayer1.innerHTML = ('<img class="image-buttons" src="scr/img/scissors.png">')
	clickPlayer1 = 'scissors'
	verifyWinner()
	if (winner != null) {
		printPlayerGameover(winner)
		printPlayerWinner(winner)
		giveScoreboard(winner)
		printScoreboard(winner)
		setTimeout(resetPrintPlayer, 1000)
		setTimeout(resetFields, 1000)
		resetVariables()
	}

})

$buttonScissors2.addEventListener('click', function () {
	if (gameStart == false) return
	$fieldPlayer2.innerHTML = ('<img class="image-buttons" src="scr/img/scissors.png">')
	clickPlayer2 = 'scissors'
	verifyWinner()
	if (winner != null) {
		printPlayerGameover(winner)
		printPlayerWinner(winner)
		giveScoreboard(winner)
		printScoreboard(winner)
		setTimeout(resetPrintPlayer, 1000)
		setTimeout(resetFields, 1000)
		resetVariables()
	}
})

