import * as Yup from 'yup';

export const userSchema = Yup.object().shape({
    name: Yup.string().min(3).required(),
    email: Yup.string().email().required(),
    password: Yup.string().min(6).required(),
});

export const propertySchema = Yup.object().shape({
    name: Yup.string().min(3).required(),
    propertyId: Yup.string().min(6).required(),
    address: Yup.object().shape({
        city: Yup.string().min(2).required().label("city"),
        street: Yup.string().min(2).required().label("street"),
    })
})