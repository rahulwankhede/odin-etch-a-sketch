const container = document.querySelector(".container");

const gridSize = 16;

let div, id;

for(let i = 0; i < gridSize; i++){
	for(let j = 0; j < gridSize; j++){
		div = document.createElement('div');
		div.setAttribute("class", "box");
		id = i*gridSize + j + 1;
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
