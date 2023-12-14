/* eslint-disable jsx-a11y/label-has-associated-control */
import "./TodoInput.css";
import TodoCard from "../TodoCard";
import TodoCheck from "../TodoCheck";

const TodoInput = ({ todo, setTodo, addTodo }) => {
  const onKeyDown = (event) => {
    if (event.keyCode === 13) {
      addTodo(todo);
      setTodo("");
    }
  };

  return (
    <TodoCard>
      <div className="input-wrapper">
        <TodoCheck />
        <label className="label" htmlFor="todo-input">
          <input
            id="todo-input"
            className="input"
            type="text"
            placeholder="Create a new todo..."
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            onKeyDown={(e) => onKeyDown(e)}
          />
        </label>
      </div>
    </TodoCard>
  );
};

export default TodoInput;
