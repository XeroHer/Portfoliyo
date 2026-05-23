// Portfolio.jsx
import React, { useState, useEffect } from "react";
import "./App.css";
import profile from "./IMG_0420.jpg";
import mongodb from "./4691284_mongodb_icon.png"
import javaFx from "./79834_javafx_video_icon.png";
import docker from "./docker.png";
import CP from "./C.png"
import C_Sharp from "./CSharp.png";
import C_pluss from "./C_PLUS.png";
import typescript from "./TypeScript.png";
import Sql from "./SQL.png";
import taiwind from "./tailwind.png";
import freeCode from "./4691243_freecodecamp_icon.png"
import blockchain from "./bitcoin-logo_svgstack_com_6951775237867.png"
import smartContract from "./smart-contract.png"
import SpringBoot from "./spring-boot-icon.png"
import OpenCV from "./opencv.png"
import MachineLearning from "./machine learning.png"
import DNN from "./deep learning.png"
import Vision from "./web-eye-svgrepo-com.png"
import dyanjo from "./file_type_django_icon_130645.png"
import nextjs from "./next-js.png";
import cv from "./BIKESHCS.pdf"

// FontAwesome React imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faGithub,
  faPython,
  faJava,
  faReact,
  faJs,
  faNodeJs,
  faPhp,
  faHtml5,
  faCss3,
  faWordpress,
  faBootstrap,
  faFigma,

} from "@fortawesome/free-brands-svg-icons";

import {
  faDownload,
    // Changed from faHandWave
  faDesktop,
  faPhoneAlt,     // Added for footer phone icon
  faEnvelope,     // Added for footer email icon
} from "@fortawesome/free-solid-svg-icons";

const skills = [
  { id: 1, icon: faPython, label: "Python",  bg: "#306998", color: "white" },
  { id: 2, icon: faJava, label: "Java", bg: "#f8981d", color: "white" },
  { id: 3, icon: faReact, label: "React", bg: "#61dafb", color: "white" },
  { id: 4, icon: faJs, label: "JavaScript",  bg: "#f7df1e", color: "black" },
  { id: 5, icon: faNodeJs, label: "Node.js", bg: "#8cc84b", color: "white" },
  { id: 6, icon: faPhp, label: "PHP",  bg: "#777bb3", color: "white" },
  { id: 7, icon: faHtml5, label: "HTML5", bg: "#e34f26", color: "white" },
  { id: 8, icon: faCss3, label: "CSS3", bg: "#2965f1", color: "white" },
  { id: 9, imgSrc: taiwind, label: "Tailwind CSS", bg: "#38b2ac" },
  { id: 10, icon: faFigma, label: "Figma",  bg: "#f24e1e" },
  { id: 11, imgSrc: mongodb, label: "MongoDB", bg: "#47a248" },
  { id: 12, icon: faWordpress, label: "WordPress",  bg: "#21759b", color: "white" },
  { id: 13, icon: faBootstrap, label: "Bootstrap", bg: "#563d7c", color: "white" },
  { id: 14, imgSrc: C_Sharp, label: "C#", bg: "#68217A", color: "white" },
  { id: 15, imgSrc: CP, label: "C", bg: "#A8B9CC", color: "black" },
  { id: 16, imgSrc: C_pluss, label: "C++", bg: "#00599C", color: "white" },
  { id: 17, imgSrc: javaFx, label: "JavaFX", bg: "#5382A1", color: "white" },
  { id: 18, imgSrc: docker, label: "Docker", bg: "#0db7ed", color: "white" },
  { id: 19, imgSrc: Sql, label: "SQL", bg: "#4479A1", color: "white" },
  { id: 20, imgSrc: typescript, label: "TypeScript", bg: "#3178C6", color: "white" },

  // New skills with icons/images
  { id: 21, label: "Formal Methods", bg: "#ff6f61", color: "white" }, // text badge
  { id: 22, imgSrc: smartContract, label: "Smart Contract", bg: "#4a90e2" },
  { id: 23, imgSrc: blockchain, label: "Blockchain", bg: "#f7931a" },
  { id: 24, imgSrc: SpringBoot, label: "Spring Boot", bg: "#6db33f" },
  { id: 25, imgSrc: MachineLearning, label: "Machine Learning", bg: "#f9a825", color: "black" },
  { id: 26, imgSrc: DNN, label: "Deep NN", bg: "#9c27b0", color: "white" },
  { id: 27, imgSrc: OpenCV, label: "OpenCV", bg: "#5c5c5c", color: "white" },
  { id: 28, imgSrc: Vision, label: "Computer Vision", bg: "#00bcd4", color: "white" },
  { id: 29, imgSrc: dyanjo, label: "Django", bg: "#092e20", color: "white" },
  { id: 30, imgSrc: nextjs, label: "Next.js", bg: "#000000", color: "white" },
];
const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [rotatingTextVisible, setRotatingTextVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotatingTextVisible((prev) => !prev);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

 const [showBackToTop, setShowBackToTop] = useState(false);

// Back to Top scroll detection
  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <>
      <nav className="navbar">
        <a href="https://github.com/XeroHer" target="_blank" rel="noreferrer" className="github-link">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#experience">Projects</a></li>
          <li><a href="#experience">Experience</a></li>
          <li>
            <a
              href={cv}
              target="_blank"
              rel="noreferrer"
              style={{ color: "yellow" }}
            >
              <FontAwesomeIcon icon={faDownload} /> CV
            </a>
          </li>
        </ul>
      </nav>

      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to My Portfolio</h1>
          <p>Discover my work, skills, and experience in the world of tech</p>
          <FontAwesomeIcon icon={faDesktop} className="fa-desktop" />
          <h1>Bikesh Kumar Raut</h1>
          <div className="Developer">
            {rotatingTextVisible && <p id="rotatingText">FullStack Developer</p>}
          </div>

          {/* Theme Toggle Button */}
          <div className="toggle-container">
            <label className="switch">
              <input
                type="checkbox"
                checked={darkMode}
                onChange={() => setDarkMode(!darkMode)}
                aria-label="Toggle dark mode"
              />
              <span className="slider">
                <span className="icon sun">☀️</span>
                <span className="icon moon">🌙</span>
              </span>
            </label>
          </div>
        </div>
      </section>

      <section id="about" className="section">
        <h2 style={{ paddingTop: "3rem" }}>ABOUT ME</h2>
        <div className="about-content">
          <div className="about-image">
            <img
              src={profile}
              alt="Bikesh"
            />
            <div className="Icon">
              <a href="https://www.python.org" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faPython} style={{ color: "#306998" }} />
              </a>
              <a href="https://www.java.com" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faJava} style={{ color: "#f8981d" }} />
              </a>
              <a href="https://reactjs.org" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faReact} style={{ color: "#61dafb" }} />
              </a>
            </div>
          </div>

          <div className="about-text">
            <div className="top-section">
              <div className="red"></div>
              <div className="yellow"></div>
              <div className="green"></div>
            </div>
            <div className="bottom-section">
              <h1>Hi :)</h1>
              <p>
                👋 I'm Bikesh Kumar Raut. I have over 5 months of experience working with <strong>Dockland Creative Organization</strong> in web development.
                Currently, I am a looking for fulltime job, building E-commerce Websites and Online Appointment & Booking Systems also helps in AI. I'm deeply passionate about smart work that helps automate manual tasks.
              </p>
            </div>
          </div>
        </div>
      </section>

    
    <section id="skills" className="section">
      <h2>SKILLS</h2>
      <div className="skills-container">
        {skills.map((skill) => (
          <div
            key={skill.id}
            className="skill-item"
            style={{ backgroundColor: skill.bg || "rgb(4,3,3)" }}
          >
            <div className="skill-icon" style={{ color: skill.color || "#333" }}>
              {skill.icon ? (
                <FontAwesomeIcon icon={skill.icon} />
              ) : skill.imgSrc ? (
                <img
                  src={skill.imgSrc}
                  alt={skill.label}
                  width="100"
                  height="70"
                  style={{ borderRadius: "5px" }}
                />
              ) : null}
            </div>
            <div className="p-text">
              <strong>{skill.label}</strong>
              {skill.level && (
                <>
                  <br />
                  <small>{skill.level}</small>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>


      <section id="experience" className="section">
  <h2 style={{ backgroundColor: "rgba(210, 164, 13, 0.263)", paddingTop: "3rem" }}>
    EXPERIENCE & PROJECTS
  </h2>
  <div className="experience-grid">
    {/* Placement Card */}
    <div className="experience-card">
      <h1>PLACEMENT</h1>
      <h4>01/01/2025 - 01/05/2025</h4>
      <p>Company: Dockland Creative Organization</p>
      <p>Project: One Newham Volunteering website VCFS</p>
      <p>
        <a href="https://onenewham.vercel.app/" target="_blank" rel="noreferrer">
          OneNewham
        </a>
      </p>
      <p>
        GitHub link for the Project:{" "}
        <a href="https://github.com/Docklands-Creative" target="_blank" rel="noreferrer">
          github-link
        </a>
      </p>
    </div>

    {/* AI Job Portal Project */}
    <div className="experience-card">
      <h1>AI-Powered Job Portal</h1>
      <h4>2026</h4>
      <p>
        A full-stack web application leveraging AI to match job seekers with the right jobs
        and provide recruiters an intuitive dashboard.
      </p>
      <ul>
        <li>Users can create profiles & upload resumes</li>
        <li>AI recommends jobs based on skills</li>
        <li>Recruiter dashboard to post jobs</li>
        <li>Resume Analyzer provides AI-generated feedback</li>
      </ul>
      <p>
        <strong>Live Project:</strong>{" "}
        <a href="https://aijobportals.netlify.app/" target="_blank" rel="noreferrer">
          aijobportals.netlify.app
        </a>
      </p>
      <p>
        <strong>Frontend GitHub:</strong>{" "}
        <a href="https://github.com/XeroHer/AI_JOB_PORTAL" target="_blank" rel="noreferrer">
          AI_JOB_PORTAL
        </a>
      </p>
      <p>
        <strong>Backend GitHub:</strong>{" "}
        <a href="https://github.com/XeroHer/AIJobBackend" target="_blank" rel="noreferrer">
          AIJobBackend
        </a>
      </p>
      <p>
        <strong>Backend API:</strong>{" "}
        <a href="https://aijobbackend.onrender.com/" target="_blank" rel="noreferrer">
          aijobbackend.onrender.com
        </a>
      </p>
      <h4 >AI--Live Soon!</h4>
    </div>
    {/* Maithili Shark Project */}
<div className="experience-card">
  <h1>Maithili Shark (Web3 + Traditional Payments)</h1>
  <h4>2026</h4>

  <p>
    A full-stack e-commerce platform integrating both blockchain-based and
    traditional payment systems, designed to provide secure, flexible, and
    seamless shopping experiences.
  </p>

  <ul>
    <li>
      Designed a full-stack e-commerce platform with 10+ core features,
      including product uploads, cart management, secure checkout, and order
      tracking
    </li>

    <li>
      Implemented role-based access for customers and vendors, enabling smooth
      multi-user interactions
    </li>

    <li>
      Built a responsive cart and product management system with full CRUD
      operations, optimizing UI performance and state management
    </li>

    <li>
      Integrated blockchain payments using smart contracts with MetaMask and
      traditional payment processing via Stripe
    </li>

    <li>
      Enhanced transaction security and flexibility through decentralized and
      centralized payment support
    </li>
  </ul>

  <p>
    <strong>Live Project:</strong>{" "}
    <a
      href="https://maithiliyshark.netlify.app/"
      target="_blank"
      rel="noreferrer"
    >
      maithiliyshark.netlify.app
    </a>
  </p>

  <p>
    <strong>GitHub:</strong>{" "}
    <a
      href="https://github.com/XeroHer/Vendor"
      target="_blank"
      rel="noreferrer"
    >
      Vendor
    </a>
  </p>

  <h4>Live Now!</h4>
</div>
{/* Resume Analyzer AI Project */}
<div className="experience-card">
  <h1>AI Resume Analyzer</h1>
  <h4>2026</h4>

  <p>
    An AI-powered resume analysis application that evaluates resumes using
    Natural Language Processing (NLP) and Machine Learning to improve hiring
    outcomes and ATS compatibility.
  </p>

  <ul>
    <li>ATS (Applicant Tracking System) score analysis</li>
    <li>Skill extraction from uploaded resumes</li>
    <li>Job-role matching based on resume content</li>
    <li>AI-generated resume improvement suggestions</li>
    <li>Keyword optimization for better ATS visibility</li>
  </ul>

  <p>
    <strong>Live Project:</strong>{" "}
    <a
      href="https://aijobportals.netlify.app/"
      target="_blank"
      rel="noreferrer"
    >
      aijobportals.netlify.app
    </a>
  </p>

  <h4>AI-Powered Resume Analysis</h4>
</div>

{/* Object Detection Using YOLOv8 */}
<div className="experience-card">
  <h1>Object Detection Using YOLOv8 (KITTI Dataset)</h1>
  <h4>Academic AI Project • 2026</h4>

  <p>
    An academic AI project focused on training the YOLOv8 model using the
    KITTI Vision Benchmark Suite dataset for autonomous driving and real-time
    road-scene object detection.
  </p>

  <ul>
    <li>Trained YOLOv8 model using the KITTI dataset</li>
    <li>Real-time detection of cars, pedestrians, and cyclists</li>
    <li>Applied computer vision techniques for autonomous driving research</li>
    <li>Optimized object detection for road-scene image processing</li>
  </ul>

  <p>
    <strong>GitHub:</strong>{" "}
    <a
      href="https://github.com/XeroHer/ObjectDetection"
      target="_blank"
      rel="noreferrer"
    >
      ObjectDetection
    </a>
  </p>

  <h4>Computer Vision & Deep Learning</h4>
</div>

  </div>
</section>

      <footer id="footer">
        <div className="footer-content">
          <div className="footer-social">
            <div className="social-item">
              <div className="contact-item">
                <FontAwesomeIcon icon={faPhoneAlt} />
              </div>
            </div>

            <div className="social-item">
              <a href="https://github.com/yourusername" target="_blank" rel="noreferrer" className="social-icon">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </div>

            <div className="social-item">
              <a href="https://www.linkedin.com/in/bikesh-kumar-raut-13bb4820b/" target="_blank" rel="noreferrer" className="social-icon">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>

            <div className="social-item">
              <a href="bksraut100@gmail.com" target="_blank" rel="noreferrer" className="social-icon">
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
            </div>

            <div className="social-item">
              <a href="https://www.freecodecamp.org/fcc719a956f-5f7d-41d7-ad10-54abd57aa9af" target="_blank" rel="noreferrer" className="social-icon">
                <img
                  src={freeCode}
                  alt="FreeCodeCamp"
                  width="24"
                  height="24"
                  style={{ backgroundColor: "rgb(248, 245, 245)" }}
                />
              </a>
            </div>
          </div>

          <div className="footer-item">
            <p>Copyright &copy; 2025 Bikesh Kumar Raut</p>
          </div>
        </div>
      </footer>
      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          className="back-to-top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          ↑ Back to Top
        </button>
      )}
    </>
  );
};

export default Portfolio;
