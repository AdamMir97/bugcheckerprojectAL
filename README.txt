Setup:
Unload the folders
Import the database
Run the ASP.NET API server in debug mode (in \webapi\BugTrackerApp)
Then run app.js using node.js (in \react frontend\reactbugtracker\src)




Architecture
Used a MySQL database with an ASP.NET webAPI and a react frontend
The database contains information pertaining to the bugs and the users
The ASP.NET application contains database models and an API controller to allow users to interact with the database
The React app is a UI from which to view data in the database, add bugs and users & edit the bugs and users (didn’t implement Delete out of CRUD)

Design decisions
I chose the database to be MySQL as it is easy to use over Postgresql and I believe it was sufficient to use for this project, despite having experience with SSMS since it is rather large in terms of storage space compared to MySQL
I chose to write an ASP.NET application since it would help in terms of scaffolding the project in terms of the operations for the API and interacting with the database, also due to previous experience in working with APIs in .NET as opposed to Python for example
Initially I tried to make an MVC app but ran into problems in creating the views based off of the controllers as I used an api controller- I then decided to create the frontend in react after asking for assistance, I chose to use React over Angular as it seemed that React was more beginner friendly

The main source of difficulty was setting the frontend up, as I didn’t successfully link the view to the controller and so developed it in React- it being the first time I have used React


Please forward any issues to adammir97@gmail.com
