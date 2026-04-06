import React from "react";
import { HeaderProps } from "./Header.types";
/**
 * Header component that displays the main page title.
 * @param {string} title - Text to display in the heading
 * @returns Header - JSX - containing a h1 with title
 */
export const Header = ({ title }: HeaderProps) => {
  return (
    <header className="header">
      <h1>{title}</h1>
    </header>
  );
};
