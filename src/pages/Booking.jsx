import { useState } from "react";

function Booking() {
  const [data, setData] = useState({
    name: "",
    phone: "",
    service: "",
    date: ""
  });

  const submit = (e) => {
    e.preventDefault();

    if (!data.name || !data.phone || !data.service || !data.date) {
      alert("All fields are required");
      return;
    }

    if (data.phone.length !== 10) {
      alert("Enter valid 10-digit phone");
      return;
    }

    alert("✅ Booking Confirmed!");
    setData({ name: "", phone: "", service: "", date: "" });
  };

  return (
    <section className="reveal">
      <div style={{ textAlign: "center", marginBottom: "50px" }}>
        <h1>Book Your Cleaning</h1>
        <p style={{ marginTop: "12px", color: "var(--text-muted)" }}>
          Schedule your professional cleaning service today
        </p>
      </div>

      <div style={{ 
        display: "grid", 
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", // Reduced from 320px
        gap: "40px", // Reduced from 50px
        maxWidth: "1000px", 
        margin: "0 auto",
        alignItems: "start" // Changed from center for better mobile layout
      }}>
        {/* Form Section */}
        <div>
          <form onSubmit={submit}>
            <input 
              placeholder="Full Name" 
              value={data.name}
              onChange={(e) => setData({ ...data, name: e.target.value })}
            />
            <br /><br />

            <input 
              placeholder="Phone Number" 
              value={data.phone}
              onChange={(e) => setData({ ...data, phone: e.target.value })}
            />
            <br /><br />

            <select 
              value={data.service}
              onChange={(e) => setData({ ...data, service: e.target.value })}
            >
              <option value="">Select Service</option>
              <option>Home Cleaning</option>
              <option>Deep Cleaning</option>
              <option>Kitchen & Bathroom</option>
              <option>Office Cleaning</option>
              <option>Sofa & Carpet</option>
            </select>
            <br /><br />

            <input 
              type="date"
              value={data.date}
              onChange={(e) => setData({ ...data, date: e.target.value })}
            />
            <br /><br />

            <button className="btn" style={{ width: "100%" }}>
              Confirm Booking
            </button>
          </form>
        </div>

        {/* Image Section */}
        <div className="card" style={{ 
          padding: "0", 
          overflow: "hidden",
          height: "50%",
          minHeight: "280px"
        }}>
          <img 
            src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&h=800&fit=crop" 
            alt="Professional cleaning service"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block"
            }}
          />
        </div>
      </div>
    </section>
  );
}

export default Booking;