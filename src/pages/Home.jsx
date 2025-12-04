import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <section className="hero reveal">
        <div>
          <h1>
            Sparkling Clean Homes <br />
            <span>Professionally Delivered</span>
          </h1>

          <p style={{ maxWidth: "580px", margin: "24px auto", fontSize: "1.15rem" }}>
            Trusted residential & commercial cleaning with verified staff, modern
            equipment, and guaranteed hygiene.
          </p>

          <div style={{ display: "flex", justifyContent: "center", gap: "16px", marginTop: "32px", flexWrap: "wrap",padding: "0 20px" }}>
            <Link to="/booking">
              <button className="btn">Book Cleaning</button>
            </Link>
            <Link to="/services">
              <button className="btn">View Services</button>
            </Link>
          </div>

          {/* STATS */}
          <div
            className="grid"
            style={{ marginTop: "80px", maxWidth: "900px", marginInline: "auto" }}
          >
            <div className="card">
              <div style={{ fontSize: "2rem", marginBottom: "8px" }}>✅</div>
              <h3>15,000+</h3>
              <p style={{ marginTop: "6px" }}>Cleanings Completed</p>
            </div>
            <div className="card">
              <div style={{ fontSize: "2rem", marginBottom: "8px" }}>⭐</div>
              <h3>4.9/5</h3>
              <p style={{ marginTop: "6px" }}>Customer Rating</p>
            </div>
            <div className="card">
              <div style={{ fontSize: "2rem", marginBottom: "8px" }}>🏆</div>
              <h3>10+ Years</h3>
              <p style={{ marginTop: "6px" }}>Experience</p>
            </div>
          </div>
        </div>
      </section>

      <a
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-btn"
      >
        💬 WhatsApp Us
      </a>
    </>
  );
}

export default Home;