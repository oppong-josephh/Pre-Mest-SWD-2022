let btn = document.getElementById("btn")
let color = document.getElementById("color")
let containerEl = document.getElementById("container")     
 generateColor();
 function generateColor(){
    const newColor = randomColor();
    color.innerHTML = "#"+ newColor;
    containerEl.style.backgroundColor = "#"+ newColor;
    
} 
randomColor();
function randomColor(){
    const chars = "0123456789abcdef"
    const colorCodeLength = 6;
    let mainColor = "";
    for (let index = 0; index <colorCodeLength; index++) {
        const randomNumber = Math.floor(Math.random()*chars.length);
        mainColor += chars.substring(randomNumber,randomNumber + 1)   
    }
    return mainColor;
}
btn.addEventListener("click", ()=>{
    generateColor();
    randomColor();
})
