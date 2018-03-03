// 예제 1-10 자바스크립트의 서브프로시저(똔는 void 함수)

function curve(arr, amount) {
    for (var i = 0; i < arr.length; ++i) {
	arr[i] += amount;
    }
}

var grades = [77, 73, 74, 81, 90];
curve(grades, 5);
print(grades); // 82,78,79,86,95 출력
