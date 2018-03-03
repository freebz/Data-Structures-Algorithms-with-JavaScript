// 2.5. 반복자 함수

// 2.5.1 배열을 만들지 않는 반복자 함수

function square(num) {
    print(num, num * num);
}

var nums = [1,2,3,4,5,6,7,8,9,10];
nums.forEach(square);

/*
1 1
2 4
3 9
4 16
5 25
6 36
7 49
8 64
9 81
10 100
*/


function isEven(num) {
    return num % 2 == 0;
}

var nums = [2,4,6,8.10];
var even = nums.every(isEven);
if (even) {
    print("all numbers are even");
}
else {
    print("not all numbers are even");
}


function isEven(num) {
    return num % 2 == 0;
}

var nums = [1,2,3,4,5,6,7,8,9,10];
var someEven = nums.some(isEven);
if (someEven) {
    print("some numbers are even");
}
else {
    print("no numbers are even");
}
nums = [1,3,5,7,9];
someEven = nums.some(isEven);
if (someEven) {
    print("some numbers are even");
}
else {
    print("no numbers are even");
}


function add(runningTotal, currentValue) {
    return runningTotal + currentValue;
}
var nums = [1,2,3,4,5,6,7,8,9,10];
var sum = nums.reduce(add);
print(sum); // 55 출력


function concat(accumulatedString, item) {
    return accumulatedString + item;
}

var words = ["the ", "quick ", "brown ", "fox "];
var sentence = words.reduce(concat);
print(sentence); // "the quick brown fox" 출력


function concat(accumulatedString, item) {
    return accumulatedString + item;
}

var words = ["the ", "quick ", "brown ", "fox "];
var sentence = words.reduceRight(concat);
print(sentence); // "fox brown quick the" 출력
