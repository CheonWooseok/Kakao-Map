import { useState } from "react";
import { Menu, MenuProps } from "../../atoms/menu/Menu";

interface MenusProps {
  children?: string;
  menus?: MenuProps[];
}

export const Menus = ({ menus, ...props }: MenusProps) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Menu onClick={() => setOpen(!open)} style={{ position: "relative" }}>
        {props.children}
      </Menu>
      <div style={{ position: "absolute", top: 0, zIndex: 99999 }}>
        {open && menus?.map((menu) => <Menu>{menu}</Menu>)}
      </div>
    </div>
  );
};
