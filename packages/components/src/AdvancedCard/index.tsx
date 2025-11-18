import React from "react";

export interface AdvancedCardProps {
  image: string;
  title: string;
  description: string;
  price?: string;
  badge?: string;
  rating?: number; // 0 - 5 stars
  buttonText: string;
  link: string;
}

const AdvancedCard: React.FC<AdvancedCardProps> = ({
  image,
  title,
  description,
  price,
  badge,
  rating = 0,
  buttonText,
  link,
}) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "block",
        width: "340px",
        borderRadius: "14px",
        overflow: "hidden",
        boxShadow: "0 4px 16px rgba(0,0,0,0.15)",
        background: "#fff",
        color: "inherit",
        textDecoration: "none",
        transition: "transform 0.2s ease",
      }}
    >
      {/* Image Section */}
      <div style={{ position: "relative" }}>
        <img
          src={image}
          alt={title}
          style={{
            width: "100%",
            height: "200px",
            objectFit: "cover",
          }}
        />

        {/* Badge */}
        {badge && (
          <span
            style={{
              position: "absolute",
              top: "12px",
              left: "12px",
              background: "#ff4d4f",
              color: "#fff",
              padding: "4px 10px",
              borderRadius: "6px",
              fontSize: "14px",
              fontWeight: 600,
            }}
          >
            {badge}
          </span>
        )}
      </div>

      {/* Content Section */}
      <div style={{ padding: "16px" }}>
        <h3 style={{ margin: "0 0 6px 0", fontSize: "20px" }}>{title}</h3>

        {/* Rating Stars */}
        <div style={{ marginBottom: "6px" }}>
          {"★".repeat(rating)}
          {"☆".repeat(5 - rating)}
        </div>

        <p style={{ margin: "0 0 10px 0", color: "#555" }}>{description}</p>

        {price && (
          <p
            style={{
              color: "#00a854",
              fontSize: "18px",
              margin: "0 0 16px 0",
              fontWeight: 700,
            }}
          >
            {price}
          </p>
        )}

        {/* Button */}
        <button
          style={{
            width: "100%",
            padding: "12px 16px",
            backgroundColor: "#0070f3",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "16px",
            fontWeight: 600,
          }}
        >
          {buttonText}
        </button>
      </div>
    </a>
  );
};

export default AdvancedCard;