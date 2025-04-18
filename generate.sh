#!/bin/bash
set -e

echo "🧹 Cleaning old generated SDKs..."
rm -rf python
rm -rf typescript

echo "🚀 Generating Python SDK..."
openapi-generator generate \
  -i iiot-openapi.yaml \
  -g python \
  -o python \
  --package-name iiot-openapi \
  --additional-properties=projectName=iiot-openapi,packageVersion=0.0.1

echo "🚀 Generating TypeScript SDK..."
openapi-generator generate \
  -i iiot-openapi.yaml \
  -g typescript-fetch \
  -o typescript \
  --additional-properties=npmName=iiot-openapi,npmVersion=0.0.1,typescriptThreePlus=true

echo "✅ SDK generation complete."
