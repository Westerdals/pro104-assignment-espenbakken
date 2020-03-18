
function renderMembers (){
    const outputMembers = JSON.parse(window.localStorage.getItem("outputMembers")) || [];

    const outputMembersEl = document.getElementById("outputMembers");
    outputMembersEl.innerHTML = "";
    for(const product of outputMembers){
        const productTwo = document.createElement("div");
        const {member} = product;
        
        productTwo.innerHTML = "<h4>" + member + "</h4>" ;
        outputMembersEl.appendChild(productTwo);
    }
}

function createNewMember(event){
    event.preventDefault();

    const member = document.getElementById("member-input").value;
    /*const task = document.getElementById("task-input").value;
    const description = document.querySelector("[name='description']").value;
*/
    const product = {member};

    const outputMembers = JSON.parse(window.localStorage.getItem("outputMembers")) || [];
    outputMembers.push(product);
    window.localStorage.setItem("outputMembers", JSON.stringify(outputMembers)); 
    renderMembers();

    event.target.reset();
}

/*window.addEventListener("storage", function(event){
    if (event.key === "outputlist"){
        renderList();
    }
});*/

function renderTasks(){
    const outputTask = JSON.parse(window.localStorage.getItem("outputTask")) || [];

    const outputTaskEl = document.getElementById("outputTasks");
    outputTaskEl.innerHTML = "";
    for(const product of outputTask){
        const productTwo = document.createElement("div");
        const {task} = product;
        
        productTwo.innerHTML = "<h4>" + task + "</h4>" ;
        outputTaskEl.appendChild(productTwo);
    }
}

function createNewTask(event){
    event.preventDefault();

    const task = document.querySelector("[name='task']").value;

    const product = {task};

    const outputTask = JSON.parse(window.localStorage.getItem("outputTask")) || [];
    outputTask.push(product);
    window.localStorage.setItem("outputTask", JSON.stringify(outputTask)); 
    renderTasks();

    event.target.reset();
}