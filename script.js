const API_KEY = 'f3f7af1ebe0d59cd24dd2bee'; 
const API_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/`;

const fromCurrency = document.getElementById("fromCurrency");
const toCurrency = document.getElementById("toCurrency");
const amountInput = document.getElementById("amount");
const resultDiv = document.getElementById("resultDiv");
const currentDate = document.getElementById("currentDate");

// Function for setting the today's date
function setCurrentDate() {
  const date = new Date();
  const options = { year: "numeric", month: "long", day: "numeric" };
  currentDate.textContent = date.toLocaleDateString("en-US", options);
}

// Initialize currencies
function initializeCurrencies() {
  fetch(`${API_URL}USD`) 
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      const currencies = data.conversion_rates; 
      fromCurrency.innerHTML = '';
      toCurrency.innerHTML = '';
      
      for (const currency in currencies) {
        const option = document.createElement("option");
        option.value = currency;
        option.textContent = currency;
        fromCurrency.appendChild(option.cloneNode(true));
        toCurrency.appendChild(option.cloneNode(true));
      }
      
      fromCurrency.value = "USD";
      toCurrency.value = "EUR";
    })
    .catch(error => {
      console.error("Error fetching currency data:", error);
      alert("Unable to load currencies. Please try again later.");
    });
}

// Function to convert currency
function convertCurrency() {
  const from = fromCurrency.value;
  const to = toCurrency.value;
  const amount = parseFloat(amountInput.value);

  if (isNaN(amount) || amount <= 0) {
    resultDiv.textContent = "Enter a valid amount";
    return;
  }

  fetch(`${API_URL}${from}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      const rate = data.conversion_rates[to]; 
      if (!rate) {
        resultDiv.textContent = "Rate unavailable";
        return;
      }
      const convertedAmount = (amount * rate).toFixed(2);
      resultDiv.textContent = `${convertedAmount} ${to}`;
    })
    .catch(error => {
      console.error("Error fetching conversion data:", error);
      resultDiv.textContent = "Error converting";
    });
}

// Swap currencies
function swapCurrencies() {
  const temp = fromCurrency.value;
  fromCurrency.value = toCurrency.value;
  toCurrency.value = temp;
  convertCurrency(); 
}

setCurrentDate();
initializeCurrencies();

document.getElementById("convertBtn").addEventListener("click", convertCurrency);
document.getElementById("swapBtn").addEventListener("click", swapCurrencies);

amountInput.focus();