import React, { Component } from 'react';

class PutUsersComponent extends React.Component{
	
	constructor(props) {
        super(props);
        this.state = {
            items: []			
					}					
		}
		
		async putData()
		{
			try
			{
				let id = this.refs.putuserid.value;
				
				let putuserinfo={
					userid:this.refs.putuserid.value,
					username:this.refs.putusername.value,
					email:this.refs.putemail.value,
					password:this.refs.putpassword.value,
					
				};
				let result = await fetch('https://localhost:44343/api/users/' + id,{
					method: 'put',
					//mode: 'no-cors',
					headers:{
						'Accept': 'application/json',
						'Content-type': 'application/json',
					},
					body: JSON.stringify(putuserinfo)	
					
				});
				console.log(putuserinfo)
				//console.log(id)
				console.log(result)
				
			} catch (e){
				console.log(e);
			}
		}
		
		render(){
			return(	
			<div className="PutUsersComponent">
			<h2>Update User:</h2>
					<div class="submit-entry">
						<label>User Id: <input type="text" ref="putuserid"/><br/></label>
						<label>Username: <input type="text" ref="putusername"/><br/></label>
						<label>Email: <input type="text" ref="putemail"/><br/></label>
						<label>Password: <input type="text" ref="putpassword"/><br/></label>
						<button onClick={ () => this.putData()}>Update User</button>
					</div>
			</div>
			
		)
		}		

	
}

export default PutUsersComponent