// 예제 13-9 자체 정렬 데이터를 포하하는 seqSearch() 함수

function seqSearch(arr, data) {
    for (var i = 0; i < arr.length; ++i) {
	if (arr[i] == data) {
	    if (i > 0) {
		swap(arr,i,i-1);
	    }
	    return true;
	}
    }
    return false;
}

function swap(arr, index, index1) {
    var temp = arr[index];
    arr[index] = arr[index1];
    arr[index1] = temp;
}
