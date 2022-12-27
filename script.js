const container = document.querySelector(".container");

function drawGrid(size){
	let div, id;
	container.style.gridTemplateColumns = `repeat(${size}, 1fr)`
	for(let i = 0; i < size; i++){
		for(let j = 0; j < size; j++){
			div = document.createElement('div');
			div.setAttribute("class", "box");
			id = i*size + j + 1;
			div.setAttribute("id", `${id}`);
			container.appendChild(div);
			div.addEventListener('mouseover', function(e){
				this.classList.add("hover");
			});
		}
	}
}

function getGridSize(){
	return parseInt(prompt("Input new grid size not greater than 100"));
}

function redrawGrid(e){
	let gridSize = getGridSize();
	container.replaceChildren();
	drawGrid(gridSize);
}


const button = document.querySelector('button');
button.addEventListener('click', redrawGrid);

let gridSize = 16;
drawGrid(gridSize);
