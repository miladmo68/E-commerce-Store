import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-800 text-white text-center p-4 mt-10">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} My Store. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
