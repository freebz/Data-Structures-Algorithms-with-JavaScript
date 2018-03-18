// 예제 12-8 루프 시간 측정

var start = new Date().getTime();
for (var i = 1; i < 100; ++i) {
    print(i);
}
var stop = new Date().getTime();
var elapsed = stop - start;
print("The elapsed time was: " + elapsed +
      " milliseconds.");
