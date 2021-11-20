import { createContext, useReducer } from "react";
import AppReducer from "./AppReducer"

const initialState = {
    isEditing: false,
    // user: { name: '', description: '', power: '' },
    user: { name: '' },
    users: [],
    user: null,
    isLoggedIn: false
};

export const AppContext = createContext(initialState);

export const AppContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    const login = (data) => { dispatch({ type: 'LOGIN', payload: data }) }
    const logout = (data) => { dispatch({ type: 'LOGOUT', payload: data }) }
    const getUser = (data) => { dispatch({ type: 'GET_USER', payload: data }) }
    const updateUser = (data) => { dispatch({ type: 'UPDATE_USER', payload: data }) }
    const clearUser = (data) => { dispatch({ type: 'CLEAR_USER', payload: data }) }
    const selectUser = (data) => { dispatch({ type: 'SELECT_USER', payload: data }) }
    const getUsers = (data) => { dispatch({ type: 'GET_USERS', payload: data }) }
    const createUser = (data) => { dispatch({ type: 'CREATE_USER', payload: data }) }
    const deleteUsers = (data) => { dispatch({ type: 'DELETE_USER', payload: data }) }

    return <AppContext.Provider value={{
        ...state,
        login,
        logout,
        selectUser,
        updateUser,
        clearUser,
        getUser,
        getUsers,
        createUser,
        deleteUsers
    }}>{children}</AppContext.Provider>
}

export default AppContextProvider;