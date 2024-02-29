console.log('encapsulation!');

class BankAccount {
  constructor(accountNumber, balance) {
    this.accountNumber = accountNumber;
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
  }

  withdrawl(amount) {
    if (amount <= this.balance && this.balance > 0) {
      this.balance -= amount;
    } else {
      console.log('Insufficient funds!');
    }
  }

  getAccountInfo() {
    console.log(
      `Your account number is ${this.accountNumber} and your balance is ${this.balance}.`
    );
  }
}

const myAccount = new BankAccount(121231, 10);
myAccount.deposit(25);
myAccount.getAccountInfo();
myAccount.withdrawl(1);
myAccount.deposit(10000);
myAccount.getAccountInfo();
