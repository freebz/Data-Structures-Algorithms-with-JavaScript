// 예제 12-10 작은 데이터 집합에 shellsort() 실행

function shellsort() {
    for (var g = 0; g < this.gaps.length; ++g) {
	for (var i = this.gaps[g]; i < this.dataStore.length; ++i) {
	    var temp = this.dataStore[i];
	    for (var j = i; j >= this.gaps[g] &&
		     this.dataStore[j-this.gaps[g]] > temp;
		 j -= this.gaps[g]) {
		this.dataStore[j] = this.dataStore[j - this.gaps[g]];
	    }
	    this.dataStore[j] = temp;
	}
    }
}

function setGaps(arr) {
    this.gaps = arr;
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
}


load("CArray.js");
var nums = new CArray(10);
nums.setData();
print("Before Shellsort: \n");
print(nums.toString());
print("\nDuring Shellsort: \n");
nums.shellsort();
print("\nAfter Shellsort: \n");
print(nums.toString());
