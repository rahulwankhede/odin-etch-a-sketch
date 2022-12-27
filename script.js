const container = document.querySelector(".container");

function drawGrid(size){
	let div, id;

	for(let i = 0; i < size; i++){
		for(let j = 0; j < size; j++){
			div = document.createElement('div');
			div.setAttribute("class", "box");
			id = i*size + j + 1;
			div.setAttribute("id", `${id}`)
			container.appendChild(div);
			div.addEventListener('mouseover', function(e){
				this.classList.add("hover");
			});
			div.addEventListener('mouseout', function(e){
				this.classList.remove("hover");
			});
		}
	}
}

let gridSize = 16;
drawGrid(gridSize);

function getGridSize(){
	return parseInt(prompt("Input new grid size not greater than 100"));
}

const button = document.querySelector('button');
button.addEventListener('click', getGridSize);
