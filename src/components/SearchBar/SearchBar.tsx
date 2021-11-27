import React from "react";
import "./SearchBar.css";

interface SearchBarProps {
  primary?: boolean;
  placeholder?: string;
  backgroundColor?: string;
  size?: "small" | "medium" | "large";
  onChange?: () => void;
  text?: "center" | "start" | "end";
}

const SearchBar = ({
  primary = false,
  placeholder = "Placeholder Text",
  size = "medium",
  backgroundColor,
  text = "center",
  ...props
}: SearchBarProps) => {
  const mode = primary ? "searchBar--primary" : "searchBar--secondary";

  return (
    <input
      placeholder={placeholder}
      className={["searchBar", `searchBar--${size}`, mode].join(" ")}
      style={{ backgroundColor, textAlign: text }}
      {...props}
    />
  );
};

export default SearchBar;
