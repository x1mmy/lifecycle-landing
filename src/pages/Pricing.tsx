import React, { useState } from 'react';
import questionMarkImg from '../assets/question-mark.png';
import paperAirplaneImg from '../assets/paper-airplane.png';
import { Link } from 'react-router-dom';

const Pricing: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    "How does this work?",
    "What are the benefits?",
    "Is it difficult to use?",
    "Can I have custom pricing?",
    "Is there trial version available?",
    "Where do I sign up?"
  ];

  return (
    <div className="pricing-page">
      {/* Pricing Hero Section */}
      <section className="pricing-hero-section">
        <div className="container">
          <h1 className="pricing-hero-title">Pricing</h1>
          <p className="pricing-hero-subtitle">
            Pricing tailored to your business size and<br />
            needs. Launch pricing coming soon.
          </p>
        </div>
      </section>

      {/* Pricing Plans Section */}
      <section className="pricing-plans-section">
        <div className="container">
          <div className="pricing-plans">
            {/* Starter Plan */}
            <div className="pricing-plan">
              <div className="plan-header">
                <h3 className="plan-name">Starter</h3>
                <div className="plan-price">
                  <span className="price-symbol">$</span>
                  <span className="price-amount">9</span>
                  <span className="price-period">/month</span>
                </div>
                <p className="plan-description">
                  For individuals and small<br />
                  teams
                </p>
              </div>
              <Link to="/contact" className="plan-button btn-outline">Get Started with Basic</Link>
            </div>

            {/* Pro Plan */}
            <div className="pricing-plan featured">
              <div className="plan-badge">Most Popular</div>
              <div className="plan-header">
                <h3 className="plan-name">Pro</h3>
                <div className="plan-price">
                  <span className="price-symbol">$</span>
                  <span className="price-amount">19</span>
                  <span className="price-period">/month</span>
                </div>
                <p className="plan-description">
                  For startups and growing<br />
                  businesses
                </p>
              </div>
              <Link to="/contact" className="plan-button btn-primary">Get Started with Pro</Link>
            </div>

            {/* Business Plan */}
            <div className="pricing-plan">
              <div className="plan-header">
                <h3 className="plan-name">Business</h3>
                <div className="plan-price">
                  <span className="price-symbol">$</span>
                  <span className="price-amount">99</span>
                  <span className="price-period">/month</span>
                </div>
                <p className="plan-description">
                  For organizations with<br />
                  advanced needs
                </p>
              </div>
              <Link to="/contact" className="plan-button btn-outline">Get Started with Business</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Compare Features Section */}
      <section className="features-comparison-section">
        <div className="container">
          <h2 className="comparison-title">Compare Features</h2>
          <div className="comparison-table">
            <div className="comparison-plans">
              <div className="comparison-plan">
                <h3 className="comparison-plan-name">Basic</h3>
                <div className="feature-list">
                  <div className="feature-item">
                    <div className="feature-icon">✓</div>
                    <span>Track up to 100 products</span>
                  </div>
                  <div className="feature-item">
                    <div className="feature-icon">✓</div>
                    <span>Expiration alerts</span>
                  </div>
                  <div className="feature-item">
                    <div className="feature-icon">✓</div>
                    <span>Email notifications</span>
                  </div>
                  <div className="feature-item">
                    <div className="feature-icon">✓</div>
                    <span>Performance Metrics</span>
                  </div>
                  <div className="feature-item">
                    <div className="feature-icon">✓</div>
                    <span>Basic reporting</span>
                  </div>
                </div>
              </div>

              <div className="comparison-plan">
                <h3 className="comparison-plan-name">Pro</h3>
                <div className="feature-list">
                  <div className="feature-item">
                    <div className="feature-icon">✓</div>
                    <span>Track up to 1,000 products</span>
                  </div>
                  <div className="feature-item">
                    <div className="feature-icon">✓</div>
                    <span>Advanced alerts</span>
                  </div>
                  <div className="feature-item">
                    <div className="feature-icon">✓</div>
                    <span>Team collaboration</span>
                  </div>
                  <div className="feature-item">
                    <div className="feature-icon">✓</div>
                    <span>Custom categories</span>
                  </div>
                  <div className="feature-item">
                    <div className="feature-icon">✓</div>
                    <span>Priority support</span>
                  </div>
                </div>
              </div>

              <div className="comparison-plan">
                <h3 className="comparison-plan-name">Business</h3>
                <div className="feature-list">
                  <div className="feature-item">
                    <div className="feature-icon">✓</div>
                    <span>Unlimited products</span>
                  </div>
                  <div className="feature-item">
                    <div className="feature-icon">✓</div>
                    <span>Task Management</span>
                  </div>
                  <div className="feature-item">
                    <div className="feature-icon">✓</div>
                    <span>API access</span>
                  </div>
                  <div className="feature-item">
                    <div className="feature-icon">✓</div>
                    <span>Custom integrations</span>
                  </div>
                  <div className="feature-item">
                    <div className="feature-icon">✓</div>
                    <span>Dedicated support</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <div className="faq-icon">
            {/* <div className="question-mark">?</div> */}
            <img className="question-mark" src={questionMarkImg} alt="question-mark" />
          </div>
          <h2 className="faq-title">
            Frequently asked<br />
            questions
          </h2>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item">
                <button 
                  className="faq-question"
                  onClick={() => toggleFaq(index)}
                >
                  {faq}
                  <span className={`faq-arrow ${openFaq === index ? 'open' : ''}`}>▼</span>
                </button>
                {openFaq === index && (
                  <div className="faq-answer">
                    <p>This is a placeholder answer for the FAQ question. The actual content would be provided based on your specific requirements.</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
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

export default Pricing;

