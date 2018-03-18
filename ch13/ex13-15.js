// 예제 13-15 count() 함수 사용

var nums = [];
for (var i = 0; i < 100; ++i) {
    nums[i] = Math.floor(Math.random() * 101);
}
insertionsort(nums);
dispArr(nums);
print();
putstr("Enter a value to search for: ");
var val = parseInt(readline());
var retVal = count(nums, val);
print("Found " + retVal + " occurences of " + val + ".");
