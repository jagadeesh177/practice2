import React from "react";
import "./App.css"; // Make sure this file exists in the same folder

function Card({ title, description, image, tags }) {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
      <div className="card-tags">
        {tags.map((tag, i) => (
          <span key={i} className="tag">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function App() {
  const cards = [
    {
      title: "Web Development",
      description:
        "Building modern, responsive websites and web applications using React, JavaScript, and modern CSS frameworks.",
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600",
      tags: ["React", "JavaScript"],
    },
    {
      title: "Photography",
      description:
        "Capturing beautiful moments and landscapes, specializing in street photography and natural lighting techniques.",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600",
      tags: ["Creative", "Visual Arts"],
    },
    {
      title: "Fitness & Health",
      description:
        "Passionate about maintaining a healthy lifestyle through regular exercise, yoga, and mindful nutrition practices.",
      image:
        "https://cdn3.vectorstock.com/i/1000x1000/91/12/fitness-and-health-flat-poster-vector-20809112.jpg",
      tags: ["Wellness", "Lifestyle"],
    },
  ];

  return (
    <div className="app">
      <h1 className="app-title">Alex Johnson</h1>
      <p className="app-subtitle">
        Full Stack Developer & Creative Enthusiast
      </p>
      <div className="card-container">
        {cards.map((card, idx) => (
          <Card key={idx} {...card} />
        ))}
      </div>
    </div>
  );
}
