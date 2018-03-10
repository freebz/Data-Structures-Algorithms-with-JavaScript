// 예제 5-3 댄스를 기다리는 댄서의 수 알려주기

var maleDancers = new Queue();
var femaleDancers = new Queue();
getDancers(maleDancers, femaleDancers);
dance(maleDancers, femaleDancers);
if (maleDancers.count() > 0) {
    print("There are " + maleDancers.count() +
	  " male dancers waiting to dance.");
}
if (femaleDancers.count() > 0) {
    print("There are " + femaleDancers.count() +
	  " female dancers waiting to dance.");
}
