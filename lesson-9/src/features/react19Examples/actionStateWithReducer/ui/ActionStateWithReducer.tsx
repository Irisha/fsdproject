import { useActionState, useEffect, useReducer } from "react";
import { defaultValues } from "../model";
import styles from './ActionStateWithReducer.module.css'

type FormState = {
  success: boolean;
  message: string;
  isDirty: boolean;
}

type Action = 
  | { type: 'SET_DIRTY' }
  | { type: 'SUBMIT_START' }
  | { type: 'SUBMIT_SUCCESS'; payload: string };

type ActionResult = {
  success: boolean;
  message: string;
} | null;

function formReducer(state: FormState, action: Action): FormState {
  switch (action.type) {
    case 'SET_DIRTY':
      return { ...state, success: false, message: "", isDirty: true };
    case 'SUBMIT_START':
      return { ...state, success: false, message: "" }; // сброс флагов перед стартом
    case 'SUBMIT_SUCCESS':
      return { success: true, message: action.payload, isDirty: false };
    default:
      return state;
  }
}

export const ActionStateWithReducer = () => {
    const [state, dispatch] = useReducer(formReducer, {
    success: false,
    message: "",
    isDirty: false,
  });

  const [actionResult, formAction, isPending] = useActionState<ActionResult, FormData>(
    async (_prevState: ActionResult, _formData: FormData) => {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      return {
        success: true,
        message: "Данные успешно отправлены!",
      };
    },
    null
  );

  useEffect(() => {
    if (actionResult?.success) {
      dispatch({ type: 'SUBMIT_SUCCESS', payload: actionResult.message });
    }
  }, [actionResult]);

  const handleFormChange = () => {
    if (!state.isDirty) {
      dispatch({ type: 'SET_DIRTY' });
    }
  };

  return (
    <form action={formAction} onChange={handleFormChange}>
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

      <button type="submit" disabled={isPending || !state.isDirty}>
        {isPending ? "Saving" : "Сохранить"}
      </button>
      
      {state.success && <p className={styles.success}>Saved!</p>}
    </form>
  );
}
