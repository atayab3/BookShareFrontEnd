import React from "react"
import {Link} from 'react-router-dom'
import './App.css';
class ShareBooks extends React.Component{
    constructor(){
        super()
        this.state={
            title: "",
            author:"",
            published: "",
            genre:"",
            condition: ""
            
        }
        this.handleChange = this.handleChange.bind(this)
    }
    //event has import info, target element which u wwere in 
    handleChange(event){
        event.target.type === "checkbox" ? this.setState({[event.target.name]: event.target.checked}) : this.setState({ [event.target.name]: event.target.value})
    }
    render(){
        return(
            <div style={{backgroundColor:"white"}}>
                <h1 style={centering}>Submit Books</h1>
                <form> 
                <div className="styleForm">
                <input  
                        type="text" 
                        value={this.state.title}
                        name="title" 
                        placeholder="Title" 
                        onChange={this.handleChange}
                />
              <br/>
                <input type="text" 
                        value={this.state.author}
                        name="author" 
                        placeholder="Author" 
                        onChange={this.handleChange}
                />
                <br/>
                <input type="text" 
                        value={this.state.published}
                        name="published" 
                        placeholder="Year published" 
                        onChange={this.handleChange}
                />
                <br/>
                <input type="text" 
                        value={this.state.genre}
                        name="genre" 
                        placeholder="Book Genre or Subject" 
                        onChange={this.handleChange}
                />
                </div>
                <br/>
                <label>Condition:</label>
               
                <label>
                    <input 
                        type="radio"
                        name="condition"
                        value="excellent"
                        checked={this.state.condition === "excellent"}
                        onChange={this.handleChange}
                    />Excellent
                </label>
              
                <label>
                    <input 
                        type="radio"
                        name="condition"
                        value="good"
                        checked={this.state.condition ==="good"}
                        onChange={this.handleChange}
                    />Good
                </label>
              
                <label>
                    <input 
                        type="radio"
                        name="condition"
                        value="poor"
                        checked={this.state.condition ==="poor"}
                        onChange={this.handleChange}
                    />Poor
                </label>


                </form>
              {/* <h1>{this.state.title}</h1>
              <h1>{this.state.author}</h1> */}

              <button>Submit</button>
              <Link to="/sharebooks"></Link>
            </div>
        );
    }
}

//For the "Submit Books" at the top of the page idk
const centering = {
    textAlign: "center",
    fontFamily: "Open-sans sans-serif",
}
export default ShareBooks;