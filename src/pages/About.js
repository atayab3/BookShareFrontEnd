import React from "react"
import {Link} from 'react-router-dom';

function About(){
    return(
        <div style= {{textAlign: "center", marginBottom: "15px"}}>
            <h3> Share your old textbooks and books with your fellow students and book lovers. </h3>
            <h3> Ship books to one another, do not meet in person and we are not responsible or liable. </h3>
            <h3> For every book you succesfully pass along, you can request one as well.  </h3>
            <p>Created by Adam Tayabali and Matthew Ghuniem </p>

            <Link to="/about"></Link>
        </div>

    )

}

export default About;