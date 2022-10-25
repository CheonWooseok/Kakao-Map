import "./menu.css";

export interface MenuProps {
  children?: any;
  type?: "text";
  style?: React.CSSProperties;
  onClick?: () => void;
}

export const Menu = ({ type, ...props }: MenuProps) => {
  return (
    <span
      className={["storybook-menu", `storybook-menu-${type}`].join(" ")}
      {...props}
    >
      {props.children}
    </span>
  );
};
