// 예제 10-4 find()로 값 검색하기

function find(data) {
    var current = this.root;
    while (current.data != data) {
	if (data < current.data) {
	    current = current.left;
	}
	else {
	    current = current.right;
	}
	if (current == null) {
	    return null;
	}
    }
    return current;
}

function BST() {
    this.root = null;
    this.insert = insert;
    this.inOrder = inOrder;
    this.getMin = getMin;
    this.getMax = getMax;
    this.find = find;
}


load("BST");
var nums = new BST();
nums.insert(23);
nums.insert(45);
nums.insert(16);
nums.insert(37);
nums.insert(3);
nums.insert(99);
nums.insert(22);
inOrder(nums.root);
print("\n");
putstr("Enter a value to search for: ");
var value = parseInt(readline());
var found = nums.find(value);
if (found != null) {
    print("Found " + value + " in the BST.");
}
else {
    print(value + " was not found in the BST.");
}


/*
3 16 22 23 36 4 99

Enter a value to search for: 23
Found 2 in the BST.
*/
