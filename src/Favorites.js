import React from "react";
import "./Checkout.css";
import { useStateValue } from "./StateProvider";
import FavoriteProduct from "./FavoriteProduct";

function Favorites() {
  const [{ favorites, user }] = useStateValue();

  return (
    <div className="favorites">
      <div className="favorites__left">
    

        <div>
          <h3>Merhaba, {user?.email}</h3>
          <h2 className="favorites__title">Favori Ürünleriniz</h2>

          {favorites?.length > 0 ? (
            favorites.map(item => (
              <FavoriteProduct
                key={item.id}
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))
          ) : (
            <p>Henüz favori ürününüz yok.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Favorites;
