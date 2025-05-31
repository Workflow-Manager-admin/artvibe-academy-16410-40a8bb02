import React from "react";
import featureFlags from "./featureFlags";

// PUBLIC_INTERFACE
/**
 * Profile component representing the user profile and progress.
 * Shows summary card if enabled.
 */
function Profile() {
  if (!featureFlags.profileEnabled) {
    return (
      <section>
        <div style={{ textAlign: "center", margin: "40px 0", color: "var(--text-secondary)" }}>
          Profiles are currently unavailable.
        </div>
      </section>
    );
  }

  return (
    <section>
      <div className="card">
        <div className="card-title">Your Profile</div>
        <div className="card-description">
          This is where you’ll see your progress and showcase your top artworks!
        </div>
      </div>
    </section>
  );
}

export default Profile;
