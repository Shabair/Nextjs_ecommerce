import React from "react";

export interface NotificationCardProps {
  title: string;
  message: string;
  time: string;
  avatar?: string;
  unread?: boolean;
  onClick?: () => void;
  actionLabel?: string;
  onAction?: () => void;
}

const NotificationCard: React.FC<NotificationCardProps> = ({
  title,
  message,
  time,
  avatar,
  unread = false,
  onClick,
  actionLabel,
  onAction
}) => {
  return (
    <div
      onClick={onClick}
      style={{
        display: "flex",
        alignItems: "flex-start",
        gap: "16px",
        padding: "16px",
        background: unread ? "#f5f9ff" : "#fff",
        borderRadius: "12px",
        border: "1px solid #e4e7ec",
        cursor: onClick ? "pointer" : "default",
        transition: "0.2s",
        boxShadow: unread ? "0 4px 10px rgba(0,0,0,0.08)" : "",
      }}
    >
      {/* Avatar */}
      <img
        src={avatar || "https://via.placeholder.com/40"}
        alt="avatar"
        style={{
          width: "42px",
          height: "42px",
          borderRadius: "50%",
          objectFit: "cover",
        }}
      />

      <div style={{ flexGrow: 1 }}>
        {/* Title */}
        <strong
          style={{
            display: "block",
            fontSize: "16px",
            marginBottom: "6px",
          }}
        >
          {title}
        </strong>

        {/* Message */}
        <p
          style={{
            margin: 0,
            fontSize: "14px",
            color: "#555",
            lineHeight: "1.4",
          }}
        >
          {message}
        </p>

        {/* Time */}
        <small style={{ color: "#999", display: "block", marginTop: "8px" }}>
          {time}
        </small>
      </div>

      {/* Unread dot */}
      {unread && (
        <div
          style={{
            width: "10px",
            height: "10px",
            borderRadius: "50%",
            backgroundColor: "#3b82f6",
            marginTop: "6px",
          }}
        />
      )}

      {/* Action button */}
      {actionLabel && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onAction?.();
          }}
          style={{
            padding: "6px 12px",
            borderRadius: "8px",
            border: "none",
            background: "#3b82f6",
            color: "#fff",
            fontSize: "12px",
            cursor: "pointer",
            marginLeft: "8px",
          }}
        >
          {actionLabel}
        </button>
      )}
    </div>
  );
};

export default NotificationCard;
