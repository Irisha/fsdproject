import { z } from "zod";

export const userRegistrationSchema = z.object({
  username: z
    .string()
    .min(1, "Имя обязательно")
    .regex(/^[\p{L}\s-]+$/u, {
      message: "Имя должно содержать только буквы",
    }),
  email: z.email({ message: "Некорректный формат email" }),
  password: z.string(),
  repeatedPassword: z.string(),
})
.refine((data) => data.password === data.repeatedPassword, {
  error: "Пароли не совпадают",
  path: ["repeatedPassword"], // path of error
});

export type RegistrationValues = z.infer<typeof userRegistrationSchema>;

export const defaultValues: RegistrationValues = {
  username: "",
  email: "",
  password: "",
  repeatedPassword: "",
};
