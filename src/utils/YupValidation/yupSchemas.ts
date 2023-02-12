import * as Yup from 'yup';

export const schema = Yup.object().shape({
    name: Yup.string().min(3).required(),
    email: Yup.string().email().required(),
    password: Yup.string().min(6).required(),
});