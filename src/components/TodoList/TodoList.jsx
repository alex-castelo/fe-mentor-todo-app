import { useState } from "react";
import { useContext } from "react";

import "./TodoList.css";

import TodoItem from "../TodoItem/TodoItem";
import TodoCard from "../TodoCard";
import FilterButtons from "./_components/FilterButtons";
import ThemeContext from "../../context/ThemeContext";
import useIsMobile from "../../hooks/useIsMobile";

const TodoList = ({ todos, setTodos }) => {
  const [theme, _] = useContext(ThemeContext);
  const [filterBy, setFilterBy] = useState("");
  const [isMobile, __] = useIsMobile();

  const buttonClass = theme === "light" ? "light-btn" : "dark-btn";
  const actionButtonClass =
    theme === "light"
      ? "list-buttons list-buttons-light"
      : "list-buttons list-buttons-dark";

  const filteredTodos = todos.filter((todo) => {
    if (filterBy === "completed") {
      return todo.completed;
    }

    if (filterBy === "active") {
      return !todo.completed;
    }

    return todo;
  });

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

  const ListItems = filteredTodos.map((todo) => (
    <TodoItem
      todo={todo}
      checkTodo={checkTodo}
      deleteTodo={deleteTodo}
      key={todo.id}
    />
  ));

  const EmptyCard = () => {
    const textClasses = `item-description ${
      theme === "light" ? "light" : "dark"
    } ${todo.completed && theme === "light" ? "completed-light" : ""}${
      todo.completed && theme === "dark" ? "completed-dark" : ""
    }`;

    return (
      <TodoCard>
        <p className={textClasses}>Seems you have done all your tasks 🎉</p>
      </TodoCard>
    );
  };

  const ItemsLeft = () => {
    return (
      <p className={`items-left-${theme}`}>{`${
        todos.filter((todo) => !todo.completed).length
      } items left`}</p>
    );
  };

  const FiltersCard = () => {
    return (
      <div style={{ marginTop: "1rem" }}>
        <TodoCard>
          <FilterButtons setFilterBy={setFilterBy} />
        </TodoCard>
      </div>
    );
  };

  return (
    <div>
      {!todos.length ? (
        <EmptyCard />
      ) : (
        <div>
          <ul className="todo-list">{ListItems}</ul>

          <div className={actionButtonClass}>
            <ItemsLeft />
            {!isMobile ? <FilterButtons setFilterBy={setFilterBy} /> : null}
            <button className={buttonClass} onClick={deleteCompleted}>
              Clear completed
            </button>
          </div>
        </div>
      )}
      {isMobile ? <FiltersCard /> : null}
    </div>
  );
};

export default TodoList;
