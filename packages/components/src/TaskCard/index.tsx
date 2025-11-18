import React from "react";

export type TaskPriority = "low" | "medium" | "high";
export type TaskStatus = "todo" | "in-progress" | "done";

export interface TaskCardProps {
  title: string;
  description?: string;
  tags?: string[];
  assignee?: string;
  priority: TaskPriority;
  status: TaskStatus;
  dueDate?: string;
  onClick?: () => void;
}

const priorityColors: Record<TaskPriority, string> = {
  low: "#4caf50",
  medium: "#ff9800",
  high: "#f44336",
};

const statusColors: Record<TaskStatus, string> = {
  "todo": "#94a3b8",
  "in-progress": "#3b82f6",
  "done": "#22c55e",
};

const TaskCard: React.FC<TaskCardProps> = ({
  title,
  description,
  tags = [],
  assignee,
  priority,
  status,
  dueDate,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      style={{
        padding: "16px",
        borderRadius: "12px",
        background: "#fff",
        border: "1px solid #e2e8f0",
        cursor: onClick ? "pointer" : "default",
        transition: "0.2s",
        boxShadow: "0 4px 14px rgba(0,0,0,0.06)",
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        width: "340px",
      }}
    >
      {/* Status bar */}
      <div
        style={{
          height: "4px",
          width: "100%",
          borderRadius: "4px",
          background: statusColors[status],
        }}
      />

      {/* Title */}
      <h3 style={{ margin: 0, fontSize: "18px", fontWeight: 600 }}>
        {title}
      </h3>

      {/* Description */}
      {description && (
        <p style={{ margin: 0, color: "#555", fontSize: "14px" }}>
          {description}
        </p>
      )}

      {/* Tags */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
        {tags.map((tag, i) => (
          <span
            key={i}
            style={{
              background: "#f1f5f9",
              padding: "4px 10px",
              borderRadius: "8px",
              fontSize: "12px",
              color: "#475569",
            }}
          >
            #{tag}
          </span>
        ))}
      </div>

      {/* Bottom Row */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "6px",
        }}
      >
        {/* Priority */}
        <span
          style={{
            background: priorityColors[priority],
            color: "#fff",
            padding: "4px 10px",
            borderRadius: "6px",
            fontSize: "12px",
            fontWeight: 600,
          }}
        >
          {priority.toUpperCase()}
        </span>

        {/* Due date */}
        {dueDate && (
          <span style={{ fontSize: "12px", color: "#777" }}>
            Due {dueDate}
          </span>
        )}

        {/* Assignee Avatar */}
        {assignee && (
          <img
            src={assignee}
            alt="assignee"
            style={{
              width: "32px",
              height: "32px",
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />
        )}
      </div>
    </div>
  );
};

export default TaskCard;
