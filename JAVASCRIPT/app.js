// let apple = 54;

// let mango = 89;

// let cherry = 100;

// const totalQuantityApple = 1;
// const totalQuantityMango = 3;
// const totalQuantityCherry = 17;

// if (totalQuantityApple * apple > totalQuantityMango * mango) {
// 	console.log('apple is our best fruit');
// } else if (totalQuantityApple * apple > totalQuantityCherry * cherry) {
// 	console.log('cherry is our best fruit');
// } else {
// 	console.log('mango is our best fruit');
// }

let count = 0;

function cc(card) {
	// Only change code below this line

	switch (card) {
		case 2:
		case 3:
		case 4:
		case 5:
		case 6:
			count++;
			break;

		case 10:
		case 'J':
		case 'Q':
		case 'K':
		case 'A':
			count--;
			break;
	}

	let holdbet = 'Hold';
	if (count > 0) {
		holdbet = 'Bet';
	}

	return console.log(count + ' ' + holdbet);
}

// Only change code above this line

cc(2);
cc(3);
cc(7);
cc('K');
cc('A');
