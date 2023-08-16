const {
  BasicTracerProvider,
  SimpleSpanProcessor,
} = require("@opentelemetry/sdk-trace-base");
const { Resource } = require("@opentelemetry/resources");
const {
  SemanticResourceAttributes,
} = require("@opentelemetry/semantic-conventions");
const { trace } = require("@opentelemetry/api");
const {
  OTLPTraceExporter,
} = require("@opentelemetry/exporter-trace-otlp-http");
const { NodeSDK } = require("@opentelemetry/sdk-node");
const { HttpInstrumentation } = require("@opentelemetry/instrumentation-http");
const { B3Propagator } = require("@opentelemetry/propagator-b3");

const exporter = new OTLPTraceExporter({});

const getTracer = () => {
  return trace.getTracer("default");
};

const sdk = new NodeSDK({
  resource: new Resource({
    [SemanticResourceAttributes.SERVICE_NAME]: "fake-client-app",
    [SemanticResourceAttributes.SERVICE_VERSION]: "0.1.0",
  }),
  spanProcessor: new SimpleSpanProcessor(exporter),
  traceExporter: exporter,
  instrumentations: [new HttpInstrumentation()],
  textMapPropagator: new B3Propagator(),
});

sdk.start();

module.exports = { getTracer };
