import React from 'react'
import './index.css'

const MessageForm = ({ handleSubmit, handleContentChange, message, user, handleUserChange }) => {
    return (
        <div >
            <form className='form' onSubmit={handleSubmit}>
                <input
                    className='name'
                    type='text'
                    name='user'
                    placeholder='name'
                    value={user}
                    onChange={(event) => handleUserChange(event.target.value)}/>
                <input
                    className='content'
                    placeholder='message'
                    type='text'
                    name='content'
                    value={message}
                    onChange={(event) => handleContentChange(event.target.value)} />
                <input className='button' type='submit' value='Send' />
            </form>
        </div>
    )
}

export default MessageForm;
