import React from "react";
import "./globals.css";

import {
  SiPytorch,
  SiTensorflow,
  SiScikitlearn,
  SiPandas,
  SiOnnx,
  SiCmake,
  SiRos,
} from "react-icons/si";
import {
  FaMedium,
  FaPython,
  FaCuttlefish,
  FaGithub,
  FaDocker,
  FaCode,
  FaMicrochip,
  FaCarSide,
  FaLinkedin,
} from "react-icons/fa";
import { DiVisualstudio } from "react-icons/di";


export default function Home() {
  return (
    <>
      <header>
        <h1>Welcome to my personal website!</h1>

        {/* Flex layout: image/name left, intro right */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            gap: "40px",
            paddingLeft: "20px",
          }}
        >
          {/* Image + Name */}
          <div style={{ textAlign: "center", marginTop: "0px" }}>
            <img
              src="/profile.JPG"
              alt="Beomseok Kim"
              style={{
                width: "170px",
                borderRadius: "50%",
                marginBottom: "10px",
              }}
            />
            <h2 style={{ margin: 0 }}>Beomseok Kim</h2>
          </div>

          {/* Intro */}
          <div style={{ maxWidth: "500px", marginTop: "10px" }}>
            <p>
              <em>
                I’m a software engineer with interdisciplinary expertise in
                mechanical engineering and intelligent software systems. With
                master’s and bachelor’s degrees in mechanical engineering, I
                specialize in autonomous driving and have hands-on experience in
                AI and machine learning. I’m passionate about end-to-end
                engineering—building, integrating, and deploying software for
                real-world dynamic systems.
              </em>
            </p>

            {/* Contact + CV below intro, aligned */}
            <div
              style={{
                fontSize: "1rem",
                marginTop: "52px",
              }}
            >
              <p style={{ margin: 0 }}>
                Contact:{" "}
                <a
                  href="mailto:bskkim2022@gmail.com"
                  style={{ color: "#0000EE", textDecoration: "underline" }}
                >
                  bskkim2022@gmail.com
                </a>
                , CV:{" "}
                <a
                  href="/CV_KIM.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#0000EE", textDecoration: "underline" }}
                >
                  Click here
                </a>
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Education Section */}
      <section id="education" className="section">
        <h2>Education</h2>
        <ul style={{ paddingLeft: "20px" }}>
          <li style={{ marginBottom: "12px" }}>
            <strong>The University of Tokyo, Japan</strong>
            <br />
            Mech. Eng., Master’s Degree
          </li>
          <li>
            <strong>Soongsil University, Korea</strong>
            <br />
            Mech. Eng., Bachelor’s Degree
          </li>
        </ul>
      </section>

      {/* Work & Research Experience Section */}
      <section id="experience" className="section">
        <h2>Research & Work Experience</h2>
        <ul style={{ paddingLeft: "20px" }}>
          <li style={{ marginBottom: "12px" }}>
            <strong>
              Software Engineer Intern, <strong>TIER IV</strong> (Dec 2024 – May 2025)
            </strong>
            <br />
            — Worked on Inference of SOTA E2E driving models
          </li>
          <li style={{ marginBottom: "12px" }}>
            <strong>
              Software Engineer Intern, <strong>BOSCH</strong> (Apr 2023 – Mar 2024)
            </strong>
            <br />
            — Worked on Automated Valet Parking system.
          </li>
          <li>
            <strong>
              Research Intern, <strong>Nakano Lab</strong>, The University of Tokyo (Apr 2022 – Mar 2023)
            </strong>
            <br />
            — Research on self-driving's decision-making
          </li>
        </ul>
      </section>

      <section id="blog" className="section">
        <h2>Blog & Online Writing</h2>
        <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
          <li
            style={{
              marginBottom: "8px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <FaGithub
              style={{
                marginRight: "8px",
                verticalAlign: "middle",
                color: "black",
              }}
              size={20}
            />
            <a
              href="https://github.com/bskkimm"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#0000EE", textDecoration: "underline" }}
            >
              GitHub
            </a>
          </li>
                    <li
            style={{
              marginBottom: "8px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <FaLinkedin
              style={{
                marginRight: "8px",
                verticalAlign: "middle",
                color: "black",
              }}
              size={20}
            />
            <a
              href="https://www.linkedin.com/in/beomseok-kim-0209342a9/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#0000EE", textDecoration: "underline" }}
            >
              Linkedin
            </a>
          </li>
          <li style={{ display: "flex", alignItems: "center" }}>
            <FaMedium
              style={{
                marginRight: "8px",
                verticalAlign: "middle",
                color: "black",
              }}
              size={20}
            />
            <a
              href="https://medium.com/@bskkim2022"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#0000EE", textDecoration: "underline" }}
            >
              Medium
            </a>{" "}
            — I write technical articles and document my learning journey.
          </li>
        </ul>
      </section>

      <section id="skills" className="section">
        <h2>Technical Skills</h2>

        <p style={{ paddingLeft: "20px", maxWidth: "900px", marginBottom: "20px" }}>
          Experienced in OOP with Python (advanced) and C++ (intermediate). Skilled in building end-to-end computer vision ML pipelines—from data preprocessing and model training to inference.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "30px",
            paddingLeft: "20px",
            maxWidth: "900px",
          }}
        >
          {/* Programming Languages */}
          <div style={{ paddingRight: "50px" }}>
            <h4 style={{ position: "relative", paddingLeft: "20px" }}>
              <span
                style={{
                  position: "absolute",
                  left: 0,
                  top: "50%",
                  transform: "translateY(-50%)",
                  fontSize: "1.3rem",
                  lineHeight: 1,
                  color: "black",
                  userSelect: "none",
                }}
              >
                •
              </span>
              Languages
            </h4>
            <ul style={{ listStyle: "none", paddingLeft: "0" }}>
              <li style={{ display: "flex", alignItems: "center", paddingLeft: "20px" }}>
                <FaPython style={{ marginRight: "8px" }} /> Python
              </li>
              <li style={{ display: "flex", alignItems: "center", paddingLeft: "20px" }}>
                <FaCuttlefish style={{ marginRight: "8px" }} /> C++
              </li>
              <li style={{ display: "flex", alignItems: "center", paddingLeft: "20px" }}>
                <FaCode style={{ marginRight: "8px" }} /> MATLAB / Simulink
              </li>
            </ul>
          </div>

          {/* AI / ML Tools */}
          <div style={{ paddingRight: "10px" }}>
            <h4 style={{ position: "relative", paddingLeft: "20px" }}>
              <span
                style={{
                  position: "absolute",
                  left: 0,
                  top: "50%",
                  transform: "translateY(-50%)",
                  fontSize: "1.3rem",
                  lineHeight: 1,
                  color: "black",
                  userSelect: "none",
                }}
              >
                •
              </span>
              AI / ML Tools
            </h4>
            <ul style={{ listStyle: "none", paddingLeft: "0" }}>
              <li style={{ display: "flex", alignItems: "center", paddingLeft: "20px" }}>
                <SiPytorch style={{ marginRight: "8px" }} /> PyTorch
              </li>
              <li style={{ display: "flex", alignItems: "center", paddingLeft: "20px" }}>
                <SiTensorflow style={{ marginRight: "8px" }} /> TensorFlow
              </li>
              <li style={{ display: "flex", alignItems: "center", paddingLeft: "20px" }}>
                <SiOnnx style={{ marginRight: "8px" }} /> ONNX
              </li>
              <li style={{ display: "flex", alignItems: "center", paddingLeft: "20px" }}>
                <FaMicrochip style={{ marginRight: "8px" }} /> TensorRT
              </li>
            </ul>
          </div>

          {/* Developer & Other Tools */}
          <div>
            <h4 style={{ position: "relative", paddingLeft: "20px" }}>
              <span
                style={{
                  position: "absolute",
                  left: 0,
                  top: "50%",
                  transform: "translateY(-50%)",
                  fontSize: "1.3rem",
                  lineHeight: 1,
                  color: "black",
                  userSelect: "none",
                }}
              >
                •
              </span>
              Developer & Other Tools
            </h4>
            <ul style={{ listStyle: "none", paddingLeft: "0" }}>
              <li style={{ display: "flex", alignItems: "center", paddingLeft: "20px" }}>
                <FaGithub style={{ marginRight: "8px" }} /> GitHub
              </li>
              <li style={{ display: "flex", alignItems: "center", paddingLeft: "20px" }}>
                <DiVisualstudio style={{ marginRight: "8px" }} /> VSCode
              </li>
              <li style={{ display: "flex", alignItems: "center", paddingLeft: "20px" }}>
                <SiRos style={{ marginRight: "8px" }} /> ROS
              </li>
              <li style={{ display: "flex", alignItems: "center", paddingLeft: "20px" }}>
                <FaCarSide style={{ marginRight: "8px" }} /> CARLA
              </li>
            </ul>
          </div>
        </div>
      </section>






      <section id="projects" className="section">
        <h2>Projects</h2>
        <ul style={{ paddingLeft: "20px" }}>
          <li style={{ marginBottom: "12px" }}>
            <a
              href="https://github.com/bskkimm/Paper-Implementation-Series"
              target="_blank"
              rel="noopener noreferrer"
            >
              From Paper to Code: Implementations of Key Computer Vision Papers from Scratch
            </a>{" "}
            — An individual implementation project series built from scratch in PyTorch — from CNNs to Transformers, covering tasks from classification to object detection, with full pipelines including model explanation, data preparation, training, and visualization
          </li>
        </ul>
                    <div style={{ marginTop: "12px" }}>
              <img
                src="/implementation_paper.png"
                alt="Representative figure for paper implmentation"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                  border: "1px solid #ddd",
                  borderRadius: "6px",
                  padding: "4px",
                }}
              />
            </div>
      </section>



      <section id="publications" className="section">
        <h2>Publications</h2>
        <ul style={{ paddingLeft: "20px" }}>
          <li style={{ maxWidth: "720px" }}>
            <p style={{ marginBottom: "12px" }}>
              B.S Kim, S.T Jeong, and H.J Ahn. “The Prediction of the Angular Transmission Error of a Harmonic Drive by Measuring Noncontact Tooth Profile and Considering Three-Dimensional Tooth Engagement.”{" "}
              <em>
                International Journal of Precision Engineering and Manufacturing
              </em>{" "}
              24, no. 3 (2023): 371–378.{" "}
              <a
                href="https://doi.org/10.1007/s12541-022-00760-w"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#0000EE", textDecoration: "underline" }}
              >
                https://doi.org/10.1007/s12541-022-00760-w
              </a>
            </p>
            <div style={{ marginTop: "12px" }}>
              <img
                src="/Harmonic.png"
                alt="Representative figure for harmonic drive publication"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                  border: "1px solid #ddd",
                  borderRadius: "6px",
                  padding: "4px",
                }}
              />
            </div>
          </li>
        </ul>
      </section>

      <footer>
        <p>© {new Date().getFullYear()} Power KK. All rights reserved.</p>
      </footer>
    </>
  );
}
