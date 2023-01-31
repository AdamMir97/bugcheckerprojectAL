import React, { Component, useState } from 'react';

import GetUsersComponent from './GetUsersComponent';
import PostUsersComponent from './PostUsersComponent';
import PutUsersComponent from './PutUsersComponent';

function UsersComponent(){	
	const [active, setActive] = useState("GetUsersComponent");
	
		return (
		
		<div className="UsersComponent">
		<h1>Users Component</h1>
			<button onClick= {() => setActive("GetUsersComponent")}>All Users</button>
			<button onClick= {() => setActive("PostUsersComponent")}>Add new User</button>
			<button onClick= {() => setActive("PutUsersComponent")}>Edit User</button>
				
			{active === "GetUsersComponent" && <GetUsersComponent/>}
			{active === "PostUsersComponent" && <PostUsersComponent/>}
			{active === "PutUsersComponent" && <PutUsersComponent/>}
			
			{/*
			<GetUsersComponent/>
			<PostUsersComponent/>
			<PutUsersComponent/>
			*/}
			
			
		</div>
		);
		
	
}

export default UsersComponent