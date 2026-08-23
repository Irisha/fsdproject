import {Checkbox} from '@gravity-ui/uikit';
import type { Task } from "../model/types";
import styles from "./TaskCard.module.css";

type TaskCardProps = {
    task: Task,
    isOptimistic?: boolean;
}

export function TaskCard({ task, isOptimistic }: TaskCardProps) {
    return (
        <div className={isOptimistic ? styles.optimisticCard : styles.card}>
            <Checkbox
                content={task.title}
                checked={task.completed}
            />
        </div>
    )
}