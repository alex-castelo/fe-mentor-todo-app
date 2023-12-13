const FilterButtons = ({ setFilterBy, theme }) => {
  const buttonClass = theme === "light" ? "light-btn" : "dark-btn";

  return (
    <div className="action-buttons">
      <button className={buttonClass} onClick={() => setFilterBy("")}>
        All
      </button>
      <button className={buttonClass} onClick={() => setFilterBy("active")}>
        Active
      </button>
      <button className={buttonClass} onClick={() => setFilterBy("completed")}>
        Completed
      </button>
    </div>
  );
};

export default FilterButtons;
