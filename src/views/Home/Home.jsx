import { useState } from "react";

import TodoInput from "../../components/TodoInput";
import TodoList from "../../components/TodoList/TodoList";

const initialTodos = [
  { description: "Watch react intro course", id: 1, completed: true },
  { description: "Create a todo app with react", id: 2, completed: false },
  { description: "Watch intermediate react course", id: 3, completed: false },
];

const Home = () => {
  const [todos, setTodos] = useState(initialTodos);
  const [todo, setTodo] = useState("");

  const addTodo = (description) => {
    const todo = {
      description,
      id: Math.random() * 100,
      completed: false,
    };

    setTodos([...todos, todo]);
  };

  const DragAndDropText = () => {
    return (
      <p
        style={{
          textAlign: "center",
          fontSize: "14px",
          color: "#9495A5",
        }}
      >
        Drag and drop to reorder list
      </p>
    );
  };

  return (
    <div className="stack">
      <TodoInput todo={todo} setTodo={setTodo} addTodo={addTodo} />
      <TodoList todos={todos} setTodos={setTodos} />
      <DragAndDropText />
    </div>
  );
};

export default Home;
