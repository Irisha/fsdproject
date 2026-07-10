import { TaskCard} from "entities/task";
import styles from "./TaskList.module.css";
import { Button, RadioGroup } from "@gravity-ui/uikit";
import { DeleteIcon } from "shared/ui/icons";
import { useTasks, type Filter } from "../model/useTasks";

export function TaskList() {

  const { tasks, filter, setFilter, removeTask} = useTasks();
  
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
