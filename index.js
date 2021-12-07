// ! LightCoin (LHL)

// ? Features:
/*
Here's a list of features that our code needs to support:

Allow multiple accounts to be created
Each account can have many transactions
Allow withdrawals and deposits into accounts
Allow us to retrieve the transaction history of an account (all withdrawals and deposits)
Allow us to retrieve the current balance of the account at any time
Don't allow withdrawals that exceed the remaining balance of the account
*/

// let balance = 500.00;

// create an account class to keep track of user and their balance
// Now we can create a new account for every user of the app!!!
class Account {

  constructor(username) {
    this.username = username;
    // Have account balance start at zero ($0)
    this.balance = 0;
  }
}


// Create a Transaction class (Has withdrawl and deposit sublass)

class Transaction {
  constructor(amount, account) {
    this.amount = amount;
    this.account = account;
  }

  commit() {
    this.account.balance += this.value;
  }
}

class Withdrawal extends Transaction {

  // Modified

  // commit() {
  get value() {
    // this.account.balance -= this.amount;
    // by putting commit() in the transaction class
    return -this.amount;
    // look at that refactor!
  }
}
// create a withdrawl class!

class Deposit extends Transaction {

  // Modified

  // commit() {
  get value() {
    return this.amount;
  }
}



// DRIVER CODE BELOW
// We use the code below to "drive" the application logic above and make sure it's working as expected

// t1 = new Withdrawal(50.25, myAccount);
// t1.commit();
// console.log('Transaction 1:', t1);

// t2 = new Withdrawal(9.99);
// t2.commit();
// console.log('Transaction 2:', t2);

// t3 = new Deposit(120.00);
// t3.commit();
// console.log('Transaction 3:', t3);

// t1 = new Withdrawal(50.25, myAccount);
// t1.value();
// console.log('Transaction 1:', t1);

const myAccount = new Account("Cotton Eye Joe");

console.log(`Welcome, ${myAccount.username}\nHere is your account summary:`);
console.log(`-----------------------------`);
console.log('Starting Balance:', myAccount.balance);

const t1 = new Deposit(500.00, myAccount);
t1.commit();

const t2 = new Withdrawal(350.25, myAccount);
t2.commit();


const t3 = new Deposit(865.65, myAccount);
t3.commit();


console.log('Ending Balance:', myAccount.balance);


// *! This pattern is called Dependency Injection. It's a fancy word that simply means "passing an object the things it needs rather
// *!than having the object access them itself". It makes for code that is much more modular and testable.
