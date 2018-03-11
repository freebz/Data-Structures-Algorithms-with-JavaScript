// 예제 8-1 간단한 해시 함수를 이용한 해싱

load("HashTable.js");
var someNames = ["David", "Jennifer", "Donnie", "Raymond",
		 "Cynthia", "Mike", "Clayton", "Danny", "Jonathan"];
var hTable = new HashTable();
for (var i = 0; i < someNames.length; ++i) {
    hTable.put(someNames[i]);
}
hTable.showDistro();
