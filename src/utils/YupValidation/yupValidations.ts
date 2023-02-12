import { IFormShape } from "interfaces";

import { schema } from "./yupSchemas";
import * as Yup from "yup";

export const yupFormValidation = async (formData: IFormShape) => {
    try {
        await schema.validate(formData, { abortEarly: false });
    } catch (e: any) {
        if (e instanceof Yup.ValidationError) {
            const errorMessages: Record<string, string> = {};

            e.inner.forEach((error) => {
                if (error.path) {
                    errorMessages[error.path] = error.message;
                }
            });

            return errorMessages;
        }
    }
};