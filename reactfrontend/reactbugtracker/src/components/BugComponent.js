import React, { Component, useState } from 'react';

import GetBugComponent from './GetBugComponent';
import PostBugComponent from './PostBugComponent';
import PutBugComponent from './PutBugComponent';

function BugComponent(){
	const [active, setActive] = useState("GetBugComponent");
		
		return(
			<div className="BugComponent">
			<h1>Bugs Component</h1>
				<button onClick= {() => setActive("GetBugComponent")}>All Bugs</button>
				<button onClick= {() => setActive("PostBugComponent")}>Add new bug</button>
				<button onClick= {() => setActive("PutBugComponent")}>Edit bug</button>
				
				{active === "GetBugComponent" && <GetBugComponent/>}
				{active === "PostBugComponent" && <PostBugComponent/>}
				{active === "PutBugComponent" && <PutBugComponent/>}
					
					{/*	
				<React.Fragment>
				<GetBugComponent/>
				<PostBugComponent/>										
				<PutBugComponent/>
					
				</React.Fragment>
					*/}
					
					
				
			</div>
			
			
			)
			
		
}

export default BugComponent