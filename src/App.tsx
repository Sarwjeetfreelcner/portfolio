import './App.css'

// SVG Icons as components
const StarIcon = () => (
  <svg className="star" viewBox="0 0 20 20" fill="currentColor">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
)

// Navigation Icons
const IntroduceIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10" />
    <path d="M12 16v-4M12 8h.01" />
  </svg>
)

const ResumeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
  </svg>
)

const ServicesIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
  </svg>
)

const SkillsIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
)

const PortfolioIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
  </svg>
)

const TestimonialIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
)

const ContactIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
)

// Skill data with CDN icon URLs
const skills = [
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'Vue.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
  { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
  { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'Tailwind', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
  { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
  { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'Electron', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/electron/electron-original.svg' },
  { name: 'Vercel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg' },
  { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
  { name: 'Supabase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg' },
]

const industries = [
  'Healthcare',
  'Real Estate',
  'Fintech',
  'EdTech',
  'E-commerce',
  'Internal Tools and Dashboards',
  'B2B Platforms',
  'Marketplace Platforms',
  'CRM Systems',
]

const projects = [
  { name: 'Curastream', color: '#00d563', image: '/portfolio/images/curastream.png', link: 'https://curastream.ai/en/' },
  { name: 'AIRadoc', color: '#8b5cf6', image: '/portfolio/images/airodoc.png', link: 'https://airadoc.com/' },
  { name: 'Sunoo OTT platform', color: '#f59e0b', image: '/portfolio/images/sunoo.png', link: 'https://sunoo.app/' },
  { name: 'Voece AI', color: '#3b82f6', image: '/portfolio/images/voece.png', link: 'https://voece.ai/' },
]

const testimonials = [
  {
    text: 'Sarwjeet delivered transformative results beyond our expectations. He optimized our workflow, resolved bottlenecks efficiently, and provided actionable insights throughout. Professional, strategic, and highly effective.',
    rating: 5,
  },
  {
    text: 'Partnering with Sarwjeet was game-changing. He aligned perfectly with our vision, anticipated needs, and delivered scalable solutions with precision. Clear expertise and collaborative spirit, strongly endorse for strategic projects.',
    rating: 5,
  },
  {
    text: 'Sarwjeet brought fresh ideas to our challenging project, turning complex requirements into an innovative solution that boosted our performance by 40%. His proactive approach and flawless execution made him stand out. Exceptional talent!',
    rating: 5,
  },
]

// Navigation items with section IDs
const navItems = [
  { id: 'intro', label: 'Introduce', icon: IntroduceIcon },
  { id: 'experience', label: 'Resume', icon: ResumeIcon },
  { id: 'industries', label: 'Services', icon: ServicesIcon },
  { id: 'skills', label: 'My Skills', icon: SkillsIcon },
  { id: 'projects', label: 'Portfolio', icon: PortfolioIcon },
  { id: 'testimonials', label: 'Testimonial', icon: TestimonialIcon },
  { id: 'contact', label: 'Approach', icon: ContactIcon },
]

function App() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <div className="portfolio-container">
      {/* Sidebar Profile Card */}
      <aside className="sidebar">
        <div className="profile-card">
          <div className="profile-image-container">
            <img src="/portfolio/images/profile.png" alt="Sarwjeet Kumar" className="profile-image" />
          </div>
          <h1 className="profile-name">Sarwjeet Kumar</h1>
          <p className="profile-title">Senior React Developer</p>
        </div>
      </aside>

      {/* Navigation Sidebar */}
      <nav className="nav-sidebar">
        {navItems.map((item) => (
          <button
            key={item.id}
            className="nav-link"
            onClick={() => scrollToSection(item.id)}
            data-tooltip={item.label}
            aria-label={item.label}
          >
            <item.icon />
          </button>
        ))}
      </nav>

      {/* Main Content */}
      <main className="main-content">
        {/* Hero Section */}
        <section className="section" id="intro">
          <span className="section-badge">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 16v-4M12 8h.01" />
            </svg>
            INTRODUCE
          </span>
          <h2 className="section-title">
            Say Hi from <span className="highlight">Sarwjeet</span>,<br />
            Senior React Developer
          </h2>
          <p className="hero-intro">
            Hi, I'm Sarwjeet, a Senior React Developer with 5+ years of experience crafting high-performance web applications and driving frontend innovation. Proficient in React, TypeScript, Redux, and Tailwind CSS, I excel at delivering intuitive UIs, optimizing load times, and collaborating on complex projects. Committed to cutting-edge solutions and exceptional user experiences.
          </p>
          <div className="stats-container">
            <div className="stat-item">
              <div className="stat-value">5+</div>
              <div className="stat-label">Years of Experience</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">20+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="section" id="experience">
          <span className="section-badge">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
              <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
            </svg>
            RESUME
          </span>
          <h2 className="section-title">Experience</h2>
          <div className="experience-item">
            <div className="experience-dot"></div>
            <div className="experience-content">
              <div className="experience-date">2020 - Present</div>
              <div className="experience-title">Senior React Developer</div>
              <div className="experience-company">Freelancer</div>
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="section" id="industries">
          <span className="section-badge">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
            SERVICES
          </span>
          <h2 className="section-title">
            <span className="highlight">Industries</span> Served
          </h2>
          <div className="industries-grid">
            {industries.map((industry, index) => (
              <span key={index} className="industry-tag">
                {industry}
              </span>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section className="section" id="skills">
          <span className="section-badge">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
            MY SKILLS
          </span>
          <h2 className="section-title">
            My <span className="highlight">Advantages</span>
          </h2>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-card">
                <div className="skill-icon">
                  <img src={skill.icon} alt={skill.name} />
                </div>
                <div className="skill-name">{skill.name}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section className="section" id="projects">
          <span className="section-badge">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
            </svg>
            PORTFOLIO
          </span>
          <h2 className="section-title">
            <span className="highlight">Featured</span> Projects
          </h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <a
                key={index}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card"
                style={{ textDecoration: 'none' }}
              >
                <div className="project-image">
                  <img src={project.image} alt={project.name} />
                </div>
                <div className="project-info">
                  <h3 className="project-title">{project.name}</h3>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="section" id="testimonials">
          <span className="section-badge">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
            TESTIMONIAL
          </span>
          <h2 className="section-title">
            Trusted by <span className="highlight">Clients</span>
          </h2>
          <div className="testimonials-container">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <p className="testimonial-text">{testimonial.text}</p>
                <div className="testimonial-footer">
                  <div className="testimonial-stars">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <StarIcon key={i} />
                    ))}
                  </div>
                  <span className="testimonial-label">Client Feedback</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="section" id="contact">
          <span className="section-badge">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            Approach
          </span>
          <h2 className="section-title">
            Let's <span className="highlight">Work Together!</span>
          </h2>
          <div className="contact-content">
            <p className="hero-intro">
              Ready to bring your next project to life? I'm available for freelance work and exciting collaboration opportunities. Let's create something amazing together!
            </p>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
