const container = document.querySelector(".container");

const gridSize = 16;

let div;

for(let i = 0; i < gridSize; i++){
	for(let j = 0; j < gridSize; j++){
		div = document.createElement('div');
		div.setAttribute("class", "box");
		const id = i*gridSize + j + 1;
		div.setAttribute("id", `${id}`)
		div.innerText = id;
		container.appendChild(div);
	}
}
