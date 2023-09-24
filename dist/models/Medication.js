"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Medication = void 0;
// src/models/Medication.ts
const sequelize_1 = require("sequelize");
const database_1 = require("../config/database");
class Medication extends sequelize_1.Model {
}
exports.Medication = Medication;
Medication.init({
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    weight: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false,
    },
    code: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    image: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true, // Modify as needed
    },
}, {
    sequelize: database_1.sequelize,
    tableName: 'medications', // You can customize the table name
});
