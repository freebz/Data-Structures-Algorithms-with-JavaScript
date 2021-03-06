// 예제 10-5 데이터 집합에서 점수 발견 휫수 계산

function Node(data, left, right) {
    this.data = data;
    this.count = 1;
    this.left = left;
    this.right = right;
    this.show = show;
}

function update(data) {
    var grade = this.find(data);
    grade.count++;
    return grade;
}

function BST() {
    this.root = null;
    this.insert = insert;
    this.inOrder = inOrder;
    this.getMin = getMin;
    this.getMax = getMax;
    this.find = find;
    this.update = update;
}


function prArray(arr) {
    putstr(arr[0].toString() + ' ');
    for (var i = 1; i < arr.length; ++i) {
	putstr(arr[i].toString() + ' ');
	if (i % 10 == 0) {
	    putstr("\n");
	}
    }
}

function genArray(length) {
    var arr = [];
    for (var i = 0; i < length; ++i) {
	arr[i] = Math.floor(Math.random() * 101);
    }
    return arr;
}

load("BST"); // BST 정의에 +update()+를 추가
var grades = genArray(100);
prArray(grades);
var gradedistro = new BST();
for (var i = 0; i < grades.length; ++i) {
    var g = grades[i];
    var grade = gradedistro.find(g);
    if (grade == null) {
	gradedistro.insert(g);
    }
    else {
	gradedistro.update(g);
    }
}
var cont = "y";

while (cont == "y") {
    putstr("\n\nEnter a grade: ");
    var g = parseInt(readline());
    var aGrade = gradedistro.find(g);
    if (aGrade == null) {
	print("No occurrences of " + g);
    }
    else {
	print("Occurrences of " + g + ": " + aGrade.count);
    }
    putstr("Look at another grade (y/n)? ");
    cont = readline();
}
