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
let indiceD = 0; //variabile che serve per scalare man mano il mio array di oggetti
let punteggioCorrette = 0;
let punteggioSbagliate = 0;


function createQuestion() {
  let random = Math.floor(
    Math.random() * questions[indiceD].incorrect_answers.length
    ); //crea un numero casuale da usare come indice che andremo ad usare nella riga sotto
    
    let arrayRisposte = questions[indiceD].incorrect_answers.toSpliced(
      random,
      0,
      questions[indiceD].correct_answer
      ); //creo un array di tutte le risposte con quella corretta messa casualmente prendendo il numero ramdom come indice dove inserirla
      
      //   console.log(arrayRisposte);
      domanda.innerText = questions[indiceD].question;
      
      divRisposte.innerHTML = ""; // Pulisce il contenitore prima di aggiungere nuovi bottoni
      
      for (let i = 0; i < arrayRisposte.length; i++) {
        let btn = document.createElement("button");
        divRisposte.appendChild(btn);
        btn.innerText = arrayRisposte[i];
        
        btn.onclick = function () {
          restartTimer()
          if(this.textContent===questions[indiceD].correct_answer){
            punteggioCorrette++
          }else{
            punteggioSbagliate++
        }
      // Passa alla prossima domanda se ce ne sono ancora
      if (indiceD < questions.length - 1) {
        indiceD++;
        createQuestion();
      } else {
        // Se non ci sono più domande, fai qualcosa qui, ad esempio visualizza un messaggio di fine gioco
        const marco=document.getElementsByClassName("result")[0];
        const alfio=document.getElementsByClassName("benchmark")[0];
        marco.style.display="block"
        alfio.style.display="none"
        const data = {
          datasets: [
            {
              borderWidth: 0,
              label: "My First Dataset",
              data: [punteggioCorrette, punteggioSbagliate],
              // data: [10, 90],
              backgroundColor: ["#00FFFF", "#C2128D"],
              hoverOffset: 10,
              weight: 2,
              cutout: "70%",
              hoverOffset: 0,
            },
          ],
        };
        const prova = document.getElementById("grafico");
        new Chart(prova, {
          type: "doughnut",
        
          data: data,
        });
        
        
        console.log("Fine del gioco");
        console.log(punteggioSbagliate);
        console.log(punteggioCorrette);
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
  
  
  let countdown = 5;
  let step = 100 / countdown; //passo da fare il colore
  let n1 = 0;

  timerRef = setInterval(function () {
    circle.style.background = `conic-gradient(#00ffff ${n1}%,  #886192 ${0}%) border-box`;
    countdownNumberEl.textContent = countdown,
    
    countdown = --countdown <= 0 ? (indiceD++,createQuestion(),restartTimer(),5) : (countdown);
    n1 = n1 + step < 100 ? n1 + step : 0;
  }, 1000);
}
startTimer();

function restartTimer() {
  clearInterval(timerRef);
  startTimer();
}

///////////////////////////////////////////////////////////////////////////////////////////////
//js di marco
