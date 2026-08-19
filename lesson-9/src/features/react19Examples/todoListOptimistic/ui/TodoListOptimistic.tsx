import { TaskCard} from "entities/task";
import { Button, TextInput } from "@gravity-ui/uikit";
import { DeleteIcon } from "shared/ui/icons";
import { useTasks } from "../model/useTasks";
import styles from "./TodoListOptimistic.module.css";

export function TodoListOptimistic() {
  const { tasks, removeTask, newTaskText, setNewTaskText, isPending, addTask } = useTasks();


    return (
      <div>
        <div className={styles.tasks}>
          {tasks?.map(task => (
            <div className={styles.row} key={task.id}>
              <TaskCard isOptimistic={task.isOptimistic} task={task} />
              <Button
                title='Удалить'
                view="flat"
                className={styles.button}
                onClick={() => removeTask(task.id)}
              >
                <DeleteIcon/>
              </Button>
            </div> 
          ))}
        </div>
        <h4>Новая задача</h4>
        <TextInput
          className={styles.textinput}
          value={newTaskText}
          onUpdate={setNewTaskText}
          disabled={isPending}
        />
        <Button
          view='action'
          onClick={addTask}
          loading={isPending}
        >
          Добавить задачу
        </Button>
      </div>
    );
}
