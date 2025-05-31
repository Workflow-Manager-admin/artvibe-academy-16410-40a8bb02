import React from "react";

// PUBLIC_INTERFACE
/**
 * Gallery component for showcasing community artworks.
 */
function Gallery() {
  return (
    <section>
      <div className="grid">
        <div className="card">
          <div className="card-title">"Rainbow Dream"</div>
          <div className="card-description">by Alex Smith • Abstract</div>
          <div>
            <img alt="artwork" src="https://placehold.co/320x180" style={{width:"100%", borderRadius:"10px", marginTop:8}}/>
          </div>
        </div>
        <div className="card">
          <div className="card-title">"Urban Night"</div>
          <div className="card-description">by Jamie Lee • Cityscapes</div>
          <div>
            <img alt="artwork" src="https://placehold.co/320x180/434343/FFF" style={{width:"100%", borderRadius:"10px", marginTop:8}}/>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Gallery;
