import React from "react";
import { NavLink } from "react-router-dom";
import "../App.css"; // for styles

// PUBLIC_INTERFACE
/**
 * The Navbar component displays the main navigation bar with routes.
 */
function Navbar() {
  return (
    <nav className="navbar">
      <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div className="logo">
          <span className="logo-symbol">*</span> ArtVibe Academy
        </div>
        <div style={{ display: "flex", gap: 16 }}>
          <NavLink
            to="/tutorials"
            className={({ isActive }) =>
              `btn${isActive ? "" : " btn-outline"}`
            }
            style={{ textDecoration: "none" }}
          >
            Tutorials
          </NavLink>
          <NavLink
            to="/videos"
            className={({ isActive }) =>
              `btn${isActive ? "" : " btn-outline"}`
            }
            style={{ textDecoration: "none" }}
          >
            Videos
          </NavLink>
          <NavLink
            to="/gallery"
            className={({ isActive }) =>
              `btn${isActive ? "" : " btn-outline"}`
            }
            style={{ textDecoration: "none" }}
          >
            Gallery
          </NavLink>
          <NavLink
            to="/challenges"
            className={({ isActive }) =>
              `btn${isActive ? "" : " btn-outline"}`
            }
            style={{ textDecoration: "none" }}
          >
            Challenges
          </NavLink>
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              `btn${isActive ? "" : " btn-outline"}`
            }
            style={{ textDecoration: "none" }}
          >
            Profile
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
