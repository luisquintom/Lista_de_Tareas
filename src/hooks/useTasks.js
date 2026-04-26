import { useContext, useState } from 'react';
import { TaskContext } from '../context/TaskContext';

export const useTasks = () => {
  const { tasks, dispatch, filter, setFilter } = useContext(TaskContext);

  const addTask = (title, description) => {
    dispatch({
      type: 'ADD_TASK',
      payload: { 
        id: Date.now(), //fecha como ID único
        title, 
        description, 
        completed: false 
      }
    });
  };

  // Función para eliminar 
  const deleteTask = (id) => dispatch({ type: 'DELETE_TASK', payload: id });

  // Función para marcar como completada 
  const toggleTask = (id) => dispatch({ type: 'TOGGLE_TASK', payload: id });

  const filteredTasks = tasks.filter(task => {
    if (filter === 'completed') {
      return task.completed === true; 
    }
    if (filter === 'pending') {
      return task.completed === false; 
    }
    return true; 
  });

  return { 
    filteredTasks, 
    addTask, 
    deleteTask, 
    toggleTask, 
    setFilter,
    filter 
  };
};