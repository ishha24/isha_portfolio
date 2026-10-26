
// ==========================================
// PORTFOLIO CONTENT DATA
// ==========================================

const roles = [
    "Associate Operations",
    "Member of Technical Staff"
];

// Projects
const projects = [
    {
        title: "Hexa",
        description: "Hexa is a real-time voice assistant system that uses AI and NLP to interact with users and perform tasks.",
        tags: ["Python", "AI", "NLP"],
        github: "https://github.com/ishha24/Hexa"
    },
    {
        title: "E-Commerce Sales & Analysis",
        description: "This project uses Python and libraries such as Pandas, NumPy, and Plotly to analyze and visualize trends in e-commerce markets.",
        tags: ["Python", "Plotly", "NumPy", "Pandas"],
        github: "https://github.com/ishha24/Ecommerce_sales_analysis"
    },
    {
        title: "SpeedScope",
        description: "A modern, user-friendly Python GUI application for testing and analyzing internet connection speeds, providing real-time measurements and historical data tracking.",
        tags: ["Python", "Tkinter", "Internet Speed"],
        github: "https://github.com/ishha24/speedscope"
    },
    {
        title: "Website Template",
        description: "A responsive website template that helps small startups establish a digital presence, built using HTML, CSS, and JavaScript.",
        tags: ["HTML", "CSS", "JavaScript"],
        github: "https://github.com/ishha24/Web-Sol"
    }
];

// ==========================================
// SKILLS
// ==========================================

const techStack = [

    // Customer Success
    { name: "Client Servicing", class: "client-servicing-bg" },
    { name: "Account Management", class: "account-management-bg" },
    { name: "Client Retention", class: "client-retention-bg" },
    { name: "Stakeholder Engagement", class: "stakeholder-engagement-bg" },

    // SaaS Operations
    { name: "Enterprise SaaS", class: "saas-bg" },
    { name: "Client Onboarding", class: "client-onboarding-bg" },
    { name: "Product Support", class: "product-support-bg" },
    { name: "Process Optimization", class: "process-optimization-bg" },

    // Quality Assurance
    { name: "Quality Assurance (QA)", class: "qa-bg" },
    { name: "User Acceptance Testing (UAT)", class: "uat-bg" },
    { name: "Defect Tracking", class: "defect-tracking-bg" },
    { name: "Release Validation", class: "release-validation-bg" },
    { name: "Pre-Go-Live Checks", class: "go-live-bg" },

    // Ticket Management
    { name: "Ticket Resolution", class: "ticket-resolution-bg" },
    { name: "TAT Management", class: "tat-bg" },
    { name: "Issue Escalation", class: "issue-escalation-bg" },
    { name: "SLA Tracking", class: "sla-bg" },

    // Client Communication
    { name: "Relationship Management", class: "relationship-management-bg" },
    { name: "Presentations", class: "presentations-bg" },
    { name: "Product Walkthroughs", class: "product-walkthroughs-bg" },
    { name: "Training Decks", class: "training-decks-bg" },

    // Project Coordination
    { name: "Cross-functional Collaboration", class: "collaboration-bg" },
    { name: "Task Prioritization", class: "task-prioritization-bg" },
    { name: "Accountability & Ownership", class: "ownership-bg" },

    // Reporting & Tools
    { name: "MS Excel", class: "excel-bg" },
    { name: "PowerPoint", class: "powerpoint-bg" },
    { name: "Jira", class: "jira-bg" },
    { name: "Documentation", class: "documentation-bg" },
    { name: "Operational Reporting", class: "reporting-bg" }
];

// ==========================================
// EDUCATION
// ==========================================

const education = [
    {
        school: "Delhi Global Institute of Management",
        degree: "MBA in AI & Data Science",
        period: "2026 - 2028",
        description: "Pursuing"
    },
    {
        school: "J.C. Bose University of Science & Technology, YMCA",
        degree: "B.Tech in Computer Science Engineering",
        period: "2021 - 2025",
        description: "CGPA ~ 7.5"
    },
    {
        school: "Vidya Niketan High School, Delhi-NCR",
        degree: "High School",
        period: "Completed in 2021",
        description: "91.4% in Science with CS"
    },
    {
        school: "DUCAT Institute, Delhi-NCR",
        degree: "Full Stack Development",
        period: "Completed in 2023",
        description: "Full Stack Development in Java"
    },
    {
        school: "Coursera, Online",
        degree: "Python for AI and Development",
        period: "Completed in 2024",
        description: "Learned Python fundamentals for AI and development"
    },
    {
        school: "Coursera, Online",
        degree: "Introduction to Data Engineering",
        period: "Completed in 2024",
        description: "Fundamentals of Data Engineering"
    }
];

// ==========================================
// WORK EXPERIENCE
// ==========================================

const experience = [
    {
        title: "Associate (Member of Technical Staff)",
        company: "Kognoz Innovations Pvt Ltd",
        period: "Jul 2026 - Oct 2026",
        description: "Client servicing, QA/UAT, ticket resolution, stakeholder management, and process optimization across BFSI, Insurance, Energy, Mining, Financial Services, and Corporate Services."
    },
    {
        title: "Engineer Trainee",
        company: "Kognoz Innovations Pvt Ltd",
        period: "Jul 2025 - Jul 2026",
        description: "Worked on quality assurance, prompt engineering, and Agile project delivery."
    },
    {
        title: "Associate - Project Coordination",
        company: "SoulCurry Media Pvt Ltd",
        period: "Apr 2025 - Jul 2025",
        description: "Supported test case preparation, AI research, and Customer Success development team coordination."
    }
];

// ==========================================
// INITIALIZE WEBSITE ONCE
// ==========================================

document.addEventListener("DOMContentLoaded", () => {

    const mainContent = document.getElementById("main-content");
    const loader = document.querySelector(".terminal-loader");

    // Initialize page content and event handlers
    initializeEventListeners();
    populateAllSections();

    // Show loader, then reveal main content
    if (mainContent && loader) {

        mainContent.style.display = "none";

        setTimeout(() => {

            loader.style.animation = "fadeOut 0.5s ease";

            setTimeout(() => {

                loader.style.display = "none";
                mainContent.style.display = "block";
                mainContent.style.animation = "fadeIn 0.5s ease";

                updateActiveSection();

            }, 500);

        }, 4000);

    } else if (mainContent) {

        mainContent.style.display = "block";

    }

    // Active navigation tracking
    window.addEventListener(
        "scroll",
        updateActiveSection,
        { passive: true }
    );

    updateActiveSection();
});

// ==========================================
// EVENT LISTENERS
// ==========================================

function initializeEventListeners() {

    // Navigation click events
    document.querySelectorAll(".nav-items .group").forEach(item => {

        item.addEventListener("click", handleNavigation);

    });

    // Back to top button
    const backToTopButton = document.getElementById("backToTop");

    if (backToTopButton) {

        const updateBackToTop = () => {

            backToTopButton.classList.toggle(
                "show",
                window.scrollY > 300
            );

        };

        window.addEventListener(
            "scroll",
            updateBackToTop,
            { passive: true }
        );

        updateBackToTop();

        backToTopButton.addEventListener("click", () => {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });
    }
}

// ==========================================
// NAVIGATION
// ==========================================

function handleNavigation(e) {

    const tooltip = e.currentTarget.querySelector(".nav-tooltip");

    const target = tooltip?.textContent?.trim().toLowerCase();

    if (!target) return;

    const section = document.getElementById(target);

    if (section) {

        section.scrollIntoView({
            behavior: "smooth"
        });

    }
}

// ==========================================
// ACTIVE SECTION TRACKING
// ==========================================

function updateActiveSection() {

    const sections = document.querySelectorAll("section");

    const navItems = document.querySelectorAll(".nav-items .group");

    let activeIndex = -1;

    sections.forEach((section, index) => {

        const rect = section.getBoundingClientRect();

        if (rect.top <= 150 && rect.bottom >= 150) {

            activeIndex = index;

        }
    });

    navItems.forEach((item, index) => {

        const navDiv = item.querySelector("div");

        if (navDiv) {

            navDiv.classList.toggle(
                "text-blue-500",
                index === activeIndex
            );

        }
    });
}

// ==========================================
// POPULATE ALL SECTIONS
// ==========================================

function populateAllSections() {

    populateProjects();
    populateSkills();
    populateEducation();
    populateExperience();

    // Typing animation
    const typingElement = document.querySelector(".typing-text");

    if (typingElement && roles.length > 0) {

        new TypingAnimation(typingElement, roles);

    }

    // Current year
    const yearElement = document.getElementById("year");

    if (yearElement) {

        yearElement.textContent = new Date().getFullYear();

    }

    // Scroll reveal animations
    initializeIntersectionObserver();
}

// ==========================================
// PROJECTS
// ==========================================

function populateProjects() {

    const projectsGrid = document.querySelector(".projects-grid");

    if (!projectsGrid) return;

    projectsGrid.innerHTML = "";

    projects.forEach(project => {

        const card = document.createElement("div");

        card.className =
            "card project-card bg-[#0f1729] rounded-2xl overflow-hidden relative transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]";

        card.innerHTML = `
            <div class="card-content p-4 relative z-10">

                <h2 class="text-lg font-bold text-white/90 truncate">
                    ${project.title}
                </h2>

                <div class="mb-4">

                    <p class="text-sm text-white/70 mb-4">
                        ${project.description}
                    </p>

                    <div class="flex flex-wrap -mx-1">

                        ${project.tags.map(tag => `
                            <div class="px-2 py-1 m-0.5 bg-white/10 rounded-full text-xs font-medium text-white/70 shadow-sm border border-white/20 transition-all duration-300 hover:bg-white/20">
                                ${tag}
                            </div>
                        `).join("")}

                    </div>
                </div>

                <button
                    type="button"
                    class="btn-github w-full"
                >
                    <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M7.99992 1.33331C7.12444 1.33331 6.25753 1.50575 5.4487 1.84078C4.63986 2.17581 3.90493 2.66688 3.28587 3.28593C2.03563 4.53618 1.33325 6.23187 1.33325 7.99998C1.33325 10.9466 3.24659 13.4466 5.89325 14.3333C6.22659 14.3866 6.33325 14.18 6.33325 14C6.33325 13.8466 6.33325 13.4266 6.33325 12.8733C4.48659 13.2733 4.09325 11.98 4.09325 11.98C4.06659 10.6466 4.41992 11.2866 4.41992 11.2866C4.99992 12.3 5.97992 12 6.35992 11.84C6.41992 11.4066 6.59325 11.1133 6.77992 10.9466C5.29992 10.78 3.74659 10.2066 3.74659 7.66665C3.74659 6.92665 3.99992 6.33331 4.43325 5.85998C4.36659 5.69331 4.13325 4.99998 4.49992 4.09998C4.49992 4.09998 5.05992 3.91998 6.33325 4.77998C6.85992 4.63331 7.43325 4.55998 7.99992 4.55998C8.56659 4.55998 9.13992 4.63331 9.66659 4.77998C10.9399 3.91998 11.4999 4.09998 11.4999 4.09998C11.8666 4.99998 11.6333 5.69331 11.5666 5.85998C11.9999 6.33331 12.2533 6.92665 12.2533 7.66665C12.2533 10.2133 10.6933 10.7733 9.20659 10.94C9.44659 11.1466 9.66659 11.5533 9.66659 12.1733C9.66659 13.0666 9.66659 13.7866 9.66659 14C9.66659 14.18 9.77325 14.3933 10.1133 14.3333C12.7599 13.44 14.6666 10.9466 14.6666 7.99998C14.6666 7.1245 14.4941 6.25759 14.1591 5.44876C13.8241 4.63992 13.333 3.90499 12.714 3.28593C12.0949 2.66688 11.36 2.17581 10.5511 1.84078C9.7423 1.50575 8.8754 1.33331 7.99992 1.33331V1.33331Z"
                            fill="currentColor"
                        />
                    </svg>

                    <span>View on GitHub</span>
                </button>

            </div>
        `;

        const githubButton = card.querySelector(".btn-github");

        githubButton?.addEventListener("click", () => {

            window.open(
                project.github,
                "_blank",
                "noopener,noreferrer"
            );

        });

        projectsGrid.appendChild(card);
    });
}

// ==========================================
// SKILLS
// ==========================================

function populateSkills() {

    const skillsGrid = document.querySelector(".skills-grid");

    if (!skillsGrid) return;

    skillsGrid.innerHTML = `
        <div class="tech-badges">

            ${techStack.map(tech => `
                <span class="tech-badge ${tech.class}">
                    ${tech.name}
                </span>
            `).join("")}

        </div>
    `;
}

// ==========================================
// EDUCATION
// ==========================================

function populateEducation() {

    const educationGrid = document.querySelector(".education-grid");

    if (!educationGrid) return;

    educationGrid.innerHTML = "";

    education.forEach((edu, index) => {

        const card = document.createElement("div");

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

// ==========================================
// EXPERIENCE
// ==========================================

function populateExperience() {

    const timeline = document.querySelector(".timeline");

    if (!timeline) return;

    timeline.innerHTML = "";

    experience.forEach((exp, index) => {

        const item = document.createElement("div");

        item.className = `
            timeline-item
            ${index % 2 === 0 ? "left" : "right"}
            delay-${index + 1}
        `;

        item.innerHTML = `
            <div class="timeline-content">

                <div class="timeline-date">
                    ${exp.period}
                </div>

                <h3>${exp.title}</h3>
                <h4>${exp.company}</h4>
                <p>${exp.description}</p>

            </div>
        `;

        timeline.appendChild(item);
    });
}

// ==========================================
// INTERSECTION OBSERVER
// ==========================================

function initializeIntersectionObserver() {

    const animatedElements = document.querySelectorAll(
        ".project-card, .skill-item, .education-card, .timeline-item, .section"
    );

    if (!animatedElements.length) return;

    // Fallback for browsers without IntersectionObserver
    if (!("IntersectionObserver" in window)) {

        animatedElements.forEach(element => {

            element.classList.add("animate");

        });

        return;
    }

    const observerOptions = {
        threshold: 0.1,
        rootMargin: "50px"
    };

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("animate");

                observer.unobserve(entry.target);

            }
        });

    }, observerOptions);

    animatedElements.forEach(element => {

        observer.observe(element);

    });
}

// ==========================================
// TYPING ANIMATION
// ==========================================

class TypingAnimation {

    constructor(
        element,
        words,
        typeSpeed = 100,
        deleteSpeed = 50,
        pauseTime = 2000
    ) {

        this.element = element;
        this.words = words;
        this.typeSpeed = typeSpeed;
        this.deleteSpeed = deleteSpeed;
        this.pauseTime = pauseTime;

        this.currentWord = 0;
        this.isDeleting = false;

        this.element.textContent = "";

        this.loop();
    }

    async loop() {

        if (!this.element || !this.words.length) return;

        const word = this.words[this.currentWord];

        let currentText = this.element.textContent;

        if (this.isDeleting) {

            currentText = word.substring(
                0,
                Math.max(0, currentText.length - 1)
            );

        } else {

            currentText = word.substring(
                0,
                currentText.length + 1
            );

        }

        this.element.textContent = currentText;

        let delay = this.isDeleting
            ? this.deleteSpeed
            : this.typeSpeed;

        if (!this.isDeleting && currentText === word) {

            delay = this.pauseTime;
            this.isDeleting = true;

        } else if (this.isDeleting && currentText === "") {

            this.isDeleting = false;

            this.currentWord =
                (this.currentWord + 1) % this.words.length;

            delay = 500;
        }

        await new Promise(resolve => setTimeout(resolve, delay));

        this.loop();
    }
}
