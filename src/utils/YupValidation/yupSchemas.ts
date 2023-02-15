import * as Yup from 'yup';

export const userSchema = Yup.object().shape({
    name: Yup.string().min(3).required("Nome é um campo obrigatório"),
    email: Yup.string().email().required("E-mail é um campo obrigatório"),
    password: Yup.string().min(6).required("Senha é um campo obrigatório"),
});

export const propertySchema = Yup.object().shape({
    name: Yup.string().min(3).required("Nome é um campo obrigatório"),
    propertyId: Yup.string().min(6).required("ID é um campo obrigatório"),
    address: Yup.object().shape({
        city: Yup.string().min(2).required("Cidade é um campo obrigatório").label("city"),
        street: Yup.string().min(2).required("Rua é um campo obrigatório").label("street"),
    })
})