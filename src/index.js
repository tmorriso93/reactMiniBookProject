import React from 'react';
import ReactDOM from 'react-dom';
import books from './components/books'
import Book from './components/Book'
import './index.css'
  


const BookList = () => { 
  return ( 
    <section className="booklist">
        {books.map((book) => {
         return (
                <Book key={book.id} {...book} />
         )
        })}
     </section>
  ) 
}

ReactDOM.render(<BookList />,document.getElementById('root'))


