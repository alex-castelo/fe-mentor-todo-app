import { useContext } from "react";
import "./todo-item.css";

import TodoCheck from "../TodoCheck";
import CrossIcon from "./_components/CrossIcon";
import ThemeContext from "../../context/ThemeContext";

const TodoItem = ({ todo, checkTodo, deleteTodo }) => {
  const [theme, __] = useContext(ThemeContext);

  const textClasses = `item-description ${
    theme === "light" ? "light" : "dark"
  } ${todo.completed && theme === "light" ? "completed-light" : ""}${
    todo.completed && theme === "dark" ? "completed-dark" : ""
  }`;

  const itemClasses =
    theme === "light" ? "todo-item light-bkg" : "todo-item dark-bkg";

  return (
    <li key={todo.id} className={`item-wrapper ${itemClasses}`}>
      <TodoCheck
        completed={todo.completed}
        checkTodo={() => checkTodo(todo.id)}
      />
      <button
        aria-label={`Mark as complete: ${todo.description}`}
        style={{ cursor: "pointer" }}
        className={textClasses}
        onClick={() => checkTodo(todo.id)}
      >
        {todo.description}
      </button>
      <button
        aria-label="delete item cross button"
        onClick={() => deleteTodo(todo.id)}
      >
        <CrossIcon />
      </button>
    </li>
  );
};

export default TodoItem;
