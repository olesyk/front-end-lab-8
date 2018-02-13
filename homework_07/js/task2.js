if (!confirm(`Do you want to play a game?`)) {
	console.log(`You did not become a millionaire`);
} else {
	do {
		let endOfRange = 5;
		let totalPrize = 0;
		let startPrize = 10;
		do {
			let attempt = 3;
			let randomNumber = Math.floor(Math.random() * (endOfRange + 1));
			let possiblePrize = startPrize;
			while (attempt > 0) {
				let userNumber = prompt(`Enter an integer number from 0 to ${endOfRange}
				Attempts left: ${attempt}
				Total prize: ${totalPrize}$
				Possible prize on current attempt: ${possiblePrize}$`, "");
				if (userNumber == randomNumber && /^\d+$/.test(userNumber)) {
					totalPrize += possiblePrize;
					break;
				} else if (attempt === 1 && userNumber !== randomNumber) {
					totalPrize = 0;
					break;
				} else {
					attempt--;
					possiblePrize = Math.floor(possiblePrize / 2);
				}
			}
			console.log(`Thank you for a game. Your prize is:  ${totalPrize}$.`);
			if (!totalPrize) {
				break;
			} else if (confirm(`Do you want to continue a game?`)) {
				endOfRange *= 2;
				startPrize *= 3;
				attempt = 3;
			} else {
				break;
			}
		} while (totalPrize !== 0);
	} while (confirm(`Do you want to play a game again?`));
}