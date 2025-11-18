import React from "react";

export interface CardProps {
  image: string;
  title: string;
  description: string;
  buttonText: string;
  link: string;
}

const Card: React.FC<CardProps> = ({
  image,
  title,
  description,
  buttonText,
  link,
}) => {
  return (
    <div
      style={{
        width: "320px",
        borderRadius: "12px",
        overflow: "hidden",
        boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
        backgroundColor: "#fff",
        fontFamily: "sans-serif",
      }}
    >
      <img
        src={image}
        alt={title}
        style={{
          width: "100%",
          height: "180px",
          objectFit: "cover",
        }}
      />

      <div style={{ padding: "16px" }}>
        <h3 style={{ margin: "0 0 8px 0" }}>{title}</h3>
        <p style={{ margin: "0 0 16px 0", color: "#555" }}>{description}</p>

        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none" }}
        >
          <button
            style={{
              width: "100%",
              padding: "10px 16px",
              backgroundColor: "#0070f3",
              color: "#fff",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            {buttonText}
          </button>
        </a>
      </div>
    </div>
  );
};

export default Card;