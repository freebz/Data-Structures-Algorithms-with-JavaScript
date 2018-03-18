// 예제 12-11 동적으로 갭 시퀀스를 계산하는 shellsort()

function shellsort1() {
    var N = this.dataStore.length;
    var h = 1;
    while (h < N/3) {
	h = 3 * h + 1;
    }
    while (h >= 1) {
	for (var i = h; i < N; i++) {
	    for (var j = i; j >= h && this.dataStore[j] < this.dataStore[j-h];
		 j -= h) {
		swap(this.dataStore, j, j-h);
	    }
	}
	h = (h-1)/3;
    }
}

function CArray(numElements) {
    this.dataStore = [];
    this.pos = 0;
    this.numElements = numElements;
    this.insert = insert;
    this.toString = toString;
    this.clear = clear;
    this.setData = setData;
    this.swap = swap;

    for (var i = 0; i < numElements; ++i) {
	this.dataStore[i] = i;
    }

    this.bubbleSort = bubbleSort;
    this.selectionSort = selectionSort;
    this.insertionSort = insertionSort;

    this.gaps = [5,3,1];
    this.setGaps = setGaps;
    this.shellsort = shellsort;
    this.shellsort1 = shellsort1;
}


load("CArray.js")
var nums = new CArray(100);
nums.setData();
print("Before Shellsort1: \n");
print(nums.toString());
nums.shellsort1();
print("\nAfter Shellsort1: \n");
print(nums.toString());
