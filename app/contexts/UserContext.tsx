
'use client'

import { createContext, useState, ReactNode, useContext, useEffect } from "react";
import { GroupType } from "../groups/[groupID]/page";
// TYPES
type UserType = {
    userId: string,
    name: string,
    email: string,
};

type AuthContextType = {
    user: UserType | null;
    setUser: React.Dispatch<React.SetStateAction<UserType | null>>;
    userGroups : GroupType[] | [] ;
};

// CONTEXT
const UserContext = createContext<AuthContextType | null>(null);

// PROVIDER
export const UserProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<UserType | null>(null);
    const [userGroups, setUserGroups] = useState<GroupType[]>([])


    const getAndSetUserGroups = async () => {
    const res = await fetch(`/api/groups/user-groups?userID=${user?.userId}`, {
      method: 'GET',
      headers : {'Content-Type': 'application/json'}
    })

    const data = await res.json()
    console.log(data.userGroups)
    setUserGroups(data.userGroups)
  }

    useEffect(() => {
    fetch('/api/validate-token').then(res => res.json()).then(data => {
      if (data.safeUser) setUser(data.safeUser);
      else console.log('faild to validate')
    });

  }, []);

  useEffect(()=> {
    if(user){
        getAndSetUserGroups()
    }
  }, [user?.userId])
    return (
        <UserContext.Provider value={{ user, setUser, userGroups}}>
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


