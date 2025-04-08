
'use client'

import { createContext, useState, ReactNode, useContext } from "react";

// TYPES
type UserType = {
    userId: string;
    name: string;
    email: string;
    authanticated: boolean;
};

type AuthContextType = {
    user: UserType | null;
    authenticateUser: (uEmail: string, uPassword: string) => Promise<void>;
};

// CONTEXT
const UserContext = createContext<AuthContextType | undefined>(undefined);

// PROVIDER
export const UserProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<UserType | null>(null);

    const authenticateUser = async (uEmail: string, uPassword: string) => {
        try {
            const res = await fetch('/api/account/log-in', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email: uEmail, password: uPassword }),
            });

            if (!res.ok) {
                // Optional: Set an unauthenticated fallback or keep null
                setUser(null);
                return;
            }

            const data = await res.json();

            setUser({
                userId: data._id,
                name: data.name,
                email: data.email,
                authanticated: true,
            });

        } catch (err) {
            console.error('Login error:', err);
            setUser(null);
        }
    };

    return (
        <UserContext.Provider value={{ user, authenticateUser }}>
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


