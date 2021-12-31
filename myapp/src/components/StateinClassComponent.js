import React, { Component } from 'react'
import '../States.css'

export default class StateinClassComponent extends Component {
   
                constructor(props) {
                    super(props)
                
                    this.state = {
                         name:"Hetheesh",
                         count:0
                    }
                }
                render(){

                    setTimeout(()=>{
                        this.setState({
                             name:"Hetheesh T",
                            
                        })
                    },5000)
                    return(
                         <div className='demo'>
                             <h1>Hello this is {this.state.name}</h1>
                            <h1>Count: {this.state.count}</h1>
                             <button onClick={()=>{
                                 this.setState({
                                     count:this.state.count+1
                                 })
                             }}>Increment count</button><br></br>
                             <button onClick={()=>{
                                 this.setState({
                                     count:this.state.count-1
                                 })
                             }}>Decrement count</button><br></br>
                             <button onClick={()=>{
                                 this.setState({
                                     count:0
                                 })
                             }}>Reset</button>
                             
                        </div>
                    )
                }
            
            }
    
