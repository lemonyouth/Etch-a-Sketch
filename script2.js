//function to create grid according to given edge number
function createGrid(edgenum){
    const container = document.querySelector('.container');
    for(let i = 0;i<edgenum;i++){
        for(let j = 0;j<edgenum;j++){
            var div = document.createElement('div');
            
            div.style.width = 960/edgenum+"px";
            div.style.height = 960/edgenum+"px";
            //div.classList.add('grid');
            //container.appendChild(div);
            
            div.addEventListener("mouseover", () =>{
                div.style.backgroundColor = "red";
                //console.log('clicked');
              })
              div.addEventListener("mouseleave", () => {
                div.style.backgroundColor = "";
                //console.log('left');
              })
            div.classList.add('grid');
            container.appendChild(div);
        }
    }
}
function clearGrid(){
    const container = document.querySelectorAll('.grid');
    container.forEach(grid => {grid.remove()});
}

function refreshGrid(){
    var edgenum = prompt("please enter the edge number");
    clearGrid();
    createGrid(edgenum);
}

function main(){
    createGrid(16);
    const button = document.querySelector("button");
    button.addEventListener("click", () =>{
        refreshGrid();
    })
}

main();
