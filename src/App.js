import React, {useEffect, useState} from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat'
import  Pusher from "pusher-js"
import axios from "./axios";

function App() {
  const [messages, setMessages] = useState([])
  useEffect(() => {
    axios.get('/messages/sync')
      .then(res => {
        console.log(res.data.data);
        setMessages(res.data.data);
      })
  }, [])
  useEffect(() => {
    const pusher = new Pusher('30c3abdca8d08e9b3117', {
      cluster: 'mt1'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', (newMessage) => {
      setMessages([...messages, newMessage]);
    });
    return () => {
      channel.unbind_all();
      channel.unsubscribe()
    }
   

  }, [messages])
  return (
    <div className="app">
      <div className="app__body">
        <Sidebar />
        <Chat messages={messages} />
      </div>
    </div>
  );
}

export default App;
