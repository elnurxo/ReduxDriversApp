const initialState = {
    offsetCount: 0
}
export const paginationReducer = (state = initialState, action) => {
    switch (action.type) {
        case "NEXT_PAGE":
            return {
                offsetCount: state.offsetCount + 10
            }
        case "PREV_PAGE":
            return {
                offsetCount: state.offsetCount - 10
            }
        default:
            return state;
    }
}

export const getOffsetCount = state => state.paginationReducer.offsetCount;