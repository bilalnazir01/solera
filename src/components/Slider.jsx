import React from 'react'

const Slider = () => {
    return (
        <div className="App">
          <h2>Logo Slider</h2>
          {/* <LogoSlider logos={logoImages} /> */}
        </div>
      );
}

const App = () => {
  // Array of logos (images)
  const logoImages = [
    "https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp",
    "https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp",
    "https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp",
    "https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp",
    "https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp",
    "https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp",
    "https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp",
  ];

  // Reusable LogoSlider component
  const LogoSlider = ({ logos }) => {
    return (
      <div className="carousel rounded-box">
        {logos.map((logo, index) => (
          <div className="carousel-item" key={index}>
            <img src={logo} alt={`Logo ${index + 1}`} />
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="App">
      <h2>Logo Slider</h2>
      <LogoSlider logos={logoImages} />
    </div>
  );
};

export default App;
