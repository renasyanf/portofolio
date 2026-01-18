import './Skills.css'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', level: 'Advanced', icon: '⚛️' },
        { name: 'JavaScript', level: 'Advanced', icon: '📜' },
        { name: 'CSS / SCSS', level: 'Expert', icon: '🎨' },
        { name: 'Flutter', level: 'Expert', icon: '📱' },
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Laravel', level: 'Advanced', icon: '🟢' },
        { name: 'Python', level: 'Intermediate', icon: '🐍' },
        { name: 'CodeIgniter', level: 'Advanced', icon: '🚂' },
        { name: 'MySQL', level: 'Advanced', icon: '🐘' },
      ]
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Git', level: 'Advanced', icon: '🔀' },
        { name: 'Figma', level: 'Intermediate', icon: '🎭' },
        { name: 'Canva', level: 'Expert', icon: '✨' },
      ]
    }
  ]

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Skills & Technologies</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">
            Technologies and tools I work with
          </p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3 className="category-title">{category.title}</h3>

              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-header">
                      <span className="skill-icon">{skill.icon}</span>
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-level">{skill.level}</span>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
