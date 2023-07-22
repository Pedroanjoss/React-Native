import React from 'react';
import { Home } from './src/Pages/Home';
import { TasksProvider } from './src/Context/TaskContext';


export default function App() {
  return (
    <TasksProvider>
        <Home></Home>
    </TasksProvider>
  );
}


