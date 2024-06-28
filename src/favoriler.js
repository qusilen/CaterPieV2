import React from "react";
import "./Checkout";
import { useStateValue } from "./stateProviders";
import FavoriteProduct from "./FavoriteProduct";

function Favorites() {
  const [{ favorites, user }] = useStateValue();

  return (
    <div className="favorites">
      <div className="favorites__left">
        <img
          className="favorites__ad"
          src="https://resmim.net/cdn/2024/06/19/fUmCV6.png"
          alt="ad"
        />

        <div>
          <h3>Merhaba, {user?.email}</h3>
          <h2 className="favorites__title">Favori Ürünleriniz</h2>

          {favorites.map(item => (
            <FavoriteProduct
              key={item.id}
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}

        </div>
      </div>
    </div>
  );
}

export default Favorites;
