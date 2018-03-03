// 2.4.4 배열 요소 정렬하기

var nums = [1,2,3,4,5];
nums.reverse();
print(nums); // 5,4,3,2,1


var names = ["David","Mike","Cynthia","Clayton","Bryan","Raymond"];
nums.sort();
print(names); // Brayn,Clayton,Cynthia,David,Mike,Raymond


var nums = [3,1,2,100,4,200];
nums.sort();
print(nums); // 1,100,2,200,3,4


function compare(num1, num2) {
    return num1 - num2;
}
var nums = [3,1,2,100,4,200];
nums.sort(compare);
print(nums); // 1,2,3,4,100,200
