# Simple Banking System

A web-based banking application that allows users to create accounts, deposit money, withdraw funds, and check their balance. The application is built using **Flask** for the backend and **HTML, CSS, and JavaScript** for the frontend.

## Features

- Create a bank account with an initial deposit
- Deposit funds into an account
- Withdraw money from an account
- Check account balance
- Responsive and visually appealing interface

## Technologies Used

- **Backend**: Flask (Python)
- **Frontend**: HTML, CSS, JavaScript
- **Storage**: Dictionary-based in-memory storage (for simplicity)

---

## Installation and Setup

### 1. Clone the Repository
```bash
git clone https://github.com/your-repository/simple-banking-system.git
cd simple-banking-system
```

### 2. Install Dependencies
Make sure you have Python installed. Then, install Flask:
```bash
pip install flask
```

### 3. Run the Application
Start the Flask server:
```bash
python app.py
```
The application will run on `http://127.0.0.1:5000/`.

### 4. Open in Browser
Go to `http://127.0.0.1:5000/` to access the Simple Banking System.

---

## Project Structure

```
/simple-banking-system
│── static/
│   ├── style.css         # CSS for styling
│   ├── script.js         # JavaScript for frontend interactions
│── templates/
│   ├── index.html        # Main frontend file
│── app.py                # Flask backend
│── README.md             # Project documentation
```

---

## API Endpoints

| Endpoint        | Method | Description |
|----------------|--------|-------------|
| `/`            | GET    | Renders the main banking system page |
| `/create_account` | POST  | Creates a new account |
| `/deposit`     | POST   | Deposits money into an account |
| `/withdraw`    | POST   | Withdraws money from an account |
| `/check_balance` | POST  | Checks the balance of an account |

---

## Future Improvements

- Implement database storage instead of in-memory storage
- Add authentication for users
- Provide transaction history for each account

---

## License

This project is open-source and free to use.

