import { ValidationChain, validationResult } from "express-validator";

// Validates received requests and checks for required fields and their format.
export const validate = (validations: ValidationChain[] | { run: (arg0: any) => any; }[]) => {
    return async (req: any, res: any, next: any) => {
        await Promise.all(validations.map((validation: { run: (arg0: any) => any; }) => validation.run(req)));

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


const formatError = (errors: any) => errors.array().map((error: { msg: string; param: any; }) => {
    if (error.msg === 'Invalid value') {
        return error.param
    } else {
        return error.msg
    }
}).join(',')