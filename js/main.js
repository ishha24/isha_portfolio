document.addEventListener('DOMContentLoaded', () => {
    // Initialize elements
    const mainContent = document.getElementById('main-content');
    const loader = document.querySelector('.terminal-loader');
    const backToTopButton = document.getElementById('backToTop');

    // Hide main content initially
    mainContent.style.display = 'none';

    // Show content after loader
    setTimeout(() => {
        loader.style.animation = 'fadeOut 0.5s ease';
        setTimeout(() => {
            loader.style.display = 'none';
            mainContent.style.display = 'block';
            mainContent.style.animation = 'fadeIn 0.5s ease';
        }, 4000);
    }, 100);

    // Back to top button functionality
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopButton.classList.add('show');
        } else {
            backToTopButton.classList.remove('show');
        }
    });

    // Single click event listener for back to top
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
// Add this to your main.js
document.querySelectorAll('.nav-items .group').forEach(item => {
    item.addEventListener('click', (e) => {
      const target = e.currentTarget.querySelector('.nav-tooltip').textContent.toLowerCase();
      document.getElementById(target)?.scrollIntoView({ behavior: 'smooth' });
    });
  });
  
  // Active section tracking
  function updateActiveSection() {
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-items .group');
    
    sections.forEach((section, index) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= 150 && rect.bottom >= 150) {
        navItems.forEach(item => item.querySelector('div').classList.remove('text-blue-500'));
        navItems[index].querySelector('div').classList.add('text-blue-500');
      }
    });
  }
  
  window.addEventListener('scroll', updateActiveSection);
  updateActiveSection();
  
// Content Data
// Content Data with updates
// Content Data
const roles = ["Research Associate", "Python Dev", "Beginner in AI/ML"];

const projects = [
    {
        title: "Hexa",
        description: "Hexa is a real-time voice assistant system that uses a AI and NLP to talk and task as per user's requirement.",
        tags: ["Python", "AI", "NLP"],
        github: "https://github.com/ishha24/Hexa"
    },
    {
        title: "E-Commerce Sales & Analysis",
        description: "This project uses python and it's most extensive libraries like pandas, numpy, plotly to study and visualize trends in e-commerce markets.",
        tags: ["Python", "Plotly", "Numpy", "Pandas"],
        github: "https://github.com/ishha24/Ecommerce_sales_analysis"
    },
    {
        title: "SpeedScope",
        description: "It is a modern, user-friendly Python GUI application for testing and analyzing your internet connection speed. It provides real-time speed measurements & historical data tracking.",
        tags: ["Python", "Custom T-Kinter", "InternetSpeed"],
        github: "https://github.com/ishha24/speedscope"
    },
    {
        title: "Website Template",
        description: "A general website template that allows small startups to get a digital identity. Built with HTML, CSS, JavaScript for smooth and responsive page.",
        tags: ["HTML", "CSS", "JavaScript"],
        github: "https://github.com/ishha24/Web-Sol"
    },

];

const techStack = [
    // Languages & Core Technologies
    { name: "Python", class: "python-bg" },
    { name: "HTML5", class: "html5-bg" },
    { name: "CSS3", class: "css3-bg" },
    { name: "JavaScript", class: "javascript-bg" },
    { name: "SQL", class: "sql-bg" },

    
    // Frameworks & Libraries
    { name: "Pandas", class: "panda-bg" },
    { name: "Numpy", class: "numpy-bg" },
    { name: "Plotly", class: "plotly-bg" },
    { name: "Matplotlib", class: "matplotlib-bg" },
    { name: "sci-kit", class: "sci-bg" },
    { name: "Transformer", class: "trans-bg" },
    
    
    // Databases & Tools
    { name: "Torch", class: "torch-bg" },
    { name: "MySQL", class: "mysql-bg" },
    { name: "Canva", class: "canva-bg" },
    { name: "GitHub", class: "github-bg" },
    { name: "Git", class: "git-bg" }
];

const education = [
    {
        school: "J.C. Bose University of Science & Technology, YMCA",
        degree: "B.Tech in Computer Science Engineering",
        period: "2021 - 2025",
        description: "CGPA ~ 7.5",
    },
    {
        school: "Vidya Niketan High School, Delhi-NCR",
        degree: "High School",
        period: "Completed in 2021",
        description: "Science with CS",
    },
    {
        school: "DUCAT Institue, Delhi-NCR",
        degree: "Fullstack Development",
        period: "Completed in 2023",
        description: "Full stack development in Java"
    }
    ,
    {
        school: "Coursera, Online",
        degree: "Python for AI and Development",
        period: "Completed in 2024",
        description: "Learnt python basics for AI and Development"
    }
    ,
    {
        school: "Coursera, Online",
        degree: "Introduction to Data Engineering",
        period: "Completed in 2024",
        description: "Understood basics of Data Engineering"
    }
];

const experience = [
    {
        title: "AI Research & Development Intern",
        company: "Kognoz",
        period: "Apr 2025 - Present",
        description: "Involved in test cases, AI research  & helping python development team",
    },
    {
        title: "Research Intern",
        company: "Soulcurry",
        period: "Jan 2025 - Mar 2025",
        description: "Was involved in researching reliable content and generating reports",
    },
    {   title: "Research Writer",
        company: "i-pangram",
        period: "2024",
        description: "Was involved in researching reliable content and generating articles",
    }
];
// Loader and Initial Setup
document.addEventListener('DOMContentLoaded', () => {
    const mainContent = document.getElementById('main-content');
    const loader = document.querySelector('.terminal-loader');

    // Hide main content initially
    mainContent.style.display = 'none';

    // Show content after loader
    setTimeout(() => {
        loader.style.animation = 'fadeOut 0.5s ease';
        setTimeout(() => {
            loader.style.display = 'none';
            mainContent.style.display = 'block';
            mainContent.style.animation = 'fadeIn 0.5s ease';
        }, 500);
    }, 4000);

    // Initialize everything else
    initializeEventListeners();
    populateAllSections();
});

function initializeEventListeners() {
    // Navigation
    document.querySelectorAll('.nav-items .group').forEach(item => {
        item.addEventListener('click', handleNavigation);
    });

    // Back to top button
    const backToTopButton = document.getElementById('backToTop');
    if (backToTopButton) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTopButton.classList.add('show');
            } else {
                backToTopButton.classList.remove('show');
            }
        });

        backToTopButton.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
}

function handleNavigation(e) {
    const target = e.currentTarget.querySelector('.nav-tooltip').textContent.toLowerCase();
    document.getElementById(target)?.scrollIntoView({ behavior: 'smooth' });
}

function populateAllSections() {
    const typingElement = document.querySelector('.typing-text');
    new TypingAnimation(typingElement, roles);

    populateProjects();
    populateSkills();
    populateEducation();
    populateExperience();
    
    document.getElementById('year').textContent = new Date().getFullYear();
    initializeIntersectionObserver();
}

function populateProjects() {
    const projectsGrid = document.querySelector('.projects-grid');
    projectsGrid.innerHTML = '';
    
    projects.forEach((project, index) => {
        const card = document.createElement('div');
        card.className = 'card bg-[#0f1729] rounded-2xl overflow-hidden relative transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]';

        card.innerHTML = `
            <div class="card-content p-4 relative z-10">
                <h2 class="text-lg font-bold text-white/90 truncate">
                    ${project.title}
                </h2>
                
                <div class="mb-4">
                    <p class="text-sm text-white/70 mb-4">${project.description}</p>
                    <div class="flex flex-wrap -mx-1">
                        ${project.tags.map(tag => `
                            <div class="px-2 py-1 m-0.5 bg-white/10 rounded-full text-xs font-medium text-white/70 shadow-sm border border-white/20 transition-all duration-300 hover:bg-white/20">
                                ${tag}
                            </div>
                        `).join('')}
                    </div>
                </div>

                <button onclick="window.open('${project.github}', '_blank')" class="btn-github w-full">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.99992 1.33331C7.12444 1.33331 6.25753 1.50575 5.4487 1.84078C4.63986 2.17581 3.90493 2.66688 3.28587 3.28593C2.03563 4.53618 1.33325 6.23187 1.33325 7.99998C1.33325 10.9466 3.24659 13.4466 5.89325 14.3333C6.22659 14.3866 6.33325 14.18 6.33325 14C6.33325 13.8466 6.33325 13.4266 6.33325 12.8733C4.48659 13.2733 4.09325 11.98 4.09325 11.98C3.78659 11.2066 3.35325 11 3.35325 11C2.74659 10.5866 3.39992 10.6 3.39992 10.6C4.06659 10.6466 4.41992 11.2866 4.41992 11.2866C4.99992 12.3 5.97992 12 6.35992 11.84C6.41992 11.4066 6.59325 11.1133 6.77992 10.9466C5.29992 10.78 3.74659 10.2066 3.74659 7.66665C3.74659 6.92665 3.99992 6.33331 4.43325 5.85998C4.36659 5.69331 4.13325 4.99998 4.49992 4.09998C4.49992 4.09998 5.05992 3.91998 6.33325 4.77998C6.85992 4.63331 7.43325 4.55998 7.99992 4.55998C8.56659 4.55998 9.13992 4.63331 9.66659 4.77998C10.9399 3.91998 11.4999 4.09998 11.4999 4.09998C11.8666 4.99998 11.6333 5.69331 11.5666 5.85998C11.9999 6.33331 12.2533 6.92665 12.2533 7.66665C12.2533 10.2133 10.6933 10.7733 9.20659 10.94C9.44659 11.1466 9.66659 11.5533 9.66659 12.1733C9.66659 13.0666 9.66659 13.7866 9.66659 14C9.66659 14.18 9.77325 14.3933 10.1133 14.3333C12.7599 13.44 14.6666 10.9466 14.6666 7.99998C14.6666 7.1245 14.4941 6.25759 14.1591 5.44876C13.8241 4.63992 13.333 3.90499 12.714 3.28593C12.0949 2.66688 11.36 2.17581 10.5511 1.84078C9.7423 1.50575 8.8754 1.33331 7.99992 1.33331V1.33331Z" fill="currentcolor"></path>
                    </svg>
                    <span>View on Github</span>
                </button>
            </div>
        `;
        
        projectsGrid.appendChild(card);
    });
}
// Update populateSkills function
function populateSkills() {
    const skillsGrid = document.querySelector('.skills-grid');
    if (!skillsGrid) return;
    
    skillsGrid.innerHTML = `

        <div class="tech-badges">
            ${techStack.map(tech => `
                <span class="tech-badge ${tech.class}">
                    ${tech.name}
                </span>
            `).join('')}
        </div>
    `;
}

function populateEducation() {
    const educationGrid = document.querySelector('.education-grid');
    educationGrid.innerHTML = '';
    
    education.forEach((edu, index) => {
        const card = document.createElement('div');
        card.className = `education-card delay-${index + 1}`;
        
        card.innerHTML = `
            <h3>${edu.school}</h3>
            <div class="degree">${edu.degree}</div>
            <div class="period">${edu.period}</div>
            <p class="description">${edu.description}</p>
        `;
        
        educationGrid.appendChild(card);
    });
}

function populateExperience() {
    const timeline = document.querySelector('.timeline');
    timeline.innerHTML = '';
    
    experience.forEach((exp, index) => {
        const item = document.createElement('div');
        item.className = `timeline-item ${index % 2 === 0 ? 'left' : 'right'} delay-${index + 1}`;
        
        item.innerHTML = `
            <div class="timeline-content">
                <div class="timeline-date">${exp.period}</div>
                <h3>${exp.title}</h3>
                <h4>${exp.company}</h4>
                <p>${exp.description}</p>
            </div>
        `;
        
        timeline.appendChild(item);
    });
}

function initializeIntersectionObserver() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '50px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.project-card, .skill-item, .education-card, .timeline-item, .section')
        .forEach(element => observer.observe(element));
}

function populateAllSections() {
    const typingElement = document.querySelector('.typing-text');
    new TypingAnimation(typingElement, roles);

    populateProjects();
    populateSkills();
    populateEducation();
    populateExperience();
    
    document.getElementById('year').textContent = new Date().getFullYear();
    initializeIntersectionObserver();
}
// TypingAnimation Class
class TypingAnimation {
    constructor(element, words, typeSpeed = 100, deleteSpeed = 50, pauseTime = 2000) {
        this.element = element;
        this.words = words;
        this.typeSpeed = typeSpeed;
        this.deleteSpeed = deleteSpeed;
        this.pauseTime = pauseTime;
        this.currentWord = 0;
        this.isDeleting = false;
        this.loop();
    }

    async loop() {
        const word = this.words[this.currentWord];
        let text = this.element.textContent;

        if (this.isDeleting) {
            text = word.substring(0, text.length - 1);
        } else {
            text = word.substring(0, text.length + 1);
        }

        this.element.textContent = text;

        let delay = this.isDeleting ? this.deleteSpeed : this.typeSpeed;

        if (!this.isDeleting && text === word) {
            delay = this.pauseTime;
            this.isDeleting = true;
        } else if (this.isDeleting && text === '') {
            this.isDeleting = false;
            this.currentWord = (this.currentWord + 1) % this.words.length;
            delay = 500;
        }

        await new Promise(resolve => setTimeout(resolve, delay));
        this.loop();
    }
}