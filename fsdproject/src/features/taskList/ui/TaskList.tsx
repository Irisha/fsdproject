import { TaskCard, type Task } from "entities/task";
import styles from "./TaskList.module.css";
import { Button } from "@gravity-ui/uikit";
import { DeleteIcon } from "shared/ui/icons";

type TaskListProps = {
    tasks: Task[],
    removeTask: (taskId: Task['id']) => void
};

export function TaskList({ tasks, removeTask }: TaskListProps) {
    return (
      <div className={styles.tasks}>
        {tasks?.map(task => (
          <div className={styles.row} key={task.id}>
            <TaskCard task={task} />
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
    );
}
