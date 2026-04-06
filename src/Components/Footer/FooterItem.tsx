import React from "react";
import { FooterProps } from "./Footer.types";
/**
 * Renders the footer with text based on the business status
 *
 * @param {string} text from Footerprops
 * @returns JSX - footer
 */
export const FooterItem = ({ status }: FooterProps) => {
  return (
    <h4>
      {status === "open" ? "We are open until 19:00." : "Sorry,We are closed."}
    </h4>
  );
};
