import { useForm, useWatch, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod";
import { defaultValues, userRegistrationSchema } from "../model";
import type { RegistrationValues } from "../model";


export const RegistryForm = () => {
  const methods = useForm<RegistrationValues>();
  const { register, handleSubmit, formState: { errors }, } = useForm<RegistrationValues>({
    resolver: zodResolver(userRegistrationSchema),
    defaultValues,
    mode: "onTouched",
  });
  const onSubmit: SubmitHandler<RegistrationValues> = (values) => console.log(values);
  const passwordValue = useWatch({
    control: methods.control,
    name: "password",
    defaultValue: ""
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Имя пользователя:
        <input 
          {...register("username", { required: "Имя обязательно" })} 
        />
        </label>
        {errors.username && <p style={{ color: "red" }}>{errors.username.message}</p>}
      </div>

      <div>
        <label>Email:
        <input 
          type="email" 
          {...register("email", { required: "Email обязателен" })} 
        />
        </label>
        {errors.email && <p style={{ color: "red" }}>{errors.email.message}</p>}
      </div>

      <div>
        <label>Пароль:
        <input 
          {...register("password", { required: "Введите пароль" })} 
        />
        </label>
        {errors.password && <p style={{ color: "red" }}>{errors.password.message}</p>}
      </div>

      <div>
        <label>Подтверждение пароля:
        <input 
          {...register("repeatedPassword",
            { required: "Повторите пароль",
              validate: (value) => 
                value === passwordValue || "Пароли не совпадают"
         },)} 
        />
        </label>
        {errors.repeatedPassword && <p style={{ color: "red" }}>{errors.repeatedPassword.message}</p>}
      </div>

      <button type="submit">Отправить</button>
    </form>
  );
}
