import React, {useContext, useState} from 'react'
import {BookContext} from "../contexts/BookContext"

function BookForm() {
    const {addBook} = useContext(BookContext)
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
     
    const handleSubmit = (e) => {
        e.preventDefault()
        addBook(title, author)
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="book title" value={title} 
                onChange={(e) => setTitle(e.currentTarget.value)} required/>
                   <input type="text" placeholder="author" value={author} 
                onChange={(e) => setAuthor(e.currentTarget.value)} required/> 
                <input type="submit" value="add book" />
            </form>
        </>
    )
}

export default BookForm
