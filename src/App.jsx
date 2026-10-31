import { useState } from "react";
import {
  motion,
  useScroll,
  useSpring,
} from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  Mail,
  ExternalLink,
  Code2,
  Database,
  BarChart3,
  BrainCircuit,
  Layers3,
  Menu,
  X,
  Sparkles,
  Trophy,
  GraduationCap,
  BriefcaseBusiness,
  Code2 as Github,
  BriefcaseBusiness as Linkedin
} from "lucide-react";
import "./index.css";
const PROFILE = {
  name: "Vaishali",
  fullName: "Vaishali B",
  role: "Developer",
  email: "vaishalibalaji23@gmail.com", // Add your actual email address
  github: "https://github.com/VaishaliBalaji23", // Add your actual GitHub profile URL
  linkedin: "https://www.linkedin.com/in/vaishalibalaji23", // Add your actual LinkedIn profile URL
  resume: "/Vaishali_Balaji.pdf",
};


const projects = [
  {
    number: "01",
    title: "AI Virtual Mouse",
    category: "AI & Computer Vision",
    description: "An AI-powered hands-free computer interaction system that uses real-time hand gestures and voice commands to control mouse operations. Built with OpenCV, MediaPipe and PyAutoGUI to enable touch-free clicking, cursor movement and other computer actions.",
    technologies: ["Python", "OpenCV", "MediaPipe", "PyAutoGUI", "SpeechRecognition"],
    icon: BrainCircuit,
    color: "violet",
    github: "https://github.com/VaishaliBalaji23/AI-virtual-mouse"
  },
  {
    number: "02",
    title: "Handyman Service Platform",
    category: "Full-Stack Development",
    description: "A responsive web platform for discovering construction and handyman services and submitting service bookings. Developed using React, Node.js, Express and MySQL with API integration and JWT-based authentication.",
    technologies: ["React", "JavaScript", "HTML", "CSS", "Node.js", "Express", "MySQL", "JWT"],
    icon: Layers3,
    color: "blue",
    github: "https://github.com/VaishaliBalaji23/HandyMan-Service-Platform"
  },
  {
    number: "03",
    title: "Employee Attrition Analytics",
    category: "Data Analytics",
    description: "An HR analytics project that explores employee attrition patterns using the IBM HR dataset. Applied Python, SQL and machine learning models to analyse workforce trends and developed three interactive Power BI dashboard pages.",
    technologies: ["Python", "Pandas", "NumPy", "SQL", "Power BI", "Logistic Regression", "Random Forest"],
    icon: Database,
    color: "green",
    github: "https://github.com/VaishaliBalaji23/employee-attrition-analytics"
  },
  {
    number: "04",
    title: "FinShield – FinTech Project",
    category: "FinTech",
    description: "A FinTech solution developed during a competitive hackathon to address a financial technology problem. Collaborated with the team on application development and backend integration using FastAPI.",
    technologies: ["Python", "FastAPI", "Frontend Development", "API Integration"],
    icon: Code2,
    color: "blue",
    github: "https://github.com/VaishaliBalaji23"
  },
  {
    number: "05",
    title: "JALRAKSHAK – Dam Flood Intelligence",
    category: "Disaster Management",
    description: "A GIS-based disaster management decision-support concept focused on assessing potential dam-break flooding and downstream impacts. Explores flood simulation, geospatial visualisation and dashboard-based emergency planning.",
    technologies: ["GIS", "Geospatial Analysis", "Delft3D", "SPH", "Data Visualisation"],
    icon: Layers3,
    color: "violet",
    github: "https://github.com/VaishaliBalaji23/JALRAKSHAK-DAM-FLOOD-INTELLIGENCE"
  },
  {
    number: "06",
    title: "Samudra Sakshi",
    category: "Data Analytics",
    description: "A maritime information-focused project that explores presenting ocean-related information through a digital interface. Focuses on making relevant information easier to access and understand through web-based data presentation.",
    technologies: ["Web Development", "Data Visualisation"],
    icon: BarChart3,
    color: "blue",
    github: "https://github.com/VaishaliBalaji23/SAMUDRASAKSHI"
  },
  {
    number: "07",
    title: "Coal Wagon SmartLoad",
    category: "AI & Computer Vision",
    description: "An intelligent coal-wagon loading monitoring concept combining sensor-based data collection, machine learning and dashboard visualisation. Designed to explore weight monitoring, load distribution assessment and loading-risk prediction.",
    technologies: ["Python", "FastAPI", "Random Forest", "MQTT", "ESP32", "LiDAR", "RFID"],
    icon: BrainCircuit,
    color: "green",
    github: "https://github.com/VaishaliBalaji23/COAL-WAGON-SMARTLOAD"
  }
];


const skillGroups = [
  {
    title: "Development",
    subtitle: "Building digital experiences",
    icon: Code2,
    skills: ["React", "JavaScript", "HTML", "CSS", "Node.js", "Express", "REST APIs"],
  },
  {
    title: "Programming",
    subtitle: "Problem solving & logic",
    icon: BrainCircuit,
    skills: ["Python", "Java", "Object-Oriented Programming"],
  },
  {
     title: "Data Analytics",
    subtitle: "Turning data into insights",
    icon: BarChart3,
    skills: ["Pandas", "NumPy", "EDA", "Matplotlib", "Seaborn", "Forecasting"],
  },
  {
    title: "Data & BI",
    subtitle: "Querying and visualization",
    icon: Database,
    skills: ["SQL", "Power BI", "DAX", "Excel", "Dashboard Design", "Data Modeling"],
  },
];

const experiences = [
  {
    period: "6-month internship",
    role: "Front-End Developer Intern",
    company: "Ace Creativess",
    description:
      "Worked on responsive web applications and websites, integrated APIs, and collaborated on project requirements and user-facing experiences.",
    points: [
      "Developed responsive interfaces using React, HTML, CSS, and JavaScript.",
      "Worked with API integrations across multiple applications.",
      "Contributed to website development and UI improvements.",
      "Collaborated with team members on project requirements.",
    ],
  },
];


const getCertificateUrl = (url) => {
  if (!url) return "";

  // Keep external credential URLs unchanged
  if (/^https?:\/\//i.test(url)) return url;

  // Automatically add the GitHub Pages base path
  return `${import.meta.env.BASE_URL}${url.replace(/^\/+/, "")}`;
};

const certifications = [
  // 1. Google
  {
    provider: "Google",
    title: "Google Data Analytics Professional Certificate",
    issuer: "Google · Coursera",
    category: "Data Analytics",
    credentialUrl: "/Certificates/Coursera (Final Certificate).pdf",
  },

  // 2. Tata
  {
    provider: "Tata",
    title: "Data Visualization: Empowering Business with Effective Insights",
    issuer: "Tata · Forage",
    category: "Data Analytics",
    credentialUrl: "/Certificates/Vaishali (Data Visualization).pdf",
  },

  // 3. AWS
  {
    provider: "Amazon Web Services",
    title: "AWS Cloud Practitioner Essentials",
    issuer: "Amazon Web Services",
    category: "Cloud Computing",
    credentialUrl: "/Certificates/vaishali b-22mss047 AWS Couse certificate 1.pdf",
  },

  // 4. IBM – Coursera
  {
    provider: "IBM",
    title: "Developing Cloud Apps with Node.js and React",
    issuer: "IBM · Coursera",
    category: "Web Development",
    credentialUrl: "/Certificates/Coursera node.pdf",
  },
  {
    provider: "IBM",
    title: "Developing Cloud Native Applications",
    issuer: "IBM · Coursera",
    category: "Cloud Computing",
    credentialUrl: "/Certificates/Coursera cloud native.pdf",
  
  },
  {
    provider: "IBM",
    title: "Introduction to Web Development with HTML, CSS, JavaScript",
    issuer: "IBM · Coursera",
    category: "Web Development",
    credentialUrl: "/Certificates/intro to web.pdf",
  },
  {
    provider: "IBM",
    title: "Introduction to Cloud Computing",
    issuer: "IBM · Coursera",
    category: "Cloud Computing",
    credentialUrl: "/Certificates/intro to cloud.pdf",

  },



  // 6. MongoDB
  {
    provider: "MongoDB",
    title: "Introduction to MongoDB, AI, and Vector Search",
    issuer: "ICT Academy Learnathon",
    category: "Database & AI",
    credentialUrl: "/Certificates/Mongo db.pdf",
  },
  {
    provider: "MongoDB",
    title: "MongoDB Java Developer Path",
    issuer: "MongoDB",
    category: "Database & Development",
    credentialUrl:"Certificates/VAISHALI B-22MSS047(MONGO DB).pdf",
  },

  // 7. Spoken Tutorial – IIT Bombay

  {
    provider: "IIT Bombay",
    title: "Python 3.4.3 Training",
    issuer: "Spoken Tutorial Project · IIT Bombay",
    category: "Programming",
    credentialUrl: "/Certificates/VAISHALI-B.-Participant-Certificate (1).pdf",
  },
];

  

 

 
 
 

function Reveal({ children, delay = 0, className = "" }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.65, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
function SectionHeading({ eyebrow, title, highlight, description }) {
  return (
    <Reveal className="section-heading">
      <span className="eyebrow">
        <Sparkles size={14} />
        {eyebrow}
      </span>
      <h2>
        {title} <span className="gradient-text">{highlight}</span>
      </h2>
      {description && <p>{description}</p>}
    </Reveal>
  );
}

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    ["About", "#about"],
    ["Skills", "#skills"],
    ["Projects", "#projects"],
    ["Experience", "#experience"],
    ["Contact", "#contact"],
  ];
   return (
    <header className="navbar">
      <a className="brand" href="#home" onClick={() => setMenuOpen(false)}>
        <span className="brand-mark">VB</span>
        <span>VAISHALI B<span className="brand-dot"></span></span>
      </a>

      <button
        className="menu-toggle"
        aria-label="Toggle navigation"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X /> : <Menu />}
      </button>

      <nav className={menuOpen ? "nav-links nav-open" : "nav-links"}>
        {links.map(([label, href]) => (
          <a key={href} href={href} onClick={() => setMenuOpen(false)}>
            {label}
          </a>
        ))}
        <a className="nav-resume" href={PROFILE.resume} target="_blank" rel="noreferrer">
          Resume <ArrowRight size={14} />
        </a>
      </nav>
    </header>
  );
  }

function Hero() {
  return (
    <section className="hero section-shell" id="home">
      <div className="hero-orb orb-one" />
      <div className="hero-orb orb-two" />

      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="availability">
          <span className="status-dot" />
          DEVELOPER · DATA ANALYTICS ENTHUSIAST
        </div>

        <h1>
          Turning ideas
          <br />
          into <span className="gradient-text">digital</span>
          <br />
          experiences<span className="heading-period">.</span>
        </h1>

        <p className="hero-description">
          Hi, I'm <strong>Vaishali</strong> — a software systems student
          passionate about building useful applications, exploring new
          technologies, and turning data into meaningful insights.
        </p>

        <div className="hero-actions">
          <a href="#projects" className="button button-primary">
            Explore my work <ArrowRight size={17} />
          </a>
          <a href="#contact" className="button button-secondary">
            Let's connect <Mail size={17} />
          </a>
        </div>

        <div className="hero-socials">
          {PROFILE.github && (
            <a href={PROFILE.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <Github size={19} />
            </a>
          )}
          {PROFILE.linkedin && (
            <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <Linkedin size={19} />
            </a>
          )}
          <a href="#contact" aria-label="Contact">
            <Mail size={19} />
          </a>
        
          
        </div>
      </motion.div>
       <motion.div
        className="hero-visual"
        initial={{ opacity: 0, scale: 0.88 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.15 }}
      >
        <div className="visual-grid" />
        <div className="orbit orbit-outer" />
        <div className="orbit orbit-inner" />

        <motion.div
          className="profile-card"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="profile-card-top">
            <span className="window-dot dot-red" />
            <span className="window-dot dot-yellow" />
            <span className="window-dot dot-green" />
            <span className="window-label">developer.js</span>
          </div>
          <div className="code-preview">
            <p><span className="code-purple">const</span> developer = {"{"}</p>
            <p className="code-indent">
              name: <span className="code-green">'Vaishali'</span>,
            </p>
             <p className="code-indent">
              focus: <span className="code-green">'Development'</span>,
            </p>
            <p className="code-indent">
              curiosity: <span className="code-orange">Infinity</span>,
            </p>
            <p className="code-indent">
              learning: <span className="code-blue">true</span>
            </p>
            <p>{"};"}</p>
            <p className="code-comment">// always building something</p>
          </div>
          <div className="profile-card-bottom">
            <span><Code2 size={14} /> BUILD</span>
            <span><Database size={14} /> ANALYZE</span>
            <span><Sparkles size={14} /> INNOVATE</span>
          </div>
        </motion.div>
        <motion.div
          className="floating-chip chip-top"
          animate={{ y: [0, -7, 0] }}
          transition={{ duration: 3.6, repeat: Infinity }}
        >
          <Code2 size={17} />
          <span>Creative development</span>
        </motion.div>

        <motion.div
          className="floating-chip chip-bottom"
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <BarChart3 size={17} />
          <span>Data-driven thinking</span>
        </motion.div>
      </motion.div>

      <a href="#about" className="scroll-cue">
        <ArrowDown size={15} /> SCROLL TO EXPLORE
      </a>
    </section>
  );
}

function About() {
  const [activeTab, setActiveTab] = useState("technical");

  const tabs = [
    { id: "technical", label: "Technical Profile", icon: Code2 },
    { id: "beyond", label: "Beyond Code", icon: Sparkles },
    { id: "journey", label: "My Journey", icon: Trophy },
  ];

  const technicalAreas = [
    {
      icon: Code2,
      title: "Software Development",
      description:
        "Building responsive, user-focused applications and connecting frontend experiences with backend services, APIs and databases.",
      tags: ["React", "JavaScript", "Python", "Node.js", "Express"],
    },
    {
      icon: BarChart3,
      title: "Data Analytics",
      description:
        "Exploring datasets, discovering patterns, creating meaningful dashboards and using data to support better decisions.",
      tags: ["Python", "Pandas", "SQL", "Power BI", "Excel"],
    },
    {
      icon: BrainCircuit,
      title: "AI & Applied Research",
      description:
        "Exploring how AI and machine learning can solve practical problems through computer vision, predictive modelling and research.",
      tags: ["OpenCV", "MediaPipe", "Machine Learning", "Research"],
    },
  ];

  const beyondCode = [
    {
      icon: BriefcaseBusiness,
      title: "Public Speaking",
      description:
        "I enjoy communicating ideas and sharing perspectives. Being among the Top 100 at ICT Academy Youth Talk 2024 and reaching the Regional Prelims helped me grow as a speaker.",
    },
    {
      icon: Code2,
      title: "Writing & Sharing Ideas",
      description:
        "I also enjoy putting ideas into words. Through my Medium writing, I share thoughts, learning experiences and perspectives on technology and growth.",
    },
    {
      icon: GraduationCap,
      title: "Reading & Learning",
      description:
        "Books are one of my favourite ways to explore new perspectives. I enjoy learning beyond my technical subjects and discovering ideas that influence how I think.",
    },
    {
      icon: Trophy,
      title: "Hackathons & Collaboration",
      description:
        "Taking part in multiple hackathons has given me opportunities to collaborate, experiment, think under pressure and turn ideas into working solutions.",
    },
  ];

  const journeyItems = [
    "Exploring software development and data analytics through academic and personal projects.",
    "Completing a six-month Front-End Developer internship at Ace Creativess.",
    "Building projects across web development, AI, analytics and problem-solving.",
    "Participating in multiple hackathons and collaborative innovation challenges.",
    "Earning certifications and continuing to develop skills beyond the classroom.",
    "Receiving a Best Idea Award at an international conference hosted by KCT institutions.",
  ];

  return (
    <section id="about" className="about-section">
      <div className="section-heading">
        <span className="section-eyebrow">A LITTLE ABOUT ME</span>
        <h2>More than just <span>code.</span></h2>
        <p>
          A developer by practice, an analyst by curiosity, and a lifelong
          learner by choice.
        </p>
      </div>

      <div className="about-intro-card">
        <div className="about-intro-top">
          <span className="about-status">
            <span className="status-dot" />
            Always learning · Always building
          </span>
          <Sparkles size={22} />
        </div>

        <h3>
          Hello! I'm Vaishali.
        </h3>

        <p>
          I'm a Software Systems student with a strong interest in
          software development and data analytics. I enjoy creating
          applications, exploring datasets and transforming ideas into
          practical solutions.
        </p>

        <p>
          From developing web applications and experimenting with AI
          to building analytical dashboards and participating in
          hackathons, I like exploring technology from different angles.
          I believe the best learning happens when curiosity meets
          hands-on experience.
        </p>
      </div>

      <div className="about-tabs" role="tablist" aria-label="About me sections">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={activeTab === tab.id}
              className={`about-tab ${activeTab === tab.id ? "active" : ""}`}
              onClick={() => setActiveTab(tab.id)}
            >
              <Icon size={17} />
              {tab.label}
            </button>
          );
        })}
      </div>

      {activeTab === "technical" && (
        <motion.div
          className="about-content-grid"
          key="technical"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
        >
          {technicalAreas.map((area) => {
            const Icon = area.icon;
            return (
              <article className="about-detail-card" key={area.title}>
                <div className="about-icon">
                  <Icon size={23} />
                </div>
                <h3>{area.title}</h3>
                <p>{area.description}</p>
                <div className="about-tags">
                  {area.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </article>
            );
          })}
        </motion.div>
      )}

      
{activeTab === "beyond" && (
  <>
    <motion.div
      className="about-content-grid"
      key="beyond"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
    >
      {beyondCode.map((item) => {
        const Icon = item.icon;

        return (
          <article className="about-detail-card" key={item.title}>
            <div className="about-icon">
              <Icon size={23} />
            </div>

            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        );
      })}
    </motion.div>

    {/* Medium link at the bottom of Beyond Code only */}
    <div className="about-closing">
      <p>
        I’m always curious about what I can learn, what I can build
        and how I can make an idea meaningful.
      </p>

      <a
        href="https://medium.com/@vaishalibalaji23"
        target="_blank"
        rel="noreferrer"
        className="about-medium-link"
      >
        Explore my writing <ArrowRight size={16} />
      </a>
    </div>
  </>
)}


      {activeTab === "journey" && (
        <motion.div
          className="about-journey"
          key="journey"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
        >
          <h3>A journey shaped by curiosity and action.</h3>
          <div className="journey-list">
            {journeyItems.map((item, index) => (
              <div className="journey-item" key={index}>
                <span className="journey-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </motion.div>
      )}

 
    </section>
  );
}

function Skills() {
  const skillGroups = [
    {
      title: "Programming Languages",
       subtitle: "The languages I use to build and solve problems.",
      icon: Code2,
      accent: "purple",
      skills: [
        "Python",
        "SQL",
        "Java",
        "C++",
        "JavaScript",
      ],
    },
    {
      title: "Frontend Development",
   subtitle: "Creating responsive and user-friendly interfaces.",
      icon: Layers3,
      accent: "blue",
      skills: [
        "React.js",
        "HTML5",
        "CSS3",
        "JavaScript",
        "Responsive Design",
      ],
    },
    {
      title: "Data Analytics & Business Intelligence",
           subtitle: "Turning raw data into meaningful insights.",
      icon: BarChart3,
      accent: "green",
      skills: [
        "Power BI",
        "Excel",
        "Pandas",
        "NumPy",
        "Matplotlib",
        "Seaborn",
        "Tableau",
        "Exploratory Data Analysis",
        "Data Modeling",
      ],
      
    },
    {
      title: "Backend & API Integration",
         subtitle: "Connecting applications and services.",
      icon: Database,
      accent: "orange",
      skills: [
        "REST APIs",
        "API Integration",
        "Database Connectivity",
        "SQL",
      ],

    },
    {
      title: "Core Computer Science",
      subtitle: "The fundamentals behind effective development.",
      icon: BrainCircuit,
      accent: "pink",
      skills: [
        "Data Structures",
        "Object-Oriented Programming",
        "DBMS",
        "Operating Systems",
        "Problem Solving",
      ],
    },
    {
      title: "AI, Computer Vision & Research",
      subtitle: "Exploring intelligent and image-based applications.",
      icon: Sparkles,
      accent: "cyan",
      skills: [
        "OpenCV",
        "MediaPipe",
        "Computer Vision",
        "Hand Gesture Recognition",
        "GAN-based Research",
        "Predictive Modelling",
      ],
    },
    {
      title: "Tools & Platforms",
      subtitle: "The tools that support my development workflow.",
      icon: Code2,
      accent: "purple",
      skills: [
        "GitHub",
        "VS Code",
        "Android Studio",
        "Power BI Service",
        "Git",
      ],
    },
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="section-heading">
        <span className="section-eyebrow">MY TECHNICAL TOOLKIT</span>
        <h2>Skills & <span>Technologies</span></h2>
        <p>
          A combination of development, analytics and problem-solving
          skills that I continue to strengthen through projects,
          research and hands-on learning.
        </p>
      </div>

    


      <div className="skills-grid">
        {skillGroups.map((group, index) => {
          const Icon = group.icon;

          return (
            <motion.article
              className={`skill-card skill-${group.accent}`}
              key={group.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.45,
                delay: (index % 3) * 0.08,
              }}
            >
              <div className="skill-card-top">
                <div className="skill-icon">
                  <Icon size={24} />
                </div>
                <span className="skill-index">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <h3>{group.title}</h3>
              <span className="skill-subtitle">{group.subtitle}</span>

              <p className="skill-description">
                {group.description}
              </p>

              <div className="skill-tags">
                {group.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </motion.article>
          );
        })}
      </div>

   
    </section>
  );
}

      
   

function Projects() {
  const [filter, setFilter] = useState("All");

  const filters = [
    "All",
    "Full-Stack Development",
    "AI & Computer Vision",
    "Data Analytics",
    "FinTech",
    "Disaster Management",
  ];

  const visibleProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <section className="section-shell section-space" id="projects">
      <SectionHeading
        eyebrow="SELECTED WORK"
        title="Ideas turned into"
        highlight="projects."
        description="A selection of development, AI, analytics, and innovation projects. Visit my GitHub for additional work."
      />

      <div className="project-filters">
        {filters.map((item) => (
          <button
            key={item}
            className={
              filter === item ? "filter-button active" : "filter-button"
            }
            onClick={() => setFilter(item)}
          >
            {item}
          </button>
        ))}
      </div>

      <motion.div layout className="projects-grid">
        {visibleProjects.map((project) => {
          const Icon = project.icon;

          return (
            <motion.article
              layout
              key={project.title}
              className={`project-card project-${project.color}`}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="project-topline">
                <span className="project-number">
                  {project.number} / PROJECT
                </span>
                <div className="project-icon">
                  <Icon size={21} />
                </div>
              </div>

              <span className="project-category">
                {project.category}
              </span>

              <h3>{project.title}</h3>

              <p className="project-description">
                {project.description}
              </p>

              <div className="project-detail-block">
                <h4>Technologies Used</h4>
                <div className="project-tech">
                  {project.technologies.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
              </div>

              <div className="project-footer">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View GitHub <Github size={16} />
                </a>

                <span className="project-arrow">
                  <ArrowRight size={18} />
                </span>
              </div>
            </motion.article>
          );
        })}
      </motion.div>
    </section>
  );
}


function Experience() {
  const experienceStats = [
    { number: "6", suffix: "Months", label: "Professional internship" },
    { number: "8+", suffix: "", label: "Responsive applications" },
    { number: "5+", suffix: "", label: "APIs integrated" },
    { number: "3+", suffix: "", label: "Website domains" },
  ];

  
const contributions = [
  {
    title: "Frontend Development",
    description:
      "Developed 8+ responsive web applications using React.js, HTML, CSS and JavaScript for different project requirements.",
  },
  {
    title: "Reusable Components",
    description:
      "Built reusable React components to maintain consistent UI layouts and improve code organization.",
  },
  {
    title: "API Integration",
    description:
      "Integrated 5+ APIs to connect frontend interfaces with backend services and display dynamic data.",
  },
  {
    title: "Website Development",
    description:
      "Contributed to community, construction and official business websites with a focus on responsive design.",
  },
  {
    title: "Client Communication",
    description:
      "Participated in client discussions, requirement gathering and project coordination.",
  },
  {
    title: "Marketing Collaboration",
    description:
      "Supported marketing activities through client outreach, lead generation and team collaboration.",
  },
];


  const technologies = [
    "React.js",
    "JavaScript",
    "HTML5",
    "CSS3",
    "REST APIs",
    "Responsive Design",
  ];

  return (
    <section className="section-shell section-space" id="experience">
      <SectionHeading
        eyebrow="WHERE I'VE GROWN"
        title="Experience &"
        highlight="learning."
        description="A closer look at my professional journey, technical contributions and experience working on real-world web development projects."
      />

      <div className="experience-stats">
        {experienceStats.map((stat, index) => (
          <Reveal key={stat.label} delay={index * 0.08}>
            <div className="experience-stat-card">
              <h3>
                {stat.number}
                <span>{stat.suffix}</span>
              </h3>
              <p>{stat.label}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <article className="experience-card experience-featured">
          <div className="experience-top">
            <span className="card-label">6-MONTH INTERNSHIP</span>
            <span className="experience-type">PROFESSIONAL EXPERIENCE</span>
          </div>

          <h3 className="experience-company-name">
            Ace Creatives
          </h3>

          <h4 className="experience-role-title">
            Frontend Developer Intern
          </h4>

          <p className="experience-description">
            Worked as a Frontend Developer Intern, gaining practical
            experience in developing responsive web applications,
            integrating APIs, collaborating with teams and understanding
            real-world project requirements.
          </p>

         
<div className="experience-contributions">
  <h4 className="experience-section-title">
    Key Contributions & Responsibilities
  </h4>

  <div className="contribution-box">
    {contributions.map((item, index) => (
      <div className="contribution-row no-number" key={item.title}>
     
        <div className="contribution-content">
          <h5>{item.title}</h5>
          <p>{item.description}</p>
        </div>
      </div>
    ))}
  </div>
</div>


          

          <div className="experience-tech">
            <h4 className="experience-section-title">
              Technologies & Tools
            </h4>
            <div className="experience-tech-list">
              {technologies.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
          </div>
        </article>
      </Reveal>
    </section>
  );
}

function Research() {
  const publications = [
    {
      type: "PUBLISHED RESEARCH PAPER",
      title:
        "Nanobiotechnology-Enabled Strategies for Early Detection and Therapeutic Intervention in Parkinson's Disease: A Comprehensive Review",
      description:
        "A comprehensive review exploring how nanobiotechnology can support early Parkinson's disease detection and therapeutic intervention through precision drug delivery, biomarker detection and neuroprotective strategies.",
      journal:
        "International Journal of Scientific Research and Engineering Development (IJSRED)",
      link:
        "https://www.ijsred.com/volume9/issue4/paper-details/IJSRED-V9I4P40.html",
      tags: ["Nanobiotechnology", "Parkinson's Disease", "Medical Research"],
    },
    {
      type: "PUBLISHED RESEARCH PAPER",
      title:
        "PETGAN: Enhancing Low-Dose PET Imaging Using GAN-Based Denoising for Improved Oncology Diagnostics",
      description:
        "Research exploring GAN-based denoising of low-dose PET images using a U-Net generator and PatchGAN discriminator to improve medical image quality for oncology diagnostics.",
      journal:
        "International Journal of Engineering Research in Computer Science and Engineering (IJERCSE)",
      details: "Published research paper",
      authors: "As listed in the publication",
      tags: ["Generative Adversarial Networks", "Medical Imaging", "Deep Learning"],
    },
  ];

  const presentations = [
    {
      title:
        "Quality Control in Food and Beverage Industry Using Canny Edge Detection Algorithm",
      description:
        "Presented research on applying Canny Edge Detection for industrial quality control in the food and beverage industry.",
      tag: "Digital Image Processing",
    },
    {
      title:
        "Iris Recognition – An Emerging Biometric Technology for Attendance Systems",
      description:
        "Presented research exploring iris recognition as a biometric-based approach to attendance automation.",
      tag: "Biometric Technology",
    },
  ];

  return (
    <section className="section-shell section-space" id="research">
      <SectionHeading
        eyebrow="RESEARCH & INNOVATION"
        title="Publications &"
        highlight="presentations."
        description="Research contributions and technical presentations exploring healthcare technology, artificial intelligence, image processing and real-world applications."
      />

      <div className="publication-grid">
        {publications.map((paper, index) => (
          <Reveal
            key={paper.title}
            delay={index * 0.1}
            className="publication-card"
          >
            <div className="publication-top">
              <span className="card-label">{paper.type}</span>
              <BrainCircuit size={23} />
            </div>

            <h3>{paper.title}</h3>
            <p className="publication-description">{paper.description}</p>

            <div className="publication-details">
              <p><strong>Journal:</strong> {paper.journal}</p>
           
            </div>

            <div className="research-tags">
              {paper.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>

            {paper.link && (
              <a
                href={paper.link}
                target="_blank"
                rel="noreferrer"
                className="publication-link"
              >
                Read published paper <ExternalLink size={15} />
              </a>
            )}
          </Reveal>
        ))}
      </div>

      <div className="presentation-section">
        <h3 className="presentation-heading">
          Research Presentations
        </h3>

        <div className="presentation-grid">
          {presentations.map((paper, index) => (
            <Reveal
              key={paper.title}
              delay={index * 0.1}
              className="presentation-card"
            >
              <span className="card-label">RESEARCH PRESENTATION</span>
              <h4>{paper.title}</h4>
              <p>{paper.description}</p>
              <span className="presentation-tag">{paper.tag}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

 
function Achievements() {
  const achievements = [
    {
      icon: Trophy,
      category: "AWARD & RECOGNITION",
      title: "Best Idea Award – International Conference",
      description:
        "Received the Best Idea Award at an international conference hosted by KCT Institutions, recognizing innovation, creative problem-solving and the potential impact of the proposed idea.",
      highlights: [
        "Recognized for innovative thinking and idea development.",
        "Presented a solution in an international conference setting.",
        "Demonstrated creativity and problem-solving capabilities.",
      ],
    },
    {
      icon: Sparkles,
      category: "PUBLIC SPEAKING & LEADERSHIP",
      title: "ICT Academy Youth Talk 2024",
      description:
        "Selected among the Top 100 participants in ICT Academy Youth Talk 2024 and qualified for the Regional Prelims, demonstrating communication skills, confidence and the ability to present ideas effectively.",
      highlights: [
        "Selected among the Top 100 participants.",
        "Qualified for the Regional Prelims.",
        "Strengthened public speaking and presentation skills.",
      ],
    },
    {
      icon: Code2,
      category: "TECHNICAL INNOVATION",
      title: "Hackathons & Innovation Challenges",
      description:
        "Participated in technology-driven hackathons and collaborative innovation challenges, working on practical problem statements across FinTech and disaster management.",
      highlights: [
        "Contributed to a FinTech hackathon project involving a FastAPI backend.",
        "Worked on JALRAKSHAK, a GIS-based disaster management decision-support concept.",
        "Collaborated with teammates to explore technical solutions under time constraints.",
      ],
    },
  
  ];

  return (
    <section className="section-shell section-space" id="achievements">
      <SectionHeading
        eyebrow="MILESTONES & RECOGNITION"
        title="Achievements &"
        highlight="recognition."
        description="A collection of professional milestones reflecting my technical curiosity, innovation, research contributions, communication skills and collaborative experience."
      />

      <div className="achievement-grid">
        {achievements.map((achievement, index) => {
          const Icon = achievement.icon;

          return (
            <Reveal
              key={achievement.title}
              delay={index * 0.1}
              className="achievement-card"
            >
              <div className="achievement-top">
                <div className="achievement-icon">
                  <Icon size={23} />
                </div>
                <span className="achievement-category">
                  {achievement.category}
                </span>
              </div>

              <h3>{achievement.title}</h3>

              <p className="achievement-description">
                {achievement.description}
              </p>

              <div className="achievement-highlights">
                {achievement.highlights.map((point) => (
                  <div className="achievement-highlight" key={point}>
                    <span className="achievement-dot" />
                    <p>{point}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
  


function Certifications() {
  return (
    <section
      className="section-shell section-space"
      id="certifications"
    >
      <SectionHeading
        eyebrow="CONTINUOUS LEARNING"
        title="Certifications &"
        highlight="credentials."
        description="A collection of professional courses and certifications across data analytics, cloud computing, software development and emerging technologies."
      />

      <div className="certification-grid">
        {certifications.map((cert, index) => (
          <Reveal
            key={cert.title}
            delay={index * 0.04}
            className="certification-card"
          >
            <div className="certification-top">
              <span className="certification-provider">
                {cert.provider}
              </span>
              <span className="certification-category">
                {cert.category}
              </span>
            </div>

            <h3>{cert.title}</h3>
            <p className="certification-issuer">{cert.issuer}</p>

            {cert.status && (
              <span className="certification-status">
                {cert.status}
              </span>
            )}

            {(cert.credentialUrl || cert.courseUrl) && (
              <div className="certification-actions">
                {cert.credentialUrl && (
                  <a
                    href={getCertificateUrl(cert.credentialUrl)}
                    target="_blank"
                    rel="noreferrer"
                    className="certification-link"
                  >
                    View Credential <ExternalLink size={14} />
                  </a>
                )}

                {cert.courseUrl && (
                  <a
                    href={cert.courseUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="certification-course-link"
                  >
                    View Course <ExternalLink size={14} />
                  </a>
                )}
              </div>
            )}
          </Reveal>
        ))}
      </div>
    </section>
  );
}

      
 






function Contact() {
  const hasEmail = Boolean(PROFILE.email);

  return (
    <section className="section-shell contact-section" id="contact">
      <div className="contact-glow" />
      <Reveal className="contact-content">
        <span className="eyebrow">
          <span className="status-dot" />
          OPEN TO OPPORTUNITIES
        </span>
        <h2>
          Have an idea?
          <br />
          Let's build <span className="gradient-text">something great.</span>
           </h2>
        <p>
          I'm interested in development opportunities, collaborative projects,
          and learning from people who enjoy building meaningful technology.
        </p>

        <div className="contact-actions">
          {hasEmail ? (
            <a className="button button-primary" href={`mailto:${PROFILE.email}`}>
              Say hello <Mail size={17} />
            </a>
          ) : (
            <span className="button button-secondary">
              Add your email in App.jsx <Mail size={17} />
            </span>
          )}
            {PROFILE.github && (
            <a className="button button-secondary" href={PROFILE.github} target="_blank" rel="noreferrer">
              GitHub <Github size={17} />
            </a>
          )}

          {PROFILE.linkedin && (
            <a className="button button-secondary" href={PROFILE.linkedin} target="_blank" rel="noreferrer">
              LinkedIn <Linkedin size={17} />
            </a>
          )}
        </div>
      </Reveal>
    </section>
  );
}
function Footer() {
  return (
    <footer className="footer section-shell">
      <a className="brand" href="#home">
        <span className="brand-mark">VB</span>
        <span>VAISHALI B<span className="brand-dot"></span></span>
      </a>
      <p>Designed with curiosity. Built with code.</p>
      <a href="#home" className="back-to-top">BACK TO TOP ↑</a>
    </footer>
  );
}

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <>
      <motion.div className="scroll-progress" style={{ scaleX }} />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Research />
        <Achievements />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  );
}