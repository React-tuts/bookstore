import React, { useEffect, useState } from "react";
import { BusinessStatus } from "./Footer.types";
import { FooterItem } from "./FooterItem";
/**
 *
 * @returns JSX - Footer with business stauts
 */
export const Footer = () => {
  const [open, setOpen] = useState<BusinessStatus>("open");

  useEffect(() => {
    const hours = new Date().getHours();
    setOpen(hours > 8 && hours < 19 ? "open" : "closed");
  }, []);
  return (
    <footer className="footer">
      <FooterItem status={open} />
    </footer>
  );
};
