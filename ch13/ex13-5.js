// 예제 13-5 findMin() 함수

function findMin(arr) {
    var min = arr[0];
    for (var i = 1; i < arr.length; ++i) {
	if (arr[i] < min) {
	    min = arr[i];
	}
    }
    return min;
}
