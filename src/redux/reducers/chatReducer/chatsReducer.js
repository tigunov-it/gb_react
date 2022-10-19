const initialState = {
    chats: [
        {
            id: 1,
            name: 'Chat 1'
        },
        {
            id: 2,
            name: 'Chat 2'
        }
    ]
}


export const chatsReducer = (state = initialState, action) => {

    switch (action.type) {

        case 'delete':
            return {
                ...state,
                chats: state.chats.filter((chat) => chat.id !== action.payload)
            }
        case 'add':
            return {
                ...state,
                chats: [...state.chats, action.payload]
            }

        default:
            return state

    }

}