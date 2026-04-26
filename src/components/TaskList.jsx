import React from 'react';
import { useTasks } from '../hooks/useTasks';
import TaskItem from './TaskItem';

const TaskList = () => {
  const { filteredTasks, toggleTask, deleteTask } = useTasks();

return (
    <div>
      {filteredTasks.length === 0 ? (
        <p>No hay tareas en esta categoría.</p>
      ) : (
        filteredTasks.map(task => (
          <TaskItem 
            key={task.id} 
            task={task} 
            toggleTask={toggleTask} 
            deleteTask={deleteTask} 
          />
        ))
      )}
    </div>
  );
};

export default TaskList;