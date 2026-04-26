import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { TaskProvider } from '../context/TaskContext';
import TaskList from '../components/TaskList';
import React from 'react';

describe('Componente TaskList', () => {
  it('debe mostrar el mensaje de "no hay tareas" cuando la lista está vacía', () => {
    render(
      <TaskProvider>
        <TaskList />
      </TaskProvider>
    );
    
    expect(screen.getByText(/No hay tareas/i)).toBeDefined();
  });
});