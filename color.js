const body = document.querySelector("#body")
const button = document.querySelector("#button");
    
const colors= ["red", "orange", "yellow", "green", "blue", "navy", "purple", "pink", "teal", "black", "cyan", "palegreen", "thistle", "magenta", "coral", "cyan"];

function btnClicked() {
    const randomColor1 = colors[Math.floor(Math.random() * colors.length)];
    const randomColor2 = colors[Math.floor(Math.random() * colors.length)];

    console.log(randomColor1, randomColor2);
    body.style.background = `linear-gradient(to right,  ${randomColor1} , ${randomColor2})`;

}

button.addEventListener("click", btnClicked);


// javascript style background linear gradient   
// body.style.background = "linear-gradient(to right, " + randomColor1 + "," + randomColor2 + ")";
