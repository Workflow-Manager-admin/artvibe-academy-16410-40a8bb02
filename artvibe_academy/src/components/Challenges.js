import React from "react";
import featureFlags from "./featureFlags";

// PUBLIC_INTERFACE
/**
 * Challenges component for art challenges and participation.
 * Shows placeholder grid content if feature is enabled.
 */
function Challenges() {
  if (!featureFlags.challengesEnabled) {
    return (
      <section>
        <div style={{ textAlign: "center", margin: "40px 0", color: "var(--text-secondary)" }}>
          Challenges are currently unavailable.
        </div>
      </section>
    );
  }

  return (
    <section>
      <div className="grid">
        <div className="card">
          <div className="card-title">Weekly Sketch-Off</div>
          <div className="card-description">
            Draw a self-portrait using only circular motion—submit by Sunday!
          </div>
          <div className="card-footer">
            <button className="btn btn-small">Participate</button>
          </div>
        </div>
        <div className="card">
          <div className="card-title">Landscape Challenge</div>
          <div className="card-description">
            Recreate your favorite view in under 60 minutes. Tag #ArtVibeLandscape.
          </div>
          <div className="card-footer">
            <button className="btn btn-small">View Details</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Challenges;
