// features/taskList/model/useTasks.ts

import { useEffect, useState } from "react";
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
    const [ filteredTasks, setFilteredTasks ] = useState<Task[]>(initialTasks);

    useEffect(() => {
      switch (filter) {
          case 'all':
            setFilteredTasks(tasks);
            break;
          case 'completed':
            setFilteredTasks(tasks?.filter(task => task.completed));
            break;
          case 'incomplete':
            setFilteredTasks(tasks?.filter(task => !task.completed));
        }
    }, [filter])

    return {
      tasks: filteredTasks, filter, setFilter
    };
}
