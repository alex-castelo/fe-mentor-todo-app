const FilterButtons = ({ setFilterBy, theme, filterBy }) => {
  const buttonClass = theme === "light" ? "light-btn" : "dark-btn";

  return (
    <div className="action-buttons">
      <button
        style={{ color: filterBy === "" ? "#3A7CFD" : null }}
        className={buttonClass}
        onClick={() => setFilterBy("")}
      >
        All
      </button>
      <button
        style={{ color: filterBy === "active" ? "#3A7CFD" : null }}
        className={buttonClass}
        onClick={() => setFilterBy("active")}
      >
        Active
      </button>
      <button
        style={{ color: filterBy === "completed" ? "#3A7CFD" : null }}
        className={buttonClass}
        onClick={() => setFilterBy("completed")}
      >
        Completed
      </button>
    </div>
  );
};

export default FilterButtons;
