# Kinesis node

This express app exposes is a kinesis producer.
It exposes allows POST requests on its root endpoint (`/`) and sends the payload to kinesis.

## Health check

There is also a basic ping / pong healthcheck available at `/ping` and it replies with `{"message": "pong"}`.

## Connection with AWS

You **must** specify the following environment variables:

- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCESS_KEY`

You **can** also specify:

- `AWS_REGION`, will default to `eu-west-1`

## Other environment variables

- `STREAM_NAME`, defaults to `streamName`

## Docker

```console
$ docker build -t miaoulafrite/kinesis-node . \
  && docker run \
  -p 3000:3000 \
  --env AWS_ACCESS_KEY_ID=accesKey \
  --env AWS_SECRET_ACCESS_KEY=secretKey \
  --env AWS_REGION=eu-west-1 \ 
  --env STREAM_NAME=yourStream \
  --name kinesis-node \
  miaoulafrite/kinesis-node 
```
