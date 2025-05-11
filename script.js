let github = document.getElementById("githubIcon")
github.addEventListener("mouseover", () => {
    github.classList.add("fa-fade")
})
github.addEventListener("mouseout", () => {
    github.classList.remove("fa-fade")
})

let aula = document.getElementById("aulaIcon")
aula.addEventListener("mouseover", () => {
    aula.classList.add("fa-fade")
})
aula.addEventListener("mouseout", () => {
    aula.classList.remove("fa-fade")
})
let tvON = document.getElementById("tvON")
tvON.addEventListener("click", () => {
    tvON.classList.add("verde")
})
tvON.addEventListener("dblclick",()=>{
    tvON.classList.remove("verde")
})