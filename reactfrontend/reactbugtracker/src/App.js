import React, { Component, useState } from 'react';
import BugComponent from './components/BugComponent';
import UsersComponent from './components/UsersComponent';
import HeaderComponent from './components/HeaderComponent';
import NavComponent from './components/NavComponent';
//import './App.css'
import './index.css'

class App extends React.Component{
	
	    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
					}
		}
		
		
		//need to clean this up
		componentDidMount() {
        fetch('https://localhost:44343/api/bugs')
		//fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    items: json, //json is mapped to items
                })
            });
		};
		
		
	render(){
		
		//change this
		var { isLoaded, items } = this.state;
		
		
		
		

		if (!isLoaded) {
			return <div>Loading...</div>;
		}
		
		else{
			
			
			
			return (
				

				<div className="App">					
					<HeaderComponent/>
					<article>
						<NavComponent/>
					</article>

					<div>
					{/*<BugComponent/>
					<UsersComponent/>*/}
						
					</div>
					
				</div>
				
				);
		
		}
		
		
	}
	
}
//const element=<App></App>
//ReactDOM.render(element,document.getElementById("root"));


export default App;
