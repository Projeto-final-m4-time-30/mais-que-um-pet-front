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
  city: yup.string().required("Campo obrigatório"),
  state: yup.string().required("Campo obrigatório"),
  district: yup.string().required("Campo obrigatório"),
  number: yup.string().required("Campo obrigatório"),
  phone: yup.string().required("Campo obrigatório"),
  whatsapp: yup.string().required("Campo obrigatório"),
  description: yup.string().required("Campo obrigatório"),

});

export const createPetSchema = yup.object().shape({
	name: yup.string().required("Campo obrigatório"),
	age: yup.string().required("Campo obrigatório"),
	gender: yup.string().required("Campo obrigatório"),
  pet_image:yup.string().required("Campo obrigatório"),
  size: yup.string().required("Campo obrigatório"),
  color: yup.string().required("Campo obrigatório"),
  species: yup.string().required("Campo obrigatório"),
  description: yup.string().required("Campo obrigatório"),
  vaccine: yup.string().required("Campo obrigatório")
})