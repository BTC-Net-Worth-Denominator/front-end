import React, { useState, createContext } from 'react';

export const AccountContext = createContext({});
export const AccountProvider = ({children}) => {
    const userIdFromLocalStorage = parseInt(localStorage.getItem('user_id'), 10)
    const initialUserId = Number.isNaN(userIdFromLocalStorage) ? undefined : userIdFromLocalStorage
    const [userId, setUserIdState] = useState(initialUserId)
    const setUserId = (userId) => {
        setUserIdState(userId)
        localStorage.setItem('user_id', userId)
    }
    const value = { userId, setUserId }
    return <AccountContext.Provider value={value}>{children}</AccountContext.Provider>
}