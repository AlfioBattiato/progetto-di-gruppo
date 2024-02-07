const questions = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does CPU stand for?",
    correct_answer: "Central Processing Unit",
    incorrect_answers: [
      "Central Process Unit",
      "Computer Personal Unit",
      "Central Processor Unit",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
    correct_answer: "Final",
    incorrect_answers: ["Static", "Private", "Public"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "The logo for Snapchat is a Bell.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question:
      "Pointers were not used in the original C programming language; they were added later on in C++.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the most preferred image format used for logos in the Wikimedia database?",
    correct_answer: ".svg",
    incorrect_answers: [".png", ".jpeg", ".gif"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In web design, what does CSS stand for?",
    correct_answer: "Cascading Style Sheet",
    incorrect_answers: [
      "Counter Strike: Source",
      "Corrective Style Sheet",
      "Computer Style Sheet",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the code name for the mobile operating system Android 7.0?",
    correct_answer: "Nougat",
    incorrect_answers: ["Ice Cream Sandwich", "Jelly Bean", "Marshmallow"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "On Twitter, what is the character limit for a Tweet?",
    correct_answer: "140",
    incorrect_answers: ["120", "160", "100"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Linux was first created as an alternative to Windows XP.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python0", "C1", "Jakarta2"],
  },
];

let domanda = document.getElementsByClassName("bolder")[0];
let divRisposte = document.getElementsByClassName("btn-container")[0];
let indiceD = 0;

function createQuestion() {
  domanda.innerText = questions[indiceD].question;

  divRisposte.innerHTML = ""; // Pulisce il contenitore prima di aggiungere nuovi bottoni

  for (let i = 0; i < questions[indiceD].incorrect_answers.length + 1; i++) {
    let btn = document.createElement("button");
    divRisposte.appendChild(btn);

    if (i === 0) {
      btn.innerText = questions[indiceD].correct_answer;
    } else {
      btn.innerText = questions[indiceD].incorrect_answers[i - 1];
    }

    btn.onclick = function () {
      // Passa alla prossima domanda se ce ne sono ancora
      if (indiceD < questions.length - 1) {
        indiceD++;
        console.log(indiceD);
        createQuestion();
      } else {
        // Se non ci sono più domande, fai qualcosa qui, ad esempio visualizza un messaggio di fine gioco
        console.log("Fine del gioco");
      }
    };
  }
}

createQuestion();

//funzione timer//////////////////////////////////////////////////////////////////////////////
let timerRef;
function startTimer() {
  const circle = document.getElementsByClassName("circle")[0];
  const countdownNumberEl = document.getElementById("number-coundown");

  let countdown = 16;
  let step = 100 / countdown; //passo da fare il colore
  let n1 = 0;
  timerRef = setInterval(function () {
    circle.style.background = `conic-gradient(#00ffff ${n1}%,  #886192 ${0}%) border-box`;
    countdownNumberEl.textContent = countdown;

    countdown = --countdown <= 0 ? 16 : countdown;
    n1 = n1 + step < 100 ? n1 + step : 0;
  }, 1000);
}
startTimer();

function restartTimer() {
  clearInterval(timerRef);
  startTimer();
}
///////////////////////////////////////////////////////////////////////////////////////////////
