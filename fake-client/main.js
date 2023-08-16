"use strict";
const axios = require("axios");

const url = "http://localhost:3004/api/shipments";
const numberOfRequests = 5;

const makeRequest = async (requestId) => {
  const result = await axios.post(url);
  return result;
};

const main = async () => {
  for (let i = 0; i < numberOfRequests; i++) {
    const res = await makeRequest(i);
    console.log("Response", res.data);
  }
};

main();
