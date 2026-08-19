import { Tab, TabList, TabPanel, TabProvider } from "@gravity-ui/uikit"
import { ActionStateWithReducer } from "features/react19Examples/actionStateWithReducer/ui/ActionStateWithReducer";
import { RegistryForm } from "features/react19Examples/formWithAsyncSave/ui/FormWithAsyncSave"
import { useState } from "react";
import { TaskWidget } from "widgets/task"


export const MainPage = () => {
  const [activeTab, setActiveTab] = useState('first');

  return (
    <TabProvider value={activeTab} onUpdate={setActiveTab}>
        <TabList>
            <Tab value="first">FormWithAsyncSave</Tab>
            <Tab value="second">TodoListOptimistic</Tab>
            <Tab value="third">ActionStateWithReducer</Tab>
        </TabList>
        <div>
            <TabPanel value="first"><h1>Зарегистрироваться</h1><RegistryForm /></TabPanel>
            <TabPanel value="second"><h1>Мои задачи</h1><TaskWidget /></TabPanel>
            <TabPanel value="third"><h1>Зарегистрироваться с редьюсером</h1><ActionStateWithReducer/></TabPanel>
        </div>
    </TabProvider>
  );
}
