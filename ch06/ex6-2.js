// 예제 6-2 remove() 함수 테스트

function findPrevious(item) {
    var currNode = this.head;
    while (!(currNode.next == null) &&
	   (currNode.next.element != item)) {
	currNode = currNode.next;
    }
    return currNode;
}

function remove(item) {
    var prevNode = this.findPrevious(item);
    if (!(prevNode == null)) {
	prevNode.next = prevNode.next.next;
    }
}

function LList() {
    this.head = new Node("head");
    this.find = find;
    this.insert = insert;
    this.display = display;
    this.findPrevious = findPrevious;
    this.remove = remove;
}



var cities = new LList();
cities.insert("Conway", "head");
cities.insert("Russellville", "Conway");
cities.insert("Carlisle", "Russellville");
cities.insert("Alma", "Carlisle");
cities.display();
console.log();
cities.remove("Carlisle");
cities.display();

/*
Conway
Russellville
Carlisle
Alma
*/

/*
Conway
Russellville
Alma
*/
