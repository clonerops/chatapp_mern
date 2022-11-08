import { validationResult } from "express-validator";

// Validates received requests and checks for required fields and their format.
export const validate = validations => {
    return async (req, res, next) => {
        await Promise.all(validations.map(validation => validation.run(req)));

        const errors = validationResult(req);
        if (errors.isEmpty())
            return next()
        else {
            return res.status(400).json({
                data: formatError(errors)
            })
        }

    };
};


const formatError = (errors) => errors.array().map(error => {
    if (error.msg === 'Invalid value') {
        return error.param
    }
}).join(',')