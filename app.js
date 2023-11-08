let todo = [];

let req = prompt("please  enter your request");

while(true){
    if(req == "quit"){
        console.log("quitting app");
        break;
    }
    if(req == "list"){
        console.log("------------------");
        for(let i=0; i<=req.length; i++){
            console.log(i, todo[i]);
        }
        console.log("------------------");
    } else if(req == "add"){
        let task = prompt("please enter your task that you want to add");
        todo.push(task);
        console.log("task added");
    } else if(req == "delete"){
        let idx = prompt("please eneter the task index")
        todo.splice(idx, 1);
        console.log("tesk delete");
    }else{
        console.log("wrong request");
    }
    req = prompt("please  enter your request"); 
}