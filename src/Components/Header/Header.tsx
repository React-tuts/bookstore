import React from "react";
import { HeaderProps } from "./Header.types";
/**
 *
 * @param HeaderProps
 * @returns Header - JSX
 */
const Header = ({ title }: HeaderProps) => {
  return <header className="header">{title}</header>;
};

export default Header;
