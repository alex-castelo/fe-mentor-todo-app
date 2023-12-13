import { useState } from "react";

const useTodoList = (initialTodos) => {
  const [todos, setTodos] = useState(initialTodos);

  const checkTodo = (id) => {
    const updatedTodos = todos.map((todoItem) =>
      todoItem.id === id
        ? { ...todoItem, completed: !todoItem.completed }
        : todoItem
    );

    setTodos(updatedTodos);
  };

  const deleteTodo = (id) => {
    const todosCopy = todos.filter((todo) => todo.id !== id);

    setTodos(todosCopy);
  };

  const deleteCompleted = () => {
    const updatedTodos = todos.filter((todo) => !todo.completed);
    setTodos(updatedTodos);
  };

  return { todos, setTodos, checkTodo, deleteTodo, deleteCompleted };
};

export default useTodoList;
