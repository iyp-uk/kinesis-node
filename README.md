# Kinesis node

This express app exposes is a kinesis producer.
It exposes allows POST requests on its root endpoint (`/`) and sends the payload to kinesis.

## Health check

There is also a basic ping / pong healthcheck available at `/ping` and it replies with `{"message": "pong"}`.
