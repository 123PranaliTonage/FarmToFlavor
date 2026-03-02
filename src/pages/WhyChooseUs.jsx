import { useState } from "react";

function WhyChooseUs() {

  const [rating, setRating] = useState(0);

  return (
    <div className="section">

      <h2 style={{ textAlign: "center", marginBottom: "40px" }}>
        Why Choose Us
      </h2>

      {/* Company Strength Section */}
      <div style={{
        display: "flex",
        justifyContent: "center",
        gap: "40px",
        flexWrap: "wrap",
        marginBottom: "60px"
      }}>

        <div style={cardStyle}>
          <h3>🌍 Export Quality</h3>
          <p>Premium dehydrated onion powder meeting global standards.</p>
        </div>

        <div style={cardStyle}>
          <h3>🏭 Advanced Manufacturing</h3>
          <p>Modern dehydration process preserving flavor and nutrients.</p>
        </div>

        <div style={cardStyle}>
          <h3>🧪 Quality Tested</h3>
          <p>Strict hygiene standards and lab-tested production batches.</p>
        </div>

      </div>

      {/* Rating Section */}
      <div style={{ textAlign: "center" }}>
        <h3>Customer Satisfaction Rating</h3>

        <div style={{ fontSize: "30px", margin: "20px 0" }}>
          {[1,2,3,4,5].map((star) => (
            <span
              key={star}
              style={{
                cursor: "pointer",
                color: star <= rating ? "gold" : "gray"
              }}
              onClick={() => setRating(star)}
            >
              ★
            </span>
          ))}
        </div>

        {rating > 0 && (
          <p>Thank you for rating us {rating} ⭐</p>
        )}
      </div>

    </div>
  );
}

const cardStyle = {
  background: "white",
  padding: "30px",
  borderRadius: "12px",
  width: "250px",
  textAlign: "center",
  boxShadow: "0 5px 20px rgba(0,0,0,0.1)"
};

export default WhyChooseUs;