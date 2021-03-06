// 2.6 이차원 배열과 다차원 배열

// 2.6.1 이차원 배열 만들기

var twod = [];
var rows = 5;
for (var i = 0; i < rows; ++i) {
    twod[i] = [];
}


Array.matrix = function(numrows, numcols, initial) {
    var arr = [];
    for (var i = 0; i < numrows; ++i) {
	var columns = [];
	for (var j = 0; j < numcols; ++j) {
	    columns[j] = initial;
	}
	arr[i] = columns;
    }
    return arr;
}


var nums = Array.matrix(5,5,0);
print(nums[1][1]); // 0 출력
var names = Array.matrix(3,3,"");
names[1][2] = "Joe";
print(names[1][2]); // "Joe" 출력


var grades = [[89, 77, 78],[76, 82, 81],[91, 94, 89]];
print(grades[2][2]); // 89 출력
