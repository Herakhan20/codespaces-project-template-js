/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Event Management System 🎟️",
    description:
      "A complete event management system where users can create, manage, and book events. Built with React, Node.js, and MySQL.",
    url: "https://github.com/yourusername/event-management-system",
  },
  {
    title: "Portfolio Website 🌐",
    description:
      "My personal portfolio website showcasing my skills, projects, and experience. Built using HTML, CSS, and JavaScript.",
    url: "https://yourusername.github.io/",
  },
  {
    title: "Task Manager App ✅",
    description:
      "A simple to-do list application with CRUD functionalities. Users can add, delete, and mark tasks as completed.",
    url: "https://github.com/yourusername/task-manager-app",
  },
  {
    title: "Resume Builder 📝",
    description:
      "A web-based resume builder that helps users generate resumes using pre-defined templates.",
    url: "https://github.com/yourusername/resume-builder",
  },
  {
    title: "GitHub Contributions 📌",
    description:
      "I contribute to open-source projects like React and Node.js, helping improve documentation and fixing bugs.",
    url: "https://github.com/yourusername",
  },
];


const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
