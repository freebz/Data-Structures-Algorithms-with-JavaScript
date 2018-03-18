// 예제 13-1 seqSearch() 함수

function seqSearch(arr, data) {
    for (var i = 0; i < arr.length; ++i) {
	if (arr[i] == data) {
	    return true;
	}
    }
    return false;
}
