export const initialState = {
    basket: [],
    favorites: [],
    user: null,
};

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_FAVORITES":
            return {
                ...state,
                favorites: [...state.favorites, action.item],
            };
        case "REMOVE_FROM_FAVORITES":
            const index = state.favorites.findIndex(
                (favoriteItem) => favoriteItem.id === action.id
            );
            let newFavorites = [...state.favorites];
            if (index >= 0) {
                newFavorites.splice(index, 1);
            } else {
                console.warn(
                    `Ürün (id: ${action.id}) favorilerde bulunamadı!`
                );
            }
            return {
                ...state,
                favorites: newFavorites,
            };
        // Diğer sepet işlemleri için durumlar ekleyin
        default:
            return state;
    }
};

export default reducer;
