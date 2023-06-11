const express = require("express");
const bodyParser = require("body-parser");
//const date = require(__dirname +"/date.js"); we can create a node module inside only
const mongoose = require('mongoose');
const _ = require('lodash');
const app = express();
app.use(bodyParser.urlencoded({extended:true}));

const mongo_user = "RaktimBhuyan";
const mongo_password = "qwertyuiop";

//set ejs as the view engine
app.set('view engine', 'ejs');
app.use(express.static("public"));

mongoose.connect("mongodb+srv://"+mongo_user +":"+mongo_password+"@todolist.tx2j2q2.mongodb.net/todoListDB");
//...Item Schema
const itemsSchema = {
    name:String
}
const Item = mongoose.model("item",itemsSchema); //modelName

const cfDaily = new Item({name:"Codeforces Daily"});
const lcDaily = new Item({name:"Leetcode Daily"});
const gfgDaily = new Item({name:"GFG Daily"});

const defaultItems = [cfDaily,lcDaily,gfgDaily];
//...List Schema
const listSchema = {
    name:String,
    items :[itemsSchema]
}
const List = mongoose.model("List",listSchema);


//...... Home route get request....
app.get("/",function(req,res){
    
    //const day = date.getDate();
    Item.find().then(function(foundItems){
        if(foundItems.length ==0){
            Item.insertMany(defaultItems).then(()=>console.log("Successfully inserted the documents"))
            .catch((err)=>console.log(err));
        }
        
    res.render("list",{listTitle:"Today",newListItem:foundItems});
    })
.catch(err=>console.log(err));  
//res.send("Hola,Server is working");
});


//.......Custom Lists using Express Route Parameters......
app.get("/:customListName",function(req,res){
    
    const customListName = _.capitalize(req.params.customListName);
    List.findOne({name:customListName}).then(function(foundList){
        if(!foundList){
            //create a new list
            const list = new List({
                name:customListName,
                items:defaultItems
            })
            list.save();
            res.redirect("/"+ customListName);
        }
        else{
            //show an existing list
            res.render("list",{listTitle:customListName,newListItem:foundList.items})
        }
    })
    .catch(err=>console.log(err))
    
})

app.post("/",function(req,res){
    const itemName = req.body.newItem;
    const listName = req.body.list;
    const item = new Item({
        name:itemName
    })
    
    if(listName ==="Today"){
        item.save();
        res.redirect("/");
    }else{
        List.findOne({name:listName}).then(function(foundList){
            foundList.items.push(item);
            foundList.save();
            res.redirect("/"+ listName);
        })
        .catch(err=>console.log(err))
    }

    
    
});
app.post("/delete",function(req,res){
    const checkedItemId = req.body.checkbox;
    const ListName = req.body.listNaam;
        
        if(ListName === "Today"){
    Item.findByIdAndRemove(checkedItemId).then(()=>console.log("Successfully removed"))
    .catch(err=>console.log(err))
    res.redirect("/");
        }else{
            List.findOneAndUpdate({name:ListName},{
                $pull:{items:{_id:checkedItemId}}
            }).then((foundList)=>console.log("Successfully deleted from custom list"))
            .catch(err=>console.log(err))
            res.redirect("/"+ ListName);
        }
    
    
})
app.get("/work",function(req,res){
    res.render("list",{listTitle:"Work",newListItem:workItems})
});
app.post("/work",function(req,res){
    const item = req.body.newItem;
    workItems.push(item);
    res.redirect("/work");
});
app.get("/about",function(req,res){
    res.render("about");
});


app.listen(3000,function(){
console.log("Server started at port 3000:");
});

