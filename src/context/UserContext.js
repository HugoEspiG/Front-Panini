import React, { useState } from "react";

export const UserContext = React.createContext([]);

export default function UserCustomContext({ children }) {
    const [data, setData] = useState({})

    const addUser = (info) => {
        setData(info)
    }

    const addFriend = (friend) => {
        if(data.amigos.length===0){
            data.amigos.push({
                amigos: [],
                idClient: "",
                lastName: "",
                mail: "",
                monas: [],
                name: "",
                password: ""})
            setData(data)   
        }
        if (data.amigos.find(cerv=>cerv.mail===friend.mail)) {
            return false
        } else {
            data.amigos.push(friend)
            setData(data)
            console.log(data)
            return true
        }
    }

    const addMona = (mona) => {
        data.monas.push(mona)
    }
    return (
        <UserContext.Provider value={{ userData: data, addUser, addFriend, addMona }}>
            {children}
        </UserContext.Provider>
    )
}