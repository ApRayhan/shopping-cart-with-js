const plusBtnIphone = document.getElementById('iphonePlus');
plusBtnIphone.addEventListener('click', function() {
	upadatTotalProduct('totalIphone');
	updateTotalPrice('iphoneAmount', 1200);
});

const plusBtnCase = document.getElementById('iphoneCasePlus');
plusBtnCase.addEventListener('click', function() {
	upadatTotalProduct('totalIphoneCase');
	updateTotalPrice('caseAmount', 50);
});

function upadatTotalProduct(id) {
	// Catch The input Value And Change it
	const correntTotal = document.getElementById(id).value;
	const correntTotalInNumber = parseFloat(correntTotal);

	document.getElementById(id).value = correntTotalInNumber + 1;
}

function updateTotalPrice(id, price) {
	// Sum Single product Amount
	const correntAmount = document.getElementById(id).innerText;
	const correntAmountInNumber = parseFloat(correntAmount);

	document.getElementById(id).innerText = correntAmountInNumber + price;

	// Sum Total Bill
	const total = document.getElementById('totalBill').innerText;
	const totalNumber = parseFloat(total);

	document.getElementById('totalBill').innerText = totalNumber + price;
}

// Cancle One product From Card

// Minus One Iphone
const minusIphone = document.getElementById('iphoneMinus');
minusIphone.addEventListener('click', function() {
	minusOneProduct('totalIphone');
	minusAmount('iphoneAmount', 'totalBill', 1200);
});

// Minus One Case
const minusCase = document.getElementById('iphoneCaseMinus');
minusCase.addEventListener('click', function() {
	minusOneProduct('totalIphoneCase');
	minusAmount('caseAmount', 'totalBill', 50);
});

// Minus One Function
function minusOneProduct(id) {
	const totalProduct = document.getElementById(id).value;
	const totalProductNumber = parseFloat(totalProduct);

	if (totalProduct > 0) {
		document.getElementById(id).value = totalProductNumber - 1;
	}
}

// Minus Single Amount And Total Bill
function minusAmount(singleId, totalId, price) {
	// Minus Single Amount
	const singleAmount = document.getElementById(singleId).innerText;
	const singleAmountNumber = parseFloat(singleAmount);

	if (singleAmountNumber > 0) {
		document.getElementById(singleId).innerText = singleAmountNumber - price;

		const totalBill = document.getElementById(totalId).innerText;
		const totalBillNumber = parseFloat(totalBill);
		document.getElementById(totalId).innerText = totalBillNumber - price;
	}
}
