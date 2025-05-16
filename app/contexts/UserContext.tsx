
'use client'

import { createContext, useState, ReactNode, useContext, useEffect } from "react";

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

    useEffect(() => {
    fetch('/api/validate-token').then(res => res.json()).then(data => {
        
      if (data.safeUser) setUser(data.safeUser);
      else console.log('faild to validate')
    });

    
  }, []);
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


