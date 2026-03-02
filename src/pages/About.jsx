import React from "react";

const About = () => {
  return (
    <div>

      {/* HERO SECTION */}
      <section
        style={{
          backgroundImage:
            "url('https://image.made-in-china.com/2f0j00AakctFZdMKrl/TCA-Automatic-Onion-Powder-Making-Machine-Onion-Powder-Milling-Machine-Processing-Line.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "60vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          textAlign: "center",
        }}
      >
        <div
          style={{
            background: "rgba(0,0,0,0.6)",
            padding: "40px",
            borderRadius: "10px",
          }}
        >
          <h1 style={{ fontSize: "40px", marginBottom: "10px" }}>
            Our Manufacturing Excellence
          </h1>
          <p>
            Delivering Premium Quality Dehydrated Onion Powder Worldwide
          </p>
        </div>
      </section>

      {/* INTRO SECTION */}
      <section style={{ padding: "60px 10%", textAlign: "center" }}>
        <h2 style={{ color: "#8B0000", marginBottom: "20px" }}>
          Farm to Flavor Journey
        </h2>
        <p style={{ maxWidth: "800px", margin: "auto", lineHeight: "1.6" }}>
          We follow a fully automated and hygienic dehydration process to
          ensure maximum aroma, flavor, and nutrition retention.
        </p>
      </section>

      {/* PROCESS STEPS */}
      <section style={{ padding: "40px 10%" }}>

        {/* STEP 1 */}
        <div style={cardStyle}>
          <img
            src="https://www.tastingtable.com/img/gallery/why-are-red-onions-purple/l-intro-1644158494.jpg"
            alt="Raw Onion Selection"
            style={imgStyle}
          />
          <div>
            <h3>1️⃣ Raw Material Selection</h3>
            <p>
              Fresh mature onions sourced directly from trusted farmers.
              Carefully inspected and lab-tested before processing.
            </p>
          </div>
        </div>

        {/* STEP 2 */}
        <div style={cardStyle}>
          <img
            src="https://th.bing.com/th/id/OIP.POZUfXW7zo2LZQtOMlNvsAHaEK?w=318&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
            alt="Washing Process"
            style={imgStyle}
          />
          <div>
            <h3>2️⃣ Cleaning & Washing</h3>
            <p>
              High-pressure water washing removes dirt and impurities,
              ensuring contamination-free production.
            </p>
          </div>
        </div>

        {/* STEP 3 */}
        <div style={cardStyle}>
          <img
            src="https://www.bing.com/th/id/OIP.fVI3JETdXzn6iUsBFmwiVgHaE7?w=256&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
            alt="Dehydration Process"
            style={imgStyle}
          />
          <div>
            <h3>3️⃣ Dehydration Technology</h3>
            <p>
              Controlled temperature drying preserves flavor, aroma, and
              nutritional value while reducing moisture below 5%.
            </p>
          </div>
        </div>

        {/* STEP 4 */}
        <div style={cardStyle}>
          <img
            src="https://i.ytimg.com/vi/o9g_hOk--PI/maxresdefault.jpg"
            alt="Grinding Process"
            style={imgStyle}
          />
          <div>
            <h3>4️⃣ Grinding & Powdering</h3>
            <p>
              Advanced pulverizing machines convert flakes into fine onion
              powder with customized mesh sizes.
            </p>
          </div>
        </div>
      </section>

      {/* HYGIENE SECTION */}
      <section
        style={{
          backgroundColor: "#FFF5E6",
          padding: "60px 10%",
          textAlign: "center",
        }}
      >
        <h2 style={{ color: "#8B0000", marginBottom: "20px" }}>
          Hygiene & Safety Standards
        </h2>
        <p style={{ maxWidth: "800px", margin: "auto", lineHeight: "1.6" }}>
          Our facility follows strict quality control measures with
          stainless steel equipment, trained staff, pest control systems,
          and regular sanitization protocols.
        </p>
      </section>

    </div>
  );
};

const cardStyle = {
  display: "flex",
  alignItems: "center",
  gap: "30px",
  marginBottom: "40px",
  flexWrap: "wrap",
  background: "#ffffff",
  padding: "20px",
  borderRadius: "10px",
  boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
};

const imgStyle = {
  width: "300px",
  borderRadius: "10px",
};

export default About;