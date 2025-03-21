document.addEventListener("DOMContentLoaded", function () {

  const content = document.getElementById("content");
  const links = document.querySelectorAll(".nav-link");

  const sections = {
    about: ` 
            <div class="fade-in">
                <h2>About Me</h2>
                <div style="text-align: justify; max-width: 800px; margin: 0 auto;">
                    <p style="margin: 20px 0;">
                        👋 Hi there! I'm Zelika, currently pursuing a bachelor's degree in Education
                            Systems and Information Technology. Possessing a motivated attitude and a wide range of
                            skills, have experience in customer service, technology, and programmatic finance.
                            programmatic finance. Have good time management skills. Committed
                            to utilize my skills to further the company's mission.
                    </p>
                    
                    <h3 style="margin: 20px 0;">🚀 What I Do</h3>
                    <ul style="list-style: none; padding: 0;">
                        <li style="margin: 10px 0;">💻 E-Learning content developer: Ms. PowerPoint, Canva</li>
                        <li style="margin: 10px 0;">🎨 UI/UX Design: Figma</li>
                        <li style="margin: 10px 0;">📱 Photo Editor: Adobe Lightroom</li>
                        <li style="margin: 10px 0;">📱 Talent Social Media</li>
                    </ul>

                    <h3 style="margin: 20px 0;">🎯 Current Focus</h3>
                    <p>Currently diving deep into computer vision technologies and exploring the exciting world of AI/ML integration in web and education applications.</p>
                </div>
            </div>
        `,
    projects: `
            <div class="fade-in">
                <h2>Projects</h2>
                <div class="projects-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 2rem; padding: 2rem 0; text-align: left;">
                    <div class="project-card" style="border: 1px solid #eee; padding: 1.5rem; border-radius: 12px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
                        <h3 style="color: #2a2a2a;">📕 Farmify</h3>
                        <p style="margin: 10px 0;">Farmify is a project in the Human and Computer Interaction course. Farmify is a UI/UX prototype assignment, with the SDG 2 theme of Zero Hunger. 
                        This project analyzes the needs and desires of users with the aim of promoting food security and ensuring the availability of nutritious food for communities in need. </p>
                        <div style="margin-top: 15px;">
                            <a href="#" style="color: #0066cc; text-decoration: none; margin-right: 15px;">Buy</a>
                            <a href="#" style="color: #0066cc; text-decoration: none;">GitHub</a>
                        </div>
                    </div>
                    
                    <div class="project-card" style="border: 1px solid #eee; padding: 1.5rem; border-radius: 12px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
                        <h3 style="color: #2a2a2a;">👩‍💻 Duomochii</h3>
                        <p style="margin: 10px 0;">A community that focus on empowering woman in IT. Currently has a program called Friday Afternoon where girls can learn how to code and build their own app!</p>
                        <div style="margin-top: 15px;">
                            <a href="#" style="color: #0066cc; text-decoration: none; margin-right: 15px;">Instagram</a>
                        </div>
                    </div>

                    <div class="project-card" style="border: 1px solid #eee; padding: 1.5rem; border-radius: 12px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
                        <h3 style="color: #2a2a2a;">👩‍💻 Duomochii</h3>
                        <p style="margin: 10px 0;">A community that focus on empowering woman in IT. Currently has a program called Friday Afternoon where girls can learn how to code and build their own app!</p>
                        <div style="margin-top: 15px;">
                            <a href="#" style="color: #0066cc; text-decoration: none; margin-right: 15px;">Instagram</a>
                        </div>
                    </div>
                </div>
            </div>
        `,
    contact: `
            <div class="fade-in">
                <h2>Let's Connect!</h2>
                <div style="max-width: 600px; margin: 2rem auto; text-align: left;">
                    <p style="margin: 1rem 0;">I'm always excited to collaborate on interesting projects or just have a chat about technology and innovation. Feel free to reach out through any of these channels:</p>
                    
                    <div style="display: flex; flex-direction: column; gap: 1rem; margin: 2rem 0;">
                        <a href="mailto:zelikaameria22@upi.edu" target="_blank" style="color: #1a1a1a; text-decoration: none; display: flex; align-items: center; gap: 10px;">
                            📧 zelikaameria22@upi.edu
                        </a>
                        <a href="https://linkedin.com/in/zelikaameria" target="_blank" style="color: #1a1a1a; text-decoration: none; display: flex; align-items: center; gap: 10px;">
                            💼 LinkedIn: /in/zelikaameria
                        </a>
                        <a href="https://github.com/hllwzelika" target="_blank" style="color: #1a1a1a; text-decoration: none; display: flex; align-items: center; gap: 10px;">
                            🐱 GitHub: @hllwzelika
                        </a>
                        <a href="https://www.instagram.com/zajmeria" target="_blank" style="color: #1a1a1a; text-decoration: none; display: flex; align-items: center; gap: 10px;">
                            📸 Instagram: @zajmeria
                        </a>
                    </div>

                    <div style="background: #f8f9fa; padding: 1.5rem; border-radius: 8px; margin-top: 2rem;">
                        <h3 style="margin-bottom: 1rem;">🌟 Current Status</h3>
                        <p>Open to freelance projects and exciting collaboration opportunities!</p>
                    </div>
                </div>
            </div>
        `,
  };

  function showSection(sectionId) {
    content.innerHTML = sections[sectionId];
  }

  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      showSection(link.dataset.section);
    });
  });

  showSection("about");
});
