"use strict";
const { getTracer } = require("./tracing");
const axios = require("axios");
const { trace } = require("@opentelemetry/api");

const tracer = getTracer("fake-client");

const url = "http://localhost:3004/api/shipments";
const numberOfRequests = 1;

const makeRequest = async (requestId) => {
  return tracer.startActiveSpan("makeRequests", async (span) => {
    span.updateName(`makeRequests-${requestId}`);
    const result = await axios.post(url);
    span.end();
    return result;
  });
};

tracer.startActiveSpan("main", async (span) => {
  for (let i = 0; i < numberOfRequests; i++) {
    const res = await makeRequest(i);
    console.log("Response", res.data);
  }
  span.end();
});
