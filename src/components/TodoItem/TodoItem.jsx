import { useContext } from "react";
import "./todo-item.css";

import TodoCheck from "../TodoCheck";
import CrossIcon from "./_components/CrossIcon";
import ThemeContext from "../../context/ThemeContext";

const TodoItem = ({ todo, checkTodo, deleteTodo }) => {
  const [theme, _] = useContext(ThemeContext);

  const textClasses = `item-description ${
    theme === "light" ? "light" : "dark"
  } ${todo.completed && theme === "light" ? "completed-light" : ""}${
    todo.completed && theme === "dark" ? "completed-dark" : ""
  }`;

  const itemClasses =
    theme === "light" ? "todo-item light-bkg" : "todo-item dark-bkg";

  return (
    <div className={itemClasses}>
      <li key={todo.id} className="item-wrapper">
        <TodoCheck
          completed={todo.completed}
          checkTodo={() => checkTodo(todo.id)}
        />
        <p className={textClasses} onClick={() => checkTodo(todo.id)}>
          {todo.description}
        </p>
        <button onClick={() => deleteTodo(todo.id)}>
          <CrossIcon />
        </button>
      </li>
    </div>
  );
};

export default TodoItem;
