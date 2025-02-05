document.getElementById('create-account-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const initialDeposit = document.getElementById('initial_deposit').value;

    fetch('/create_account', {
        method: 'POST',
        body: new URLSearchParams({
            'name': name,
            'initial_deposit': initialDeposit
        }),
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('create-account-message').innerText = data.message;
    });
});

document.getElementById('deposit-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('deposit-name').value;
    const amount = document.getElementById('deposit-amount').value;

    fetch('/deposit', {
        method: 'POST',
        body: new URLSearchParams({
            'name': name,
            'amount': amount
        }),
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('deposit-message').innerText = data.message;
    });
});

document.getElementById('withdraw-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('withdraw-name').value;
    const amount = document.getElementById('withdraw-amount').value;

    fetch('/withdraw', {
        method: 'POST',
        body: new URLSearchParams({
            'name': name,
            'amount': amount
        }),
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('withdraw-message').innerText = data.message;
    });
});

document.getElementById('check-balance-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('balance-name').value;

    fetch('/check_balance', {
        method: 'POST',
        body: new URLSearchParams({
            'name': name
        }),
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('balance-message').innerText = data.message;
    });
});
