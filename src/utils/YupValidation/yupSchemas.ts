import * as Yup from 'yup';

export const userSchema = Yup.object().shape({
    name: Yup.string().min(3).required("Nome é um campo obrigatório"),
    email: Yup.string().email().required("E-mail é um campo obrigatório"),
    password: Yup.string().min(6).required("Senha é um campo obrigatório"),
});

export const userLoginSchema = Yup.object().shape({
    email: Yup.string().email().required("E-mail é um campo obrigatório"),
    password: Yup.string().min(6).required("Senha é um campo obrigatório"),
});

export const userEditSchema = Yup.object().shape({
    name: Yup.string().min(3),
    email: Yup.string().email(),
});

export const propertySchema = Yup.object().shape({
    name: Yup.string().min(3).required("Nome é um campo obrigatório"),
    propertyId: Yup.string().min(6).required("ID é um campo obrigatório"),
    city: Yup.string().min(2).required("Cidade é um campo obrigatório"),
    street: Yup.string().min(2).required("Rua é um campo obrigatório"),
});

export const propertyEditSchema = Yup.object().shape({
    name: Yup.string().min(3),
    propertyId: Yup.string().min(6),
    address: Yup.object().shape({
        city: Yup.string().min(2).label("city"),
        street: Yup.string().min(2).label("street"),
    })
});
