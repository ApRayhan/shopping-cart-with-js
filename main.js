const plusBtn = document.getElementById('iphonePlus');
plusBtn.addEventListener('click', function() {
	// Catch The input Value And Change it
	const correntTotal = document.getElementById('totalIphone').value;
	const correntTotalInNumber = parseFloat(correntTotal);

	document.getElementById('totalIphone').value = correntTotalInNumber + 1;

	// Sum The Total Amount
	const correntAmount = document.getElementById('iphoneAmount').innerText;
	const correntAmountInNumber = parseFloat(correntAmount);

	document.getElementById('iphoneAmount').innerText = correntAmountInNumber + 1219;
});
