import ServiceCard from "../components/ServiceCard";

function Services() {
  return (
    <section className="reveal">
      <h1>Our Cleaning Solutions</h1>
      <p style={{ marginTop: "10px" }}>
        Complete hygiene for homes & businesses
      </p>

      <div className="grid" style={{ marginTop: "50px" }}>
        <ServiceCard title="Home Cleaning" price="999" />
        <ServiceCard title="Deep Cleaning" price="2499" />
        <ServiceCard title="Kitchen & Bathroom" price="799" />
        <ServiceCard title="Sofa & Carpet" price="1299" />
        <ServiceCard title="Office Cleaning" price="1999" />
        <ServiceCard title="Move-In / Move-Out" price="2999" />
      </div>
    </section>
  );
}

export default Services;
