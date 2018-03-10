// 예제 5-5 우선순위 큐 구현

function Patient(name, code) {
    this.name = name;
    this.code = code;
}



function dequeue() {
    var entry = 0;
    for (var i = 0; i < this.dataStore.length; ++i) {
	if (this.dataStore[i].code < this.dataStore[entry].code) {
	    entry = i;
	}
    }
    return this.dataStore.splice(entry,1);
}



function toString() {
    var retStr = "";
    for (var i = 0; i < this.dataStore.length; ++i) {
	retStr += this.dataSotre[i].name + " code: "
	    + this.dataSotre[i].code + "\n";
    }
    return retStr;
}



var p = new Patient("Smith",5);
var ed = new Queue();
ed.enqueue(p);
p = new Patient("Jones", 4);
ed.enqueue(p);
p = new Patient("Fehrenbach", 6);
ed.enqueue(p);
p = new Patient("Brown", 1);
ed.enqueue(p);
p = new Patient("Ingram", 1);
ed.enqueue(p);
print(ed.toString());
var seen = ed.dequeue();
print("Patient being treated: " + seen[0].name);
print("Patient waiting to be seen: ")
print(ed.toString());
// 다음 환자 치료
var seen = ed.dequeue();
print("Patient being treated: " + seen[0].name);
print("Patient waiting to be seen: ")
print(ed.toString());
var seen = ed.dequeue();
print("Patient being treated: " + seen[0].name);
print("Patient waiting to be seen: ")
print(ed.toString());
