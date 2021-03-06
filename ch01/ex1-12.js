// 예제 1-12 Checking 객체 정의하고 사용하기

function Checking(amount) {
    this.balance = amount;
    this.deposit = deposit;
    this.withdraw = withdraw;
    this.toString = toString;
}

function deposit(amount) {
    this.balance += amount;
}

function withdraw(amount) {
    if (amount <= this.balance) {
	this.balance -= amount;
    }
    if (amount > this.balance) {
	print("Insufficient funds");
    }
}

function toString() {
    return "Balance: " + this.balance;
}

var account = new Checking(500);
account.deposit(1000);
print(account.toString()); // Balance: 1500
account.withdraw(750);
print(account.toString()); // Balance: 750
account.withdraw(800); // "Insufficient funds" 출력
print(account.toString()); // Balance: 750;
