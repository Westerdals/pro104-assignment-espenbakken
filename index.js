function renderList (){
    const outputList = JSON.parse(window.localStorage.getItem("outputList")) || [];

    const outputListTwo = document.getElementById("outputList");
    outputListTwo.innerHTML = "";
    for(const product of outputList){
        const productTwo = document.createElement("div");
        const {member, task, description} = product;
        
        productTwo.innerHTML = "<h4>" + member + "</h4>" +  "<div>Arbeidsoppgave: " + task + "</div>" +  
            "<div>Arbeidsbeskrivelse: " + description + "</div>";
        outputListTwo.appendChild(productTwo);
    }
}

function createNew(event){
    event.preventDefault();

    const member = document.getElementById("member-input").value;
    const task = document.getElementById("task-input").value;
    const description = document.querySelector("[name='description']").value;
  
    const product = {member, task, description};

    const outputList = JSON.parse(window.localStorage.getItem("outputList")) || [];
    outputList.push(product);
    window.localStorage.setItem("outputList", JSON.stringify(outputList)); 
    renderList();

    event.target.reset();
}

window.addEventListener("storage", function(event){
    if (event.key === "outputlist"){
        renderList();
    }
});
