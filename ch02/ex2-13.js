// 2.5.2 새 배열을 반환하는 반복자 함수

function curve(grade) {
    return grade += 5;
}

var grades = [77, 65, 81, 92, 83];
var newgrades = grades.map(curve);
print(newgrades); // 82, 70, 86, 97, 88


function first(word) {
    return word[0];
}

var words = ["for","your","information"];
var acronym = words.map(first);
print(acronym.join("")); // "fyi" 출력


function isEven(num) {
    return num % 2 == 0;
}

function isOdd(num) {
    return num % 2 != 0;
}

var nums = [];
for (var i = 0; i < 20; ++i) {
    nums[i] = i+1;
}
var evens = nums.filter(isEven);
print("Even numbers: ");
print(evens);
var odds = nums.filter(isOdd);
print("Odd numbers: ");
print(odds);


function passing(num) {
    return num >= 60;
}

var grades = [];
for (var i = 0; i < 20; ++i) {
    grades[i] = Math.floor(Math.random() * 101);
}
var passGrades = grades.filter(passing);
print("All grades: ");
print(grades);
print("Passing grades: ");
print(passGrades);


function afterc(str) {
    if (str.indexOf("cie") > -1) {
	return true;
    }
    return false;
}

var words = ["recieve","deceive","percieve","deceit","concieve"];
var misspelled = words.filter(afterc);
print(misspelled); // recieve,percieve,concieve 출력
