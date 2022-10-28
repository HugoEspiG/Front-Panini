import React from 'react';
import Chat from '../components/Chat';
import NavBar from '../components/NavBar';


const ChatPage = () => {
    return (
        <div>
            <header>
                <NavBar/>
            </header>
            <div className="container">
                <Chat/>
            </div>
        </div>
    );
};

export default ChatPage;