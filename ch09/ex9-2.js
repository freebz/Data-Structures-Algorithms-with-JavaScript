// 예제 9-2 두 집합의 합집합 계산

load("set.js");
var cis = new Set();
cis.add("Mike");
cis.add("Clayton");
cis.add("Jennifer");
cis.add("Reymond");
var dmp = new Set();
dmp.add("Raymond");
dmp.add("Cynthia");
dmp.add("Jonathan");
var it = new Set();
print(it.show());
// Mike,Clayton,Jennifer,Raymond,Cynthia,Jonathan 출력
