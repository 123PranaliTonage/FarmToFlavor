import { useState } from "react";

function Contact() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [showBlast, setShowBlast] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = { name, email, message };

    try {
  const API = import.meta.env.VITE_API_URL;

  const response = await fetch(`${API}/api/enquiry`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(formData)
  });

      if (response.ok) {
        setSuccess(true);
        setTimeout(() => setSuccess(false), 3000);

        setName("");
        setEmail("");
        setMessage("");

        setShowBlast(true);
        setTimeout(() => {
          setShowBlast(false);
        }, 2000);

      } else {
        alert("Something went wrong!");
      }

    } catch (error) {
      console.error(error);
      alert("Server error!");
    }
  };

  const overlayStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    pointerEvents: "none",
    overflow: "hidden",
    zIndex: 9999
  };

  const onionStyle = {
    position: "absolute",
    top: "-50px",
    fontSize: "30px",
    animation: "fall 2s linear forwards"
  };

  return (
    <div className="section">

      <h2>Contact Us</h2>

      {success && (
        <div style={{
          marginTop: "15px",
          color: "green",
          fontWeight: "bold",
          textAlign: "center"
        }}>
          🧅 Query Sent Successfully!
        </div>
      )}

      <form 
        onSubmit={handleSubmit}
        style={{maxWidth:"500px", margin:"40px auto"}}
      >
        <input
          type="text"
          placeholder="Name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{width:"100%", padding:"12px", marginBottom:"15px", borderRadius:"10px"}}
        />

        <input
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{width:"100%", padding:"12px", marginBottom:"15px", borderRadius:"10px"}}
        />

        <textarea
          placeholder="Message"
          rows="4"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          style={{width:"100%", padding:"12px", marginBottom:"15px", borderRadius:"10px"}}
        />

        <button type="submit">Send Inquiry</button>
      </form>

      <h3 style={{marginTop:"30px"}}>📞 +91 8123191711</h3>
      <h3>📍 UgarBudruk, Karnataka, India</h3>

      {/* ✅ Onion Blast Effect */}
      {showBlast && (
        <div style={overlayStyle}>
          {[...Array(30)].map((_, i) => (
            <span
              key={i}
              style={{
                ...onionStyle,
                left: Math.random() * 100 + "vw",
                animationDelay: Math.random() + "s"
              }}
            >
              🧅
            </span>
          ))}
        </div>
      )}

    </div>
  );
}

export default Contact;