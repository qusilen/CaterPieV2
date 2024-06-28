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
        <h2>Karşılaştırma ve Ürün Detay</h2>
        <p>Henüz hiçbir ürün karşılaştırmaya eklenmedi.</p>
      </div>
    );
  }

  const handleRemove = (productId) => {
    removeFromComparison(productId);
  };

  return (
    <div className="comparison">
      <h2>Karşılaştırma ve Ürün Detay</h2>
      <div className="comparison__table">
        {selectedProducts.map((product) => (
          <div key={product.id} className="comparison__product">
            <img src={product.image} alt={product.title} />
            <div className="comparison__details">
              <p className="comparison__title">{product.title}</p>
              <p className="comparison__price">Fiyat: ₺{product.price}</p>
              <p className="comparison__rating">Değerlendirme: {product.rating}</p>
              <p className="comparison__message">{getMessageForRating(product.rating)}</p>
              <p className="comparison__description">{product.description}</p>
              <button onClick={() => handleRemove(product.id)}>Karşılaştırmadan Çıkar</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Comparison;
