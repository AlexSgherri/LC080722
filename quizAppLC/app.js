const correctAnswers = ["B", "B", "B", "B"];

const form = document.querySelector(".quiz-form");
const displayResult = document.querySelector('.result')

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let score = 0;

  const userAnswers = [
    form.q1.value,
    form.q2.value,
    form.q3.value,
    form.q4.value,
  ];

  //controllare le risposte
  userAnswers.forEach((answer, index) => {
    if(answer === correctAnswers[index]){
        score += 25
    }
  })

  //scroll to top
  scrollTo(0,0)

//   displayResult.querySelector('span').textContent = `${score}%`
  displayResult.classList.remove('d-none')

  let output = 0;
  const timer = setInterval(()=>{
    displayResult.querySelector('span').textContent = `${output}%`
    if(output === score){
        clearTimeout(timer)
    }
    else{
        output++
    }

  },10)

});
