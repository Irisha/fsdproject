import { TaskCard, type Task } from "entities/task";
import styles from "./TaskList.module.css";

type TaskListProps = {
    tasks: Task[]
};

export function TaskList({ tasks }: TaskListProps) {
    return (
      <div className={styles.tasks}>
        {tasks?.map(task => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    );
}
