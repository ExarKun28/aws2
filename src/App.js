import React, { useState } from 'react';

const NanamiWebsite = () => {
  const [selectedChair, setSelectedChair] = useState(null);

  const chairData = {
    premium: {
      name: 'Premium',
      price: 'PHP 145,000',
      image: 'images/premium.png',
      features: [
        'Advanced SL track system',
        '15 auto massage programs',
        'Heat therapy',
        'Zero gravity position',
        'Air compression massage',
        'Bluetooth speakers',
        'USB charging port',
        'Space-saving design'
      ]
    },
    premiumplus: {
      name: 'Premium Plus',
      price: 'PHP 150,000',
      image: 'images/premium plus.png',
      features: [
        'Enhanced SL track system',
        '18 auto massage programs',
        'Advanced heat therapy',
        'Zero gravity position',
        'Full body air compression',
        'Premium Bluetooth speakers',
        'Dual USB charging ports',
        'Space-saving design',
        'Foot roller massage'
      ]
    },
    executive: {
      name: 'Executive',
      price: 'PHP 155,000',
      image: 'images/executive.png',
      features: [
        'Longest SL track in the market',
        '20 auto massage programs',
        'AI',
        'Whole body hot compress',
        'Electric leg extension with sensing',
        'Massage customizations',
        'Body Scanning System',
        'Voice Control',
        '2-way phone charging system'
      ]
    },
    luxury: {
      name: 'Elite',
      price: 'PHP 165,000',
      image: 'images/luxury.png',
      features: [
        'Premium leather upholstery',
        '25 auto massage programs',
        'Advanced AI detection',
        'Full body heating system',
        'Foot roller massage',
        'Customizable programs',
        '4D massage mechanism',
        'Smart voice control',
        'Wireless charging pad'
      ]
    },
    elitepro: {
      name: 'Elite Pro',
      price: 'PHP 175,000',
      image: 'images/elite pro.png',
      features: [
        'Premium Italian leather',
        '30 auto massage programs',
        'AI with learning capability',
        'Full body heating & cooling',
        'Advanced foot roller massage',
        'Fully customizable programs',
        '5D massage mechanism',
        'Advanced voice control',
        'Wireless charging pad',
        'Aromatherapy system'
      ]
    },
    luxury1: {
      name: 'Luxury',
      price: 'PHP 185,000',
      image: 'images/luxury1.png',
      features: [
        'Top-grain leather upholstery',
        '35 auto massage programs',
        'Advanced AI with memory',
        'Climate control system',
        'Premium foot & calf massage',
        'Personalized massage profiles',
        '6D massage mechanism',
        'Multi-language voice control',
        'Wireless phone charging',
        'Built-in aromatherapy',
        'Ambient lighting system'
      ]
    }
  };

  const showChairDetails = (chairType) => {
    setSelectedChair(chairData[chairType]);
    setTimeout(() => {
      document.querySelector('.chair-detail')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-white">
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
          line-height: 1.6;
          color: #333;
        }
        
        nav {
          background: white;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          position: sticky;
          top: 0;
          z-index: 1000;
          padding: 1rem 2rem;
        }
        
        .nav-container {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .logo {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        
        .logo-icon {
          width: 40px;
          height: 40px;
        }
        
        .logo-icon img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
        
        .logo-text {
          display: flex;
          flex-direction: column;
        }
        
        .logo-text-top {
          font-size: 14px;
          font-weight: bold;
          color: #333;
        }
        
        .logo-text-bottom {
          font-size: 10px;
          color: #666;
        }
        
        .hero {
          height: 100vh;
          background: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), 
              url('images/chairs.jpg') center/cover;
          display: flex;
          align-items: center;
          padding: 2rem;
        }
        
        .hero-content {
          max-width: 1200px;
          margin: 0 auto;
          width: 100%;
        }
        
        .hero-box {
          background: rgba(31, 41, 55, 0.95);
          padding: 3rem 4rem;
          max-width: 600px;
        }
        
        .hero-box h1 {
          font-size: 3rem;
          color: #ef4444;
          margin-bottom: 1.5rem;
          line-height: 1.2;
        }
        
        .hero-box p {
          font-size: 1.25rem;
          color: white;
          margin-bottom: 2rem;
        }
        
        .btn {
          display: inline-block;
          padding: 1rem 2.5rem;
          background: white;
          color: #333;
          text-decoration: none;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          transition: all 0.3s;
          cursor: pointer;
          border: none;
        }
        
        .btn:hover {
          background: #f3f4f6;
        }
        
        .chairs-section {
          padding: 5rem 2rem;
          background: white;
        }
        
        .section-title {
          text-align: center;
          font-size: 2.5rem;
          color: #333;
          margin-bottom: 0.5rem;
        }
        
        .section-subtitle {
          text-align: center;
          color: #666;
          margin-bottom: 3rem;
        }
        
        .chairs-grid {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 3rem;
        }
        
        .chair-card {
          text-align: center;
          cursor: pointer;
          transition: transform 0.3s;
        }
        
        .chair-card:hover {
          transform: scale(1.05);
        }
        
        .chair-image-container {
          position: relative;
          margin-bottom: 1rem;
        }
        
        .chair-image {
          position: relative;
          z-index: 2;
          width: 100%;
          height: 200px;
          object-fit: contain;
        }
        
        .chair-name {
          color: #333;
          font-size: 1rem;
        }
        
        .dots {
          display: flex;
          justify-content: center;
          gap: 0.5rem;
          margin-top: 2rem;
        }
        
        .dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #d1d5db;
        }
        
        .dot.active {
          background: #4b5563;
        }
        
        .chair-detail {
          background: linear-gradient(135deg, #f97316, #ef4444);
          padding: 5rem 2rem;
          color: white;
          min-height: 400px;
        }
        
        .chair-detail-container {
          max-width: 900px;
          margin: 0 auto;
          text-align: center;
        }
        
        .chair-detail-image {
          width: 300px;
          height: 400px;
          margin: 0 auto 2rem;
          object-fit: contain;
        }
        
        .chair-detail h2 {
          font-size: 2.5rem;
          margin-bottom: 0.5rem;
        }
        
        .price {
          font-size: 3rem;
          font-weight: bold;
          margin-bottom: 2rem;
        }
        
        .features {
          text-align: left;
          max-width: 600px;
          margin: 0 auto 2rem;
        }
        
        .features h3 {
          font-size: 1.25rem;
          margin-bottom: 1rem;
        }
        
        .features ul {
          list-style: none;
        }
        
        .features li {
          margin-bottom: 0.5rem;
          padding-left: 1.5rem;
          position: relative;
        }
        
        .features li:before {
          content: "•";
          position: absolute;
          left: 0;
        }
        
        .availability {
          border-top: 1px solid rgba(255,255,255,0.3);
          padding-top: 1.5rem;
          margin-top: 2rem;
        }
        
        .availability-label {
          font-size: 0.875rem;
          font-weight: bold;
          letter-spacing: 2px;
          margin-bottom: 0.5rem;
        }
        
        .availability-text {
          font-size: 1.125rem;
        }
        
        .locations {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
        }
        
        .location-card {
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 500px;
          padding: 3rem;
          text-align: center;
        }
        
        .location-red {
          background: #ef4444;
          color: white;
        }
        
        .location-dark {
          background: #1f2937;
          color: white;
        }
        
        .location-map {
          background: #cbd5e1;
          padding: 0;
          overflow: hidden;
          position: relative;
        }
        
        .location-map iframe {
          width: 100%;
          height: 100%;
          min-height: 500px;
          border: none;
          display: block;
        }
        
        .location-card h2 {
          font-size: 3.5rem;
          margin-bottom: 2rem;
          line-height: 1.2;
        }
        
        .location-btn {
          padding: 1rem 2.5rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          border: none;
          cursor: pointer;
          transition: all 0.3s;
        }
        
        .btn-dark {
          background: #1f2937;
          color: white;
        }
        
        .btn-dark:hover {
          background: #374151;
        }
        
        .btn-red {
          background: #ef4444;
          color: white;
        }
        
        .btn-red:hover {
          background: #dc2626;
        }
        
        .about {
          min-height: 100vh;
          background: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), 
                      url('images/blackchair.jpg') center/cover;
          display: flex;
          align-items: center;
          padding: 5rem 2rem;
        }
        
        .about-container {
          max-width: 1200px;
          margin: 0 auto;
          width: 100%;
        }
        
        .about h2 {
          text-align: center;
          font-size: 3rem;
          color: white;
          margin-bottom: 4rem;
        }
        
        .about-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }
        
        .about-box {
          background: white;
          padding: 3rem;
          line-height: 1.8;
        }
        
        .about-box-purple {
          background: #f3e8ff;
        }
        
        .contact {
          min-height: 100vh;
          background: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), #1f2937;
          display: flex;
          align-items: center;
          padding: 5rem 2rem;
        }
        
        .contact-container {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }
        
        .contact-info {
          color: white;
        }
        
        .contact-info h2 {
          font-size: 3.5rem;
          color: #ef4444;
          margin-bottom: 3rem;
        }
        
        .contact-details {
          margin-bottom: 3rem;
        }
        
        .contact-section {
          margin-bottom: 2rem;
        }
        
        .contact-section h3 {
          font-size: 1.25rem;
          margin-bottom: 0.5rem;
        }
        
        .contact-section p {
          color: #d1d5db;
        }
        
        .accessibility {
          font-size: 0.875rem;
          color: #9ca3af;
          margin-top: 1.5rem;
        }
        
        .contact-logo {
          background: white;
          padding: 3rem;
          text-align: center;
          border-radius: 8px;
        }
        
        .logo-circle {
          width: 300px;
          height: 300px;
          margin: 0 auto 1.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          background: white;
        }
        
        .logo-circle img {
          width: 80%;
          height: 80%;
          object-fit: contain;
        }
        
        .company-name {
          font-size: 2rem;
          font-weight: bold;
          letter-spacing: 3px;
          color: #1f2937;
        }
        
        @media (max-width: 768px) {
          .hero-box h1 {
            font-size: 2rem;
          }
          
          .chairs-grid {
            grid-template-columns: 1fr;
          }
          
          .locations {
            grid-template-columns: 1fr;
          }
          
          .contact-container {
            grid-template-columns: 1fr;
          }
          
          .about-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      {/* Navigation */}
      <nav>
        <div className="nav-container">
          <div className="logo">
            <div className="logo-icon">
              <img src="images/logo.png" alt="Nanami Logo" />
            </div>
            <div className="logo-text">
              <div className="logo-text-top">NANAMI MASSAGE</div>
              <div className="logo-text-bottom">CHAIR</div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-box">
            <h1>State-of-the-art<br/>massage chairs</h1>
            <p>Explore our chairs and discover luxury and comfort of owning your massage chair.</p>
            <a href="#chairs" className="btn">Get Started</a>
          </div>
        </div>
      </section>

      {/* Chairs Gallery */}
      <section id="chairs" className="chairs-section">
        <h2 className="section-title">Find peace of mind with</h2>
        <h2 className="section-title">Nanami Massage Chair</h2>
        <p className="section-subtitle">Available units:</p>
        
        <div className="chairs-grid">
          <div className="chair-card" onClick={() => showChairDetails('premium')}>
            <div className="chair-image-container">
              <img src="images/premium.png" alt="Premium" className="chair-image" />
            </div>
            <p className="chair-name">Premium</p>
          </div>
          
          <div className="chair-card" onClick={() => showChairDetails('executive')}>
            <div className="chair-image-container">
              <img src="images/executive.png" alt="Executive" className="chair-image" />
            </div>
            <p className="chair-name">Executive</p>
          </div>
          
          <div className="chair-card" onClick={() => showChairDetails('luxury')}>
            <div className="chair-image-container">
              <img src="images/luxury.png" alt="Elite" className="chair-image" />
            </div>
            <p className="chair-name">Elite</p>
          </div>
          
          <div className="chair-card" onClick={() => showChairDetails('premiumplus')}>
            <div className="chair-image-container">
              <img src="images/premium plus.png" alt="Premium Plus" className="chair-image" />
            </div>
            <p className="chair-name">Premium Plus</p>
          </div>
          
          <div className="chair-card" onClick={() => showChairDetails('luxury1')}>
            <div className="chair-image-container">
              <img src="images/luxury1.png" alt="Luxury" className="chair-image" />
            </div>
            <p className="chair-name">Luxury</p>
          </div>
          
          <div className="chair-card" onClick={() => showChairDetails('elitepro')}>
            <div className="chair-image-container">
              <img src="images/elite pro.png" alt="Elite Pro" className="chair-image" />
            </div>
            <p className="chair-name">Elite Pro</p>
          </div>
        </div>
        
        <div className="dots">
          <div className="dot"></div>
          <div className="dot active"></div>
          <div className="dot"></div>
        </div>
      </section>

      {/* Chair Detail */}
      <section className="chair-detail">
        <div className="chair-detail-container">
          {selectedChair ? (
            <>
              <img src={selectedChair.image} alt={selectedChair.name} className="chair-detail-image" />
              <h2>{selectedChair.name}</h2>
              <div className="price">{selectedChair.price}</div>
              <div className="features">
                <h3>Most advanced features:</h3>
                <ul>
                  {selectedChair.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
              <div className="availability">
                <p className="availability-label">AVAILABLE IN:</p>
                <p className="availability-text">KORONADAL AND DAVAO CITY</p>
              </div>
            </>
          ) : null}
        </div>
      </section>

      {/* Locations */}
      <section className="locations">
        <div className="location-card location-red">
          <div>
            <h2>Koronadal<br/>Branch</h2>
            <button className="location-btn btn-dark">Contact Us</button>
          </div>
        </div>
        <div className="location-card location-map">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6898.317492232694!2d124.84198959953399!3d6.493986169164506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f819b880061637%3A0x6291c93d217d22a!2sNanami%20Massage%20Chair!5e1!3m2!1sen!2sph!4v1759829724709!5m2!1sen!2sph" 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        
        <div className="location-card location-map">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4872.074718971728!2d125.5988036758185!3d7.064680416636251!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f96d001d64509d%3A0xf80e99ab7943ea74!2sNanami%20Massage%20Chair-Davao!5e1!3m2!1sen!2sph!4v1759829699988!5m2!1sen!2sph" 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div className="location-card location-dark">
          <div>
            <h2>Davao<br/>Branch</h2>
            <button className="location-btn btn-red">Contact Us</button>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="about">
        <div className="about-container">
          <h2>About the company</h2>
          <div className="about-grid">
            <div className="about-box">
              <p>We specialize in offering state-of-the-art massage chairs that combine cutting-edge technology with affordability. Explore our chairs and discover the luxury and comfort of owning your massage chair.</p>
            </div>
            <div className="about-box about-box-purple">
              <p>There are two branches: Koronadal and Davao City. Our main branch is in Koronadal City.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="contact">
        <div className="contact-container">
          <div className="contact-info">
            <h2>Get in touch</h2>
            
            <div className="contact-details">
              <div className="contact-section">
                <h3>Davao Branch</h3>
                <p>JMC Building, Gen. Douglas MacArthur Hwy</p>
                <p>Matina, Davao City</p>
              </div>
              
              <div className="contact-section">
                <h3>Koronadal Branch</h3>
                <p>Purok 9, Blk 5 Lot 11, Assumption Road, Paraiso</p>
                <p>Village, Koronadal, 9506 South Cotabato</p>
              </div>
              
              <div className="contact-section">
                <p>Tel. 0905 515 2703</p>
                <p>Email: jmptradingmindanao@gmail.com</p>
                <p>Facebook: <a href="https://www.facebook.com/NanamiMassageChair/" target="_blank" rel="noreferrer" style={{color: '#d1d5db', textDecoration: 'underline'}}>@NanamiMassageChair</a></p>
              </div>
              
              <p className="accessibility">The office is wheelchair accessible.</p>
            </div>
            
            <button className="location-btn btn-red">Call Us Today</button>
          </div>
          
          <div className="contact-logo">
            <div className="logo-circle">
              <img src="images/logo.png" alt="Nanami Logo" />
            </div>
            <div className="company-name">NANAMI</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NanamiWebsite;