import * as yup from "yup";

export const loginSchema = yup.object().shape({
  email: yup.string().email("E-mail inválido").required("Campo obrigatório"),

  password: yup.string().required("Senha obrigatória"),
});

export const registerSchema = yup.object().shape({
  user_name: yup.string().required("Campo obrigatório"),
  email: yup.string().email("E-mail inválido").required("Campo obrigatório"),

  password: yup.string().required("Campo obrigatório"),
});

export const createPetSchema = yup.object().shape({
  name: yup.string().required("Campo obrigatório"),
  age: yup.string().required("Campo obrigatório"),
  gender: yup.string().required("Campo obrigatório"),
  is_adoptable: yup.boolean().default(() => true),
  is_active: yup.boolean().default(() => true),
});
