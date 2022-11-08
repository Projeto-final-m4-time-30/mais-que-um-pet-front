import * as yup from "yup";

export const loginSchema = yup.object().shape({
  email: yup.string().email("E-mail inválido").required("Campo obrigatório"),

  password: yup.string().required("Senha obrigatória"),
});

export const registerSchema = yup.object().shape({
  user_name: yup
    .string()
    .matches(
      /^([a-zA-Zà-úÀ-Ú0-9]|-|_|\s)+$/,
      "Esse campo deve conter apenas letras"
    )
    .required("Campo obrigatório"),
  email: yup.string().email("E-mail inválido").required("Campo obrigatório"),
  password: yup
    .string()
    .required("Campo obrigatório"),
    // .matches(
    //   /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
    //   "Deve conter 8 caracteres,uma maiuscula, uma minuscula,um numero e um caractere especial!"
    // ),
  // city: yup.string().required("Campo obrigatório"),
  // state: yup.string().required("Campo obrigatório"),
  // district: yup.string().required("Campo obrigatório"),
  // number: yup.string().required("Campo obrigatório"),
  // phone: yup.string().required("Campo obrigatório"),
  // whatsapp: yup.string().required("Campo obrigatório"),
  // description: yup.string().required("Campo obrigatório"),







});

