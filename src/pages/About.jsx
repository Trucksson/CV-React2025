// src/pages/About.jsx
export default function About() {
  const BASE = import.meta.env.BASE_URL;
  return (
    <main>
      <section className="about-container">
        <h1>About Me</h1>

        <div className="about-images">
          <img src={`${BASE}Pictures/Coder.jpg`} alt="Coder" />
          <img src={`${BASE}Pictures/Eletricguitar.jpg`} alt="Electric Guitar" />
        </div>

        <div className="about-summary">
          <p>
            Hello! My name is Henric Kurtsson. I am 27 years old and have a big interest
            when it comes to music and IT. I have mostly worked in logistics before, but I am now
            trying to start a new career in IT.
          </p>
        </div>
      </section>

      <footer>
      </footer>
    </main>
  );
}
