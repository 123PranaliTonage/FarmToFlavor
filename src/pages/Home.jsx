
import { useNavigate } from "react-router-dom";
function Home() {
    const navigate = useNavigate();
  return (
    <>
      {/* HERO SECTION */}
      <section
        style={{
          minHeight: "100vh",
          background:
            "linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url('https://static.vecteezy.com/system/resources/previews/003/463/778/non_2x/seamless-pattern-onion-on-white-background-vector.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          padding: "0 8%",
          color: "white",
          

        }}
      >
        <div>
          <h1 style={{ fontSize: "65px", fontWeight: "700" }}>
            Premium Dehydrated <br /> Onion Powder
          </h1>
          <p style={{ marginTop: "20px", fontSize: "20px", maxWidth: "600px" }}>
            Delivering export-quality onion powder with advanced dehydration
            technology and global food safety standards.
          </p>

          <div style={{ marginTop: "30px" }}>
            <button onClick={() => navigate("/products")}
              style={{
                padding: "14px 30px",
                borderRadius: "30px",
                background: "#ff4d4d",
                border: "none",
                color: "white",
                marginRight: "15px",
                cursor: "pointer",
              }}
            >
              Explore Products
            </button>

            <button onClick={() => navigate("/contact")}
              style={{
                padding: "14px 30px",
                borderRadius: "30px",
                background: "transparent",
                border: "2px solid white",
                color: "white",
                cursor: "pointer",
              }}
            >
              Request Quote
            </button>
          </div>
        </div>
      </section>

      {/* FARM TO EXPORT SECTION */}
      <section
        style={{
          display: "flex",
          flexWrap: "wrap",
          padding: "100px 8%",
          alignItems: "center",
          gap: "50px",
        }}
      >
        <div style={{ flex: "1" }}>
          <img
            src="https://img.freepik.com/premium-photo/farmer-holding-onion-with-farm-background-food-agricultural-industry-harvest_1061358-36929.jpg"
            alt="Onion Processing"
            style={{ width: "100%", borderRadius: "20px" }}
          />
        </div>

        <div style={{ flex: "1" }}>
          <h2 style={{ fontSize: "40px" }}>From Farm to Global Markets</h2>
          <p style={{ marginTop: "20px", fontSize: "18px", color: "#555" }}>
            We source the finest onions directly from farmers, process them
            using advanced dehydration methods, and deliver globally certified
            onion powder to international markets.
          </p>

          <ul style={{ marginTop: "20px", lineHeight: "2" }}>
            <li>✔ Strict Quality Control</li>
            <li>✔ ISO & FSSAI Certified</li>
            <li>✔ Hygienic Processing Plant</li>
            <li>✔ Bulk Export Packaging</li>
          </ul>
        </div>
      </section>

      {/* STATS SECTION */}
      <section
        style={{
          background: "#fff5f5",
          padding: "80px 8%",
          display: "flex",
          justifyContent: "space-around",
          textAlign: "center",
          flexWrap: "wrap",
        }}
      >
        <div>
          <h2 style={{ fontSize: "45px", color: "#b22222" }}>10+</h2>
          <p>Years of Experience</p>
        </div>
        <div>
          <h2 style={{ fontSize: "45px", color: "#b22222" }}>50+</h2>
          <p>Global Clients</p>
        </div>
        <div>
          <h2 style={{ fontSize: "45px", color: "#b22222" }}>100%</h2>
          <p>Quality Assurance</p>
        </div>
        <div>
          <h2 style={{ fontSize: "45px", color: "#b22222" }}>ISO</h2>
          <p>Certified Facility</p>
        </div>
      </section>

      {/* EXPORT CTA SECTION */}
      <section
        style={{
          background:
            "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('https://tse1.mm.bing.net/th/id/OIP.kGTTVqHPFbAwI92Di714hgHaEO?rs=1&pid=ImgDetMain&o=7&rm=3')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "120px 8%",
          color: "white",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "45px" }}>
          Looking for Reliable Bulk Onion Powder Supplier?
        </h2>

        <p style={{ marginTop: "20px", fontSize: "18px" }}>
          We provide consistent quality, competitive pricing and global export
          solutions.
        </p>

        <button onClick={() => navigate("/contact")}
          style={{
            marginTop: "30px",
            padding: "14px 30px",
            borderRadius: "30px",
            background: "#ff4d4d",
            border: "none",
            color: "white",
            cursor: "pointer",
          }}
        >
          Contact Our Sales Team
        </button>
      </section>
    </>
  );
}

export default Home;