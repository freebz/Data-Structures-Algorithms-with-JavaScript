// 예제 6-4 양방향 연결 리스트로 구현한 LList 클래스

function Node(element) {
    this.element = element;
    this.next = null;
    this.previous = null;
}

function LList() {
    this.head = new Node("head");
    this.find = find;
    this.insert = insert;
    this.display = display;
    this.remove = remove;
    this.findLast = findLast;
    this.dispReverse = dispReverse;
}

function dispReverse() {
    var currNode = this.head;
    currNode = this.findLast();
    while (!(currNode.previous == null)) {
	print(currNode.element);
	currNode = currNode.previous;
    }
}

function findLast() {
    var currNode = this.head;
    while (!(currNode.next == null)) {
	currNode = currNode.next;
    }
    return currNode;
}

function remove(item) {
    var currNode = this.find(item);
    if (!(currNode.next == null)) {
	currNode.previous.next = currNode.next;
	currNode.next.previous = currNode.previous;
	currNode.next = null;
	currNode.previous = null;
    }
}

// findPrevious는 더 이상 사용하지 않는다
/*function findPrevious(item) {
    var currNode = this.head;
    while (!(currNode.next == null) &&
	   (currNode.next.element != item)) {
	currNode = currNode.next;
    }
    return currNode;
}*/


function display() {
    var currNode = this.head;
    while (!(currNode.next == null)) {
	print(currNode.next.element);
	currNode = currNode.next;
    }
}

function find(item) {
    var currNode = this.head;
    while (currNode.element != item) {
	currNode = currNode.next;
    }
    return currNode;
}

function insert(newElement, item) {
    var newNode = new Node(newElement);
    var current = this.find(item);
    newNode.next = current.next;
    newNode.previous = current;
    current.next = newNode;
}

var cities = new LList();
cities.insert("Conway", "head");
cities.insert("Russellville", "Conway");
cities.insert("Carlisle", "Russellville");
cities.insert("Alma", "Carlisle");
cities.display();
print();
cities.remove("Carlisle");
cities.display();
print();
cities.dispReverse();

/*
Conway
Russellville
Carlisle
Alma
Conway
Russellville
Alma
Alma
Russellville
Conway
*/
