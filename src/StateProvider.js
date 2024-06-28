import React, { createContext, useContext, useReducer } from "react";

// Veriyi hazırlayan katman
export const StateContext = createContext();

// Uygulamamızı sar ve Veri katmanını sağla
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// Veri katmanından bilgi çek
export const useStateValue = () => useContext(StateContext);

// Başlangıç durumu
export const initialState = {
    basket: [],
    favorites: [],
    user: null,
};

// Reducer
const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_BASKET":
            return {
                ...state,
                basket: [...state.basket, action.item],
            };
        case "REMOVE_FROM_BASKET":
            const basketIndex = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
            );
            let newBasket = [...state.basket];
            if (basketIndex >= 0) {
                newBasket.splice(basketIndex, 1);
            } else {
                console.warn(
                    `Ürün (id: ${action.id}) sepetinizde bulunamadı!`
                );
            }
            return {
                ...state,
                basket: newBasket,
            };
        case "ADD_TO_FAVORITES":
            return {
                ...state,
                favorites: [...state.favorites, action.item],
            };
        case "REMOVE_FROM_FAVORITES":
            const favoriteIndex = state.favorites.findIndex(
                (favoriteItem) => favoriteItem.id === action.id
            );
            let newFavorites = [...state.favorites];
            if (favoriteIndex >= 0) {
                newFavorites.splice(favoriteIndex, 1);
            } else {
                console.warn(
                    `Ürün (id: ${action.id}) favorilerde bulunamadı!`
                );
            }
            return {
                ...state,
                favorites: newFavorites,
            };
        default:
            return state;
    }
};

export default reducer;
