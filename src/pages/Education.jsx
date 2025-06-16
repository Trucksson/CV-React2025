import { useEffect, useState } from "react";

const BASE = `${import.meta.env.BASE_URL}Pictures/`;

export default function Education() {
  const [education, setEducation] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}data/CVHenric.json`)
      .then((res) => res.json())
      .then((data) => {
        console.log("✅ Education-data laddad:", data.education);
        setEducation(data.education);
      })
      .catch((err) => console.error("❌ Misslyckades ladda education:", err));
  }, []);

  return (
    <main>
      <section className="education-container">
        <h1>My Education</h1>
        <div className="education-content">
          {education.map((item, index) => {
            const imagePath = `${BASE}${item.image}`;
            console.log(`🎓 Bildväg för "${item.title}":`, imagePath);
            return (
              <div className="education-box" key={index}>
                <h2>{item.title}</h2>
                {item.image ? (
                  <img
                    src={imagePath}
                    alt={item.title}
                    className="experience-image"
                  />
                ) : (
                  <p style={{ color: "red" }}>⚠️ Ingen bild angiven</p>
                )}
                <p>{item.description}</p>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
