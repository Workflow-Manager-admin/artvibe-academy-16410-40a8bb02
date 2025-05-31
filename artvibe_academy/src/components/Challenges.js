import React from "react";

// PUBLIC_INTERFACE
/**
 * Challenges component for art challenges and participation.
 */
function Challenges() {
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
