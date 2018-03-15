// 예제 10-3 getMin(), getMax() 테스트

function getMin() {
    var current = this.root;
    while (!(current.left == null)) {
	current = current.left;
    }
    return current.data;
}

function getMax() {
    var current = this.root;
    while (!(current.right == null)) {
	current = current.right;
    }
    return current.data;
}

function BST() {
    this.root = null;
    this.insert = insert;
    this.inOrder = inOrder;
    this.getMin = getMin;
    this.getMax = getMax;
}


var nums = new BST();
nums.insert(23);
nums.insert(45);
nums.insert(16);
nums.insert(37);
nums.insert(3);
nums.insert(99);
nums.insert(22);
var min = nums.getMin();
print("The minimum value of the BST is: " + min);
print("\n");
var max = nums.getMax();
print("The maximum value of the BST is: " + max);

/*
The minimum value of the BST is: 3
The maximum value of the BST is: 99
*/
