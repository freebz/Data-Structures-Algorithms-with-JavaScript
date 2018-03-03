// 2.3 접근자 함수

// 2.3.1 값 검색하기

var names = ["David", "Cynthia", "Raymond", "Clayton", "Jennifer"];
putstr("Enter a name to search for: ");
var name = readline();
var position = names.indexOf(name);
if (position >= 0) {
    print("Found " + name + " at position " + position);
}
else {
    print(name + " not found in array.");
}


var names = ["David", "Mike", "Cynthia", "Raymond", "Clayton", "Mike", "Jennifer"];
var name = "Mike";
var firstPos = names.indexOf(name);
print("First found " + name + " at position " + firstPos);
var lastPos = names.lastIndexOf(name);
print("Last found " + name + " at position " + lastPos);

// First found Mike at position 1
// Last found Mike at position 5
