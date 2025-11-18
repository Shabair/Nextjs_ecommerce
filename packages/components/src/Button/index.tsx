import React from "react";

export interface ButtonProps {
  label: string;
}

const Button: React.FC<ButtonProps> = ({ label }) => {
  return (
    <button
      style={{
        backgroundColor: "#0070f3",
        color: "white",
        padding: "8px 16px",
        borderRadius: "6px",
      }}
    >
      {label}
    </button>
  );
};

export default Button;