#!/bin/bash
set -e

SPEC_FILE="iiot-openapi.yaml"
JAVA_DIR="java"
PYTHON_DIR="python"
RUST_DIR="rust"
TS_DIR="typescript"

echo "🧹 Cleaning old generated SDKs..."
rm -rf "$JAVA_DIR"
rm -rf "$PYTHON_DIR"
rm -rf "$RUST_DIR"
rm -rf "$TS_DIR"

echo "Java SDK.."
openapi-generator generate \
  -i "$SPEC_FILE" \
  -g java \
  -o "$JAVA_DIR" \
  --global-property models,supportingFiles \
  --additional-properties=packageName=iiot-openapi,packageVersion=0.0.3,serializationLibrary=jackson,useSpringBoot3=true,useJakartaEe=true

echo "🚀 Generating Python SDK..."
openapi-generator generate \
  -i "$SPEC_FILE" \
  -g python \
  -o "$PYTHON_DIR" \
  --package-name iiot_openapi \
  --additional-properties=projectName=iiot-openapi,packageVersion=0.0.3

echo "🚀 Generating TypeScript SDK..."
openapi-generator generate \
  -i "$SPEC_FILE" \
  -g typescript-fetch \
  -o "$TS_DIR" \
  --additional-properties=npmName=iiot-openapi,npmVersion=0.0.3,typescriptThreePlus=true

echo "🚀 Generating Rust SDK..."
openapi-generator generate \
  -i "$SPEC_FILE" \
  -g rust \
  -o "$RUST_DIR" \
  --global-property models,supportingFiles \
  --additional-properties=packageName=iiot-openapi,packageVersion=0.0.3

echo "✅ SDK generation complete."
