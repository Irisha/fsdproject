import { useForm, useWatch, type SubmitHandler } from 'react-hook-form';

type FormInputs = {
  username: string;
  email: string;
  password: string;
  passwordRepeated: string;
};


export const RegistryForm = () => {
  const methods = useForm<FormInputs>();
  const { register, handleSubmit, formState: { errors }, } = useForm<FormInputs>();
  const onSubmit: SubmitHandler<FormInputs> = (values) => console.log(values);
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
          {...register("passwordRepeated",
            { required: "Повторите пароль",
              validate: (value) => 
                value === passwordValue || "Пароли не совпадают"
         },)} 
        />
        </label>
        {errors.passwordRepeated && <p style={{ color: "red" }}>{errors.passwordRepeated.message}</p>}
      </div>

      <button type="submit">Отправить</button>
    </form>
  );
}
