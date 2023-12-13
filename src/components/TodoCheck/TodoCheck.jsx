const TodoCheck = ({ completed, checkTodo }) => {
  return (
    <svg
      onClick={() => checkTodo()}
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      style={{ cursor: "pointer" }}
    >
      {completed ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <circle cx="10" cy="10" r="9.5" fill="white" stroke="#E3E4F1" />
          <circle cx="10" cy="10" r="10" fill="url(#paint0_linear_0_42)" />
          <path
            d="M6.66675 10.2534L8.91333 12.5L13.9133 7.5"
            stroke="white"
            strokeWidth="2"
          />
          <defs>
            <linearGradient
              id="paint0_linear_0_42"
              x1="-10"
              y1="10"
              x2="10"
              y2="30"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#55DDFF" />
              <stop offset="1" stopColor="#C058F3" />
            </linearGradient>
          </defs>
        </svg>
      ) : (
        <circle cx="10" cy="10" r="9.5" stroke="#393A4B" />
      )}
    </svg>
  );
};

export default TodoCheck;
