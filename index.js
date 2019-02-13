// setup server
// YOUR CODE
'use strict';
const express = require('express');
const app = express();
app.use(express.static('public')); 

// setup directory used to serve static files
// YOUR CODE
// setup data store
// YOUR CODE
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('db.json')
const db = low(adapter)
// Set some defaults
db.defaults({ accounts: [] })
  .write();

//Start Server
const PORT = process.env.PORT || 3000;
app.listen(process.env.PORT || 3000, () => {
  console.log(`Running on port ${PORT}`);
});
module.exports = app;

function updateAccount(object) {
  db.get('accounts')
    .find({ email: object.email })
    .assign({
      name: object.name,
      balance: object.balance,
      password: object.password,
      transactions: object.transactions
    })
    .write()

  console.log("Update Success");
  return true;
}

// Create account route
function createAccount(object) {
  db.get('accounts')
    .push(object)
    .write();

  return object;
}

function getAllData() {
  return db.get('accounts').value();
}

function searchAccountByEmail(email) {
  return db.get('accounts')
    .find({ email: email })
    .value();
}

app.get('/', function (req, res) {
  res
    .status(200)
    .set('Content-Type', 'text/plain')
    .send("Navigate to index.html")
    .end();
});

app.get('/account/create/:name/:email/:password', function (req, res) {

  const account_data = {
    name: req.params.name,
    email: req.params.email,
    balance: 0,
    password: req.params.password,
    transactions: []
  };

  createAccount(account_data)
  var msg = "success"
  var status = 200;

  res
    .status(status)
    .set('Content-Type', 'text/plain')
    .send(msg)
    .end();
});

app.get('/account/login/:email/:password', function (req, res) {

  // YOUR CODE
  // Login user - confirm credentials
  // If success, return account object    
  // If fail, return null
  var account = searchAccountByEmail(req.params.email);
  var msg = "";
  var status = "";

  if (typeof account != "undefined" && account != null) {
    if (req.params.password == account.password) {
      msg = account;
      status = 200;
    }
    else {
      msg = null;
      status = 404;
      console.log("Passwort not match");
    }
  }
  else {
    msg = "failed";
    status = 404;
  }

  res
    .status(status)
    .set('Content-Type', 'text/plain')
    .send(msg)
    .end();
});


app.get('/account/get/:email', function (req, res) {
  // YOUR CODE
  // Return account based on email
  var account = searchAccountByEmail(req.params.email);
  var msg = "";
  var status = "";

  if (typeof account != "undefined" && account != null) {
    msg = account;
    status = 200;
  }
  else {
    msg = "failure";
    status = 404;
  }

  res
    .status(status)
    .set('Content-Type', 'text/plain')
    .send(msg)
    .end();
}
);

app.get('/account/deposit/:email/:amount', function (req, res) {
  // YOUR CODE
  // Deposit amount for email
  // return success or failure string
  var account = searchAccountByEmail(req.params.email);
  var msg = "";
  var status = "";

  if (typeof account != "undefined" && account != null) {
    account.balance = Number(account.balance) + Number(req.params.amount); //Add to balance
    account.transactions.push({ type: "deposit", amount: req.params.amount }); //Add transaction to account
    updateAccount(account);
    msg = "success";
    status = 200;
  }

  else {
    msg = "failure";
    status = 404;
  }

  res
    .status(status)
    .set('Content-Type', 'text/plain')
    .send(msg)
    .end();
}
);


app.get('/account/withdraw/:email/:amount', function (req, res) {
  // YOUR CODE
  // Withdraw amount for email
  // return success or failure string
  var account = searchAccountByEmail(req.params.email);
  var msg = "";
  var status = "";

  if (typeof account != "undefined" && account != null) {
    account.balance = Number(account.balance) - Number(req.params.amount); //Withdraw from balance
    account.transactions.push({ type: "withdraw", amount: req.params.amount }); //Add transaction to account
    updateAccount(account);
    msg = "success";
    status = 200;
  }

  else {
    msg = "failure";
    status = 404;
  }

  res
    .status(status)
    .set('Content-Type', 'text/plain')
    .send(msg)
    .end();
}
);


app.get('/account/transactions/:email', function (req, res) {
  // YOUR CODE
  // Return all transactions for account
  var account = searchAccountByEmail(req.params.email);
  var msg = "";
  var status = "";

  if (typeof account != "undefined" && account != null) {
    msg = account.transactions; //return transactions array
    status = 200;
  }
  else {
    msg = "failure";
    status = 404;
  }

  res
    .status(status)
    .set('Content-Type', 'text/plain')
    .send(msg)
    .end();
}
);

app.get('/account/all', function (req, res) {
  // YOUR CODE
  // Return data for all accounts
  var account = getAllData();
  var msg = "";
  var status = "";

  if (typeof account != "undefined" && account != null) {
    msg = account;
    status = 200;
  }
  else {
    msg = "failure";
    status = 404;
  }

  res
    .status(status)
    .set('Content-Type', 'text/plain')
    .send(msg)
    .end();
}
);

app.get('/account/balance/:email', function (req, res) {

  var account = searchAccountByEmail(req.params.email);
  var msg = "";
  var status = "";

  if (typeof account != "undefined" && account != null) {
    var balance = account.balance;
    msg = balance.toString();
    status = 200;
  }
  else {
    msg = "failure";
    status = 404;
  }

  res
    .status(status)
    .set('Content-Type', 'text/plain')
    .send(msg)
    .end();
}
);
