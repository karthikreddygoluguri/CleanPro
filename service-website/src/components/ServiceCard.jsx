function ServiceCard({ title, price }) {
  return (
    <div className="card">
      <div style={{ fontSize: "2.5rem", marginBottom: "12px" }}>✨</div>
      <h3>{title}</h3>
      <h2 style={{ margin: "14px 0", color: "var(--accent)" }}>₹{price}</h2>
      <p>Starting price</p>
    </div>
  );
}

export default ServiceCard;