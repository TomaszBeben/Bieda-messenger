import React from 'react'

const MessageForm = ({ handleSubmit, handleContentChange, message, user, handleUserChange }) => {
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    name='user'
                    placeholder='name'
                    value={user}
                    onChange={(event) => handleUserChange(event.target.value)}/>
                <input
                    placeholder='message'
                    type='text'
                    name='content'
                    value={message}
                    onChange={(event) => handleContentChange(event.target.value)} />
                <input type='submit' value='Submit' />
            </form>
        </div>
    )
}

export default MessageForm;
