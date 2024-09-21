import React, { createContext, useState, useContext } from 'react';

// Create the User Context
const UserContext = createContext();

// Create a Provider component
const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null); // Initial user state

    const login = (userData) => {
        setUser(userData); // Function to set user data
    };

    const logout = () => {
        setUser(null); // Function to clear user data
    };

    return (
        <UserContext.Provider value={{ user, login, logout }}>
            {children}
        </UserContext.Provider>
    );
};

// Custom hook for using UserContext
const useUser = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error("useUser must be used within a UserProvider");
    }
    return context;
};

// Export the UserContext and UserProvider
export { UserContext, UserProvider, useUser };
