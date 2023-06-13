#!/bin/bash
set -e

# Check if MySQL service is already running
if ! service mysql status | grep -q "active (running)"; then
  service mysql start
fi

# Wait for MySQL service to start
sleep 5

# Import database.sql
mysql < /app/database.sql

# Stop MySQL service
service mysql stop
