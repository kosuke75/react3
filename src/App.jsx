import React, { useState } from 'react';

export default function App() {
  const images = [
    { src: 'public/pic1.jpg', alt: 'Closeup of a human eye' },
    { src: 'public/pic2.jpg', alt: 'Rock that looks like a wave' },
    { src: 'public/pic3.jpg', alt: 'Purple and white pansies' },
    { src: 'public/pic4.jpg', alt: "Section of wall from a pharaoh's tomb" },
    { src: 'public/pic5.jpg', alt: 'Large moth on a leaf' }
  ];

  const [currentImage, setCurrentImage] = useState(images[0]);
  const [isDark, setIsDark] = useState(false);

  const toggleOverlay = () => {
    setIsDark(!isDark);
  };

  return (
    <>
      <h1>Image gallery example</h1>
      <div className="full-img">
        <img
          className="displayed-img"
          src={currentImage.src}
          alt={currentImage.alt}
        />
        <div
          className="overlay"
          style={{ backgroundColor: isDark ? 'rgba(0, 0, 0, 0.5)' : 'transparent' }}
        ></div>
        <button className="dark" onClick={toggleOverlay}>
          {isDark ? 'Lighten' : 'Darken'}
        </button>
      </div>
      <div className="thumb-bar">
        {images.map((img, index) => (
          <img
            key={index}
            src={img.src}
            alt={img.alt}
            onClick={() => setCurrentImage(img)}
            className="thumb-img"
          />
        ))}
      </div>
    </>
  );
}
