export const favoriteReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TO_FAVORITE":
      return [...state, action.payload];

    case "EMPTY_FAVORITE":
      return [];

    case "REMOVE_FROM_FAVORITE":
    const updateState = state.filter(data => data.driverId !== action.payload.driverId)
    return [...updateState]

    default:
      return state;
  }
};
