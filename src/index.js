import React from 'react'
import ReactDom from 'react-dom'

//CSS
import './index.css'

// Importing js components 
import { books } from './books' //importing named component
import Book from './Book' //importing default component

function BookList() {
  return (
    < section className="bookList" >
      {books.map((book) => {

        return (
          // spread operator 
          <Book key={book.id} {...book}></Book>
        );
      })}

    </section >
  )
}

// Rendering :
// ReactDom.render(what,where)
ReactDom.render(<BookList />, document.getElementById('root'));


