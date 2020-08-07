import React from "react";
// import "./App.css";
import './App.css';


function Book(props){
    function handleClick(){ 
        var elem = document.querySelectorAll('#myPopup');
        console.log(elem); 
        var num = props.book.id - 1;
        var popper = elem[num];
        console.log(popper);
        popper.classList.toggle("show");
    }
    console.log(props.book.title)
    console.log(props.book.author)
    
    return(
        <div className="popup">
            <h2 onClick={handleClick}>{props.book.title}, {props.book.author}
            </h2> 
            <span className="popuptext" 
                  id="myPopup">
                           <p> DETAILS:<br/></p>
                           <p>     Title: {props.book.title}</p>
                           <p>  Author: {props.book.author}</p>
                           <p>  Genre/Subject: {props.book.genre}</p>
                           <p>  Condition: {props.book.condition}</p>
                           <p>  Year Published: {props.book.yearPublished} </p>
                                <button style={{ marginBottom: "5px", padding: "5px"}}>Request book?</button>
            </span>
           
         </div>

    );

}


export default Book;