export const emptyFavoriteAction = () => {
    return { type: 'EMPTY_FAVORITE', payload: '' }
}

export const addToFavoritesAction = (payload) => {
    return { type: 'ADD_TO_FAVORITE', payload: payload }
}

export const removeFromFavoritesAction = (payload) => {
    return { type: 'REMOVE_FROM_FAVORITE', payload: payload }
}