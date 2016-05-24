//Set cookie expiration date
function cookieExp(){
	var now = new Date();
	now.setDate(now.getDate() + 30); //30 days expiration
	return now;
}

//Functions to show and hide receipt
function showReceipt($scope){
	if(!$scope.showReceiptSheet){
		$scope.showReceiptSheet = true;
	}
}

function hideReceipt($scope){
	if($scope.showReceiptSheet){
		$scope.showReceiptSheet = false;
	}
}
