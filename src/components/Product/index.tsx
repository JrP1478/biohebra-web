import productsData from "../../content/ProductContent.json";
import { useState } from "react";

const ProductCard = ({ product }: { product: any }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      style={{
        border: "1px solid rgba(10, 92, 54, 0.08)",
        borderRadius: "10px",
        padding: "20px",
        textAlign: "center",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
        boxShadow: hovered ? "0 20px 40px rgba(10,92,54,0.12)" : "none",
        cursor: "pointer",
        overflow: "hidden",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Imagen con zoom en hover */}
      <div style={{ overflow: "hidden", borderRadius: "8px", marginBottom: "15px", position: "relative" }}>
        <img
          src={product.image}
          alt={product.name}
          style={{
            width: "100%",
            height: "200px",
            objectFit: "cover",
            display: "block",
            transition: "transform 0.5s ease",
            transform: hovered ? "scale(1.06)" : "scale(1)",
          }}
        />
        {/* Badge de precio flotante */}
        <div style={{
          position: "absolute",
          top: "10px",
          right: "10px",
          background: "#0a5c36",
          color: "#fff",
          padding: "5px 11px",
          borderRadius: "20px",
          fontSize: "13px",
          fontWeight: 700,
        }}>
          {product.price}
        </div>
      </div>

      {/* Línea decorativa */}
      <div style={{
        width: hovered ? "50px" : "30px",
        height: "2px",
        background: "#1e7b4c",
        margin: "0 auto 12px",
        transition: "width 0.3s ease",
      }} />

      <h3 style={{ margin: "0 0 8px", fontSize: "17px", color: "#1e293b" }}>
        {product.name}
      </h3>

      <p style={{ margin: "0 0 18px", fontSize: "14px", color: "#64748b", lineHeight: 1.6 }}>
        {product.description}
      </p>

      {/* Botón */}
      <button 
      onClick={() => window.open(
        `https://wa.me/51907553376?text=Hola,%20me%20interesa%20el%20producto:%20${encodeURIComponent(product.name)}`,
        "_blank"
      )}
      style={{
            width: "100%",
            padding: "10px 0",
            background: hovered ? "#0a5c36" : "transparent",
            color: hovered ? "#fff" : "#0a5c36",
            border: "1.5px solid #0a5c36",
            borderRadius: "8px",
            fontSize: "13px",
            fontWeight: 600,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            cursor: "pointer",
            transition: "all 0.25s ease",
          }}>
            Lo quiero →
          </button>
        </div>
      );
};

const ProductSection = () => {
  return (
    <section id="productos" style={{ padding: "80px 20px" }}>
      <h2 style={{ textAlign: "center", marginBottom: "40px", color: "#0a5c36" }}>
        {productsData.title}
      </h2>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px,1fr))",
        gap: "30px"
      }}>
        {productsData.products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductSection;