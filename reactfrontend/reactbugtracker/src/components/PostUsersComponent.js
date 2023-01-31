import React, { Component } from 'react';

class PostUsersComponent extends React.Component{
	
	constructor(props) {
        super(props);
        this.state = {
            items: []			
					}					
		}
		
		async postData()
		{
			//async makes it easier to catch errors
			try{
				let userinfo={
					username:this.refs.username.value,
					email:this.refs.email.value,
					password:this.refs.password.value
					
					
				};
				
				let result = await fetch('https://localhost:44343/api/users',{
					method: 'post',
					
					headers:{
						'Accept': 'application/json',
						'Content-type': 'application/json',
					},
					body: JSON.stringify(userinfo)
										
				});
				console.log(userinfo)
				console.log(result)
				
			} catch(e){
				console.log(e);
			}

		}
		render(){
			return(
				<div className="PostUsersComponent">
				<div>
					
				<h2>Add a new user:</h2>
					<div class="submit-entry">
						<label>Username: <input type="text" ref="username"></input></label>
						<label>Email: <input type="text" ref="email"></input></label>
						<label>Passsword: <input type="text" ref="password"></input></label>
					<button onClick={ () => this.postData()}>Click to add another user</button>
					</div>
				</div>	
				
				</div>
			
			)
			
		}
		
}

export default PostUsersComponent