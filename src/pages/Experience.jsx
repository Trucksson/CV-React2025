import { useEffect, useState } from "react";

export default function Experience() {
  const [experience, setExperience] = useState([]);
  const [githubProjects, setGithubProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Hämtar lokal JSON-data
    fetch("/data/CVHenric.json")
      .then((res) => res.json())
      .then((data) => setExperience(data.experience));

    // Hämtar publika GitHub-projekt
    fetch("https://api.github.com/users/Trucksson/repos")
      .then((res) => res.json())
      .then((data) => {
        const publicRepos = data
          .filter((repo) => !repo.private)
          .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
        setGithubProjects(publicRepos.slice(0, 8)); // Visa bara 8 projekt
        setLoading(false);
      })
      .catch((error) => {
        console.error("Fel vid hämtning av GitHub-repo:", error);
        setLoading(false);
      });
  }, []);

  return (
    <main>
      <section className="experience-container">
        <h1>My Experience</h1>
        <div className="experience-content">
          {experience.map((item, index) => (
            <div className="experience-box" key={index}>
              <h2>{item.company}</h2>
              {item.image && (
                <img
                  src={item.image}
                  alt={item.company}
                  className="experience-image"
                />
              )}
              <p>{item.role}</p>
              <p>
                <em>{item.year}</em>
              </p>
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
          ))}
        </div>

        <h2 style={{ marginTop: "50px" }}>GitHub Projects</h2>
        {loading ? (
          <p>Laddar projekt...</p>
        ) : (
          <div className="github-projects">
            {githubProjects.map((project) => (
              <div key={project.id} className="github-project-card">
                <h3>{project.name}</h3>
                <p>{project.description || "Ingen beskrivning tillgänglig."}</p>
                <a
                  href={project.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Besök på GitHub →
                </a>
              </div>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
