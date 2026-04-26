import React, { createContext, useReducer, useState, useEffect } from 'react';

// 1. Creamos el "Enchufe" (Contexto)
export const TaskContext = createContext();

const taskReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      // Añade una tarea nueva
      return [...state, action.payload];
    case 'DELETE_TASK':
      // Quita la tarea que coincida con el ID enviado
      return state.filter(task => task.id !== action.payload);
    case 'TOGGLE_TASK':
      // Cambia el estado de "pendiente" a "completada"
      return state.map(task => 
        task.id === action.payload ? { ...task, completed: !task.completed } : task
      );
    case 'SET_TASKS':
      // Carga una lista completa
      return action.payload;
    default:
      return state;
  }
};

export const TaskProvider = ({ children }) => {
  const [tasks, dispatch] = useReducer(taskReducer, [], () => {
    //  localStorage 
    const localData = localStorage.getItem('tasks');
    return localData ? JSON.parse(localData) : [];
  });
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  return (
    <TaskContext.Provider value={{ tasks, dispatch, filter, setFilter }}>
      {children}
    </TaskContext.Provider>
  );
};