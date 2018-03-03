// 2.2 배열 사용하기

// 2.2.1 배열 만들기

var numbers = [];

print(numbers.length); // 0 출력


var numbers = [1,2,3,4,5];
print(numbers.length); // 5 출력


var numbers = new Array();
print(numbers.length); // 0 출력


var numbers = new Array(1,2,3,4,5);
print(numbers.length); // 5 출력


var numbers = new Array(10);
print(numbers.length); // 10 출력


var objects = [1, "Joe", true, null];


var number = 3;
var arr = [7,4,1776];
print(Array.isArray(number)); // false 출력
print(Array.isArray(arr)); // true 출력
