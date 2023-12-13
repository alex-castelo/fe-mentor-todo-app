import CardStyle from "./todo-card.module.css";
import { useContext } from "react";

import ThemeContext from "../../context/ThemeContext";

const TodoCard = ({ children }) => {
  const [theme] = useContext(ThemeContext);

  const classes = `${CardStyle.card} ${
    theme === "light" ? CardStyle.light : CardStyle.dark
  }`;

  return <div className={classes}>{children}</div>;
};

export default TodoCard;
