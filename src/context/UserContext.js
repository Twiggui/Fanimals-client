import React, { useState, createContext } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

export const UserContext = createContext({
  allAnimals: [],
  setAllAnimals: () => {},
});

const UserContextProvider = ({ children }) => {
  const [userDetails, setUserDetails] = useLocalStorage('user_info', {});
  const [loggedIn, setLoggedIn] = useLocalStorage('user_logged', false);
  const [allAnimals, setAllAnimals] = useState([]);

  return (
    <UserContext.Provider
      value={{
        userDetails,
        setUserDetails,
        loggedIn,
        setLoggedIn,
        allAnimals,
        setAllAnimals,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
