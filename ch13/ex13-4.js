// 예제 13-4 새로운 seqSeqrch() 함수 테스트

var nums = [];
for (var i = 0; i < 100; ++i) {
    nums[i] = Math.floor(Math.random() * 101);
}
putstr("Enter a number to search for: ");
var num = readline();
print();
var position = seqSearch(nums, num);
if (position > -1) {
    print(num + " is in the array.");
}
else {
    print(num + " is not in the array.");
}
print();
dispArr(nums);
