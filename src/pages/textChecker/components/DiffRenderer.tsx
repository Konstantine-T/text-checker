import React from "react";
import type { DiffItem } from "../types";

interface DiffRendererProps {
  diffItems: DiffItem[];
}

export const DiffRenderer: React.FC<DiffRendererProps> = ({ diffItems }) => {
  return (
    <>
      {diffItems.map((item, index) => {
        let color = "#333";
        let backgroundColor = "transparent";

        if (item.type === "delete") {
          color = "#d32f2f";
          backgroundColor = "#ffebee";
        } else if (item.type === "insert") {
          color = "#2e7d32";
          backgroundColor = "#e8f5e9";
        }

        return (
          <span
            key={index}
            style={{
              color,
              backgroundColor,
              padding: item.type !== "equal" ? "2px 4px" : "0",
              borderRadius: item.type !== "equal" ? "3px" : "0",
              textDecoration: item.type === "delete" ? "line-through" : "none",
            }}
          >
            {item.text}
          </span>
        );
      })}
    </>
  );
};