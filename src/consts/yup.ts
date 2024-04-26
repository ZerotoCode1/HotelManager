import * as yup from "yup";

export const validationBase = yup.object().shape({
  name: yup.string().required(),
  color: yup.string().required(),
  character: yup.string().required(),
  date: yup.string().required(),
});
