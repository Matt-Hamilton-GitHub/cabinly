
'use client'

import { createContext, useState, ReactNode, useContext } from "react";

// TYPES
type UserType = {
    userId: string,
    name: string,
    email: string,
};

type AuthContextType = {
    user: UserType | null;
    setUser: React.Dispatch<React.SetStateAction<UserType | null>>
};

// CONTEXT
const UserContext = createContext<AuthContextType | null>(null);

// PROVIDER
export const UserProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<UserType | null>(null);

    // console.log(user, 'context')
    return (
        <UserContext.Provider value={{ user, setUser}}>
            {children}
        </UserContext.Provider>
    );
};

// HOOK
export const useUserContext = () => {
    const userContext = useContext(UserContext);
    if (!userContext) {
        throw new Error('useUserContext must be used inside UserProvider');
    }
    return userContext;
};


