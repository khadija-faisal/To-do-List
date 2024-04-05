#!/usr/bin/env node

import inquirer from "inquirer";
let todoList = [];
let condition = true;

while(condition){
let addtoDo = await inquirer.prompt (
    [   

        {
            name: "add",//ask to add todo in your empty list
            type: "input",
            message: "what would you add in your To-do list:",
            validate: (input) => {

                if(input.trim() === ""){ //this method is used when you add whitespaces it print a message : please add text 
                    return "please Add text ";
                }
                 return true;
            },
        
        },

        {   name: "addmore", //used to add more todo in your todolist
            type: "confirm",
            message: "would you like to add more in your To-do list:",
            default: "true",


        },
    ]
);
todoList.push(addtoDo.add);
console.log(todoList);
condition = (addtoDo.addmore);
}

// remove todos from todo list 
let removetodos = await inquirer.prompt( // used ask to confirm for removing your todo from your todolist
    [
        {
           name: "remove",
           type: "confirm",
           message: "Do you want to remove Todo:",
           default: "false",
        }
    ]
)
if(removetodos.remove){
    let removeTodoChoice = await inquirer.prompt( //used to select which todo you wanna remove from your todo list
        {
            name: "todoRemove",
            type: "list",
            message: "select a todo below option:",
            choices: todoList,
        },
    )
const indextoRemove = todoList.indexOf(removeTodoChoice.todoRemove);
if(indextoRemove !== -1){
    todoList.splice(indextoRemove, 1);
  }
}

//update your todo from list 
let updatetodos = await inquirer.prompt(//used ask to confirm for updating your todo from your todolist
    {
    name: "update",
    type: "confirm",
    message: "do you want to update todo:",
    default: "true",
},

);
if(updatetodos.update){
    let updateChoice = await inquirer.prompt([//used to select which todo you wanna update from your todo list
        {
            name: "todotoUpdate",
            type: "list",
            message: "select todo to update:",
            choices: todoList,
        },

        {
            name: "newtodo",// used to add newtodo on place of todo which one you selected from todolist
            type: "input",
            message: "Enter the new value for the selected todo:",
        },
    ]);
    const indextoUpdate = todoList.indexOf(updateChoice.todotoUpdate);
    if (indextoUpdate !== -1){
        todoList[indextoUpdate] = updateChoice.newtodo;   
    }
}

//print each todo in separate line 
console.log("your Todo:");
todoList.forEach( todo => {
  console.log("." + todo);
});