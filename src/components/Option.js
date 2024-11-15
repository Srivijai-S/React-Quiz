import React from "react";

export const Option = ({ options, dispatch, answer }) => {
  const hasAnswer = answer !== null;
  return (
    <div className="option">
      {options.options.map((option, index) => (
        <button
          className={`btn btn-option ${index === answer ? "answer" : " "}${
            hasAnswer
              ? index === options.correctOption
                ? "correct"
                : "wrong"
              : ""
          }`}
          key={option}
          onClick={() => dispatch({ type: "answer", payload: index })}
          disabled={hasAnswer}
        >
          {option}
        </button>
      ))}
    </div>
  );
};
