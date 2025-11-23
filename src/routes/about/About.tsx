import React, { useContext } from "react";
import { ThemeContext } from "../../context-api/ThemeContext";

export default function About() {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      style={{
        backgroundColor: theme === "light" ? "#f5f5f5" : "#333",
        color: theme === "light" ? "#000" : "#fff",
        padding: "10px",
      }}
    >
      About
    </div>
  );
}
