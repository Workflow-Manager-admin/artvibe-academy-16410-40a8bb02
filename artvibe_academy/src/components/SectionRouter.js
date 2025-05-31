import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Tutorials from "./Tutorials";
import Videos from "./Videos";
import Gallery from "./Gallery";
import Challenges from "./Challenges";
import Profile from "./Profile";

// PUBLIC_INTERFACE
/**
 * SectionRouter handles routing between primary content sections.
 */
function SectionRouter() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/tutorials" replace />} />
      <Route path="/tutorials" element={<Tutorials />} />
      <Route path="/videos" element={<Videos />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/challenges" element={<Challenges />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="*" element={<h2 style={{ color: "var(--kavia-orange)", textAlign: "center" }}>404 - Not Found</h2>} />
    </Routes>
  );
}

export default SectionRouter;
