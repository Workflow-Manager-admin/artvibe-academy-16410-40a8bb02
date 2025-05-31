import React from "react";

// PUBLIC_INTERFACE
/**
 * Videos component for displaying educational art videos.
 */
function Videos() {
  return (
    <section>
      <div className="grid">
        <div className="card">
          <div className="card-title">Artist Spotlight</div>
          <div className="card-description">Watch a master create a vibrant landscape in oils.</div>
          <div className="card-footer">
            <button className="btn btn-small">Play Video</button>
          </div>
        </div>
        <div className="card">
          <div className="card-title">Color Theory Video</div>
          <div className="card-description">Deep dive into warm/cool color mixing with expert tips.</div>
          <div className="card-footer">
            <button className="btn btn-small">Watch</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Videos;
