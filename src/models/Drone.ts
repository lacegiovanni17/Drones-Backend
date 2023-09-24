// src/models/Drone.ts
import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/database';

class Drone extends Model {
  public id!: number;
  public serialNumber!: string;
  public model!: string;
  public weightLimit!: number;
  public batteryCapacity!: number;
  public state!: string;
  public loadedMedicationId!: number | null;
}

Drone.init(
  {
    serialNumber: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true,
    },
    model: DataTypes.STRING,
    weightLimit: DataTypes.FLOAT,
    batteryCapacity: DataTypes.FLOAT,
    state: DataTypes.STRING,
    loadedMedicationId: {
      type: DataTypes.INTEGER, // Assuming the ID is stored as an integer
      allowNull: true, // It can be null if the drone is not loaded
    },
  },
  {
    sequelize,
    tableName: 'drones',
  }
);

export { Drone };
