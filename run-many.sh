#!/bin/sh

# Script to run a command in all plugins
# Usage: ./run-many.sh <command>
# Example: ./run-many.sh "npm install"


command=$1
GREEN="\e[1\;32m"
ENDCOLOUR="\e[0m"

SPACER=" ===================== "

cd ./apps
find . -maxdepth 1 -type d \( ! -name . \)  -not -name "*-admin" -exec bash -c "cd '{}' && echo && echo -e $(printf "${GREEN}${SPACER} '{}'${SPACER}${ENDCOLOUR}") && $1" \;