//Implementing form validation
function validateForm() {
  let firstName = document.getElementById("FN").value;
  let lastName = document.getElementById("LN").value;
  let national = document.getElementById("ID").value;
  let email = document.getElementById("EM").value;
  let phone = document.getElementById("no").value;
  let gender = document.querySelector('input[name="gender"]:checked');
  let destination = document.getElementById("destination").value;

  if (firstName === "" || lastName === "" || national === "" || email === "" || !gender || destination === "" || destination === "Choose"|| phone === "") {
      alert("Please fill in all fields.");
      return false;
  }
 if(phone ==="NaN" || phone ==="length<10"){
    alert("invalid phone No.");
    return false;
 }
  return true;
}

//inputing Quiz Data

const quizData = [
    {
      question: "which of the following destinations are not in our destination list?",
      a: "Maldives",
      b: "Malindi",
      c: "Carabian",
      d: "Kampala",
      correct: "c",
    },
    {
      question: "what is the total cost of Our 5-days trip to Maldives?",
      a: "2500$",
      b: "4500$",
      c: "None of the above",
      d: "700$",
      correct: "b",
    },
    {
      question: "In what country is Arusha found?",
      a: "Sycheles",
      b: "Uganda",
      c: "Tanzania",
      d: "Egypt",
      correct: "c",
    },
    {
      question: "Which of the following is not a servive offered by Jet Travellers?",
      a: "Personal property insurance on transit",
      b: "Flight booking",
      c: "Tour packages",
      d: "Hotel accomodation",
      correct: "a",
    },
  ];
   // Getting answers picked and "marking" the Quiz
  const quiz = document.getElementById("quiz");
  const answerElements = document.querySelectorAll(".answer");
  const questionElement = document.getElementById("question");
  const a_text = document.getElementById("a_text");
  const b_text = document.getElementById("b_text");
  const c_text = document.getElementById("c_text");
  const d_text = document.getElementById("d_text");
  const submitButton = document.getElementById("submit");
  
  let currentQuiz = 0;
  let score = 0;
  
  const deselectAnswers = () => {
    answerElements.forEach((answer) => (answer.checked = false));
  };
  
  const getSelected = () => {
    let answer;
    answerElements.forEach((answerElement) => {
      if (answerElement.checked) answer = answerElement.id;
    });
    return answer;
  };
  
  const loadQuiz = () => {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionElement.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
  };
  
  loadQuiz();
  // ipmlementation of "next question" on submit and score update
  submitButton.addEventListener("click", () => {
    const answer = getSelected();
    if (answer) {
      if (answer === quizData[currentQuiz].correct) score++;
      currentQuiz++;
      if (currentQuiz < quizData.length) loadQuiz();
      else {
        //Display discount allocation and the client's score using inner HTML
        quiz.innerHTML = `<h3>Discount allocation:</h3>
            <p> 2/4 correct answers- 5% discount awarded</p><br>
            <p>3/4 correct answers- 10% discount awarded</p><br>
            <p> 4/4 correct answers- 20% discount awarded</p><br>
          <h3>You answered ${score}/${quizData.length} questions correctly</h3>
          <button onclick="history.go(0)">Try Again</button>
        `;
      }
    }
  });
  