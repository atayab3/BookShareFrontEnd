import React from "react"
import {Link} from 'react-router-dom'
import Book from "./Book.js"
import bookData from "./bookData.js"

class FindBooks extends React.Component{
    constructor(){
        super()
        this.state = {
            books: []
        }
    }
    render(){
    const bookItems = bookData.map(book => <Book key={book.id} book={book}/>)
        return(
            <div>
              {bookItems}
              <Link to="/"></Link>
            </div>
        );
    }
}
export default FindBooks;