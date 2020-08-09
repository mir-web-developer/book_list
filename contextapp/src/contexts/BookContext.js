import React, { createContext, useState} from 'react';



export const BookContext = createContext() 

const BookContextProvider = (props) => {
const [books, setBooks] = useState([
    {title: "book1", author: "someone", id: 1},
    {title: "book2", author: "someone", id: 2},
    {title: "book3", author: "someone", id: 3},
    {title: "book4", author: "someone", id: 4}
])

const addBook = (title, author) => {
    setBooks([...books, {title, author}])
}

const removeBook = (id) => {
    setBooks(books.filter(book => book.id !== id))
}

    return ( 
        <BookContext.Provider value={{books, addBook, removeBook}}>
            {props.children}
        </BookContext.Provider>
     );
}
 
export default BookContextProvider;