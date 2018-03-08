// 예제 4-2 Stack 클래스 구현 테스트

var s = new Stack();
s.push("David");
s.push("Raymond");
s.push("Bryan");
print("length: " + s.length());
print(s.peek());
var popped = s.pop();
print("The popped element is: " + popped);
print(s.peek());
s.push("Cynthia");
print(s.peek());
s.clear();
print("length: " + s.length());
print(s.peek());
s.push("Clayton");
print(s.peek());

/*
length: 3
Bryan
The popped element is: Bryan
Raymond
Cynthia
length: 0
undefined
Clayton
*/
