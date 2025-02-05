from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

accounts = {}

class BankAccount:
    def __init__(self, name, initial_deposit):
        self.name = name
        self.balance = initial_deposit

    def deposit(self, amount):
        if amount > 0:
            self.balance += amount
            return f"{amount} deposited. New balance: {self.balance}"
        return "Invalid deposit amount."

    def withdraw(self, amount):
        if amount > 0:
            if amount <= self.balance:
                self.balance -= amount
                return f"{amount} withdrawn. New balance: {self.balance}"
            return "Insufficient funds."
        return "Invalid withdrawal amount."

    def check_balance(self):
        return f"Your balance is {self.balance}"

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/create_account', methods=['POST'])
def create_account():
    name = request.form['name']
    initial_deposit = float(request.form['initial_deposit'])
    if name not in accounts:
        account = BankAccount(name, initial_deposit)
        accounts[name] = account
        return jsonify(message=f"Account created for {name}. Initial deposit: {initial_deposit}")
    return jsonify(message="Account already exists.")

@app.route('/deposit', methods=['POST'])
def deposit():
    name = request.form['name']
    amount = float(request.form['amount'])
    if name in accounts:
        result = accounts[name].deposit(amount)
        return jsonify(message=result)
    return jsonify(message="Account not found.")

@app.route('/withdraw', methods=['POST'])
def withdraw():
    name = request.form['name']
    amount = float(request.form['amount'])
    if name in accounts:
        result = accounts[name].withdraw(amount)
        return jsonify(message=result)
    return jsonify(message="Account not found.")

@app.route('/check_balance', methods=['POST'])
def check_balance():
    name = request.form['name']
    if name in accounts:
        result = accounts[name].check_balance()
        return jsonify(message=result)
    return jsonify(message="Account not found.")

if __name__ == '__main__':
    app.run(debug=True)
