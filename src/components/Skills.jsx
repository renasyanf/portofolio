import './Skills.css'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', level: 80, icon: '⚛️' },
        { name: 'JavaScript', level: 85, icon: '📜' },
        { name: 'CSS/SCSS', level: 90, icon: '🎨' },
        { name: 'Flutter', level: 90, icon: '📱' },
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Laravel', level: 85, icon: '🟢' },
        { name: 'Python', level: 80, icon: '🐍' },
        { name: 'Codeigniter', level: 85, icon: '🚂' }, 
        { name: 'MySQL', level: 85, icon: '🐘' },
      ]
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Git', level: 90, icon: '🔀' },
        { name: 'Figma', level: 80, icon: '🎭' },
      {name : 'Canva', level : 95, icon: ''},
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
            Here are some of the technologies I work with
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
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
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


