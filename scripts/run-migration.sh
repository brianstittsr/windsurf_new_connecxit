#!/bin/bash

# Load environment variables from .env.local
export $(cat env.local | xargs)

# Run the migration script
npx tsx src/scripts/migrate-user-schema.ts
