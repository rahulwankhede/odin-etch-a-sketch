const container = document.querySelector(".container");

const gridSize = 16;

let div;

for(let i = 0; i < gridSize; i++){
	for(let j = 0; j < gridSize; j++){
		div = document.createElement('div');
		div.innerText = i*gridSize + j + 1;
		container.appendChild(div);
	}
}
