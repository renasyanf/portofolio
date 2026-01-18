import './About.css'
import profilePhoto from '../assets/nasya.jpeg'

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <div className="title-underline"></div>
        </div>

        <div className="about-content">
          <div className="about-text">
            <p className="about-intro">
              I'm a passionate developer who loves turning ideas into reality through code. 
              With a focus on creating exceptional user experiences, I combine technical 
              expertise with creative thinking.
            </p>
            <p className="about-description">
              When I'm not coding, you can find me exploring new technologies, 
              contributing to open-source projects, or sharing knowledge with the developer community. 
            </p>
            
            <div className="about-stats">
              <div className="stat-card">
                <div className="stat-number">10+</div>
                <div className="stat-label">Projects</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">1+</div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">100%</div>
                <div className="stat-label">Dedication</div>
              </div>
            </div>
          </div>

          <div className="about-image">
            <div className="image-wrapper">
              <div className="gradient-border"></div>
              <div className="image-placeholder">
                <img 
                  src={profilePhoto} 
                  alt="Renasya Nanda Fafirly" 
                  className="profile-image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

