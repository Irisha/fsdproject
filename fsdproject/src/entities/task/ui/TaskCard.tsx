import { memo } from 'react';
import { Button, Checkbox } from '@gravity-ui/uikit';
import type { Task } from "../model/types";
import { DeleteIcon } from "shared/ui/icons";
import styles from "./TaskCard.module.css";

type TaskCardProps = {
    task: Task,
    removeTask: (_taskId: Task['id']) => void
}

export const TaskCard = memo(function TaskCard({ task, removeTask }: TaskCardProps) {
    return (
        <div className={styles.card}>
            <Checkbox
                content={task.title}
                checked={task.completed}
            />
            <Button
                title='Удалить'
                view="flat"
                onClick={() => removeTask(task.id)}
              >
                <DeleteIcon/>
              </Button>
        </div>
    )
})
