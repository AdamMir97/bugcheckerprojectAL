import React, { Component } from 'react';

class PutBugComponent extends React.Component{
	
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
				let id = this.refs.putbugid.value;
				
				let putbuginfo={
					bugid:this.refs.putbugid.value,
					title:this.refs.puttitle.value,
					description:this.refs.putdescription.value,
					state:this.refs.putstate.value,
					assignedto:this.refs.putassignedto.value
					//{
						//bugid: '7',
						//title: 'puttest',
						//description: 'testing put',
						//state: 'Closed',
						//assignedto: 'Admin'
					//}
					
				};
				let result = await fetch('https://localhost:44343/api/bugs/' + id,{
					method: 'put',
					//mode: 'no-cors',
					headers:{
						'Accept': 'application/json',
						'Content-type': 'application/json',
					},
					body: JSON.stringify(putbuginfo)
															
				});
				console.log(putbuginfo)
				//console.log(id)
				console.log(result)
				
			} catch (e){
				console.log(e);
			}
		}
		render(){
			return(
				<div className="PutBugComponent">
				<div>
					<h2>Update bug:</h2>
					<div class="submit-entry">
						<label>Bug Id: <input type="text" ref="putbugid"/><br/></label>
						<label>Name: <input type="text" ref="puttitle"/><br/></label>
						<label>Description: <input type="text" ref="putdescription"/><br/></label>
						{/*<label>State: <input type="text" ref="putstate"/><br/></label>*/}
						<label>State: <select ref= "putstate"><option value="Open">Open</option><option value="Closed">Closed</option></select><br/></label>
						<label>Assign to: <input type="text" ref="putassignedto"/><br/></label>
						<button onClick={ () => this.putData()}>Update Bug</button>
					</div>
					</div>
				</div>
			)
		}
		
}

export default PutBugComponent