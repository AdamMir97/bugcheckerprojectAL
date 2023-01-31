import React, { Component } from 'react';

class GetBugComponent extends React.Component{
	
	constructor(props) {
        super(props);
        this.state = {
            items: []
					}
		}
		
		componentDidMount() {
        fetch('https://localhost:44343/api/bugs')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    items: json, //json is mapped to items
                })
            });
		}
		
		async selectUser(item)
		{
			//console.log("selecting user of id:");
			console.log(item)
			//console.log(this.state.items[item-1])
			
			//let item=this.state.items[id-1]
			
			
		}
		
		render(){
			return(
				<div className="GetBugComponent">
				
					{/*
					<ul>
					{items.map(item=> (
						<li key={item.bugid}>
							Bug: {item.title} | Description: {item.description} | CreationDate: {item.createdon} | State: {item.state} | AssignedTo: {item.assignedto}
						</li>
							
					))};
					</ul>
					*/}
					<h1>All bugs</h1>
					<table class="content-table">
						<React.Fragment>
						<thead>
							<tr>
								<React.Fragment>
								<th>Id:</th>
								<th>Bug:</th>
								<th>Description:</th>
								<th>CreationDate:</th>
								<th>State:</th>
								<th>AssignedTo:</th>
								{/*<th>Username:</th>*/}
								{/*<th>Update</th>*/}
								</React.Fragment>
							</tr>
						</thead>
						
						<tbody >
						
						{this.state.items.map(item=>( //one has state, the others don't
						
						<tr key={item.bugid}>
							<React.Fragment>
							<td>{item.bugid}</td>
							<td>{item.title}</td>
							<td>{item.description}</td>
							<td>{item.createdon}</td>
							<td>{item.state}</td>
							<td>{item.assignedto}</td>
							{/*<td>{item.username}</td>*/}
							
							</React.Fragment>
							{/*<td><button onClick={()=> this.selectUser(item)}>Update</button></td>*/}
						</tr>
						))}					
						</tbody>
						</React.Fragment>
						
					
					</table>
				</div>
			)
		}				
	
}

export default GetBugComponent