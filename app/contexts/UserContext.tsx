"use client";

import {
  createContext,
  useState,
  ReactNode,
  useContext,
  useEffect,
} from "react";

// ─── Types ───────────────────────────────────────────────────────
import { AuthUser, AuthContextType } from "../lib/types";

// ─── Context ─────────────────────────────────────────────────────

const UserContext = createContext<AuthContextType | null>(null);

// ─── Provider ────────────────────────────────────────────────────

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [authUser, setAuthUser] = useState<AuthUser | null>(null);
  const [isValidating, setIsValidating] = useState(true);

  useEffect(() => {
    fetch("/api/validate-token")
      .then((res) => res.json())
      .then((data) => {
        if (data.user){

          setAuthUser(data.user); // { userId } only
          console.log('@userContext setAuthUser', data)
        }
        else setAuthUser(null);
      })
      .catch(() => {
        setAuthUser(null)
        console.log('user validation failed')
      
      })
      .finally(() => {
        console.log('user validated succesfully')
        setIsValidating(false)
      });
  }, []);

  return (
    <UserContext.Provider value={{ authUser, setAuthUser, isValidating }}>
      {children}
    </UserContext.Provider>
  );
};

// ─── Hook ────────────────────────────────────────────────────────

export const useUserContext = () => {
  const ctx = useContext(UserContext);
  if (!ctx) throw new Error("useUserContext must be used inside UserProvider");
  return ctx;
};
