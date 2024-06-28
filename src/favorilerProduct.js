import React from 'react';
import './CheckoutProduct'
import { useStateValue } from "./stateProviders";

function FavoriteProduct({ id, image, title, price, rating }) {
    const [{ favorites }, dispatch] = useStateValue();

    const removeFromFavorites = () => {
        dispatch({
            type: 'REMOVE_FROM_FAVORITES',
            id: id,
        });
    }

    return (
        <div className='favoriteProduct'>
            <img className='favoriteProduct__image' src={image} alt={title} />

            <div className='favoriteProduct__info'>
                <p className='favoriteProduct__title'>{title}</p>
                <p className="favoriteProduct__price">
                    <small> ₺ </small>
                    <strong>{price}</strong>
                </p>
                <div className="favoriteProduct__rating">
                    {Array(rating)
                    .fill()
                    .map((_, i) => (
                        <p key={i}>🌟</p>
                    ))}
                </div>
                <button onClick={removeFromFavorites}>Favorilerden Kaldır</button>
            </div>
        </div>
    );
}

export default FavoriteProduct;
