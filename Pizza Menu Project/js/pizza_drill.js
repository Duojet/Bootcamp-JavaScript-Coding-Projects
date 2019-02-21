function getReceipt() {
	var text1 = "<h4>You Ordered:</h4>";
	var runningTotal = 0;
	var sizeTotal = 0;
	var sizeArray = document.getElementsByClassName("size");
	for (var i = 0; i < sizeArray.length; i++) {
		if (sizeArray[i].checked) {
			var selectedSize = sizeArray[i].value;
			text1 = text1+selectedSize+"<br>";
		}
	}
	if (selectedSize === "Personal Pizza") {
		sizeTotal = 6;
	} else if (selectedSize === "Medium Pizza") {
		sizeTotal = 10;
	} else if (selectedSize === "Large Pizza") {
		sizeTotal = 14;
	} else if (selectedSize === "Extra Large Pizza") {
		sizeTotal = 16;
	}
	runningTotal = sizeTotal;
    
	getMeat(runningTotal,text1); 
};

function getMeat(runningTotal,text1) {
	var meatTotal = 0;
	var selectedMeat = [];
	var meatArray = document.getElementsByClassName("meat");
	for (var j = 0; j < meatArray.length; j++) {
		if (meatArray[j].checked) {
			selectedMeat.push(meatArray[j].value);
			text1 = text1+meatArray[j].value+"<br>";
		}
	}
	var meatCount = selectedMeat.length;
	if (meatCount > 1) {
		meatTotal = (meatCount - 1);
	} else {
		meatTotal = 0;
	}
	runningTotal = (runningTotal + meatTotal);

	document.getElementById("showText").innerHTML=text1;
    document.getElementById("totalPrice").innerHTML = "</h3>Total: <strong>$"+runningTotal+".00"+"</strong></h3>";
    

    getCheese(runningTotal,text1);

};	

function getCheese(runningTotal,text1) {
	var cheeseTotal = 0;
	var cheeseArray = document.getElementsByClassName("cheese");
	for (var k = 0; k < cheeseArray.length; k++) {
		if (cheeseArray[k].checked) {
			var selectedCheese = cheeseArray[k].value;
			text1 = text1+selectedCheese+"<br>";
		}
	}
	if (selectedCheese === "Extra Cheese") {
		cheeseTotal = 3;
	} else {
		cheeseTotal = 0;
	}
	runningTotal = (runningTotal + cheeseTotal);

	document.getElementById("showText").innerHTML=text1;
    document.getElementById("totalPrice").innerHTML = "</h3>Total: <strong>$"+runningTotal+".00"+"</strong></h3>";
    

	getCrust(runningTotal,text1); 
};

function getCrust(runningTotal,text1) {
	var crustTotal = 0;
	var crustArray = document.getElementsByClassName("crust");
	for (var l = 0; l < crustArray.length; l++) {
		if (crustArray[l].checked) {
			var selectedCrust = crustArray[l].value;
			text1 = text1+selectedCrust+"<br>";
		}
	}
	if (selectedCrust === "Cheese Stuffed Crust") {
		crustTotal = 3;
	} else {
		crustTotal = 0;
	}
	runningTotal = (runningTotal + crustTotal);

	document.getElementById("showText").innerHTML=text1;
    document.getElementById("totalPrice").innerHTML = "</h3>Total: <strong>$"+runningTotal+".00"+"</strong></h3>";
    

	getSauce(runningTotal,text1); 
};

function getSauce(runningTotal,text1) {
	var sauceTotal = 0;
	var sauceArray = document.getElementsByClassName("sauce");
	for (var m = 0; m < sauceArray.length; m++) {
		if (sauceArray[m].checked) {
			var selectedSauce = sauceArray[m].value;
			text1 = text1+selectedSauce+"<br>";
		}
	}

	runningTotal = (runningTotal + sauceTotal);

	document.getElementById("showText").innerHTML=text1;
    document.getElementById("totalPrice").innerHTML = "</h3>Total: <strong>$"+runningTotal+".00"+"</strong></h3>";
    

	getVeggies(runningTotal,text1); 
};

function getVeggies(runningTotal,text1) {
	var veggiesTotal = 0;
	var selectedVeggies = [];
	var veggiesArray = document.getElementsByClassName("veggies");
	for (var n = 0; n < veggiesArray.length; n++) {
		if (veggiesArray[n].checked) {
			selectedVeggies.push(veggiesArray[n].value);
			text1 = text1+veggiesArray[n].value+"<br>";
		}
	}
	var veggiesCount = selectedVeggies.length;
	if (veggiesCount > 1) {
		veggiesTotal = (veggiesCount - 1);
	} else {
		veggiesTotal = 0;
	}
	runningTotal = (runningTotal + veggiesTotal);

	document.getElementById("showText").innerHTML=text1;
    document.getElementById("totalPrice").innerHTML = "</h3>Total: <strong>$"+runningTotal+".00"+"</strong></h3>";
}; 

