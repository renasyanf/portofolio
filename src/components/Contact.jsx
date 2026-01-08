import { useState } from 'react'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    alert('Thank you for your message! I\'ll get back to you soon.')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Get In Touch</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">
            Have a project in mind? Let's work together and create something amazing!
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-card">
              <div className="info-icon">📧</div>
              <h3>Email</h3>
              <p>renasyanandafafirly@gmail.com</p>
              <a href="mailto:renasyanandafafirly@gmail.com">Send Email</a>
            </div>

            <div className="info-card">
              <div className="info-icon">💬</div>
              <h3>Social Media</h3>
              <p>Connect with me on social platforms</p>
              <div className="social-links">
                <a href="https://github.com/renasyanf" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="https://linkedin.com/renasyanandafafirly/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="https://instagram.com/renasyanf" target="_blank" rel="noopener noreferrer">Instagram</a>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">📍</div>
              <h3>Location</h3>
              <p>Available for remote work worldwide</p>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your Name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your.email@example.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                placeholder="Tell me about your project..."
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              Send Message
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact


