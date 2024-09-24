import React, { useState } from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      //value ki jga objects hi pass krdiyay
      {children}
    </UserContext.Provider>
  );
};
export default UserContextProvider;
