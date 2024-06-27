// Comparison.js

import React from "react";
import "./Comparison.css";

function getMessageForRating(rating) {
  switch (rating) {
    case 5:
      return "Kullanıcılar bu ürünü çok beğeniyor.";
    case 4:
      return "Kullanıcılar bu ürünü beğeniyor.";
    case 3:
      return "Kullanıcılar bu ürünü fena bulmuyor.";
    case 2:
      return "Kullanıcılar bu ürünü kötü buluyor.";
    case 1:
      return "Kullanıcılar bu ürünü çok kötü buluyor.";
    default:
      return "";
  }
}

function Comparison({ selectedProducts, removeFromComparison }) {
  if (selectedProducts.length === 0) {
    return (
      <div className="comparison">
        <h2>Karşılaştırma</h2>
        <p>Henüz hiçbir ürün karşılaştırmaya eklenmedi.</p>
      </div>
    );
  }

  const handleRemove = (productId) => {
    removeFromComparison(productId);
  };

  return (
    <div className="comparison">
      <h2>Karşılaştırma</h2>
      <div className="comparison__table">
        {selectedProducts.map((product) => (
          <div key={product.id} className="comparison__product">
            <img src={product.image} alt={product.title} />
            <p>{product.title}</p>
            <p>Fiyat: ₺{product.price}</p>
            <p>Değerlendirme: {product.rating}</p>
            <p>{getMessageForRating(product.rating)}</p>
            <button onClick={() => handleRemove(product.id)}>
              Karşılaştırmadan Çıkar
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Comparison;
