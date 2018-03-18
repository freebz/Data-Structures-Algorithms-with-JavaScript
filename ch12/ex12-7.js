// 예제 12-7 insertionSort() 함수

function insertionSort() {
    var temp, inner;
    for (var outer = 1; outer <= this.dataStore.length-1; ++outer) {
	temp = this.dataStore[outer];
	inner = outer;
	while (inner > 0 && (this.dataStore[inner-1] >= temp)) {
	    this.dataStore[inner] = this.dataStore[inner-1];
	    --inner;
	}
	this.dataStore[inner] = temp;
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
}
