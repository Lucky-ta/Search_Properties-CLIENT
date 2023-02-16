import { IPropertyShape, IUserShape } from "interfaces";

import { userSchema, propertySchema } from "./yupSchemas";
import * as Yup from "yup";

export const yupUserFormValidation = async (formData: IUserShape) => {
    try {
        await userSchema.validate(formData, { abortEarly: false });
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


export const yupPropertyFormValidation = async (formData: IPropertyShape) => {
    try {
        await propertySchema.validate(formData, { abortEarly: false });
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
