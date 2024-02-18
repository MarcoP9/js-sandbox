// Your JavaScript goes here!


let actual_user
let actual_comp
actual_user = 0
actual_comp = 0

function getComputerChoice() {
	const choices = ['rock', 'paper', "scissors"]
	const random_num = Math.floor(Math.random() * choices.length)
	return choices[random_num]
}

function playRound(computer, user) {
	if (computer === user) {
		return "even"
	} else if (computer === 'rock' && user === 'scissors') {
		return 'computer';
	} else if (computer === 'rock' && user === 'paper') {
		return 'user';
	} else if (computer === 'scissors' && user === 'paper') {
		return 'computer'
	} else if (computer === 'scissors' && user === 'rock') {
		return 'user'
	} else if (computer === 'paper' && user === 'scissors') {
		return 'user'
	} else if (computer === 'paper' && user === 'rock') {
		return 'computer'
	}
	else {
		return 'error'
	}
}

function playGame(user_sel) {
	const comp_sel = getComputerChoice()
	const compplay = document.querySelector('p.compplay')
	
	compplay.textContent = "Computer play: " + comp_sel

	const winner = playRound(comp_sel, user_sel)
	console.log(`User played ${user_sel}, the computer played ${comp_sel}. The winner is ${winner}`)
	return winner
}

function alterScores(winner) {

	const general = document.querySelector('div.general')
	const enddiv = document.querySelector("div.enddiv")
	const user = document.querySelector('p.user');
	const computer = document.querySelector('p.computer');
	temp_comp = computer.textContent.split(" ")
	temp_user = user.textContent.split(" ")
	score_comp = Number(temp_comp[temp_comp.length - 1])
	score_user = Number(temp_user[temp_user.length - 1])
	if (winner === 'user') {
		user.textContent = `User Score: ${score_user + 1}`
	} else if (winner === 'computer') {
		computer.textContent = `Computer Score: ${score_comp + 1}`
	}
	if (enddiv !== null) {
		const div = document.createElement("div")
		div.textContent = "The game is finished please reload the page."
		general.appendChild(div);
	} else {
		if (score_comp + 1 >= 5) {
			const div = document.createElement("div")
			div.classList.add("enddiv")
			div.textContent = "The winner is Computer!!"
			general.appendChild(div);
		} else if (score_user + 1 >= 5) {
			const div = document.createElement("div")
			div.classList.add("enddiv")
			div.textContent = "The winner is User!!"
			general.appendChild(div);
		}
	}

	// div.textContent = `Status\n User: ${new_actual_user}  Computer: ${new_actual_comp}`
}

let btn_rock = document.querySelector('#rock')
let btn_paper = document.querySelector('#paper')
let btn_scissors = document.querySelector('#scissors')
btn_rock.addEventListener('click', function (e) {
	console.log("call to rock")
	winner = playGame("rock")
	alterScores(winner)
});
btn_paper.addEventListener('click', function (e) {
	console.log("call to paper")
	winner = playGame("paper")
	alterScores(winner)

});
btn_scissors.addEventListener('click', function (e) {
	console.log("call to scissors")
	winner = playGame("scissors")
	alterScores(winner)
});




// for (let i = 0; i <= 5; i++) {


// 	playGame();
// }







// let num = parseInt(prompt("Insert a number please"))
// console.log(`you entered enter ${num}`)

// for (let i = 1; i <= num; i++) {
// 	console.log(i);
// 	if (i == 2) {
// 		console.log("Bah");
// 	}
// }
