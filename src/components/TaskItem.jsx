import React from 'react';

const TaskItem = ({ task, toggleTask, deleteTask }) => {
  return (
    <div style={{ 
      border: '1px solid #ccc', 
      padding: '10px', 
      margin: '5px 0',
      backgroundColor: task.completed ? '#e0ffe0' : '#fff' 
    }}>
      <h3 style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
        {task.title}
      </h3>
      <p>{task.description}</p>
      
      {/* Pendiente/Completada */}
      <button onClick={() => toggleTask(task.id)}>
        {task.completed ? 'Desmarcar' : 'Completar'}
      </button>

      <button onClick={() => deleteTask(task.id)} style={{ color: 'red', marginLeft: '10px' }}>
        Eliminar
      </button>
    </div>
  );
};

export default TaskItem;