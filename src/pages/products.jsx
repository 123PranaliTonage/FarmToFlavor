
import { useNavigate } from "react-router-dom";function Products() { const navigate = useNavigate();
  const products = [
    {
      name: "Onion Powder",
      desc: "Finely ground dehydrated onions that add rich, savory flavor to any dish instantly without chopping.",
      img: "https://www.bing.com/th/id/OIP.xwWO1IZUtOdIUYioDvO31AHaFb?w=284&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
    },
    {
      name: "Onion flakes",
      desc: "Dried onion pieces that provide authentic onion taste and texture, perfect for cooking, seasoning, and garnishing.",
      img: "https://www.dehydratedveg.com/images/dehydrated-red-onion-flakes.jpeg"
    },
    {
      name: "Garlic powder",
      desc: "Smooth, concentrated garlic seasoning made from dehydrated garlic cloves for quick, bold flavor in every meal.",
      img: "https://www.marthastewart.com/thmb/0IJ204h9eWw-EVfdCYcNYBTnQyc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/power-of-garlic-powder-getty-1023-4b070d93e22b4765be0f18995d55723e.jpg"
    },
    
  ];

  return (
    <div className="section">
      <h2>Our Premium Products</h2>

      <div className="products-grid">
        {products.map((item, index) => (
          <div key={index} className="product-card">
            <img src={item.img} alt={item.name} />
            <div className="product-content">
              <h3>{item.name}</h3>
              <p>{item.desc}</p>
             <button onClick={() => navigate("/contact")}>
  Enquiry Now
</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;