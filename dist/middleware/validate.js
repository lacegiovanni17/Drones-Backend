"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateInput = void 0;
const schema_1 = require("./schema");
const validateInput = (req, res, next) => {
    const { error, value } = schema_1.schema.validate(req.body);
    if (error) {
        return res.status(400).json({
            status: 'error',
            message: error.message,
        });
    }
    next();
};
exports.validateInput = validateInput;
