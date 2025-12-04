function Contact() {
  return (
    <section className="reveal">
      <div style={{ textAlign: "center" }}>
        <h1>Get In Touch</h1>
        <p style={{ marginTop: "12px", maxWidth: "600px", margin: "12px auto 0" }}>
          We're here to help with all your cleaning needs
        </p>
      </div>

      <div className="grid" style={{ marginTop: "50px", maxWidth: "800px", margin: "50px auto 0" }}>
        <div className="card">
          <h3>📧 Email</h3>
          <p style={{ marginTop: "12px" }}>support@cleanpro.com</p>
        </div>
        <div className="card">
          <h3>📞 Phone</h3>
          <p style={{ marginTop: "12px" }}>+91 98765 43210</p>
        </div>
        <div className="card">
          <h3>📍 Location</h3>
          <p style={{ marginTop: "12px" }}>Mumbai, Maharashtra</p>
        </div>
      </div>
    </section>
  );
}

export default Contact;