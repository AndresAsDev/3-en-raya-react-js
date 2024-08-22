import React from "react";

const Square = ({ children, isSelected, updateBoard, index }) => {
  const ClassName = `square ${isSelected ? "is-selected" : ""}`;

  const handleClick = () => {
    updateBoard(index);
  };

  return (
    <div onClick={handleClick} className={ClassName}>
      {children}
    </div>
  );
};

export default Square;
