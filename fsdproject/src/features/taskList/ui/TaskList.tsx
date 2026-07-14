import { TaskCard} from "entities/task";
import { Button, Select } from "@gravity-ui/uikit";
import { DeleteIcon } from "shared/ui/icons";
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
            <div className={styles.row} key={task.id}>
              <TaskCard task={task} />
              <Button
                title='Удалить'
                view="flat"
                className={styles.button}
                onClick={() => removeTask(task.id)}
              >
                <DeleteIcon/>
              </Button>
            </div> 
          ))}
        </div>
      </div>
    );
}
