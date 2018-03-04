// 3.1 리스트 ADT

// 3.2 List 클래스 구현

function List() {
    this.listSize = 0;
    this.pos = 0;
    this.dataStore = []; // 리스트 요소를 저장할 빈 배열 초기화
    this.clear = clear;
    this.find = find;
    this.toString = toString;
    this.insert = insert;
    this.append = append;
    this.remove = remove;
    this.front = front;
    this.end = end;
    this.prev = prev;
    this.next = next;
    this.length = length;
    this.currPos = currPos;
    this.moveTo = moveTo;
    this.getElement = getElement;
    this.contains = contains;
}


// 3.2.1 Append: 리스트에 요소 추가

function append(element) {
    this.dataStore[this.listSize++] = element;
}


// 3.2.2. Remove: 리스트의 요소 삭제

function find (element) {
    for (var i = 0; i < this.dataStore.length; ++i) {
	if (this.dataStore[i] == element) {
	    return i;
	}
    }
    return -1;
}


// 3.2.3 Find: 리스트의 요소 검색

function remove(element) {
    var foundAt = this.find(element);
    if (foundAt > -1) {
	this.dataStore.splice(foundAt,1);
	--this.listSize;
	return true;
    }
    return false;
}


// 3.2.4 Length: 리스트의 요소 개수

function length() {
    return this.listSize;
}


// 3.2.5 toString: 리스트의 요소 확인

function toString() {
    return this.dataStore;
}



var names = new List();
names.append("Cynthia");
names.append("Raymond");
names.append("Barbara");
print(names.toString());
names.remove("Raymond");
print(names.toString());

// Cynthia,Raymond,Barbara
// Cynthia,Barbara



// 3.2.6 Insert: 리스트에 요소 삽입

function insert(element, after) {
    var insertPos = this.find(after);
    if (insertPos > -1) {
	this.dataStore.splice(insertPos+1, 0, element);
	++this.listSize;
	return true;
    }
    return false;
}


// 3.2.7 리스트의 모든 요소 삭제

function clear() {
    delete this.dataStore;
    this.dataStore.length = 0;
    this.listSize = this.pos = 0;
}


// 3.2.8 Contains: 리스트에 특정값이 있는지 판단

function contains(element) {
    for (var i = 0; i < this.dataStore.length; ++i) {
	if (this.dataStore[i] == element) {
	    return true;
	}
    }
    return false;
}


// 3.2.9 리스트 탐색

function front() {
    this.pos = 0;
}

function end() {
    this.pos = this.listSize - 1;
}

function prev() {
    if (this.pos >= 0) {
	--this.pos;
    }
}

function next() {
    if (this.pos < this.listSize) {
	++this.pos;
    }
}

function currPos() {
    return this.pos;
}

function moveTo(position) {
    this.pos = position;
}

function getElement() {
    return this.dataStore[this.pos];
}



var names = new List();
names.append("Clayton");
names.append("Raymond");
names.append("Cynthia");
names.append("Jennifer");
names.append("Bryan");
names.append("Danny");


names.front();
print(names.getElement()); // Clayton 출력


names.next();
print(names.getElement()); // Raymond 출력


names.next();
names.next();
names.prev();
print(names.getElement()); // Cynthia 출력
