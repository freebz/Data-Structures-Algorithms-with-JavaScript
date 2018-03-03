// 2.4.3 배열 중간에 요소를 추가하거나 배열의 중간에 있는 요소 삭제하기

var nums = [1,2,3,7,8,9];
var newElements = [4,5,6];
nums.splice(3,0,4,5,6);
print(nums); // 1,2,3,4,5,6,7,8,9


var nums = [1,2,3,7,8,9];
nums.splice(3,0,4,5,6);
print(nums);


var nums = [1,2,3,100,200,300,400,4,5];
nums.splice(3,4);
print(nums); // 1,2,3,4,5
