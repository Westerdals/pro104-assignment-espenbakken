
const submitBtn = document.getElementById("submit-btn"); 
submitBtn.onclick = createNew;


function renderList (){
    const outputList = JSON.parse(window.localStorage.getItem("outputList")) || [];

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