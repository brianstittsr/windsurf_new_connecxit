const fs = require('fs');
const path = require('path');

function loadEnv() {
  try {
    require('dotenv').config();
  } catch (error) {
    console.log('Note: dotenv module not found, using process.env directly');
  }
}

function checkEnvVars() {
  // Load environment variables if not in production
  if (process.env.NODE_ENV !== 'production') {
    loadEnv();
  }

  // Required environment variables
  const requiredVars = [
    'JWT_SECRET',
    'NEO4J_URI',
    'NEO4J_USER',
    'NEO4J_PASSWORD'
  ];

  // Check each required variable
  const missingVars = requiredVars.filter(varName => !process.env[varName]);

  if (missingVars.length > 0) {
    console.error('\n❌ Error: Missing required environment variables:');
    missingVars.forEach(varName => {
      console.error(`   - ${varName}`);
    });
    console.error('\nPlease set these variables in your .env file or environment.\n');
    process.exit(1);
  }

  console.log('\n✅ All required environment variables are set!\n');
}

checkEnvVars();
