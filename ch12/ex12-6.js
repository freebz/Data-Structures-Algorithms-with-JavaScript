// 예제 12-6 selectionSort() 함수

function selectionSort() {
    var min, temp;
    for (var outer = 0; outer <= this.dataStore.length-2; ++outer) {
	min = outer;
	for (var inner = outer + 1;
	     inner <= this.dataStore.length-1; ++inner) {
	    if (this.dataStore[inner] < this.dataStore[min]) {
		min = inner;
	    }
	}
	swap(this.dataStore, outer, min);
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
}
