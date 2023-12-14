import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import TodoInput from "../../components/TodoInput";
import TodoList from "../../components/TodoList/TodoList";

import { useLocalStorage } from "../../hooks/useLocalStorage";

const Home = () => {
  const [todos, setTodos] = useLocalStorage("todos", []);
  const [todo, setTodo] = useState("");

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
