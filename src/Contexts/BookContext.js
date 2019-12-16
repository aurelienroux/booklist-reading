import React, { createContext, useState } from 'react'
import uuid from 'uuid'

export const BookContext = createContext()

const BookContextProvider = props => {
  const [books, setBooks] = useState([
    { title: 'book 1', author: 'author 1', id: 1 },
    { title: 'book 2', author: 'author 2', id: 2 },
    { title: 'book 3', author: 'author 3', id: 3 },
    { title: 'book 4', author: 'author 4', id: 4 }
  ])
  const addBook = (title, author) => {
    setBooks(...books, { title, author, id: uuid() })
  }
  const removeBook = id => {
    setBooks(books.filter(book => book.id !== id))
  }

  return (
    <BookContext.Provider value={{ books, addBook, removeBook }}>
      {props.children}
    </BookContext.Provider>
  )
}

export default BookContextProvider
