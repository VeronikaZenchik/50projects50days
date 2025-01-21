const sections = document.querySelectorAll(".section")

window.addEventListener("scroll", scrolling)

scrolling()

function scrolling () {
  const triggerBottom =  window.innerHeight / (4/5)

  sections.forEach(section => {
    const boxTop = section.getBoundingClientRect().top
    if (triggerBottom > boxTop) {
      section.classList.add("show")
    } else {
      section.classList.remove("show")
    }
  })

}