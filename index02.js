// setup server
// YOUR CODE
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

db.defaults({ accounts: [] })
  .write();

//Start Server
const PORT = process.env.PORT || 3000;
app.listen(process.env.PORT || 3000, () => {
  console.log(`Running on port ${PORT}`);
});
module.exports = app;

// required data store structure
// YOUR CODE
{ 
    accounts:[
        {name        : '',
         email       : '',
         balance     : 0,
         password    : '',
         transactions: []}
    ] 
}
//
//
app.get('/account/create/:name/:email/:password', function (req, res) {
    // YOUR CODE
    // Create account route
    // return success or failure string
    function createAccount(object) {
        db.get('accounts')
          .push(object)
          .write();
        return object;
      }
      function getAllData() {
        return db.get('accounts').value();
      }
});
//
//
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
//
//
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
});
//
//
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
});
//
//
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
});
//
//
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
});
//
//
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
});
