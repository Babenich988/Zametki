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
    });
    a++;
    updateApp();
}
function updateApp(){
    renderTask();
}
function renderTask(){
    list.innerHTML="";
    for (let task of tasks){
        let div = document.createElement("div");
        div.className="text";
        let del=document.createElement("button");
        del.innerText="Удалить";
        del.dataset.id=task.id;
        del.addEventListener("click", function(){
            const id=Number(this.dataset.id);
            tasks=tasks.filter(item => item.id!==id)//item — это каждый элемент массива tasks. item.id !== id-“оставь ВСЕ элементы, кроме того, у которого id совпадает”
            updateApp();
        })
        div.append(task.text);
        div.append(del);
        list.append(div);
    }
}
