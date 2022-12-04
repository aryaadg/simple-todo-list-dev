const key = "simple_todo_list" ;
const input = document.getElementById("input-field");
const listContainer = document.getElementsByClassName("input-list");

function accessStorage(action, todoData = null) {
        if (action === "GET"){
            console.log("get");
            return JSON.parse(localStorage.getItem(key));
        } 
        else if (action === "SET" && todoData !== null ){
            console.log("set");
            localStorage.setItem(key,JSON.stringify(todoData));
        }
}

if (accessStorage("GET") === null) {
    accessStorage("SET",[]);
}

function addData(){
    const acces = accessStorage("GET");
    acces.push({id: Date.now() + Math.random() , title: input.value})
        accessStorage("SET",acces);
        input.value = "";
}