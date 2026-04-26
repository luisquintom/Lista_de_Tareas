import React, { useState } from 'react';
import { useTasks } from '../hooks/useTasks';

const TaskForm = () => {
  const { addTask } = useTasks();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // Evita se recargue
    if (!title.trim()) return; 

    addTask(title, description); 
    setTitle(''); 
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <input 
        type="text" 
        placeholder="Título de la tarea" 
        value={title}
        onChange={(e) => setTitle(e.target.value)} 
      />
      <input 
        type="text" 
        placeholder="Descripción (opcional)" 
        value={description}
        onChange={(e) => setDescription(e.target.value)} 
      />
      <button type="submit">Agregar Tarea</button>
    </form>
  );
};

export default TaskForm;