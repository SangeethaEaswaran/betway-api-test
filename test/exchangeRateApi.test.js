const request = require("supertest")("https://v6.exchangerate-api.com/v6/1fc80820c72b0163bc9c7536/latest");
const expect = require("chai").expect;

describe("GET /exchangeRates", function () {

    it("Verify the HTTP status is 200", async function () {
        const response = await request.get("/USD");
        expect(response.status).to.eql(200);
    });

    it("Count the total number of currencies returned within the response\n", async function () {
        const response = await request.get("/USD");
        const currencies = response.body.conversion_rates;
        console.log('Total no: of currencies returned:', Object.keys(currencies).length);
    });

    it("Verify the currency ‘GBP’ is shown within the response", async function () {
        const response = await request.get("/USD");
        const currencies = response.body.conversion_rates;
        expect(currencies.hasOwnProperty("GBP")).to.eql(true);
    });
});
