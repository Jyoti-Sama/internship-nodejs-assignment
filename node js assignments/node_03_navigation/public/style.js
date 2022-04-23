const spinner = document.getElementById('spinner');
const square = document.getElementById('square');

spinner.addEventListener("click", ()=>{
    square.classList.add("spin");
    console.log("hit")
})