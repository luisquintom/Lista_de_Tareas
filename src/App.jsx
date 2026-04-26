import React, { Suspense, lazy } from 'react';
import Header from './components/Header';
import TaskList from './components/TaskList';
import './App.css';


const TaskForm = lazy(() => import('./components/TaskForm'));
const FilterButtons = lazy(() => import('./components/FilterButtons'));

function App() {
  return (
    <div className="app-container">
      <Header />

      <Suspense fallback={<div style={{ padding: '20px' }}>Cargando herramientas...</div>}>
        <TaskForm />
        <FilterButtons />
      </Suspense>

      <TaskList />
    </div>
  );
}

export default App;