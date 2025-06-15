import { useEffect, useState } from "react";

export default function Education() {
  const [education, setEducation] = useState([]);

  useEffect(() => {
    fetch("/data/CVHenric.json")
      .then((res) => res.json())
      .then((data) => setEducation(data.education));
  }, []);

  return (
    <main>
      <section className="education-container">
        <h1>My Education</h1>
        <div className="education-content">
          {education.map((item, index) => (
         <div className="education-box" key={index}>
            <h2>{item.title}</h2>
             <img src={item.image} alt={item.title} className="experience-image" />
            <p>{item.description}</p>
        </div>

          ))}
        </div>
      </section>
    </main>
  );
}
