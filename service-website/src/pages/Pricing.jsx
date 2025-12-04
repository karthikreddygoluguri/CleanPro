import { useState } from "react";

function Pricing() {
  const [yearly, setYearly] = useState(false);

  const plans = [
    { name: "Basic", monthly: 999, yearly: 8999 },
    { name: "Standard", monthly: 1999, yearly: 17999 },
    { name: "Premium", monthly: 3499, yearly: 31999 }
  ];

  return (
    <section className="reveal">
      <h1>Flexible Pricing</h1>

      <div style={{ margin: "30px 0" }}>
        <button className="btn" onClick={() => setYearly(!yearly)}>
          {yearly ? "Switch to Monthly" : "Switch to Yearly"}
        </button>
      </div>

      <div className="grid">
        {plans.map((p) => (
          <div key={p.name} className="card">
            <h3>{p.name}</h3>
            <h2 style={{ margin: "14px 0" }}>
              ₹{yearly ? p.yearly : p.monthly}
            </h2>
            <p>{yearly ? "Per Year" : "Per Month"}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Pricing;
