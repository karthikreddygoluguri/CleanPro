function About() {
  return (
    <section className="reveal">
      <div style={{ textAlign: "center" }}>
        <h1>About CleanPro</h1>
        <p style={{ maxWidth: "700px", margin: "20px auto 0", fontSize: "1.15rem" }}>
          We provide premium residential & commercial cleaning services with 100%
          satisfaction guarantee. Our trained professionals use eco-friendly products
          and modern equipment to deliver exceptional results.
        </p>
      </div>

      <div className="grid" style={{ marginTop: "60px" }}>
        <div className="card">
          <h3>🎯 Our Mission</h3>
          <p style={{ marginTop: "12px" }}>
            Deliver spotless spaces with reliability and care
          </p>
        </div>
        <div className="card">
          <h3>👥 Expert Team</h3>
          <p style={{ marginTop: "12px" }}>
            Verified, trained, and background-checked staff
          </p>
        </div>
        <div className="card">
          <h3>🌿 Eco-Friendly</h3>
          <p style={{ marginTop: "12px" }}>
            Safe, non-toxic cleaning products for your family
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;