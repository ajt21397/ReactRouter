import React from "react";
import { useLocation } from "react-router-dom";

const routes = [
  { label: "Home", path: "/" },
  { label: "Blue", path: "/blue" },
  { label: "Red", path: "/red" },
  { label: "Yellow", path: "/yellow" },
  { label: "Pink", path: "/pink" },
  // Add more routes as needed
];

const Footer = () => {
  const location = useLocation();

  return (
    <footer className="footer">
      {routes.map((route) => (
        <a
          key={route.path}
          href={route.path}
          className={location.pathname === route.path ? "active" : ""}
        >
          {route.label}
        </a>
      ))}
    </footer>
  );
};

export default Footer;
