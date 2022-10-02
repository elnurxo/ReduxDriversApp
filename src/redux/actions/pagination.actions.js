export const nextPage = (payload) => {
    return { type: 'NEXT_PAGE', payload }
}

export const prevPage = (payload) => {
    return { type: 'PREV_PAGE', payload }
}