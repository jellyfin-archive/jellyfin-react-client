#!/usr/bin/env bash

if [[ "$OSTYPE" == "linux-gnu" ]]; then
    fuser -k 8081/tcp || true
elif [[ "$OSTYPE" == "darwin"* ]]; then
    lsof -nti:8081 | xargs kill -9
else
    "OS not supported"
fi