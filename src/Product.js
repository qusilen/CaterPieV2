import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({ id, title, image, price, rating, onCompare, isSelected, isBestSeller }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    // Sepete ürün eklemek için dispatch kullanılıyor
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  const addToFavorites = () => {
    // Favorilere ürün eklemek için dispatch kullanılıyor
    dispatch({
      type: "ADD_TO_FAVORITES",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      {/* Çok satan ürün işareti */}
      {isBestSeller && <span className="product__badge">Çok Satan</span>}

      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>₺</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>🌟</p>
            ))}
        </div>
      </div>

      <img src={image} alt={title} />

      <button onClick={addToBasket}>Sepete Ekle</button>
      <button onClick={addToFavorites}>Favorilere Ekle</button>

      {onCompare && (
        <button onClick={() => onCompare(id)}>
          {isSelected ? "Karşılaştırmadan Çıkar" : "Karşılaştırmaya Ekle"}
        </button>
      )}
    </div>
  );
}

export default Product;
