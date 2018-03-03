// 2.4.2 배열의 요소 삭제하기

var nums = [1,2,3,4,5,9];
nums.pop();
print(nums); // 1,2,3,4,5


var nums = [9,1,2,3,4,5];
print(nums);
for (var i = 0; i < nums.length; ++i) {
    nums[i] = nums[i+1];
}
print(nums); // 1,2,3,4,5,


var nums = [9,1,2,3,4,5];
nums.shift();
print(nums); // 1,2,3,4,5


var nums = [6,1,2,3,4,5];
var first = nums.shift(); // first에 6이 저장된다.
nums.push(first);
print(nums); // 1,2,3,4,5,6
