// 예제 7-1 Dictionary 클래스

function Dictionary() {
    this.add = add;
    this.datastore = new Array();
    this.find = find;
    this.remove = remove;
    this.showAll = showAll;
}

function add(key, value) {
    this.datastore[key] = value;
}

function find(key) {
    return this.datastore[key];
}

function remove(key) {
    delete this.datastore[key];
}

function showAll() {
    for each (var key in Object.keys(this.datastore)) {
	print(key + " -> " + this.datastore[key]);
    }
}
