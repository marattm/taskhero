#!/bin/bash

# key generation

key=$(python keygen.py 2>&1 >/dev/null)
export SECRET_KEY=$key
