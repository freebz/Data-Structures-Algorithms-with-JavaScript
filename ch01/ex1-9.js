// 예제 1-9 값을 반환하는 함수

function factorial(number) {
    var product = 1;
    for (var i = number; i >= 1; --i) {
	product *= i;
    }
    return product;
}

print(factorial(4)); // 24 출력
print(factorial(5)); // 120 출력
print(factorial(10)); // 3628800 출력
