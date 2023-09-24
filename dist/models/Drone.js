"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Drone = void 0;
// src/models/Drone.ts
const sequelize_1 = require("sequelize");
const database_1 = require("../config/database");
class Drone extends sequelize_1.Model {
}
exports.Drone = Drone;
Drone.init({
    serialNumber: {
        type: sequelize_1.DataTypes.STRING(100),
        allowNull: false,
        unique: true,
    },
    model: sequelize_1.DataTypes.STRING,
    weightLimit: sequelize_1.DataTypes.FLOAT,
    batteryCapacity: sequelize_1.DataTypes.FLOAT,
    state: sequelize_1.DataTypes.STRING,
    loadedMedicationId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true, // It can be null if the drone is not loaded
    },
}, {
    sequelize: database_1.sequelize,
    tableName: 'drones',
});
