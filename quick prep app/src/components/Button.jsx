import React from "react";

const Button = ({ children, backgroundColor, hoverColor, Image, Arrow ,onClick}) => {
  return (
    <button onClick={onClick}
      className={`rounded-xl py-2.5 px-6 text-white flex justify-start  ${backgroundColor}  ${hoverColor} ${Image} 
        `}
    >
      {Image ? (
        <div className="self-center">
          <img src={Image} />
        </div>
      ) : null}

      <div className="text-center w-full">{children}</div>

      {Image ? (
        <div className="self-center">
          <img src={Arrow} />
        </div>
      ) : null}
    </button>
  );
};

export default Button;
