// 예제 12-9 100개의 요소를 가진 배열을 정렬하는 함수의 시간 측정

var numElements = 100;
var nums = new CArray(numElements);
nums.setData();
var start = new Date().getTime();
nums.bubbleSort();
var stop = new Date().getTime();
var elapsed = stop - start;
print("Elapsed time for the bubble sort on " +
      numElements + " elements is: " + elapsed + " milliseconds.");
start = new Date().getTime();
nums.selectionSort();
stop = new Date().getTime();
elapsed = stop - start;
print("Elapsed time for the selectin sort on " +
      numElements + " elaments is: " + elapsed + " milliseconds.");
start = new Date().getTime();
nums.insertionSort();
stop = new Date().getTime();
elapsed = stop - start;
print("Elapsed time for the insertion sort on " +
      numElements + " elements is: " + elapsed + " milliseconds.");
