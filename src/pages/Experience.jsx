import { useEffect, useState } from "react";

const BASE = `${import.meta.env.BASE_URL}Pictures/`;

export default function Experience() {
  const [experience, setExperience] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}data/CVHenric.json`)
      .then((res) => res.json())
      .then((data) => {
        console.log("✅ Experience-data laddad:", data.experience);
        setExperience(data.experience);
      })
      .catch((err) => console.error("❌ Misslyckades ladda experience:", err));
  }, []);

  return (
    <main>
      <section className="experience-container">
        <h1>My Experience</h1>
        <div className="experience-content">
          {experience.map((item, index) => {
            const imagePath = `${BASE}${item.image}`;
            console.log(`🖼️ Bildväg för "${item.company}":`, imagePath);
            return (
              <div className="experience-box" key={index}>
                <h2>{item.company}</h2>
                {item.image ? (
                  <img
                    src={imagePath}
                    alt={item.company}
                    className="experience-image"
                  />
                ) : (
                  <p style={{ color: "red" }}>⚠️ Ingen bild angiven</p>
                )}
                <p>{item.role}</p>
                <p><em>{item.year}</em></p>
                {item.github && (
                  <a
                    href={item.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="open-modal-btn"
                  >
                    View on GitHub
                  </a>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
