var btn = document.querySelector("#push")
var inputd = document.querySelector("#input");
var tasks = document.querySelector(".tasks");

btn.addEventListener("click", function () {
    if(inputd.value.length == 0){
        alert("Please Enter Any Task")
}
else{
    tasks.innerHTML += `
     <div id="tasks">
        <span class="taskname">
            ${inputd.value}
        </span>

        <button id="delete">
        <i class="fa-solid fa-trash"></i>
        </button>
     </div> 
     `;
     
    var current_Task = document.querySelectorAll("#delete")
    for( var i=0; i<current_Task.length; i++){
        current_Task[i].onclick = function(){
            this.parentNode.remove();
        }
    }
    
    var Tasked = document.querySelectorAll("#tasks");
    for(i=0; i<Tasked.length; i++){
        Tasked[i].onclick = function(){
            this.classList.toggle('Completed')
        }
    }

    inputd.value = "";
}
})