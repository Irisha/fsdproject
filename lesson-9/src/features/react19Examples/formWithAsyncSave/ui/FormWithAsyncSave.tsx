import { useActionState } from "react";
import { defaultValues } from "../model";
import styles from './FormWithAsyncSave.module.css'

type FormState = {
  success: boolean;
  message: string;
};

const myFormAction = async (_state: FormState, _formData: FormData): Promise<FormState> => {
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  return {
    success: true,
    message: "Данные успешно отправлены!",
  };
};

export const RegistryForm = () => {
  const [state, formAction, isPending] = useActionState(myFormAction, {
    success: false,
    message: "",
  });

  return (
    <form action={formAction}>
      <div>
        <label className={styles.formline}>Имя пользователя:
          <input 
            name="username" 
            defaultValue={defaultValues?.username || ""} 
            required 
          />
        </label>
      </div>

      <div>
        <label className={styles.formline}>Email:
          <input 
            type="email" 
            name="email" 
            defaultValue={defaultValues?.email || ""} 
            required 
          />
        </label>
      </div>

      <div>
        <label className={styles.formline}>Пароль:
          <input 
            type="password" 
            name="password" 
            required 
          />
        </label>
      </div>

      <button type="submit" disabled={isPending}>
        {isPending ? "Saving" : "Сохранить"}
      </button>
      
      {state.success && <p className={styles.success}>Saved!</p>}
    </form>
  );
}
