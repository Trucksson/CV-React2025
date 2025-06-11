// src/pages/Experience.jsx
export default function Experience() {
  return (
    <main className="experience-container">
      <h1>My Experience</h1>

      <div className="experience-content">

        <div className="experience-box">
          <h2>Projects</h2>
          <div className="project-images">

            {/* Projekt 1: Bank */}
            <div className="project-wrapper">
              <div className="project-card">
                <a href="https://github.com/DavidAndersson6/Grupparbete-Bank" target="_blank" rel="noopener noreferrer">
                  <img src="Pictures/FlameLogo.avif" alt="Bank Project" className="experience-image" />
                </a>
                <p>Bankprojekt</p>
              </div>
            </div>

            {/* Projekt 2: Schack */}
            <div className="project-wrapper">
              <div className="project-card">
                <a href="https://github.com/Trucksson/ChessBoard" target="_blank" rel="noopener noreferrer">
                  <img src="Pictures/ChessboardLogo.png" alt="Chess Project" className="experience-image" />
                </a>
                <p>Schackbräde</p>
              </div>
            </div>

          </div>
        </div>

        <div className="experience-box">
          <h2>CV Information</h2>
          <p>
            Hej, mitt namn är Henric Kurtsson. Jag har väldigt god erfarenhet inom lager och logistik och har arbetat på företag såsom AlfaLaval, KH Maskin och Din Bil.
            Jag har jobbat med affärs- och IT-system som SAP, Automaster och Microsoft D365. Jag har både körkort och truckkort och studerar nu heltid till systemutvecklare inom .NET.
          </p>
        </div>
      </div>
    </main>
  );
}
