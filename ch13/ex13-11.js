// 예제 13-11 자체 정렬 데이터를 적용한 검색

var nums = [];
for (var i = 0; i < 100; ++i) {
    nums[i] = Math.floor(Math.random() * 11);
}
dispArr(nums);
print();
putstr("Enter a value to search for: ");
var val = parseInt(readline());
if (seqSearch(nums, val)) {
    print("Found element: ");
    print();
    dispArr(nums);
}
else {
    print(val + " is not in array.");
}
