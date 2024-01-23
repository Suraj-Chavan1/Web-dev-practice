const express = require('express');
const bodyParser = require('body-parser');
  
const app = express();
const port = 3000
app.use(bodyParser.json());
  
let todos = [];

app.get('/todos',(req,res)=>{
    res.json(todos)
})

app.get('/todos/:id',(req,res)=>{
    const todo = todos.find(function(t){
        t.id===parseInt(req.params.id)
    })
    if(!todo){
        res.status(404).send();
    }else{
        res.json(todo)
    }
})
app.post('/todos',(req,res)=>{
    const newtodo ={
        id: Math.floor(Math.random()*1000000),
        title : req.body.title,
        description:req.body.description

    }
    todos.push(newtodo)
    res.status(201).json(newtodo)
})

app.put('/todos/:id',(req,res)=>{
    const todoIndex=todos.findIndex(function(t){
        t.id=== parseInt(req.params.id)
    })
    if(todoIndex === -1){
        res.status(404).send();
    }else{
        todos[todoIndex].title=req.body.title;
        todos[todoIndex].description=req.body.description;
        res.json(todos[todoIndex]);
    }
})
app.delete('/todos/:id',(req,res)=>{
    const todoIndex = todos.findIndex(t => t.id === parseInt(req.params.id));
    if (todoIndex === -1) {
        res.status(404).send();
      } else {
        todos.splice(todoIndex, 1);
        res.status(200).send();
      }

})
app.use((req, res, next) => {
    res.status(404).send();
  });

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
