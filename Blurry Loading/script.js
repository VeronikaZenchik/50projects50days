const image = document.querySelector(".bg-image");
const text = document.querySelector(".loading-text");

let load = 0

const blurring = () => {
  load++

  if (load > 99) {
    clearInterval(interval)
  }
  text.textContent = `${load}%`
  image.style.filter = `blur(${30 - (load / 100) * 30}px)`;
}

const interval = setInterval(blurring, 30)


