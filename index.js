function renderMembers (){
    const outputMembers = JSON.parse(window.localStorage.getItem("outputMembers")) || [];

    const outputMembersEl = document.getElementById("outputMembers");
    outputMembersEl.innerHTML = "";
    for(const product of outputMembers){
        const productTwo = document.createElement("div");
        const {member,picture} = product;
        productTwo.innerHTML = "<div>" + (picture ? "<div><img height='100px' src='images/" + picture +"'/></div>" :"") + "<h4>" + member + "</h4>" + "</div>"
        outputMembersEl.appendChild(productTwo);
    }
}

function createNewMember(event){
    event.preventDefault();

    const member = document.getElementById("member-input").value;
    const picture = document.querySelector("[name='picture']").files.item(0).name;
    const product = {member, picture};
    
    const outputMembers = JSON.parse(window.localStorage.getItem("outputMembers")) || [];
    outputMembers.push(product);
    window.localStorage.setItem("outputMembers", JSON.stringify(outputMembers)); 
    renderMembers();

    event.target.reset();
}

function renderTasks(){
    const outputTask = JSON.parse(window.localStorage.getItem("outputTask")) || [];

    const outputTaskEl = document.getElementById("outputTasks");
    outputTaskEl.innerHTML = "";
    for(const product of outputTask){
        const productTwo = document.createElement("div");
        const {task, name} = product;
        
        productTwo.innerHTML = "<h4>" + product.name + "</h4>" + "<p>" + product.task + "</p>" ;
        outputTaskEl.appendChild(productTwo);
    }
}

function createNewTask(event){
    event.preventDefault();

    const name = document.getElementById("name").value;
    const task = document.querySelector("[name='task']").value;
    const product = {task, name};

    const outputTask = JSON.parse(window.localStorage.getItem("outputTask")) || [];
    outputTask.push(product);
    window.localStorage.setItem("outputTask", JSON.stringify(outputTask)); 
    renderTasks();

    event.target.reset();
}

function renderOppgaver(){
    const outputOppgave = JSON.parse(window.localStorage.getItem("outputOppgave")) || [];

    const outputOppgaveEl = document.getElementById("outputOppgaver");
    outputOppgaveEl.innerHTML = "";
    for(const product of outputOppgave){
        const productTwo = document.createElement("div");
        const {teammedlem, tildeltOppgave} = product;

        productTwo.innerHTML = "<h4>" + teammedlem + "</h4>" + "<p>" + tildeltOppgave + "</p>";
        outputOppgaveEl.appendChild(productTwo);
    }
}

function assignTasks(event){
    event.preventDefault();

    const teammedlem = document.getElementById("teammedlem").value;
    const tildeltOppgave = document.getElementById("tildelt-oppgave").value; 
    const product = {teammedlem, tildeltOppgave}; 

    const outputOppgave = JSON.parse(window.localStorage.getItem("outputOppgave")) || [];
    outputOppgave.push(product);
    window.localStorage.setItem("outputOppgave", JSON.stringify(outputOppgave));
    renderOppgaver();

    event.target.reset();

}