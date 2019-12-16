import React, { useContext } from 'react'
import { BookContext } from '../Contexts/BookContext'

const NavBar = () => {
  const { books } = useContext(BookContext)
  return (
    <div className="navbar">
      <h1>Reading list</h1>
      <p>You have {books.length} books left to read</p>
    </div>
  )
}

export default NavBar
