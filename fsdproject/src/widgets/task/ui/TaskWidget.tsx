import {RadioGroup} from '@gravity-ui/uikit';
import { TaskList, useTasks } from 'features/taskList'
import type { Filter } from 'features/taskList';
import styles from "./TaskWidget.module.css";

export function TaskWidget() {

  const { tasks, filter, setFilter } = useTasks();
  
  const filterOptions: { value: Filter; content: Filter }[] = [
    { value: 'all', content: 'all' },
    { value: 'completed', content: 'completed' },
    { value: 'incomplete', content: 'incomplete' },
];

  return (
    <div>
        <RadioGroup
          className={styles.radiogroup}
          value={filter}
          options={filterOptions}
          onUpdate={(value) => setFilter(value as Filter)}
        />
        <TaskList tasks={tasks} />
    </div>
  )
};
