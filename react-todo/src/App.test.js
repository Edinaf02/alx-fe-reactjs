import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from '../components/TodoList'; // Adjust path as necessary

describe('TodoList Component', () => {
  test('renders TodoList component with initial todos', () => {
    render(<TodoList todos={initialTodos} onToggle={jest.fn()} onDelete={jest.fn()} />);

    const firstTodo = screen.getByText('Learn React');
    expect(firstTodo).toBeInTheDocument();
  });

  test('calls onToggle when a todo checkbox is clicked', () => {
    const mockToggle = jest.fn();
    render(<TodoList todos={initialTodos} onToggle={mockToggle} onDelete={jest.fn()} />);

    fireEvent.click(screen.getAllByRole('checkbox')[0]);

    expect(mockToggle).toHaveBeenCalledWith(1);
  });

  test('calls onDelete when a delete button is clicked', () => {
    const mockDelete = jest.fn();
    render(<TodoList todos={initialTodos} onToggle={jest.fn()} onDelete={mockDelete} />);

    fireEvent.click(screen.getAllByText('Delete')[0]);

    expect(mockDelete).toHaveBeenCalledWith(1);
  });
});
