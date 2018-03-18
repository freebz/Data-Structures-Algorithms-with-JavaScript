// 예제 14-1 피보나치 함수 재귀 버전과 동적 프로그래밍 버전으로 성능 테스트

function recurFib(n) {
    if (n < 2) {
	return n;
    }
    else {
	return recurFib(n-1) + recurFib(n-2);
    }
}

function dynFib(n) {
    var val = [];
    for (var i = 0; i <= n; ++i) {
	val[i] = 0;
    }
    if (n == 1 || n == 2) {
	return 1;
    }
    else {
	val[1] = 1;
	val[2] = 2;
	for (var i = 3; i <= n; ++i) {
	    val[i] = val[i-1] + val[i-2];
	}
	return val[n-1];
    }
}

var start = new Date().getTime();
print(recurFib(10));
var stop = new Date().getTime();
print("Recursive time - " + (stop-start) + " milliseconds");
print();
start = new Date().getTime();
print(dynFib(10));
stop = new Date().getTime();
print("dynamic programming time - " + (stop-start) + " milliseconds");
