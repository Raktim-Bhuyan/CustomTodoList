By default, when you come to the page, you are welcomed to the home page, or default to-do list. Its title is the date of the day you access the page. It is prepopulated with 3 to-do items, as you can see below:



Note: because all users of the web app can come in and modify the to-do lists as they wish, the items on the to-do list may look very different from what I have above or in examples below.

adding items to a list
You can add items to a to-do list by simply inputing the new item name into the last box, and then pressing the "+" or the enter key, like so:



deleting items from a list
You can delete items to a to-do list by simply clicking the box next to the item name, like so:



creating new lists
New to-do lists are created when a new parameter name for a list is inputed into the URL. For example, in the gif below, I created a new list called "new-list":



On the backend, a new to-do list collection is created in the database. For reference, this is an illustration of the structure of the database:



As such, you can navigate back to the page later and find the items still there. Any changes you make will be made forever.

Note also that the same adding and deleting items functionality works for these new lists as well.

references
Special thanks to the following resources / tutorials for making this project possible:

MongoDB's Atlas Cluster Tutorial
The Coding Train Tutorial on dotenv
Node.js Gitignore File Template
Udemy Fullstack Course by Angela Yu
