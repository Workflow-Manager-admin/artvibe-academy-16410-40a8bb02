#!/bin/bash
cd /home/kavia/workspace/code-generation/artvibe-academy-16410-40a8bb02/artvibe_academy_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

