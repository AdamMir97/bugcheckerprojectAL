import React, { Component } from 'react';

class GetUsersComponent extends React.Component{
	
	constructor(props) {
        super(props);
        this.state = {
            items: []
					}
		}
		
		
		componentDidMount() {
        fetch('https://localhost:44343/api/users')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    items: json, //json is mapped to items
                })
            });
		}
		
		render(){
			return(
				<div className="GetUsersComponent">	
				<h1>All users</h1>				
					<table class="content-table">
						<React.Fragment>
							<thead>
								<tr>
									<React.Fragment>
									<th>UserId:</th>
									<th>Username:</th>
									<th>Email:</th>
									<th>Password:</th>
									{/*<th>Update</th>*/}
									</React.Fragment>
								</tr>
							</thead>
								
							<tbody >
								
							{this.state.items.map(item=>( //one has state, the others don't
								
							<tr key={item.userid}>
								<React.Fragment>
								<td>{item.userid}</td>
								<td>{item.username}</td>
								<td>{item.email}</td>
								<td>{item.password}</td>
								
									
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

export default GetUsersComponent