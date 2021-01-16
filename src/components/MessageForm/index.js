import React from 'react'

const MessageForm = ({handleSubmit, handleContentChange, message}) => {
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type='text' name='user' placeholder='name'/>
                <input
                placeholder='message'
                type='text'
                name='content'
                value={message}
                onChange={(event)=>handleContentChange(event.target.value)}/>
                <input type='submit' value='Submit'/>
            </form>
        </div>
    )
}

export default MessageForm;
