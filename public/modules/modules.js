var ui = {};
ui.navigation = `
<nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#" onclick="defaultModule()">BadBank</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="#" onclick="loadCreateAccount()">Create Account</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" onclick="loadLogin()">Login</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" onclick="loadDeposit()">Deposit</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" onclick="loadWithdraw()">Withdraw</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" onclick="loadTransactions()">Transactions</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" onclick="loadBalance()">Balance</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" onclick="loadAllData()">AllData</a>
          </li>          
        </ul>
      </div>
    </nav>
`;

ui.createAccount = `
    <div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
        <div class="card-header">Create Account</div>
        <div class="card-body">
            Name<br>
            <input type="input" class="form-control" id="name" placeholder="Enter name"><br>
            Email address<br>
            <input type="input" class="form-control" id="email" placeholder="Enter email"><br>
            Password<br>
            <input type="password" class="form-control" id="password" placeholder="Enter password"><br>
            <button type="submit" class="btn" onclick="create()">Create Account</button>
            <div id='createStatus'></div>
        </div>
    </div>
`;

ui.login = `
    <!-- ------------- YOUR CODE: Login UI ------------- --> 
    <div class="card text-white bg-warning mb-3" style="max-width: 18rem;">
<div class="card-header">Login</div>
<div class="card-body">
    <form>
        <div class="form-group">
            <label for="email">Email address</label>
            <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email">
        </div>
        <div class="form-group">
            <label for="password">Password</label>
            <input type="password" class="form-control" id="password" placeholder="Enter password">
        </div>
        <button type="button" class="btn btn-light" onclick="login()">Login</button>
    </form>
</div>
</div>
`;

ui.deposit = `
    <!-- ------------- YOUR CODE: Deposit UI ------------- --> 
    <div class="card text-white bg-success mb-3" style="max-width: 18rem;">
        <div class="card-header">Deposit</div>
        <div class="card-body">
            <form>
                <div class="form-group">
                    <label for="email">Email address</label>
                    <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email">
                </div>
                <div class="form-group">
                    <label for="amount">Amount</label>
                    <input type="number" min="0" class="form-control" id="amount" placeholder="Amount">
                </div>
                <button type="button" class="btn btn-light" onclick="deposit()">Deposit</button>
            </form>
        </div>
    </div>
`;

ui.withdraw = `
    <!-- ------------- YOUR CODE: Withdraw UI ------------- --> 
    <div class="card text-white bg-danger mb-3" style="max-width: 18rem;">
    <div class="card-header">Withdraw</div>
    <div class="card-body">
        <form>
            <div class="form-group">
                <label for="email">Email address</label>
                <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email">
            </div>
            <div class="form-group">
                <label for="amount">Amount</label>
                <input type="number" min="0" class="form-control" id="amount" placeholder="Amount">
            </div>
            <button type="button" class="btn btn-light" onclick="withdraw()">Withdraw</button>
        </form>
    </div>
</div>
`;

ui.transactions = `
    <!-- ------------- YOUR CODE: Transactions UI ------------- --> 
    <div class="card text-white bg-danger mb-3" style="max-width: 18rem;">
    <div class="card-header">Transactions</div>
    <div class="card-body">
        <form>
            <div class="form-group">
                <label for="email">Email address</label>
                <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email">
            </div>
            <button type="button" class="btn btn-light" onclick="transactions()">Show Transactions</button>
        </form>
    </div>
</div> 
`;

ui.balance = `
    <!-- ------------- YOUR CODE: Balance UI ------------- --> 
    <div class="card text-white bg-info mb-3" style="max-width: 18rem;">
    <div class="card-header">Balance</div>
    <div class="card-body">
        <form>
            <div class="form-group">
                <label for="email">Email address</label>
                <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email">
            </div>
            <button type="button" class="btn btn-light" onclick="balance()">Show Balance</button>
        </form>
    </div>
</div> 
`;

ui.default = `
    <!-- ------------- YOUR CODE: Default UI ------------- --> 
    <div class="card text-white bg-secondary mb-3" style="max-width: 18rem;">
        <div class="card-header"><B>BadBank Ver 0.2</B></div>
        <div class="card-body">
            <p class="card-text">This Badbank exercise is to test read/write options from db.json database with user interface.</p>
        </div>
        <div class="card-footer">Prepared by: Chow Wai Khay</div>
    </div>
`;

ui.allData = `
    <!-- ------------- YOUR CODE: All Data UI ------------- --> 
    <div class="card text-white bg-light mb-3" style="max-width: 18rem;">
    <div class="card-header">All Bank Data</div>
    <div class="card-body">
        <form>
            <button type="button" class="btn btn-light" onclick="allData()">Show All Bank Data</button>
        </form>
    </div>
</div> 
`;

ui.content = `
<div class="card border-light mb-3" style="max-width: 80rem;">
    <div class="card-header">Output</div>
    <div class="card-body">
        <form>
            <textarea rows="8" cols="120" id="output">
            </textarea>
        </form>
    </div>
</div> 
`;

var target     = document.getElementById('target');
var navigation = document.getElementById('navigation');
var content = document.getElementById('content');
navigation.innerHTML += ui.navigation;
content.innerHTML += ui.content;

var loadCreateAccount = function(){
    target.innerHTML = ui.createAccount;
    document.getElementById('output').value = "";
};

var loadLogin = function(){
    target.innerHTML = ui.login;
    document.getElementById('output').value = "";
};

var loadDeposit = function(){
    target.innerHTML = ui.deposit;
    document.getElementById('output').value = "";
};

var loadWithdraw = function(){
    target.innerHTML = ui.withdraw;
    document.getElementById('output').value = "";
};

var loadTransactions = function(){
    target.innerHTML = ui.transactions;
    document.getElementById('output').value = "";
};

var loadBalance = function(){
    target.innerHTML = ui.balance;
    document.getElementById('output').value = "";
};

var defaultModule = function(){
    target.innerHTML = ui.default;
    document.getElementById('output').value = "";
};

var loadAllData = function(){
    target.innerHTML = ui.allData;
    document.getElementById('output').value = "";
};

defaultModule();
