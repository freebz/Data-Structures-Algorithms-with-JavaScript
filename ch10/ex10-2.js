// 예제 10-2 BST의 중위 탐색 함수

function inOrder(node) {
    if (!(node == null)) {
	inOrder(node.left);
	putstr(node.show() + " ");
	inOrder(node.right);
    }
}

function preOrder(node) {
    if (!(node == null)) {
	putstr(node.show() + " ");
	inOrder(node.left);
	inOrder(node.right);
    }
}

function postOrder(node) {
    if (!(node == null)) {
	inOrder(node.left);
	inOrder(node.right);
	putstr(node.show() + " ");
    }
}



var nums = new BST();
nums.insert(23);
nums.insert(45);
nums.insert(16);
nums.insert(37);
nums.insert(3);
nums.insert(99);
nums.insert(22);
print("Inorder traversal: ");
inOrder(nums.root);

print("Preorder traversal: ");
preOrder(nums.root);

print("Postorder traversal: ");
postOrder(nums.root);

/*
Inorder traversal:
3 16 22 23 37 45 99 

Preorder traversal:
23 3 16 22 37 45 99 

Postorder traversal:
3 16 22 37 45 99 23 
*/
