import { TaskList, useTasks } from 'features/taskList'

export function TaskWidget() {

    const { tasks } = useTasks();
    console.log(tasks)

  return (
    <div>
        <TaskList tasks={tasks} />
    </div>
  )
};
