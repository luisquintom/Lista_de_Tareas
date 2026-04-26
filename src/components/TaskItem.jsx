import React from 'react';

const TaskItem = ({ task, toggleTask, deleteTask }) => {
  return (
    <div className={`task-card ${task.completed ? 'completed' : ''}`}>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <div style={{ display: 'flex', gap: '10px' }}>
        <button onClick={() => toggleTask(task.id)}>
          {task.completed ? 'Reabrir' : 'Completar'}
        </button>
        <button 
          onClick={() => deleteTask(task.id)} 
          style={{ background: '#e74c3c', color: 'white' }}
        >Eliminar</button>
      </div>
    </div>
  );
};

export default TaskItem;