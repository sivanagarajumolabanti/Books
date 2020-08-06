const bookdata = []

export const bookReducer = (state = bookdata, action) => {
    switch (action.type) {
        case "Get_books": return action.payload
        case "GET_BOOK_DETAILS": return state.find((w) => w.id === action.payload)
        default: return state;
    }
}