import React from "react";

const Navbar = () => {
  return (
    <nav className="nav">
      <ul>
        <li>
          <a href="/" className="active">
            Profile
          </a>
        </li>
        <li>
          <a href="/extracurriculars">Extracurriculars</a>
        </li>
        <li>
          <a href="/college-list">Colleges</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
