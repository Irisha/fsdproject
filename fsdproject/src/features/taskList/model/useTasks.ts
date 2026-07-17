// features/taskList/model/useTasks.ts

import { useEffect, useState } from "react";
import type { Task } from 'entities/task';
import { useGetTasksQuery } from "entities/task/api/taskApi";

export type Filter = 'all' | 'completed' | 'incomplete';

export function useTasks() {
  const [ tasks, setTasks ] = useState<Task[]>([]);
  const [ filter, setFilter ] = useState<Filter>('all');
  const [ filteredTasks, setFilteredTasks ] = useState<Task[]>(tasks);

  const { data: remoteTasks } = useGetTasksQuery();

  useEffect(() => {
    if (remoteTasks && tasks.length === 0) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setTasks(remoteTasks);
    }
  }, [remoteTasks, tasks.length])

  useEffect(() => {
    switch (filter) {
        case 'all':
          // eslint-disable-next-line react-hooks/set-state-in-effect
          setFilteredTasks(tasks);
          break;
        case 'completed':
          setFilteredTasks(tasks?.filter(task => task.completed));
          break;
        case 'incomplete':
          setFilteredTasks(tasks?.filter(task => !task.completed));
      }
  }, [filter, tasks])

  const removeTask = (taskId: Task['id']) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId))
  };

  return {
    tasks: filteredTasks, setFilter, removeTask
  };
}
