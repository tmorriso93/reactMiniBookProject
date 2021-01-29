import React from 'react'

const Book = ({img, title, author}) => {
const authClick = () => {
  console.log(author);
}
const clickHandler = () => {
  console.log('hello world');
}

  return (
          <article className="book">
              <img width="150" height="200" src={img} alt=""/>
               <h1>{title}</h1>
               <h4>{author}</h4>
               <button type="button" onClick={authClick}>log Author</button>
               <button  type="button" onClick={clickHandler}>Buy Now</button >
          </article>
         
          )
};

export default Book
