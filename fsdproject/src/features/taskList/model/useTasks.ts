// features/taskList/model/useTasks.ts

import { useCallback, useMemo, useState } from "react";
import type { Task } from 'entities/task';

export type Filter = 'all' | 'completed' | 'incomplete';

// function useTasks(initial: Task[]): {
//  tasks: Task[];                   // отфильтрованные задачи
//  filter: Filter;                  // текущий фильтр
//  setFilter: (f: Filter) => void;  // смена фильтра
//  removeTask: (id: string) => void; // удаление задачи по ID
// }


const initialTasks: Task[] = [
  { id: '1', title: "Do homework", completed: true },
  { id: '2', title: "Make dinner", completed: false },
  { id: '3', title: "Feed pet", completed: false },
  { id: '4', title: "Buy products", completed: false },
];

export function useTasks() {
    const [ tasks, setTasks ] = useState<Task[]>(initialTasks);
    const [ filter, setFilter ] = useState<Filter>('all');

    const filteredTasks = useMemo(() => {
      switch (filter) {
          case 'all':
            return(tasks);
          case 'completed':
            return(tasks?.filter(task => task.completed));
          case 'incomplete':
            return(tasks?.filter(task => !task.completed));
        }
    }, [filter, tasks])

    const removeTask = useCallback((taskId: Task['id']) => {
      setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
    }, []);

    return {
      tasks: filteredTasks, filter, setFilter, removeTask
    };
}
