// 예제 12-3 bubbleSort() 함수

function bubbleSort() {
    var numElements = this.dataStore.length;
    var temp;
    for (var outer = numElements; outer >= 2; --outer) {
	for (var inner = 0; inner <= outer-1; ++inner) {
	    if (this.dataStore[inner] > this.dataStore[inner+1]) {
		swap(this.dataStore, inner, inner+1);
	    }
	}
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
}
