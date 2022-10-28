import React, { useState } from "react";

export const UserContext = React.createContext([]);

export default function UserCustomContext({ children }) {
    const [data, setData] = useState(
        {}
    )

    const addUser = (info) => {
        console.log(info)
        setData(info)
    }

    const addFriend = (friend) => {
        if (data.amigos.find(friend)) {
            return false
        } else {
            data.amigos.push(friend)
            setData(data)
            return true
        }
    }

    const addMona = (mona)=>{
        data.monas.push(mona)
    }
    return (
        <UserContext.Provider value={{ userData:data,addUser,addFriend,addMona }}>
            {children}
        </UserContext.Provider>
    )
}