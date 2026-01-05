const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const question = document.getElementById("question");
const answer = document.getElementById("answer");
const sad = document.getElementById("sad");
const buttons = document.getElementById("buttons");
const card = document.getElementById("card");

// yes clicked
yesBtn.addEventListener("click", () => {
  question.style.display = "none";
  buttons.style.display = "none";
  answer.style.display = "block";
  createBalloons();
  createConfetti();
});

// no clicked
noBtn.addEventListener("click", () => {
  question.style.display = "none";
  buttons.style.display = "none";
  sad.style.display = "block";
});

// balloons animation
function createBalloons() {
  for (let i = 0; i < 25; i++) {
    const balloon = document.createElement("div");
    balloon.classList.add("balloon");
    document.body.appendChild(balloon);

    balloon.style.left = Math.random() * 100 + "vw";
    balloon.style.background = `hsl(${Math.random() * 360}, 80%, 60%)`;
    balloon.style.animationDuration = (4 + Math.random() * 3) + "s";
    balloon.style.width = 30 + Math.random() * 30 + "px";
    balloon.style.height = 40 + Math.random() * 40 + "px";

    setTimeout(() => balloon.remove(), 7000);
  }
}

// confetti burst (powder effect)
function createConfetti() {
  for (let i = 0; i < 150; i++) {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti");
    document.body.appendChild(confetti);

    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.top = Math.random() * 20 + 40 + "vh";
    confetti.style.background = `hsl(${Math.random() * 360}, 80%, 60%)`;
    confetti.style.width = Math.random() * 8 + 4 + "px";
    confetti.style.height = confetti.style.width;
    confetti.style.animationDuration = (2 + Math.random() * 2) + "s";
    confetti.style.opacity = 0.9;

    setTimeout(() => confetti.remove(), 4000);
  }
}