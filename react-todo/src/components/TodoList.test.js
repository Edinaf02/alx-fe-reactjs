import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // For extended matchers like toBeInTheDocument
import TodoList from '../components/TodoList'; // Adjust the import path as needed

describe('TodoList Component', () => {
  const initialTodos = [
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Build a Todo App', completed: true },
  ];

  test('renders TodoList component with initial todos', () => {
    render(<TodoList initialTodos={initialTodos} />);

    // Check if initial todos are rendered
    const firstTodo = screen.getByText('Learn React');
    const secondTodo = screen.getByText('Build a Todo App');

    expect(firstTodo).toBeInTheDocument();
    expect(secondTodo).toBeInTheDocument();
  });

  test('adds a new todo', () => {
    render(<TodoList initialTodos={[]} />);

    const inputElement = screen.getByPlaceholderText('Add a new todo');
    const addButton = screen.getByText('Add Todo');

    // Simulate adding a new todo
    fireEvent.change(inputElement, { target: { value: 'New Todo' } });
    fireEvent.click(addButton);

    // Check if the new todo is rendered
    const newTodo = screen.getByText('New Todo');
    expect(newTodo).toBeInTheDocument();
  });

  test('deletes a todo', () => {
    render(<TodoList initialTodos={initialTodos} />);

    const todoToDelete = screen.getByText('Learn React');
    const deleteButton = todoToDelete.nextSibling;

    // Simulate deleting a todo
    fireEvent.click(deleteButton);

    // Check if the todo is removed from the DOM
    expect(todoToDelete).not.toBeInTheDocument();
  });

  test('toggles the completion status of a todo', () => {
    render(<TodoList initialTodos={initialTodos} />);

    const todoToToggle = screen.getByText('Learn React');
    const toggleButton = todoToToggle.previousSibling;

    // Simulate toggling the todo's completion status
    fireEvent.click(toggleButton);

    // Check if the todo is marked as completed
    expect(todoToToggle).toHaveClass('completed');
  });
});
