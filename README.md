# TodoList
a to-do list fullstack web app deployed on Render with MongoDB cloud

author: Raktim Bhuyan

## Installation and Use

The best way is to access the deployed website via https://customtodolist-vpch.onrender.com/

If you would like to download the repo and run the app locally on localhost 3000 (or any port you specify), that is also an option.

## Tools, libraries used & why I chose to use it
The following table shows my rationale behind building this app, and why I chose to use the frameworks and tools that I did.
|Tool      | Why I choose it|
|-------   |----------------|
|Node.js| <ul><li>popular and well-documented</li> <li>uses JS as main application</li> <li>robust framework </li></ul>|
|Express.js|makes it easier to handle http requests|
|MongoDB Cloud|<ul><li>noSQL DBs like MongoDB are easier to scale</li><li>not much inter-document relationships need to be made for the purposes of this app</li><li> well-documented</li><li>free cloud database</li></ul>|
|Render | 	handles a lot of server-side stuff for me and gets rid of a *lot* of headaches|
|body-parser|helps with requests from client-side e.g. add item, delete item|
|dotenv|login security|
|ejs|saves a lot of lines of code, especially given that I need to rewrite the same code so many times when creating new to-do lists|
|lodash|makes string formatting a lot easier|
