import React, { useState } from 'react';
import usersImg from '../assets/users.png';

const Contact: React.FC = () => {
  // State to store form data - holds the user's input
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // State to track submission status - shows loading/success/error messages
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  // Updates form data when user types in any field
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Validates email format using a regular expression
  const isValidEmail = (email: string): boolean => {
    // Regular expression to check for valid email format
    // Checks for: text@text.text (with various allowed characters)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Handles form submission to Airtable
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevents page reload
    setSubmitStatus('loading'); // Shows loading state
    setErrorMessage(''); // Clears any previous errors

    // Additional email validation before sending to Airtable
    if (!isValidEmail(formData.email)) {
      setSubmitStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return; // Stop the submission
    }

    // Validate that all fields are filled
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setSubmitStatus('error');
      setErrorMessage('Please fill in all fields.');
      return; // Stop the submission
    }

    try {
      // Get environment variables
      // These are stored in your .env file and start with VITE_
      const AIRTABLE_TOKEN = import.meta.env.VITE_AIRTABLE_TOKEN;
      const BASE_ID = import.meta.env.VITE_AIRTABLE_BASE_ID;
      const TABLE_NAME = import.meta.env.VITE_AIRTABLE_TABLE_NAME || 'Contact Forms';

      // Check if environment variables are set
      if (!AIRTABLE_TOKEN || !BASE_ID) {
        throw new Error('Airtable credentials not found. Please check your .env file.');
      }

      // Send data to Airtable API
      const response = await fetch(`https://api.airtable.com/v0/${BASE_ID}/${encodeURIComponent(TABLE_NAME)}`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${AIRTABLE_TOKEN}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          records: [{
            fields: {
              Name: formData.name,
              Email: formData.email,
              Message: formData.message,
              Status: 'New' // Automatically set status to "New"
            }
          }]
        })
      });

      // Check if the request was successful
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error?.message || 'Failed to submit form');
      }

      // If successful, show success message
      setSubmitStatus('success');
      
      // Clear the form after successful submission
      setFormData({
        name: '',
        email: '',
        message: ''
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);

    } catch (error) {
      // Handle any errors that occur during submission
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
      
      // Show user-friendly error message
      if (error instanceof Error) {
        setErrorMessage(error.message);
      } else {
        setErrorMessage('Something went wrong. Please try again.');
      }
    }
  };

  return (
    <div className="contact-page">
      {/* Contact Section */}
      <section className="contact-section">
        <div className="container">
          <div className="contact-content">
            <div className="contact-image">
              <img src={usersImg} alt="contact" />
            </div>
            <div className="contact-form-section">
              <h1 className="contact-title">Contact Us</h1>
              <p className="contact-subtitle">
                Explore the future with us.<br />
                Feel free to get in touch.
              </p>
              
              {/* Success Message - shown when form is submitted successfully */}
              {submitStatus === 'success' ? (
                <div style={{
                  padding: '48px',
                  backgroundColor: '#10b981',
                  color: 'white',
                  borderRadius: '16px',
                  textAlign: 'center',
                  minHeight: '300px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: '24px'
                }}>
                  <div style={{ fontSize: '64px' }}>✓</div>
                  <h2 style={{ fontSize: '32px', fontWeight: '700', margin: '0' }}>
                    Thank You!
                  </h2>
                  <p style={{ fontSize: '18px', margin: '0', lineHeight: '1.6' }}>
                    Your message has been sent successfully.<br />
                    We'll get back to you as soon as possible.
                  </p>
                  <button
                    onClick={() => setSubmitStatus('idle')}
                    style={{
                      marginTop: '16px',
                      padding: '12px 32px',
                      backgroundColor: 'white',
                      color: '#10b981',
                      border: 'none',
                      borderRadius: '8px',
                      fontSize: '16px',
                      fontWeight: '600',
                      cursor: 'pointer'
                    }}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <>
                  {/* Error Message - shown if something goes wrong */}
                  {submitStatus === 'error' && (
                    <div style={{
                      padding: '16px',
                      marginBottom: '24px',
                      backgroundColor: '#ef4444',
                      color: 'white',
                      borderRadius: '8px',
                      textAlign: 'center'
                    }}>
                      ✗ {errorMessage}
                    </div>
                  )}
                  
                  <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-input"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    disabled={submitStatus === 'loading'} // Disable while submitting
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-input"
                    placeholder="Email address"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    disabled={submitStatus === 'loading'} // Disable while submitting
                    pattern="[^\s@]+@[^\s@]+\.[^\s@]+"
                    title="Please enter a valid email address (e.g., name@example.com)"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    className="form-textarea"
                    placeholder="How can we get better?"
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    disabled={submitStatus === 'loading'} // Disable while submitting
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="btn-primary form-submit"
                  disabled={submitStatus === 'loading'} // Disable while submitting
                >
                  {submitStatus === 'loading' ? 'Sending...' : 'Send message'}
                </button>
                </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;