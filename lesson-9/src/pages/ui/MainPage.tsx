import { RegistryForm } from "features/react19Examples/formWithAsyncSave/ui/FormWithAsyncSave"
import { TaskWidget } from "widgets/task"


export const MainPage = () => {
  return (
    <div>
      <h1>Зарегистрироваться</h1>
      <RegistryForm />
      <h1>Мои задачи</h1>
      <TaskWidget />
   </div>
  )
}
