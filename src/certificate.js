import React from "react";
import { motion } from "framer-motion";

const certificates = [
  { title: "Software Engineer (Intern)", image: "download (6).png", link: "https://www.hackerrank.com/certificates/iframe/be0d08a4c1e8" },
  { title: "Software Engineer", image: "download (7).png", link: "https://www.hackerrank.com/certificates/iframe/c689696b53f2" },
  { title: "Frontend Developer (React)", image: "download (9).png", link: "https://www.hackerrank.com/certificates/iframe/0f604ce66d2a" },
  { title: "Problem Solving", image: "download (10).png", link: "https://www.hackerrank.com/certificates/iframe/88d73193edb7" },
  { title: "Java (Basic)", image: "download (5).png", link: "https://www.hackerrank.com/certificates/a119b9d89b99" },
  { title: "JavaScript (Intermediate)", image: "download.png", link: "https://www.hackerrank.com/certificates/d6deffe8a652" },
  { title: "REST API", image: "download (1).png", link: "https://www.hackerrank.com/certificates/iframe/8b19889732a0" },
  { title: "Node.js", image: "download (2).png", link: "https://www.hackerrank.com/certificates/iframe/f5f7b6a573c0" },
  { title: "SQL (Advanced)", image: "download (3).png", link: "https://www.hackerrank.com/certificates/iframe/c74e3431aa75" },
  { title: "C#", image: "download (4).png", link: "https://www.hackerrank.com/certificates/iframe/9662ecd83e42" },
];

export default function Certificates({ darkMode }) {

  const styles = {
    page: {
      padding: "60px 20px",
      background: darkMode ? "#0f172a" : "#f8f9fa",
      minHeight: "100vh",
      fontFamily: "Arial",
      textAlign: "center",
      color: darkMode ? "#fff" : "#000",
    },

    heading: {
      fontSize: "36px",
      fontWeight: "700",
      marginBottom: "10px",
    },

    subHeading: {
      color: darkMode ? "#cbd5e1" : "#666",
      marginBottom: "40px",
    },

    timeline: {
      position: "relative",
      maxWidth: "1000px",
      margin: "0 auto",
    },

    line: {
      position: "absolute",
      top: 0,
      bottom: 0,
      left: "50%",
      width: "4px",
      background: "#ffc107",
      transform: "translateX(-50%)",
    },

    item: {
      display: "flex",
      alignItems: "center",
      marginBottom: "60px",
      position: "relative",
    },

    card: {
      width: "45%",
      background: darkMode ? "#1e293b" : "#fff",
      borderRadius: "12px",
      padding: "15px",
      boxShadow: darkMode
        ? "0 8px 20px rgba(0,0,0,0.6)"
        : "0 8px 20px rgba(0,0,0,0.08)",
      textAlign: "center",
      color: darkMode ? "#fff" : "#000",
    },

    image: {
      width: "100%",
      height: "250px",
      objectFit: "cover",
      borderRadius: "8px",
      marginBottom: "10px",
    },

    title: {
      fontSize: "18px",
      marginBottom: "10px",
    },

    button: {
      display: "inline-block",
      padding: "8px 12px",
      background: "#ffc107",
      color: "#000",
      borderRadius: "6px",
      textDecoration: "none",
      fontWeight: "600",
    },

    dot: {
      width: "16px",
      height: "16px",
      background: "#ffc107",
      borderRadius: "50%",
      position: "absolute",
      left: "50%",
      transform: "translateX(-50%)",
      zIndex: 10,
    },
  };

  return (
    <div style={styles.page}>
      <h1 style={styles.heading}>My Certificates</h1>
      <p style={styles.subHeading}>
        Certifications in development, AI, and software engineering
      </p>

      <div style={styles.timeline}>
        <div style={styles.line}></div>

        {certificates.map((cert, index) => {
          const isLeft = index % 2 === 0;

          return (
            <motion.div
              key={index}
              style={{
                ...styles.item,
                flexDirection: isLeft ? "row" : "row-reverse",
              }}
              initial={{ opacity: 0, x: isLeft ? -80 : 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Card */}
              <div style={styles.card}>
                <img src={cert.image} alt={cert.title} style={styles.image} />
                <h3 style={styles.title}>{cert.title}</h3>

                <a
                  href={cert.link}
                  target="_blank"
                  rel="noreferrer"
                  style={styles.button}
                >
                  View Certificate
                </a>
              </div>

              {/* Timeline Dot */}
              <div style={styles.dot}></div>

              {/* Empty side */}
              <div style={{ flex: 1 }}></div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}