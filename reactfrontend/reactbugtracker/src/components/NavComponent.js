import React, { Component, useState } from 'react';
import BugComponent from './BugComponent';
import UsersComponent from './UsersComponent';


function NavComponent(){
	const [active, setActive] = useState("Bugs");
	return(
	<div className="NavComponent">
		<div class= "nav">
		<button onClick= {() => setActive("Bugs")}>Bugs</button>
		<button onClick= {() => setActive("Users")}>Users</button>
		
		{active === "Bugs" && <BugComponent/>}
		{active === "Users" && <UsersComponent/>}
		</div>
	</div>
	)
}

export default NavComponent