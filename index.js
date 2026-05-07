const express = require('express')
const port = 4000
const app = express();
app.use(express.json());

// simulated in database
const users = [
    {id: 1, name: "Daniel", Course: "Backend" },
    {id: 2, name: "Tobi", Course: "Frontend"},
    {id: 3, name: "Gabrail", Course: "UI/UX"}
]


app.get("/", (request, response)=>{
    response.send("WELCOME HOME");
})

//GET ALL USERS
app.get('/users',(req, res) =>{
    res.status(200).json(users)
})

//GET A SINGLE USER BY ID

app.get('/users/:id',(req, res)=>{
    const id = parseInt(req.params.id);
    const user = users.find(el => el.id === id);

//validate
    if (!user){
        return res.status(404).json({error: 'User not found'})
    }
    res.status(200).json(user)

})


// app.post() to create Data

app.post('/new-users', (req, res) =>{
    const {name, Course} =  req.body

// Validat input
if(!name || !Course){
    return res.status(404).json({error: 'name and email are requried'})
}  
  // create new user object

  const newUser = {
    id : users.length + 1,
    name : name,
    Course : Course
  };

  users.push(newUser)

  res.status(202).json(users)
})





// list is the last thing to do
app.listen(port,()=>{
    console.log("server is listening on port " + port)

})