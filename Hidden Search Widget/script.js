const button = document.querySelector(".button")
const container = document.querySelector(".container")
const input = document.querySelector(".search")


button.addEventListener("click", () => {
container.classList.toggle("active")
input.focus()
})
