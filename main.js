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

	// Sum Total product Amount
	const correntTotal = document.getElementById('totalBill').innerText;
	const correntTotalInNumber = parseFloat(correntTotal);
}
