// 예제 9-4 두 집합의 부분집합 계산

load("set.js");
var it = new Set();
it.add("Cynthia");
it.add("Clayton");
it.add("Jennifer");
it.add("Danny");
it.add("Terrill");
it.add("Raymond");
it.add("Mike");
var dmp = new Set();
dmp.add("Cynthia");
dmp.add("Raymond");
dmp.add("Jonathan");
if (dmp.subset(it)) {
    print("DMP is a subset of IT.");
}
else {
    print("DMP is not a subset of IT.");
}
