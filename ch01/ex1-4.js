// 예제 1-4 if-else if문

var mid = 25;
var high = 50;
var low = 1;
var current = 13;
var found = -1;
if (current < mid) {
    mid = (current-low) / 2;
}
else if (current > mid) {
    mid = (current+high) / 2;
}
else {
    found = current;
}
