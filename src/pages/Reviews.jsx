import { useState, useEffect } from "react";

function CustomerReviews() {

  const defaultReviews = [
    {
      name: "Ramesh Patel",
      rating: 5,
      review: "Excellent quality onion powder. Very fresh and export standard."
    },
    {
      name: "Anita Sharma",
      rating: 4,
      review: "Good packaging and timely delivery. Highly recommended."
    },
    {
      name: "Mohammed Irfan",
      rating: 5,
      review: "Very satisfied with the product quality and service."
    },
    {
      name: "Sneha Kulkarni",
      rating: 5,
      review: "Professional team and premium quality products."
    },
    {
      name: "Rajesh Kumar",
      rating: 4,
      review: "Consistent quality and good customer support."
    }
  ];

  const [reviews, setReviews] = useState([]);
  const [name, setName] = useState("");
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");

  // Load reviews
  useEffect(() => {
    const savedReviews = JSON.parse(localStorage.getItem("customerReviews"));

    if (savedReviews && savedReviews.length > 0) {
      setReviews(savedReviews);
    } else {
      setReviews(defaultReviews);
      localStorage.setItem("customerReviews", JSON.stringify(defaultReviews));
    }
  }, []);

  // Submit new review
  const handleSubmit = () => {
    if (!name || rating === 0 || !review) {
      alert("Please fill all fields");
      return;
    }

    const newReview = {
      name,
      rating,
      review
    };

    const updatedReviews = [...reviews, newReview];
    setReviews(updatedReviews);
    localStorage.setItem("customerReviews", JSON.stringify(updatedReviews));

    setName("");
    setRating(0);
    setReview("");
  };

  return (
    <div className="section">

      <h2 style={{ textAlign: "center", marginBottom: "40px" }}>
        Customer Reviews
      </h2>

      {/* Add Review Section */}
      <div style={{ textAlign: "center", marginBottom: "50px" }}>
        <h3>Give Your Review</h3>

        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={inputStyle}
        />

        <div style={{ fontSize: "28px", margin: "15px 0" }}>
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

        <textarea
          placeholder="Write your review..."
          value={review}
          onChange={(e) => setReview(e.target.value)}
          style={{ ...inputStyle, height: "80px" }}
        />

        <br />

        <button
          onClick={handleSubmit}
          style={buttonStyle}
        >
          Submit Review
        </button>
      </div>

      {/* Display Reviews */}
      <div style={{ maxWidth: "700px", margin: "0 auto" }}>
        {reviews.map((item, index) => (
          <div key={index} style={cardStyle}>
            <h4>{item.name}</h4>
            <div style={{ color: "gold", marginBottom: "8px" }}>
              {"★".repeat(item.rating)}
              {"☆".repeat(5 - item.rating)}
            </div>
            <p>{item.review}</p>
          </div>
        ))}
      </div>

    </div>
  );
}

const inputStyle = {
  width: "300px",
  padding: "10px",
  margin: "10px 0",
  borderRadius: "8px",
  border: "1px solid #ccc"
};

const buttonStyle = {
  padding: "10px 20px",
  marginTop: "10px",
  borderRadius: "8px",
  border: "none",
  background: "#2d6a4f",
  color: "white",
  cursor: "pointer"
};

const cardStyle = {
  background: "white",
  padding: "20px",
  borderRadius: "12px",
  marginBottom: "20px",
  boxShadow: "0 5px 15px rgba(0,0,0,0.1)"
};

export default CustomerReviews;