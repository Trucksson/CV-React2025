// src/pages/Education.jsx
export default function Education() {
  return (
    <main className="education-container">
      <h1>My Education</h1>
      <img src="Pictures/chas-academy-emblem.png" alt="Chas Academy Logo" className="education-img" />

      <div className="education-content">
        <div className="education-box">
          <h2>Higher Vocational Education</h2>
          <p>
            Right now I'm studying to become a .NET Fullstack developer at Chas Academy in Stockholm.
            I will complete my education next year.
          </p>

          <h3>High School & Courses</h3>
          <p>
            I have a high school diploma from Fredrika Bremer in Technology and Media Studies, as well as standalone
            courses in Web Development and Programming.
          </p>
        </div>

        <div className="education-box">
          <h2>Other Training</h2>
          <p>
            I also have knowledge in many warehouse systems such as Microsoft D365, Pyramid, SAP, and others.
          </p>
        </div>
      </div>
    </main>
  );
}
