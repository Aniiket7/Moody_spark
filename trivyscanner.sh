#!/bin/bash

# Path to the Dockerfile
dockerfile_path="./Dockerfile"

# Read the Dockerfile and extract the base image name
base_image=$(awk '/^FROM/ {print $2}' "$dockerfile_path")

# Check if the base image is empty
if [ -z "$base_image" ]; then
    echo "Base image not found in the Dockerfile."
    exit 1
fi

# Run trivy scan on the base image and store the result in a variable
scan_result=$(trivy image --format table --severity CRITICAL "$base_image")

# Extract the number of critical vulnerabilities from the scan result using grep and awk
critical_vulnerabilities=$(echo "$scan_result" | grep -oP "CRITICAL:\s*\K[0-9]+" | awk '{s+=$1} END {print s}')

# Check if the number of critical vulnerabilities is greater than 4
if ! [[ $critical_vulnerabilities =~ ^[0-9]+$ ]]; then
    echo "Error: Number of critical vulnerabilities is not valid."
    exit 1
fi

if [ "$critical_vulnerabilities" -gt 4 ]; then
    # Return 1 if there are more than 4 critical vulnerabilities
    echo "Critical vulnerabilities found in base image: $critical_vulnerabilities"
    exit 1
else
    # Return 0 if there are 4 or fewer critical vulnerabilities
    echo "No critical vulnerabilities found in base image."
    exit 0
fi
