// 예제 13-10 향상된 자체 정렬 데이터 기법을 적용한 seqSearch() 함수

function seqSearch(arr, data) {
    for (var i = 0; i < arr.length; ++i) {
	if (arr[i] == data && i > (arr.length * 0.2)) {
	    swap(arr,i,0);
	    return true;
	}
	else if (arr[i] == data) {
	    return true;
	}
    }
    return false;
}
