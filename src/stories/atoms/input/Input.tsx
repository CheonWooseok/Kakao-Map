import { InputHTMLAttributes } from "react";
import "./input.css";

interface InputProps {
  size?: "small" | "medium" | "large";
  /**
   * Button contents
   */
  type?: HTMLInputElement["type"];
  placeholder?: string;
  /**
   * Optional click handler
   */
  onChange: () => void;
  style: React.CSSProperties;
}

/**
 * Primary UI component for user interaction
 */
export const Input = ({
  size = "medium",
  type = "text",
  placeholder,
  style,
  ...props
}: InputProps) => {
  return (
    <input
      type={type}
      className={["storybook-input", `storybook-input--${size}`].join(" ")}
      placeholder={placeholder}
      {...props}
    />
  );
};
