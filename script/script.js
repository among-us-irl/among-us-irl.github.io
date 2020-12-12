function onScanSuccess(qrCodeMessage) {
    // handle on success condition with the decoded message
	alert("nice - " + qrCodeMessage);
}

function onScanError(errorMessage) {
    // handle on error condition, with error message
}

var html5QrcodeScanner = new Html5QrcodeScanner(
    "reader", { fps: 10, qrbox: 250 });
html5QrcodeScanner.render(onScanSuccess, onScanError);

function launchGame() {
	console.log("launching...");
	document.getElementsByClassName("camera-check-launcher")[0].click();
}