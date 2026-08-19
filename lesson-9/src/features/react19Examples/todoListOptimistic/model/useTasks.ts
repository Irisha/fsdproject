// features/taskList/model/useTasks.ts

import { useOptimistic, useState, useTransition } from "react";
import type { Task } from 'entities/task';

export type OptimisticTask = Task & {
  isOptimistic?: boolean;
}

const initialTasks: Task[] = [
  { id: '1', title: "Do homework", completed: true },
  { id: '2', title: "Make dinner", completed: false },
  { id: '3', title: "Feed pet", completed: false },
  { id: '4', title: "Buy products", completed: false },
];

export function useTasks() {
    const [ tasks, setTasks ] = useState<Task[]>(initialTasks);
    const [ newTaskText, setNewTaskText ] = useState('');
    const [ isPending, startTransition ] = useTransition();
    const [ optimisticTasks, addOptimisticTask ] = useOptimistic<OptimisticTask[], OptimisticTask>(tasks, (prev, newOptimisticTask) => [
      ... prev,
      newOptimisticTask,
    ]);

    const removeTask = (taskId: Task['id']) => {
      setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
    };

    const addTask = () => {
      const newTask: Task = {
        id: String(Date.now()),
        title: newTaskText,
        completed: false
      }
      startTransition(async () => {
        addOptimisticTask({...newTask, isOptimistic: true})

        await new Promise(resolve => setTimeout(resolve, 2000));

        startTransition(() => {
          setTasks((prev) => {
            return [... prev, newTask]
          })

          setNewTaskText('')
        })
      })
    }

    return {
      tasks: optimisticTasks, removeTask, newTaskText, setNewTaskText, isPending, addTask
    };
}
