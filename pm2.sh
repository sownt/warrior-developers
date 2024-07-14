#!/bin/bash
WARRIOR_PORT=3006
sed -i "s/\"start\": \"next start\",/\"start\": \"next start -p $WARRIOR_PORT\",/g" package.json
pm2 start npm --name "warrior" -- start