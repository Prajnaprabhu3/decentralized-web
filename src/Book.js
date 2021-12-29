import React from 'react'

import './index.css'

// You need to destructure the props when using the spread operator- maybe
const Book = ({ img, title, author }) => {
    // onClick , onMouseOver -2 events example we'll be seeing
    const clickHandler = () => {
        alert('hello world');
    };

    // we are giving author in the parameter /, so that we can print it 
    const complexExample = (author) => {
        console.log(author);
    };
    // Inline eventHandling 
    return <article className="book" onMouseOver={() => {
        console.log(title);
    }}>
        <img src={img} alt="" />
        <h1>{title}</h1>
        <h4>{author}</h4>
        <button type="button" onClick={clickHandler}>Click Event Example</button>
        {/* This is passing by argument  */}
        <button type="button" onClick={() => complexExample(author)}>Complex Example</button>
    </article >;
}
export default Book
