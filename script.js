// var atticus = ["Atticus", "2405", "47000", 3];
// var jem = ["Jem", "62347", "63500", 4];
// var boo = ["Boo", "11435", "54000", 3];
// var scout = ["Scout", "6243", "74750", 5];

// object definition
function employee(name, empNumber, currentSalary, rating) {
    this.name = name;
    this.empNumber = empNumber;
    this.currentSalary = currentSalary;
    this.rating = rating;
}
	
	// creating instances of the employee object
	var atticus = new employee('Atticus', '2405', '47000', 3);
	var jem = new employee('Jem', '62347', '63500', 4);
	var boo = new employee('Boo', '11435', '54000', 3);
	var scout = new employee('Scout', '6243', '74750', 5);
	
	var employees = {atticus, jem, boo, scout};

	var position = document.getElementById('content');

	// for each person in the employees object
	for (var person in employees) {
		// set emp to the next instance of employee
		var emp = employees[person];
		
		var result = calculateSTI(emp);
		newEl = document.createElement('li');
	  	newText = document.createTextNode(result.join(', '));
	  	newEl.appendChild(newText);
	  	position.appendChild(newEl);
	}

function calculateSTI(empInfo) {
	var name = empInfo.name;
	var empNumber = empInfo.empNumber;
	var currentSalary = Math.round(parseFloat(empInfo.currentSalary));
	var rating = empInfo.rating;

	var processedEmployee = [];
	var bonus = 0;
	var bonusPercentage = 0;
	var adjSalary = currentSalary;	// base + STI
	var totalBonus = bonus;

	// calc sti
	switch(rating) {
		case 0:
		case 1:
		case 2:
			bonusPercentage = 0;
			break;
		case 3:
			bonusPercentage = .04;
			break;
		case 4:
			bonusPercentage = .06;
			break;
		case 5:
			bonusPercentage = .10;
			break;
		default:
			bonusPercentage = 0;
	}

	bonusPercentage = adjustBonusPercentage(empNumber, bonusPercentage, currentSalary);
	
	// build processed array
	processedEmployee[0] = name;
	processedEmployee[1] = bonusPercentage;

	bonus = Math.round(bonusPercentage * currentSalary);
	adjSalary = currentSalary + bonus;

	processedEmployee[2] = adjSalary;
	processedEmployee[3] = bonus;

	return processedEmployee;
}

function adjustBonusPercentage(empNumber, bonusPercentage, currentSalary) {
	if(empNumber.length == 4) {
		bonusPercentage += .05;
	}

	if(currentSalary > 65000) {
		bonusPercentage -= .01;
	}

	if(bonusPercentage > .13) {
		bonusPercentage = .13;
	}

	return bonusPercentage;
}
