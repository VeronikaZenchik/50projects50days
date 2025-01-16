const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");
const circles = document.querySelectorAll(".circle");
const progressBar = document.querySelector('.progress-bar');

let currentCircleStep = 0; // Отслеживает, какой шаг активен

prevButton.addEventListener("click", function () {
  if (currentCircleStep > 0) {
    currentCircleStep--;
    updateProgress();
  }
});

nextButton.addEventListener("click", function () {
  if (currentCircleStep < circles.length - 1) {
    currentCircleStep++;
    updateProgress();
  }
});

function updateProgress() {
  // Обновляем шаги
  circles.forEach((circle, index) => {
    if (index <= currentCircleStep) {
      circle.classList.add('active');
    } else {
      circle.classList.remove('active');
    }
  });

  // Обновляем прогресс-бар
  const progressWidth = (currentCircleStep / (circles.length - 1)) * 100;
  progressBar.style.width = `${progressWidth}%`;

  // Обновляем состояние кнопок
  prevButton.disabled = currentCircleStep === 0;
  nextButton.disabled = currentCircleStep === circles.length - 1;
}

updateProgress();