import { TaskCard} from "entities/task";
import { Select } from "@gravity-ui/uikit";
import { useTasks, type Filter } from "../model/useTasks";
import styles from "./TaskList.module.css";

export function TaskList() {
  const { tasks, filter, setFilter, removeTask} = useTasks();
  
  const filterOptions: { value: Filter; content: Filter }[] = [
    { value: 'all', content: 'all' },
    { value: 'completed', content: 'completed' },
    { value: 'incomplete', content: 'incomplete' },
];

    return (
      <div>
        <Select
          className={styles.filter}
          value={[filter]}
          onUpdate={(nextValues) => {
              const nextValue = nextValues[0] as Filter;
              if (nextValue) {
                  setFilter(nextValue);
              }
          }}
          options={filterOptions}
        />
        <div className={styles.tasks}>
          {tasks?.map(task => (
            <TaskCard key={task.id} task={task} removeTask={removeTask} />
          ))}
        </div>
      </div>
    );
}
