let text=document.getElementById("text");
let add=document.getElementById("add");
let tasks=[];
let list=document.getElementById("list");
let a=0;
add.addEventListener("click", function () {
    let text = document.getElementById("text").value;
    addTask(text);
});
function addTask(text){
    tasks.push({
        id: a,
        text: text,
        done: false
    });
    a++;
    updateApp();
}
function updateApp(){
    renderTask();
}
function renderTask(){
    list.innerHTML="";
    for (let task of filteredTasks){
        let div=document.createElement("div");
        div.className="text";
        let del=document.createElement("button");
        del.innerText="Удалить";
        del.dataset.id=task.id;
        del.addEventListener("click", function(){
            const id=Number(this.dataset.id);
            tasks=tasks.filter(item => item.id!=id)
            updateApp();
        })
        let butDone=document.createElement("button");
        butDone.innerText=task.done===false ? "Выполнить" : "Отменить";
        butDone.dataset.id=task.id;
        butDone.addEventListener("click", function(){
            const id=Number(this.dataset.id);
            tasks=tasks.find(item => item.id===id)
            task.done=!task.done;
            updateApp();
        })
        let currentFilter = "all";
        let butAll=document.createElement("button");
        butAll.innerText="Все";
        butAll.addEventListener("click", function(){
            currentFilter="all";
            updateApp();
        })
        let butActive=document.createElement("button");
        butActive.innerText="Активные";
        butActive.addEventListener("click", function(){
            currentFilter="active";
            updateApp();
        })
        let butCurrect=document.createElement("button");
        butCurrect.innerText="Выполненные";
        butCurrect.addEventListener("click", function(){
            currentFilter="done";
            updateApp();
        })
        let filteredTasks = tasks;
        if(currentFilter==="active"){
            filteredTasks=tasks.filter(item=>item.done===false)
            updateApp();
        }
        if(currentFilter==="done"){
            filteredTasks=tasks.filter(item=>item.done===true)
            updateApp();
        }
        div.append(task.text);
        div.append(del);
        div.append(butDone);
        list.append(div);
    }
}
