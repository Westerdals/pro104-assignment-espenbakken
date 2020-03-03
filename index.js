
function renderList (){
    const outputList = JSON.parse(window.localStorage.getItem("outputList")) || [];

    const outputListTwo = document.getElementById("outputList");
    outputListTwo.innerHTML = "";
    for(const product of outputList){
        const productTwo = document.createElement("div");
        const {name, price, description} = product;
        
        productTwo.innerHTML = "<h4>" + name + "</h4>" + 
            "<div>" + description + "</div>" +  
            "<div><small>Price: " + price + "</small></div>";
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