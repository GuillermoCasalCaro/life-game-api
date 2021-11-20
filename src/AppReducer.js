const updateItem = (users, data) => {
    let user = users.find((user) => user.id === data.id);
    let updatedUser = { ...user, ...data };
    let userIndex = users.findIndex((user) => user.id === data.id);
    return [
        ...users.slice(0, userIndex),
        updatedUser,
        ...users.slice(++userIndex),
    ];
}

const deleteItem = (users, id) => {
    return users.filter((user) => user.data.id !== id)
}

const AppReducer = (state, action) => {
    switch (action.type) {
        case 'SELECT_USER':
            return {
                ...state,
                isEditing: true,
                user: action.payload
            }
        case 'CLEAR_USER':
            return {
                ...state,
                isEditing: false,
                user: { name: '', description: '', power: '' }
            }
        case 'UPDATE_USER':
            return {
                ...state,
                isEditing: false,
                users: updateItem(state.users, action.payload)
            }
        case 'GET_USER':
            return {
                ...state,
                user: action.payload.data
            }
        case 'GET_USERS':
            return {
                ...state,
                users: Array.isArray(action.payload && action.payload.data) ? action.payload.data : [{ ...action.payload }]
            };
        case 'CREATE_USER':
            return {
                ...state,
                users: [{ data: action.payload }, ...state.users]
            };
        case 'DELETE_USER':
            return {
                ...state,
                users: deleteItem(state.users, action.payload)
            };
        case 'LOGIN':
            return {
                ...state,
                user: action.payload,
                isLoggedIn: true
            };
        case 'LOGOUT':
            return {
                ...state,
                user: null,
                isLoggedIn: false
            };
        default:
            return state
    }
}

export default AppReducer;