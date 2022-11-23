import React from 'react';
import './headerPage.css'

function HeaderPage() {
  return (
    <>
      <nav className="header">
        <section className="logo">
          <img id="img-container" src={require("./logoImage/instaclone-logo.png")} alt="logo" />
        </section>
        <section className="camera-icon">
          <a href='/formData'>
            <img src={require("./logoImage/camera.png")} alt="camera" />
          </a>
        </section>
      </nav>
    </>
  );
}
export default HeaderPage;
/**
 * We can use require because the images appears only runtime not
 * in compile
 */
