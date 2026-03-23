let text=document.getElementById("text");
let add=document.getElementById("add");
let taskdel=document.getElementById("taskDelete");
let del=document.getElementById("doneDelete");
let tasksearch=document.getElementById("taskSearch");
let search=document.getElementById("doneSearch");
let tasks=[];
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
}
///sdkjcbdskjbcdskbc