import React from "react";

// PUBLIC_INTERFACE
/**
 * Tutorials component for displaying art tutorials.
 */
function Tutorials() {
  return (
    <section>
      <div className="grid">
        <div className="card">
          <div className="card-title">Art Tutorial Example</div>
          <div className="card-description">
            Learn advanced shading techniques with simple exercises and step-by-step lessons.
          </div>
          <div className="card-footer">
            <button className="btn btn-small">Start Lesson</button>
          </div>
        </div>
        <div className="card">
          <div className="card-title">Portrait Basics</div>
          <div className="card-description">
            Introduction to proportions and facial features. Great for all skill levels!
          </div>
          <div className="card-footer">
            <button className="btn btn-small">View</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Tutorials;
