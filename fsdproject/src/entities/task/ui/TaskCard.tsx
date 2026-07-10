import {Checkbox} from '@gravity-ui/uikit';
import type { Task } from "../model/types";
import styles from "./TaskCard.module.css";

type TaskCardProps = {
    task: Task
}

export function TaskCard({ task }: TaskCardProps) {
    return (
        <div className={styles.card}>
            <Checkbox
                content={task.title}
                checked={task.completed}
            />
        </div>
    )
}