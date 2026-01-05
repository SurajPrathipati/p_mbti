let current = 0;
let answers = [];
let questions = [];

document.addEventListener("DOMContentLoaded", () => {
  questions = document.querySelectorAll(".question");
});

function answer(value) {
  answers.push(value);

  questions[current].classList.remove("active");
  current++;

  if (current < questions.length) {
    questions[current].classList.add("active");
  }
}function showResult() {
  const mbti = calculateMBTIFromAnswers(answers);

  document.getElementById("result").innerHTML =
    "✨ Your MBTI Personality Type is:<br><strong>" + mbti + "</strong>";
}
function answer(value) {
  answers.push(value);

  questions[current].classList.remove("active");
  current++;

  if (current < questions.length) {
    questions[current].classList.add("active");
  } else {
    showResult();   // ← THIS LINE shows the result
  }
}


