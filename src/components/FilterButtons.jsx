import React from 'react';
import { useTasks } from '../hooks/useTasks';

const FilterButtons = () => {
  const { setFilter, filter } = useTasks();

  return (
    <div style={{ margin: '15px 0' }}>
      <button 
        className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
        onClick={() => setFilter('all')}
      >Todas</button>
      <button 
        className={`filter-btn ${filter === 'completed' ? 'active' : ''}`}
        onClick={() => setFilter('completed')}
      >Completadas</button>
      <button 
        className={`filter-btn ${filter === 'pending' ? 'active' : ''}`}
        onClick={() => setFilter('pending')}
      >Pendientes</button>	 
      
    </div>
  );
};

export default FilterButtons;
