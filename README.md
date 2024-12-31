# Currency Converter

A simple and responsive currency converter web app built using HTML, CSS, and JavaScript. It allows users to convert between different currencies and provides a clean, user-friendly interface. The app fetches live exchange rates using the [ExchangeRate-API](https://www.exchangerate-api.com).

## Features

- Currency Conversion: Convert between various currencies in real-time using live exchange rates.
- Currency Swap: Swap the selected currencies with a click of a button.
- Responsive Design: The app is fully responsive and works on both desktop and mobile devices.
- Error Handling: Graceful handling of API errors and invalid user input.

## Technologies Used

- HTML: For structuring the content.
- CSS: For styling the app (including a responsive design).
- JavaScript: For dynamic functionality and API calls.
- ExchangeRate-API: For fetching live exchange rates.

## Setup Instructions

1. Clone the repository:

        git clone https://github.com/awolcoder/currency-converter.git
    cd currency-converter
    

2. Get an API Key:
   - Go to [ExchangeRate-API](https://www.exchangerate-api.com) and sign up for a free API key.
   - Replace the placeholder YOUR_API_KEY in the script.js file with your actual API key.

        const API_KEY = 'YOUR_API_KEY'; // Replace with your actual API Key
    

3. Run the app:
   - Open the index.html file in a browser to view the app.

## Features in Detail

### 1. Currency Conversion
- Users can select the base currency and the target currency from dropdown lists.
- The app will fetch the latest exchange rate and display the converted amount.

### 2. Currency Swap
- Swap the base and target currencies by clicking the swap button (⇆).

### 4. Error Handling
- The app handles errors gracefully, such as invalid input or API fetch failures.

### 5. Responsive Design
- The layout adjusts to different screen sizes to ensure a smooth user experience on both mobile and desktop.


## Files

- index.html: The main HTML file that contains the structure of the currency converter app.
- styles.css: The CSS file responsible for styling the app, including responsive design.
- script.js: The JavaScript file that handles the currency conversion logic, API requests, and more.


## Acknowledgments

- Thanks to [ExchangeRate-API](https://www.exchangerate-api.com) for providing the currency exchange rates.
- Inspired by various open-source projects for currency conversion tools.

## Contact

For any issues or suggestions, feel free to contact me at [abbaseawil13@gmail.com].