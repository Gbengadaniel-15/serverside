// step 1: Import the express modu;e
const express =  require('express');


//step 2 : create an express application instance
const app = express();

const studentInfo = [
    {name : "Alice" , age : 20, grade : "A"},
    {name : "Bob",age: 21, grade: "B"  },
    {name:"charlie" ,age : 24, grade : "c"}
]

app.get('/all-date',(req, res)=>{
    res.json(studentInfo)
})

//step 3: Define a route handler for GET requests to /
app.get('/', function(req, res) {
    res.send('Hello, World! Welcome to Express.js1');
});

//Step 4 : Start listening on port 3000
app.listen(3000, function(){
    console.log('server is up and running');
});