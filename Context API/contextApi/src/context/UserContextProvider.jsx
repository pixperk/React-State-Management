import React, {useState} from "react";
import UserContext from "./UserContext";

/*2*/const UserContextProvider = ({children}) => {
    const [user, setUser] = useState(null)
    return(
        <UserContext.Provider value={{user, setUser}}>{/*wrap with provider */}
        {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider