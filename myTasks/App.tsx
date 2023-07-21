import React from 'react';
import { Home } from './src/Pages/Home';
import { TasksContext } from './src/Context/TaskContext';


export default function App() {
  return (
    <TasksContext.Provider value={{id: '1', title: 'Task01'}}>
        <Home></Home>
    </TasksContext.Provider>
  );
}


