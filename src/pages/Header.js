import React from "react"
import {Link} from 'react-router-dom';

function Header(){
    return(
        <div>
            <header >
                <h1 style={title}>TextBook Share</h1>
                <div style={navigation}>
                    <Link  to="/">Find Books </Link> |
                    <Link  to="/sharebooks"> Share Books </Link> |
                    <Link to="/about"> About</Link>
                </div>
                
            </header>
        </div>
    )
}

const title = {
    background: "black",
    color: "white",
    paddingTop: "35px",
    paddingBottom: '35px',
    textAlign: "center",
    fontFamily: "Times News Roman",
    marginBottom: "15px",
}

const navigation = {
    color:"black",
    textAlign: "center",
    // marginLeft: "auto",
    // marginRight: "auto",
    marginBottom: "75px",
    fontFamily: "Recursive",
    fontSize: "20px",
}

export default Header;