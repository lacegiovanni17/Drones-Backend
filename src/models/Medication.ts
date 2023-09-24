// src/models/Medication.ts
import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/database';

class Medication extends Model {
  public id!: number;
  public name!: string;
  public weight!: number;
  public code!: string;
  public image!: string;
}

Medication.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    weight: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    code: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    image: {
      type: DataTypes.STRING, // You can use DataTypes.BLOB if storing actual images
      allowNull: true, // Modify as needed
    },
  },
  {
    sequelize,
    tableName: 'medications', // You can customize the table name
  }
);

export { Medication };
