function getReceipt() {
	var orderText = "<h4>You Ordered:</h4>";
	var runningTotal = 0;
	
	var itemsAndPrices = [];
	var sizeItem = getSizeItem();
	itemsAndPrices.push(sizeItem);
	var meatItems = getMeatItems();
	itemsAndPrices = itemsAndPrices.concat(meatItems);
	var cheeseItem = getCheeseItem();
	itemsAndPrices.push(cheeseItem);
	var crustItem = getCrustItem();
	itemsAndPrices.push(crustItem);
	var sauceItem = getSauceItem();
	itemsAndPrices.push(sauceItem);
	var veggieItems = getVeggieItems();
	itemsAndPrices = itemsAndPrices.concat(veggieItems);
	console.log(itemsAndPrices);

	orderText = orderText + "<table>";
	orderText = orderText + "<tr><th>Item</th><th>Price</th></tr>";
	for (var i = 0; i < itemsAndPrices.length; i++) {
		orderText = orderText + "<tr>";
		currentItem = itemsAndPrices[i];
		orderText = orderText + "<td>" + currentItem.name +  "</td><td align=right>$" + currentItem.price + ".00</td>";
		runningTotal += currentItem.price;
		orderText = orderText + "</tr>";
	}
	orderText = orderText + "<tr><th>TOTAL:</th><th align=right>$" + runningTotal + ".00</th></tr>";
	orderText = orderText + "</table>";
	document.getElementById("showText").innerHTML = orderText;
    // document.getElementById("totalPrice").innerHTML = "</h3>Total: <strong>$" + runningTotal + ".00" + "</strong></h3>";
};

function getSizeItem() {
	var sizeArray = document.getElementsByClassName("size");
	for (var i = 0; i < sizeArray.length; i++) {
		if (sizeArray[i].checked) {
			var selectedSize = sizeArray[i].value;
		}
	}

	var sizeTotal;
	if (selectedSize === "Personal Pizza") {
		sizeTotal = 6;
	} else if (selectedSize === "Medium Pizza") {
		sizeTotal = 10;
	} else if (selectedSize === "Large Pizza") {
		sizeTotal = 14;
	} else if (selectedSize === "Extra Large Pizza") {
		sizeTotal = 16;
	}

	return { "type": "size", "name": selectedSize, "price": sizeTotal};
}

function getMeatItems() {
	var selectedItems = [];
	var meatArray = document.getElementsByClassName("meat");
	for (var i = 0; i < meatArray.length; i++) {
		if (meatArray[i].checked) {
			var currentItemName = meatArray[i].value;
			var currentItemPrice = 0;
			if (selectedItems.length > 0) {
				currentItemPrice = 1;
			}
			var currentItem = { "type": "meat", "name": currentItemName, "price": currentItemPrice};
			selectedItems.push(currentItem);
		}
	}
	return selectedItems;
};	

function getCheeseItem() {
	var selectedItem;
	var items = document.getElementsByClassName("cheese");
	for (var i = 0; i < items.length; i++) {
		if (items[i].checked) {
			var currentItemName = items[i].value;
			var currentItemPrice = 0;
			if (currentItemName === "Extra Cheese") {
				currentItemPrice = 3;
			}
			selectedItem = { "type": "cheese", "name": currentItemName, "price": currentItemPrice};
		}
	}
	return selectedItem;
};

function getCrustItem() {
	var selectedItem;
	var items = document.getElementsByClassName("crust");
	for (var i = 0; i < items.length; i++) {
		if (items[i].checked) {
			var currentItemName = items[i].value;
			var currentItemPrice = 0;
			if (currentItemName === "Cheese Stuffed Crust") {
				currentItemPrice = 3;
			}
			selectedItem = { "type": "crust", "name": currentItemName, "price": currentItemPrice};
		}
	}
	return selectedItem;
};

function getSauceItem() {
	var selectedItem;
	var items = document.getElementsByClassName("sauce");
	for (var i = 0; i < items.length; i++) {
		if (items[i].checked) {
			var currentItemName = items[i].value;
			var currentItemPrice = 0;
			selectedItem = { "type": "sauce", "name": currentItemName, "price": currentItemPrice};
		}
	}
	return selectedItem;
};



function getVeggieItems() {
	var selectedItems = [];
	var items = document.getElementsByClassName("veggies");
	for (var i = 0; i < items.length; i++) {
		if (items[i].checked) {
			var currentItemName = items[i].value;
			var currentItemPrice = 0;
			if (selectedItems.length > 0) {
				currentItemPrice = 1;
			}
			var currentItem = { "type": "veggies", "name": currentItemName, "price": currentItemPrice};
			selectedItems.push(currentItem);
		}
	}
	return selectedItems;
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
