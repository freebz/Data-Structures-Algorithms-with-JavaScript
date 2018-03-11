// 예제 7-2 Dictionary 클래스 사용하기

load("Dictionary.js");
var pbook = new Dictionary();
pbook.add("Mike", "123");
pbook.add("David", "345");
pbook.add("Cynthia", "456");
print("David's extension: " + pbook.find("David"));

pbook.remove("David");
pbook.showAll();

/*
David's extension: 345
Mike -> 123
Cynthia -> 456
*/
