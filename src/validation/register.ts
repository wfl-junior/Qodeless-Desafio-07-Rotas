import * as yup from "yup";

export const registerFirstStepValidationSchema = yup.object({
  username: yup.string().required("O nome de usuário é obrigatório."),
  email: yup
    .string()
    .email("Este campo deve ser um e-mail válido.")
    .required("O e-mail é obrigatório."),
  password: yup
    .string()
    .min(8, "A senha deve conter no mínimo 8 caracteres")
    .required("A senha é obrigatória"),
  password_confirmation: yup
    .string()
    .oneOf([yup.ref("password")], "A confirmação da senha está incorreta."),
});

export const registerSecondStepValidationSchema = yup.object({
  name: yup.string().required("O nome é obrigatório."),
  age: yup
    .number()
    .typeError("A idade deve ser um número.")
    .required("A idade é obrigatória."),
  phone: yup
    .string()
    .required("O telefone é obrigatório")
    .matches(
      /^(\(\d{2}\)|\d{2})\s?\d?\s?\d{4}-?\d{4}$/,
      "O telefone deve ser um formato de telefone válido do Brasil",
    ),
});
