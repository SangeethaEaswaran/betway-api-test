# betway-api-test
Problem Description: This project covers test cases for the following scenarios :

API Endpoint: https://v6.exchangerate-api.com/v6/1fc80820c72b0163bc9c7536/latest/USD
Complete the following scenarios:
1. Verify the HTTP status is 200
2. Count the total number of currencies returned within the response 
3. Verify the currency ‘GBP’ is shown within the response

Pre-requisites: Node js version > 12.0.0

To execute: How to start using this?

1. Clone/Download the repo
2. Do "npm i". Let it complete downloading relevant node modules
3. Do "npm test". This will execute the test and generate the report in reports directory
4. Reports are available at <betway-api-test\reports\reportFile.html>