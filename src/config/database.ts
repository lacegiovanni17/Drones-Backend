// src/config/database.ts
import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

// Use environment variables for database configuration
const dbConfig = {
  database: process.env.DB_NAME || 'dronesdispatch',
  username: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'your_default_database_password',
  host: process.env.DB_HOST || 'localhost', // Modify this to your database host
  dialect: 'mysql' as const, // Specify the dialect as 'mysql'
};

// Create a Sequelize instance
export const sequelize = new Sequelize(
  dbConfig.database,
  dbConfig.username,
  dbConfig.password,
  {
    host: dbConfig.host,
    dialect: dbConfig.dialect,
    // You can add more Sequelize options here as needed
  }
);

// Define your models and associate them if needed
// Example:
// sequelize.define('Medication', MedicationModel);

// Test the database connection
export const databaseConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

