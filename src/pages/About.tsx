import React from 'react';

const About: React.FC = () => {
  return (
    <div className="about-page">
      {/* About Hero Section */}
      <section className="about-hero-section">
        <div className="container">
          <h1 className="about-hero-title">About us</h1>
          <p className="about-hero-subtitle">Three students, one frustrating problem, and a solution</p>
          
          <div className="about-story">
            <p className="about-text">
              Hi! We're three uni students who got tired of watching food and products go to waste at<br />
              our part-time jobs. Whether it was a cafe tossing expired milk or a retail shop scrambling<br />
              to find batch numbers, we kept seeing the same issue: nobody had a simple way to track<br />
              what was about to expire.
            </p>
            
            <p className="about-text">
              So we decided to build one.
            </p>
            
            <p className="about-text">
              LifeCycle started as our own solution to make work easier—for us, our managers, and our<br />
              coworkers. Now we're turning it into something that can help small businesses<br />
              everywhere stop wasting inventory and start saving money.
            </p>
            
            <p className="about-text">
              We're not a big corporate team with decades of experience. We're students who work<br />
              these jobs, understand these problems, and are building the tool we wish we'd had from<br />
              day one.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="container">
          <h2 className="mission-title">Our mission</h2>
          <p className="mission-subtitle">Stop wasting stuff. It's that simple.</p>
          
          <div className="mission-content">
            <p className="mission-text">
              We're here to help small businesses track expiration dates without the headache. No<br />
              overcomplicated software, no unnecessary features—just a straightforward system that tells<br />
              you what's about to expire so you can actually do something about it.
            </p>
            
            <p className="mission-text">
              Whether you're running a cafe, a retail shop, or anything in between, we want to make<br />
              managing inventory less painful and more practical. Less waste, less stress, more money<br />
              staying in your pocket.
            </p>
            
            <p className="mission-text">
              That's it. That's the mission.
            </p>
          </div>
        </div>
      </section>

      {/* Let's Talk Section */}
      <section className="talk-section">
        <div className="container">
          <div className="talk-content">
            <div className="talk-text">
              <h2 className="talk-title">
                Let's talk<br />
                inventory.
              </h2>
            </div>
            <div className="talk-image">
              <div className="talk-bubble">
                <div className="bubble-lines">
                  <div className="bubble-line long"></div>
                  <div className="bubble-line medium"></div>
                  <div className="bubble-line short"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="about-cta-section">
        <div className="container">
          <div className="about-cta-content">
            <div className="about-cta-text">
              <h2 className="about-cta-title">
                Get started with<br />
                LifeCycle today
              </h2>
              <p className="about-cta-description">Start reducing waste today</p>
              <button className="btn-primary">Sign up now</button>
            </div>
            <div className="about-cta-image">
              <div className="paper-plane"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

