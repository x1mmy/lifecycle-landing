import React from 'react';
import checklistImg from '../assets/checklist.png';
import nodeTreeImg from '../assets/node-tree.png';
import secureWebImg from '../assets/secure-web.png';
import lossImg from '../assets/loss.png';
import usersImg from '../assets/users.png';
import paperAirplaneImg from '../assets/paper-airplane.png';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">
                Never let<br />
                inventory<br />
                expire again
              </h1>
              <p className="hero-description">
                Monitor product lifecycles and get timely alerts before<br />
                items expire. Perfect for small businesses managing<br />
                perishable goods.
              </p>
              <div className="hero-buttons">
                <Link to="/contact" className="btn-primary">Get started</Link>
                <Link to="/contact" className="btn-secondary">See how it works</Link>
              </div>
            </div>
            <div className="hero-image">
              <div className="clipboard-3d">
                  <img src={checklistImg} alt="checklist" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Smart Expiration Tracking Section */}
      <section className="feature-section">
        <div className="container">
          <div className="feature-content">

            <div className="feature-text">
              <h2 className="feature-title">Smart expiration tracking</h2>
              <p className="feature-description">
                Keep your inventory fresh and<br />
                compliant. Get automated alerts before<br />
                products expire and reduce waste<br />
                across your business.
              </p>
              <Link to="/contact" className="btn-primary">Try for free</Link>
            </div>
            <div className="feature-image">
              <img src={nodeTreeImg} alt="node tree" />
              {/* <div className="factory-3d">
                <div className="factory-base"></div>
                <div className="factory-chimney"></div>
                <div className="factory-pipes"></div>
                <div className="factory-boxes"></div>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="security-section">
        <div className="container">
          <div className="security-content">
          <div className="security-image">
              <img src={secureWebImg} alt="security" />
              {/* <div className="security-folder">
              //   <div className="folder-base"></div>
              //   <div className="folder-lock"></div>
              </div> */}
            </div>
            <div className="security-text">
              <h2 className="security-title">All your work is safe with us</h2>
              <p className="security-description">
                We understand how important data and<br />
                information security is to you and your business.<br />
                That's why we've implemented industry-leading<br />
                security measures to keep your data protected<br />
                and accessible only to you.
              </p>
              <Link to="/contact" className="btn-outline">Try now</Link>
            </div>

          </div>
        </div>
      </section>

            {/* redice cost Section */}
            <section className="security-section">
        <div className="container">
          <div className="security-content">

            <div className="security-text">
              <h2 className="security-title">Reduce waste, save money</h2>
              <p className="security-description">
              Stop losing money on expired products. LifeCycle helps you
                track expiration dates, optimise inventory rotation, and cut
                waste by up to 40%. More savings, less stress.
              </p>
              <Link to="/contact" className="btn-outline">Try now</Link>
            </div>
            <div className="security-image">
              <img src={lossImg} alt="waste" />
              {/* <div className="security-folder">
              //   <div className="folder-base"></div>
              //   <div className="folder-lock"></div>
              </div> */}
            </div>

          </div>
        </div>
      </section>

     

      {/* How to Get Started Section */}
      <section className="steps-section">
        <div className="container">
          <div className="steps-content">
            
            {/* LEFT SIDE: Image at top, then title/description/button below */}
            <div className="steps-left">
              {/* User spheres image */}
              <div className="steps-image">
                <img src={usersImg} alt="users" />
              </div>
              
              {/* Text content below image */}
              <div className="steps-info">
                <h2 className="steps-title">How to get started with LifeCycle</h2>
                <p className="steps-subtitle">
                  Schedule a consultation and we'll help you set up the perfect solution for your business.
                </p>
                <Link to="/contact" className="btn-primary">Sign up now</Link>
              </div>
            </div>

            {/* RIGHT SIDE: The 3 Steps */}
            <div className="steps-right">
              <div className="steps-list">
                <div className="step">
                  <div className="step-number">Step 1</div>
                  <p className="step-description">
                    Sign up and tell us about your<br />
                    business and inventory management<br />
                    needs.
                  </p>
                </div>
                <div className="step">
                  <div className="step-number">Step 2</div>
                  <p className="step-description">
                    Our team will reach out to schedule a<br />
                    personalised consultation and demo.
                  </p>
                </div>
                <div className="step">
                  <div className="step-number">Step 3</div>
                  <p className="step-description">
                    We'll help you get set up and start<br />
                    optimising your inventory<br />
                    management.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="container">
          <h2 className="testimonials-title">Testimonials</h2>
          <p className="testimonials-subtitle">People who think we do our job well for your brand</p>
          <div className="testimonials-grid">
            <div className="testimonial">
              <div className="testimonial-text">
                <strong>Since implementing </strong> 
                LifeCycle, we've reduced
                inventory waste by 35%
                and saved thousands.
              </div>
              <div className="testimonial-rating">
                <div className="stars">★★★★★</div>
              </div>
              <div className="testimonial-author">Sarah Wilson</div>
            </div>
            <div className="testimonial">
              <div className="testimonial-text">
                <strong>The app </strong> 
                is so easy business
                tracking and prevents
                costly expired inventory.
              </div>
              <div className="testimonial-rating">
                <div className="stars">★★★★★</div>
              </div>
              <div className="testimonial-author">Mike Rodriguez</div>
            </div>
            <div className="testimonial">
              <div className="testimonial-text">
                <strong>The application alerts </strong>
                have transformed how
                we manage perishable
                goods. Highly recommend! 
              </div>
              <div className="testimonial-rating">
                <div className="stars">★★★★★</div>
              </div>
              <div className="testimonial-author">Lisa Chen</div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="final-cta-section">
        <div className="container">
          <div className="final-cta-content">
            <div className="final-cta-text">
              <h2 className="final-cta-title">
                Get started with<br />
                LifeCycle today
              </h2>
              <p className="final-cta-description">Start reducing waste today</p>
              <Link to="/contact" className="btn-primary">Sign up now</Link>
            </div>
            <div className="final-cta-image">
              <img src={paperAirplaneImg} alt="paper-plane" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

