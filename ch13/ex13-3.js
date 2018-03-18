// 예제 13-3 발견된 데이터의 위치(발견하지 못하면 -1)를 반환하는 seqSearch() 함수

function seqSearch(arr, data) {
    for (var i = 0; i < arr.length; ++i) {
	if (arr[i] == data) {
	    return i;
	}
    }
    return -1;
}
