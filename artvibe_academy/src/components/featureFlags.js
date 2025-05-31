//
// Feature flag configuration for ArtVibe Academy sections.
// Easy central toggling of section enablement.
//
// Usage:
//   import featureFlags from "./featureFlags";
//   if (!featureFlags.challengesEnabled) return null;
//
const featureFlags = {
  tutorialsEnabled: true,
  videosEnabled: true,
  galleryEnabled: true,
  challengesEnabled: true,
  profileEnabled: true,
};

export default featureFlags;
