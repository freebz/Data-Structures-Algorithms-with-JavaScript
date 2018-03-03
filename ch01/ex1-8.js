// 예제 1-8 for문을 이용해 배열 작업하기

var numbers = [3, 7, 12, 22, 100];
var sum = 0;
for (var i = 0; i < numbers.length; ++i) {
    sum += numbers[i];
}
print(sum); // 144 출력
