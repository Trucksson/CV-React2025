import { useEffect, useState } from "react";

const BASE = `${import.meta.env.BASE_URL}Pictures/`;

export default function Experience() {
  const [experience, setExperience] = useState([]);
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    // Hämta manuella projekt från CVHenric.json
    fetch(`${import.meta.env.BASE_URL}data/CVHenric.json`)
      .then((res) => res.json())
      .then((data) => {
        setExperience(data.experience);
      })
      .catch((err) => console.error("❌ Misslyckades ladda experience:", err));

    // Hämta publika GitHub-projekt
    fetch("https://api.github.com/users/Trucksson/repos")
      .then((res) => res.json())
      .then((data) => {
          const filtered = data
          .filter(repo => !repo.fork)
          .slice(0, 6); // Begränsa till 8 st
        setRepos(filtered);
      })
      .catch((err) => console.error("❌ GitHub API-fel:", err));
  }, []);

  return (
    <main>
      <section className="experience-container">
        <h1>My Experience</h1>

        {/* Manuella projekt */}
        <div className="experience-content">
          {experience.map((item, index) => {
            const imagePath = `${BASE}${item.image}`;
            return (
              <div className="experience-box" key={index}>
                <h2>{item.company}</h2>
                {item.image && (
                  <img src={imagePath} alt={item.company} className="experience-image" />
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

        {/*  Publika GitHub-repos */}
        <h2 style={{ marginTop: "4rem" }}>GitHub Projects</h2>
        <div className="experience-content">
          {repos.map((repo) => (
            <div className="experience-box" key={repo.id}>
              <h3>{repo.name}</h3>
              <p>{repo.description || "Ingen beskrivning tillgänglig."}</p>
              <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                Besök på GitHub →
              </a>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
