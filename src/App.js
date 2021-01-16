import React, {useState, useEffect} from 'react'
import Message from './components/Message'
import MessageForm from './components/MessageForm'

import db from './components/config'

const App = () => {
  const[newMessage, setNewMessage]= useState('');
  const[messages, setMessages] = useState([]);
  useEffect(()=>{
    db.ref('/messages').on('value', (snapshot)=>{
      const fbMessages = snapshot.val();
      const convertedMessages = Object.entries(fbMessages || {}).map(
        ([id, message]) => ({
          ...message,
          id
        })
      );
      setMessages(convertedMessages)

    })
  },[])
  const handleSubmit = (event)=>{
    event.preventDefault();
    const messageObj = {
      user: 'Tomek',
      content: newMessage,
      datetime: Date.now()
    };
    if(newMessage){
      db.ref('/messages').push(messageObj);
    }

    setNewMessage('')
  }
  // const messages = [
  //   { id: 1, user: 'Emil', content: 'elo', datetime: Date.now() },
  //   { id: 2, user: 'Omil', content: 'elo', datetime: Date.now() },
  //   { id: 3, user: 'Emil', content: 'jak tam?', datetime: Date.now() },
  //   { id: 4, user: 'Omil', content: 'gitara, robie bieda-messengera', datetime: Date.now() }
  // ];
  return (
    <div className='App'>
      {messages.map((message) => (
        <Message key={message.id} message={message} />
      ))}
      <MessageForm
      message={newMessage}
      handleSubmit={handleSubmit}
      handleContentChange={setNewMessage}
      />
    </div>
  )
}

export default App
