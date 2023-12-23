import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import TodoInput from "../../components/TodoInput";
import TodoList from "../../components/TodoList/TodoList";

import { useLocalStorage } from "../../hooks/useLocalStorage";

const defaultTodos = [
  {
    description: "See your first React course",
    id: uuidv4(),
    completed: true,
  },
  {
    description: "Create your first React application",
    id: uuidv4(),
    completed: true,
  },
  {
    description: "Keep exploring and learning",
    id: uuidv4(),
    completed: false,
  },
];

const Home = () => {
  const [todos, setTodos] = useLocalStorage("todos", []);
  const [todo, setTodo] = useState("");

  useEffect(() => {
    if (todos.length === 0) {
      setTodos(defaultTodos);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const addTodo = (description) => {
    const todo = {
      description,
      id: uuidv4(),
      completed: false,
    };

    setTodos([...todos, todo]);
  };

  return (
    <div className="stack">
      <TodoInput todo={todo} setTodo={setTodo} addTodo={addTodo} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default Home;
