// 예제 4-5 스택을 이용한 재귀 과정 시뮬레이션

function factorial(n) {
    if (n === 0) {
	return 1;
    }
    else {
	return n * factorial(n-1);
    }
}


function fact(n) {
    var s = new Stack();
    while (n > 1) {
	s.push(n--);
    }

    var product = 1;
    while (s.length() > 0) {
	product *= s.pop();
    }
    return product;
}

print(factorial(5)); // 120 출력
print(fact(5)); // 120 출력
