// 예제4-3 10진수를 2진수, 8진수로 변환하기

function mulBase(num, base) {
    var s = new Stack();
    do {
	s.push(num % base);
	num = Math.floor(num /= base);
    } while (num > 0);
    var converted = "";
    while (s.length() > 0) {
	converted += s.pop();
    }
    return converted;
}

var num = 32;
var base = 2;
var newNum = mulBase(num, base);
print(num + " converted to base " + base + " is " + newNum);
num = 125;
base = 8;
var newNum = mulBase(num, base);
print(num + " converted to base " + base + " is " + newNum);

// 32 converted to base 2 is 100000
// 125 converted to base 8 is 175
