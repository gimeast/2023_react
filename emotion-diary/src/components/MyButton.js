import React from "react";

const MyButton = ({ text, type, onClick }) => {
  const btnType = ["POSITIVE", "NEGATIVE"].includes(type) ? type : "DEFAULT";

  return (
    <button
      className={["MyButton", `MyButton_${btnType}`].join(" ")}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

MyButton.defaultProps = {
  type: "DEFAULT",
};

export default MyButton;
