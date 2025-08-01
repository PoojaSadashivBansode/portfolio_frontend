import React from 'react';
import { Home, User, Code, Briefcase, Mail, Github, Linkedin, Twitter, Award, FileText, Eye, X } from 'lucide-react'; // Added X icon for modal close

// Main App component
function App() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [currentImageSrc, setCurrentImageSrc] = React.useState('');
  const [currentImageAlt, setCurrentImageAlt] = React.useState('');

  const openModal = (imageSrc, altText) => {
    setCurrentImageSrc(imageSrc);
    setCurrentImageAlt(altText);
    setIsModalOpen(true);
    // Prevent scrolling when modal is open
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentImageSrc('');
    setCurrentImageAlt('');
    // Re-enable scrolling
    document.body.style.overflow = 'unset';
  };

  return (
    <div className="min-h-screen bg-gray-100 font-sans text-gray-800">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-md p-4 sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center flex-wrap">
          <a href="#" className="text-2xl font-bold text-indigo-600 rounded-md p-2 hover:bg-indigo-50 transition-colors">POOJA</a>
          <div className="flex space-x-4 mt-2 md:mt-0">
            <NavItem icon={<Home className="w-5 h-5" />} text="Home" href="#home" />
            <NavItem icon={<User className="w-5 h-5" />} text="About" href="#about" />
            <NavItem icon={<Code className="w-5 h-5" />} text="Skills" href="#skills" />
            <NavItem icon={<Briefcase className="w-5 h-5" />} text="Projects" href="#projects" />
            <NavItem icon={<Award className="w-5 h-5" />} text="Certificates" href="#certificates" />
            <NavItem icon={<Mail className="w-5 h-5" />} text="Contact" href="#contact" />
          </div>
        </div>
      </nav>
                                                     
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center bg-gray-100 text-gray-800 px-6 py-20">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row items-center md:items-start space-y-12 md:space-y-0 md:space-x-20">
            {/* Profile Photo */}
            <div className="relative w-80 h-80 flex-shrink-0 animate-fade-in-down">
              <div className="absolute inset-0 rounded-full bg-indigo-500 blur-2xl opacity-20 animate-pulse"></div>
              <img
                src="/Pooja.jpg"
                alt="Pooja Bansode"
                className="relative w-full h-full object-cover rounded-full shadow-lg border-4 border-indigo-400 z-10 transform transition-transform duration-300 hover:scale-105"
                onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/320x320/1e293b/a5b4fc?text=Pooja"; }}
              />
            </div>

            {/* Text Content */}
            <div className="text-center md:text-left animate-fade-in-up md:mt-10">
              <h2 className="text-xl md:text-2xl font-light mb-2 text-indigo-600"><b>Hello, I'm</b></h2>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4">Pooja Bansode</h1>
              <h3 className="text-2xl md:text-3xl font-light text-gray-600 mb-6">
                <span className="font-semibold text-indigo-600">Computer Engineering Student</span>
              </h3>
              <p className="text-md md:text-lg text-gray-700 max-w-xl mb-8">
                I'm a passionate and motivated Computer Engineering student with a strong foundation in problem-solving and a keen interest in data analytics, web development, and machine learning.
              </p>

              <div className="flex justify-center md:justify-start space-x-6 mb-8">
                <SocialLink icon={<Github className="w-8 h-8 text-gray-700 hover:text-indigo-600" />} href="https://github.com/PoojaSadashivBansode" label="GitHub" />
                <SocialLink icon={<Linkedin className="w-8 h-8 text-gray-700 hover:text-indigo-600" />} href="https://www.linkedin.com/in/pooja-bansode-1a1392257" label="LinkedIn" />
              </div>

              <div className="flex flex-wrap justify-center md:justify-start gap-4">
                <a href="#contact" className="px-8 py-3 bg-indigo-600 text-white font-semibold rounded-full shadow-lg hover:bg-indigo-700 transition-colors">
                  Contact Me
                </a>
                <a
                  href="https://portfoliobackend-production-8d9f.up.railway.app/view-resume"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-8 py-3 border border-indigo-600 text-indigo-600 font-semibold rounded-full shadow-lg hover:bg-indigo-600 hover:text-white transition-colors"
                >
                  <FileText className="w-6 h-6" />
                  View Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* About Section */}
      <section id="about" className="relative min-h-screen flex items-center justify-center bg-white text-gray-800 px-6 py-12">
        <div className="container mx-auto px-8 max-w-6xl"> 
          <h2 className="text-5xl font-bold text-center text-indigo-700 mb-16 border-b-4 border-indigo-500 pb-3 inline-block rounded-md">About Me</h2> {/* Increased font size, padding, margin */}
          <div className="flex flex-col md:flex-row items-center md:space-x-12"> 
            <div className="md:w-1/3 mb-10 md:mb-0"> 
              <img
                src="/Pooja.jpg"
              
                className="rounded-full shadow-lg border-4 border-indigo-300 w-72 h-72 object-cover mx-auto transform transition-transform duration-300 hover:scale-105" // Increased image size
                onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/350x350/6366F1/FFFFFF?text=Placeholder"; }}
              />
            </div>
            <div className="md:w-2/3 text-xl leading-relaxed text-gray-700"> 
              <p className="mb-6"> 
                Hello! I'm a passionate <b>Computer Engineering</b> student with a strong interest in web development,
                machine learning, and problem-solving. I love building innovative solutions and constantly learning new technologies.
              </p>
              <p className="mb-6"> 
                During my studies, I've gained hands-on experience with various programming languages and frameworks,
                and I'm always eager to take on new challenges. My goal is to contribute to impactful projects and grow
                as a software engineer.
              </p>
              <p>
                Outside of coding, I enjoy skeching, listning songs, and exploring new places.
                <br></br>
              </p>

            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-100 p-4">
        <div className="container mx-auto px-8 max-w-6xl"> 
          <br></br>
          <h2 className="text-5xl font-bold text-center text-indigo-700 mb-16 border-b-4 border-indigo-500 pb-3 inline-block rounded-md">Skills</h2> {/* Increased font size, padding, margin */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"> 
            <SkillCard title="Programming Languages" skills={['Java', 'Python', 'C++']} />
            <SkillCard title="Data & Analytics" skills={['Power BI', 'Data Science', 'Data Visualization']} />
            <SkillCard title="Web Development" skills={['Frontend (HTML, CSS, JavaScript, React)', 'Backend (Java, PHP, Node.js, Spring Boot, Hibernate)']} />
            <SkillCard title="Databases" skills={['MySQL', 'MongoDB']} />
            <SkillCard title="Concepts" skills={['Data Structures', 'Algorithms', 'OOPs']} />
            <SkillCard title="Soft Skills" skills={['Problem Solving', 'Communication', 'Teamwork']} />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white p-4"> 
        <div className="container mx-auto px-8 max-w-7xl"> {/* Increased max-width to 7xl */}
          <br></br>
          <h2 className="text-5xl font-bold text-center text-indigo-700 mb-16 border-b-4 border-indigo-500 pb-3 inline-block rounded-md">Projects</h2> {/* Increased font size, padding, margin */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"> {/* Increased gap */}
            <ProjectCard
              title="Anime Recommendation System"
              description="Built a recommendation system using collaborative and content-based filtering for personalized anime suggestions."
              technologies={['Python', 'Machine Learning', 'Scikit-learn']}
              githubLink="https://github.com/PoojaSadashivBansode/Recommendation_System"
              liveLink=""
            />

            <ProjectCard
              title="Sentiment Analysis of Restaurant Reviews"
              description="Performed sentiment analysis using Natural Language Processing (NLP) techniques to classify restaurant reviews as positive or negative. Used text preprocessing, feature extraction, and trained models using Scikit-learn."
              technologies={['Python', 'NLP', 'Scikit-learn']}
              githubLink="https://github.com/PoojaSadashivBansode/Sentiment_Analysis_Restaurant_Reviews"
              liveLink=""
            />


            <ProjectCard
              title="E-Commerce Sales Analysis"
              description="Used Power BI to analyze sales data, track seasonal trends, and customer segments with interactive dashboards for business insights."
              technologies={['Power BI', 'Data Visualization', 'Analytics']}
              githubLink="https://github.com/PoojaSadashivBansode/E-Commerce-Sales-Analysis-Using-Power-BI"
              liveLink=""
            />
        
            <ProjectCard
              title="Hospital Management System"
              description="Developed a full-stack Java project with MySQL database integration to manage hospital operations."
              technologies={['Java', 'MySQL']}
              githubLink="https://github.com/PoojaSadashivBansode/Hospital_management_system"
              liveLink=""
            />
            <ProjectCard
              title="VPKBIET Location Guide Website"
              description="Created a college guide website showing buildings, departments, and navigation with interactive campus blueprints."
              technologies={['HTML', 'CSS', 'JavaScript']}
              githubLink="https://github.com/PoojaSadashivBansode/location_guide"
              liveLink="https://poojasadashivbansode.github.io/location_guide/"
            />
            <ProjectCard
              title="Soul Palace Restaurant Management"
              description="A full-featured website to manage restaurant bookings, menus, and staff operations efficiently."
              technologies={['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL']}
              githubLink="https://github.com/PoojaSadashivBansode/Restaurant_management"
              liveLink="https://poojasadashivbansode.github.io/Restaurant_management/"
            />
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="py-20 bg-gray-100 p-4">
        <div className="container mx-auto px-8 max-w-6xl">
          <br></br>
          <h2 className="text-5xl font-bold text-center text-indigo-700 mb-16 border-b-4 border-indigo-500 pb-3 inline-block rounded-md">Certificates</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <CertificateCard
              title="Joy of Computing using Python"
              issuer="NPTEL IIT Madras"
              date="Apr 2023"
              imageSrc="/certificates/python.jpg"
              onClick={openModal}
            />

            <CertificateCard
              title="Database Management System (Elite)"
              issuer="NPTEL IIT Kharagpur"
              date="Sep 2024"
              imageSrc="/certificates/dbms.jpg"
              onClick={openModal}
            />
            
            <CertificateCard
              title="Data Analytics and Visualization Job Simulation"
              issuer="Accenture | Forage"
              date="Oct 2024"
              imageSrc="/certificates/accenture.jpg" 
              onClick={openModal}
            />
            <CertificateCard
              title="Machine Learning"
              issuer="Code360"
              date="Mar 2025"
              imageSrc="/certificates/ml.jpg"
              onClick={openModal}
            />
            <CertificateCard
              title="Programming in Java (Elite + Gold)"
              issuer="NPTEL IIT Kharagpur"
              date="Apr 2025"
              imageSrc="/certificates/java.jpg" 
              onClick={openModal}
            />
            <CertificateCard
              title="Problem Solving (Intermediate)"
              issuer="HackerRank"
              date="July 2025"
              imageSrc="/certificates/hacker.jpg" 
              onClick={openModal}
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white p-4">
        <div className="container mx-auto px-8 max-w-2xl">
          <br></br>
          <h2 className="text-5xl font-bold text-center text-indigo-700 mb-16 border-b-4 border-indigo-500 pb-3 inline-block rounded-md">Contact Me</h2>
          <p className="text-center text-xl text-gray-700 mb-10">
            I'm always open to new opportunities and collaborations. Feel free to reach out!
          </p>
          <ContactForm />
        </div>
      </section>

       {/* Footer */}
      <footer className="bg-gray-800 text-white py-10 text-center p-4"> 
        <div className="container mx-auto px-6">
          <p className="text-lg">&copy; {new Date().getFullYear()} Pooja Bansode. All rights reserved.</p> {/* Increased font size */}
          <div className="flex justify-center space-x-8 mt-6"> 
            <SocialLink icon={<Github className="w-7 h-7" />} href="https://github.com/PoojaSadashivBansode" label="GitHub" />
            <SocialLink icon={<Linkedin className="w-7 h-7" />} href="https://www.linkedin.com/in/pooja-bansode-1a1392257" label="LinkedIn" />
            
          </div>
        </div>
      </footer>

      {/* Certificate Modal */}
      {isModalOpen && (
        <CertificateModal
          imageSrc={currentImageSrc}
          imageAlt={currentImageAlt}
          onClose={closeModal}
        />
      )}
    </div>
  );
}

// NavItem Component for navigation links
const NavItem = ({ icon, text, href }) => (
  <a
    href={href}
    className="flex items-center space-x-2 text-gray-700 hover:text-indigo-600 hover:bg-gray-100 px-4 py-2.5 rounded-md transition-colors duration-200 text-base md:text-lg"
  >
    {icon}
    <span>{text}</span>
  </a>
);

// SocialLink Component for social media icons
const SocialLink = ({ icon, href, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-indigo-600 hover:text-indigo-800 transition-colors duration-200"
    aria-label={label}
  >
    {icon}
  </a>
);

// SkillCard Component for displaying skills
const SkillCard = ({ title, skills }) => (
  <div className="bg-white p-8 rounded-xl shadow-md border border-gray-200 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
    <h3 className="text-2xl font-semibold text-indigo-600 mb-5 border-b-2 border-indigo-300 pb-3">{title}</h3>
    <ul className="list-disc list-inside space-y-3 text-lg text-gray-700">
      {skills.map((skill, index) => (
        <li key={index} className="flex items-center">
          <span className="mr-3 text-indigo-500">&bull;</span> {skill}
        </li>
      ))}
    </ul>
  </div>
);

// ProjectCard Component for displaying projects
const ProjectCard = ({ title, description, technologies, githubLink, liveLink }) => (
  <div className="bg-white p-8 rounded-xl shadow-md border border-gray-200 flex flex-col transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
    <h3 className="text-2xl font-semibold text-indigo-600 mb-4">{title}</h3>
    <p className="text-lg text-gray-700 mb-6 flex-grow">{description}</p>
    <div className="mb-5">
      <span className="font-medium text-gray-800 text-lg">Technologies:</span>
      <p className="text-base text-gray-600">{technologies.join(', ')}</p>
    </div>
    <div className="flex space-x-5 mt-auto">
      {githubLink && (
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center px-5 py-2.5 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors duration-200 text-base"
        >
          <Github className="w-5 h-5 mr-2.5" /> GitHub
        </a>
      )}
      {liveLink && (
        <a
          href={liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center px-5 py-2.5 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors duration-200 text-base"
        >
          <Code className="w-5 h-5 mr-2.5" /> Live Demo
        </a>
      )}
    </div>
  </div>
);

// UPDATED CertificateCard Component - now triggers modal
const CertificateCard = ({ title, issuer, date, imageSrc, onClick }) => (
  <div // Changed from <a> to <div> as it's not directly navigating
    className="bg-white p-6 rounded-xl shadow-md border border-gray-200 flex flex-col transform transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:border-indigo-400 cursor-pointer"
    onClick={() => onClick(imageSrc, `Certificate: ${title}`)} // Pass imageSrc and alt text to onClick handler
  >
    <h3 className="text-xl font-semibold text-indigo-600 mb-2">{title}</h3>
    <p className="text-gray-700 text-sm mb-1"><strong>Issuer:</strong> {issuer}</p>
    <p className="text-gray-700 text-sm mb-4"><strong>Date:</strong> {date}</p>
    {imageSrc && (
      <div className="mt-auto">
        <img
          src={imageSrc}
          alt={`Certificate: ${title}`}
          className="w-full h-auto rounded-md object-cover border border-gray-300"
          onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/400x300/CCCCCC/000000?text=Image+Error"; }}
        />
      </div>
    )}
  </div>
);

// NEW CertificateModal Component
const CertificateModal = ({ imageSrc, imageAlt, onClose }) => {
  React.useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-[1000] overflow-y-auto" // Increased z-index
      onClick={onClose} // Close modal when clicking outside the image
    >
      <div className="relative max-w-4xl max-h-full bg-white rounded-lg shadow-xl overflow-hidden" onClick={(e) => e.stopPropagation()}> {/* Prevent closing when clicking image */}
        <button
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300 p-2 rounded-full"
          onClick={onClose}
          aria-label="Close modal"
        >
          <X className="w-8 h-8" />
        </button>
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-auto max-h-[90vh] object-contain" // Max height to fit viewport, object-contain
          onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/800x600/CCCCCC/000000?text=Image+Error"; e.target.alt="Error loading image"; }}
        />
      </div>
    </div>
  );
};


// ContactForm Component
const ContactForm = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = React.useState(''); // 'loading', 'success', 'error'

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('http://localhost:8080/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
        console.error('Submission error:', data.msg || 'Unknown error');
      }
    } catch (error) {
      setStatus('error');
      console.error('Network error:', error);
    }
  };

  return (
    <form className="bg-white p-10 rounded-xl shadow-lg space-y-8" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name" className="block text-lg font-medium text-gray-700 mb-2">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="mt-1 block w-full px-5 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-lg"
          placeholder="Your Name"
          required
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-lg font-medium text-gray-700 mb-2">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="mt-1 block w-full px-5 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-lg"
          placeholder="you@example.com"
          required
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-lg font-medium text-gray-700 mb-2">Message</label>
        <textarea
          id="message"
          name="message"
          rows="6"
          value={formData.message}
          onChange={handleChange}
          className="mt-1 block w-full px-5 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-lg"
          placeholder="Your message here..."
          required
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full flex justify-center py-4 px-5 border border-transparent rounded-md shadow-sm text-xl font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
        disabled={status === 'loading'}
      >
        {status === 'loading' ? 'Sending...' : 'Send Message'}
      </button>

      {status === 'success' && (
        <p className="text-center text-green-600 mt-4">Message sent successfully! I'll get back to you soon.</p>
      )}
      {status === 'error' && (
        <p className="text-center text-red-600 mt-4">Failed to send message. Please try again later.</p>
      )}
    </form>
  );
};

export default App;
