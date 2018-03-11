// 예제 6-1 LList 클래스와 테스트 프로그램

function Node(element) {
    this.element = element;
    this.next = null;
}



function LList() {
    this.head = new Node("head");
    this.find = find;
    this.insert = insert;
    //this.remove = remove;
    this.display = display;
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
    current.next = newNode;
}

function display() {
    var currNode = this.head;
    while (!(currNode.next == null)) {
	print(currNode.next.element);
	currNode = currNode.next;
    }
}

// 메인 프로그램

var cities = new LList();
cities.insert("Conway", "head");
cities.insert("Russellville", "Conway");
cities.insert("Alma", "Russellville");
cities.display();

/*
Conway
Russellville
Alma
*/
