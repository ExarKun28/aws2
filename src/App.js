import React, { useState, useEffect } from 'react';
import { imageUrls } from './chairData.js';

const NanamiWebsite = () => {
  const [selectedChair, setSelectedChair] = useState(null);
  const [chairData, setChairData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch chairs from API
  useEffect(() => {
    const fetchChairs = async () => {
      try {
        const response = await fetch('https://6up3q0a4gh.execute-api.ap-southeast-2.amazonaws.com/default/GetMassageChairs');
        
        if (!response.ok) {
          throw new Error('Failed to fetch chairs');
        }
        
        const data = await response.json();
        
        // Convert array to object format matching original structure
        const chairsObject = {};
        data.forEach(chair => {
          chairsObject[chair.chairId] = chair;
        });
        
        setChairData(chairsObject);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching chairs:', err);
        setError(err.message);
        setLoading(false);
      }
    };

    fetchChairs();
  }, []);

  const showChairDetails = (chairType) => {
    setSelectedChair(chairData[chairType]);
    setTimeout(() => {
      document.querySelector('.chair-detail')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const heroBackground = imageUrls.hero ? `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${imageUrls.hero})` : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
  const aboutBackground = imageUrls.blackchair ? `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${imageUrls.blackchair})` : 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)';

  if (loading) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh',
        fontSize: '24px',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Canterra'
      }}>
        Loading massage chairs...
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh',
        fontSize: '24px',
        color: 'red',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Canterra'
      }}>
        Error loading chairs: {error}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <style>
        {`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }

          body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Canterra, "Open Sans", "Helvetica Neue", sans-serif;
          }

          .hero-section {
            background: ${heroBackground};
            background-size: cover;
            background-position: center;
            background-attachment: fixed;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            color: white;
            position: relative;
          }

          .hero-content {
            max-width: 800px;
            padding: 2rem;
            animation: fadeInUp 1s ease-out;
          }

          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .hero-title {
            font-size: 4rem;
            font-weight: 800;
            margin-bottom: 1rem;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
          }

          .hero-subtitle {
            font-size: 1.5rem;
            margin-bottom: 2rem;
            opacity: 0.95;
          }

          .cta-button {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 1rem 2.5rem;
            font-size: 1.1rem;
            border: none;
            border-radius: 50px;
            cursor: pointer;
            transition: all 0.3s ease;
            text-decoration: none;
            display: inline-block;
            box-shadow: 0 4px 15px rgba(0,0,0,0.2);
          }

          .cta-button:hover {
            transform: translateY(-3px);
            box-shadow: 0 6px 20px rgba(0,0,0,0.3);
          }

          .section {
            padding: 5rem 2rem;
            max-width: 1200px;
            margin: 0 auto;
          }

          .section-title {
            font-size: 2.5rem;
            text-align: center;
            margin-bottom: 3rem;
            color: #333;
          }

          .chairs-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
            margin-top: 2rem;
          }

          .chair-card {
            background: white;
            border-radius: 15px;
            overflow: hidden;
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
            transition: all 0.3s ease;
            cursor: pointer;
          }

          .chair-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 15px 30px rgba(0,0,0,0.2);
          }

          .chair-image {
            width: 100%;
            height: 300px;
            object-fit: cover;
          }

          .chair-info {
            padding: 1.5rem;
          }

          .chair-name {
            font-size: 1.5rem;
            font-weight: 700;
            margin-bottom: 0.5rem;
            color: #333;
          }

          .chair-price {
            font-size: 1.3rem;
            color: #667eea;
            font-weight: 600;
            margin-bottom: 1rem;
          }

          .chair-features {
            list-style: none;
            padding: 0;
          }

          .chair-features li {
            padding: 0.3rem 0;
            color: #666;
            display: flex;
            align-items: center;
          }

          .chair-features li:before {
            content: "✓";
            color: #667eea;
            font-weight: bold;
            margin-right: 0.5rem;
          }

          .about-section {
            background: ${aboutBackground};
            background-size: cover;
            background-position: center;
            background-attachment: fixed;
            color: white;
            padding: 5rem 2rem;
          }

          .about-content {
            max-width: 800px;
            margin: 0 auto;
            text-align: center;
          }

          .contact-section {
            background: #f8f9fa;
          }

          .contact-form {
            max-width: 600px;
            margin: 0 auto;
            background: white;
            padding: 2rem;
            border-radius: 15px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
          }

          .form-group {
            margin-bottom: 1.5rem;
          }

          .form-group label {
            display: block;
            margin-bottom: 0.5rem;
            color: #333;
            font-weight: 600;
          }

          .form-group input,
          .form-group textarea {
            width: 100%;
            padding: 0.8rem;
            border: 2px solid #e0e0e0;
            border-radius: 8px;
            font-size: 1rem;
            transition: border-color 0.3s ease;
          }

          .form-group input:focus,
          .form-group textarea:focus {
            outline: none;
            border-color: #667eea;
          }

          .submit-button {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 1rem 2rem;
            border: none;
            border-radius: 8px;
            font-size: 1.1rem;
            cursor: pointer;
            width: 100%;
            transition: all 0.3s ease;
          }

          .submit-button:hover {
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
          }

          .chair-detail {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 3rem 2rem;
            margin-top: 2rem;
            border-radius: 15px;
            animation: slideIn 0.5s ease-out;
          }

          @keyframes slideIn {
            from {
              opacity: 0;
              transform: translateX(-20px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          .detail-content {
            max-width: 800px;
            margin: 0 auto;
          }

          .detail-content h2,
          .detail-content h3,
          .detail-content h4 {
            color: white;
            text-align: center;
          }

          .detail-content h2 {
            font-size: 2.5rem;
            margin-bottom: 1rem;
          }

          .detail-content h3 {
            font-size: 2rem;
            margin-bottom: 1.5rem;
          }

          .detail-content h4 {
            font-size: 1.5rem;
            margin-bottom: 1rem;
            margin-top: 2rem;
          }

          .detail-content ul {
            max-width: 600px;
            margin: 0 auto;
          }

          .detail-content .chair-features li {
            color: white;
            padding: 0.5rem 0;
            font-size: 1.1rem;
          }

          .detail-content .chair-features li:before {
            color: white;
          }

          .navbar {
            position: fixed;
            top: 0;
            width: 100%;
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(10px);
            padding: 1rem 2rem;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            z-index: 1000;
            display: flex;
            justify-content: space-between;
            align-items: center;
          }

          .nav-links {
            display: flex;
            gap: 2rem;
            list-style: none;
          }

          .nav-links a {
            color: #333;
            text-decoration: none;
            font-weight: 600;
            transition: color 0.3s ease;
          }

          .nav-links a:hover {
            color: #667eea;
          }

          .logo {
            font-size: 1.5rem;
            font-weight: 800;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
        `}
      </style>

      <nav className="navbar">
        <div className="logo">NANAMI</div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#chairs">Chairs</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <section id="home" className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Experience Ultimate Relaxation</h1>
          <p className="hero-subtitle">Premium Massage Chairs for Your Wellness Journey</p>
          <a href="#chairs" className="cta-button">Explore Our Collection</a>
        </div>
      </section>

      <section id="chairs" className="section">
        <h2 className="section-title">Our Premium Collection</h2>
        <div className="chairs-grid">
          {Object.entries(chairData).map(([key, chair]) => (
            <div key={key} className="chair-card" onClick={() => showChairDetails(key)}>
              <img 
                src={chair.imageUrl} 
                alt={chair.name}
                className="chair-image"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/300x300?text=Chair+Image';
                }}
              />
              <div className="chair-info">
                <h3 className="chair-name">{chair.name}</h3>
                <p className="chair-price">{chair.price}</p>
                <ul className="chair-features">
                  {chair.features.slice(0, 3).map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {selectedChair && (
          <div className="chair-detail">
            <div className="detail-content">
              <h2>{selectedChair.name}</h2>
              <h3>{selectedChair.price}</h3>
              <h4>Complete Features:</h4>
              <ul className="chair-features">
                {selectedChair.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </section>

      <section id="about" className="about-section">
        <div className="about-content">
          <h2 className="section-title">About NANAMI</h2>
          <p style={{ fontSize: '1.2rem', lineHeight: '1.8', marginBottom: '1rem' }}>
            At NANAMI, we believe in the power of relaxation and wellness. For over a decade, 
            we've been providing premium massage chairs that combine cutting-edge technology 
            with exceptional comfort.
          </p>
          <p style={{ fontSize: '1.2rem', lineHeight: '1.8' }}>
            Our commitment is to help you achieve the perfect balance between work and wellness, 
            one massage at a time.
          </p>
        </div>
      </section>

      <section id="contact" className="contact-section section">
        <h2 className="section-title">Get in Touch</h2>
        <form className="contact-form">
          <div className="form-group">
            <label>Name</label>
            <input type="text" placeholder="Your name" required />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="your@email.com" required />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea rows="5" placeholder="Tell us what you're interested in..." required></textarea>
          </div>
          <button type="submit" className="submit-button">Send Message</button>
        </form>
      </section>
    </div>
  );
};

export default NanamiWebsite;