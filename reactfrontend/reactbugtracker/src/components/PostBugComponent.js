import React, { Component } from 'react';

class PostBugComponent extends React.Component{
	
	constructor(props) {
        super(props);
        this.state = {
            items: []			
					}					
		}
		
		//const [title, setTitle] = useState('');
		//const [description, setDescription] = useState('');
		//const [assignedto, setAssignedto] = useState('');
	
		async postData()
		{
			//async makes it easier to catch errors
			try{
				let buginfo={
					title:this.refs.title.value,
					description:this.refs.description.value,
					assignedto:this.refs.assignedto.value
					
					//{
						//title: 'posttestid',
						//description: 'testing ID incrementation',
						//assignedto: 'admin'
					//}
					
				};
				
				let result = await fetch('https://localhost:44343/api/bugs',{
					method: 'post',
					headers:{
						'Accept': 'application/json',
						'Content-type': 'application/json',
					},
					body: JSON.stringify(buginfo)					
					
				});
				console.log(buginfo)
				console.log(result)
				
			} catch(e){
				console.log(e);
			}		
			
			//alert('testing')
		}
		
		render(){
			
			
			return(
			
			<div className="PostBugComponent">
				<div>
					
					<h2>Add a new bug:</h2>	
					<div class="submit-entry">
						<label>Bug title: 
							<input type="text" ref="title"></input><br/>
						</label>
						<label>Description: 
							<input type="text" ref="description"></input><br/>
						</label>
						<label>Assign to: 
							<input type="text" ref="assignedto"></input><br/>
						</label>

					<button onClick={ () => this.postData()}>Click to add another bug</button>
					</div>
					</div>
			</div>
			)
		}
}


export default PostBugComponent