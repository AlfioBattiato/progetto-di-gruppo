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

let domanda = document.getElementsByClassName("domanda")[0];
let divRisposte = document.getElementsByClassName("btn-container")[0];
let indiceD = 0; //variabile che serve per scalare man mano il mio array di oggetti
let punteggioCorrette = 0;
let punteggioSbagliate = 0;
let nPagina = document.getElementsByClassName("attuale")[0];
const marco = document.getElementsByClassName("result")[0];
const alfio = document.getElementsByClassName("benchmark")[0];

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
  divRisposte.innerHTML = ""; // Pulisce il contenitore prima di aggiungere nuovi bottoni

  for (let i = 0; i < arrayRisposte.length; i++) {
    domanda.innerText = questions[indiceD].question;
    let btn = document.createElement("button");
    divRisposte.appendChild(btn);
    btn.innerText = arrayRisposte[i];

    btn.onclick = function () {
      indiceD++;
      restartTimer();

      // Passa alla prossima domanda se ce ne sono ancora
      if (indiceD < questions.length) {
        if (this.textContent === questions[indiceD].correct_answer) {
          punteggioCorrette++;
        } else {
          punteggioSbagliate++;
        }
        setTimeout(() => {
          createQuestion();
          numeroPagina();
        }, 1000);
      } else {
        // Se non ci sono più domande, fai qualcosa qui, ad esempio visualizza un messaggio di fine gioco
        sbloccaResultPage();
      }
    };
  }
}

createQuestion();

//funzione timer//////////////////////////////////////////////////////////////////////////////
let timerRef;
let countdown = 60;
let step = 100 / countdown; //passo da fare il colore
let n1 = 0;

const countdownNumberEl = document.getElementById("number-coundown");
const circle = document.getElementsByClassName("circle")[0];

function startTimer() {
  timerRef = setInterval(function () {
    circle.style.background = `conic-gradient(#00ffff ${n1}%,  #886192 ${0}%) border-box`;
    countdownNumberEl.textContent = countdown;

    if (countdown === 0) {
      if (indiceD < 10) {
        punteggioSbagliate++;
        createQuestion();
        console.log(punteggioSbagliate);
        indiceD++;
        numeroPagina();
        restartTimer();
      } else {
        clearInterval(timerRef);
        sbloccaResultPage();
      }
    }

    n1 = n1 + step < 100 ? n1 + step : 0;
    countdown--;
  }, 1000);
}
startTimer();

function restartTimer() {
  countdown = 60;
  n1 = 0;
  clearInterval(timerRef);
  startTimer();
}

///////////////////////////////////////////////////////////////////////////////////////////////
function sbloccaResultPage() {
  marco.style.display = "block";
  alfio.style.display = "none";

  //questo è per gestire il grafico del result

  const data = {
    datasets: [
      {
        borderWidth: 0,
        label: "My First Dataset",
        data: [punteggioSbagliate, punteggioCorrette],
        backgroundColor: ["#C2128D", "#00FFFF"],
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

  // console.log("Fine del gioco");
  //funzionalità per cambiare le scritte della pagina result
  const positivo = document.getElementById("risultatoPositivo");
  const negativo = document.getElementById("risultatoNegativo");
  negativo.textContent = punteggioSbagliate * 10 + "%";
  positivo.textContent = punteggioCorrette * 10 + "%";

  // cambiamento testo in base al risultato ottenuto
  const messaggio = document.getElementById("esito");
  const scuse = document.getElementById("scuse");
  const articolo = document.getElementById("article");

  if (punteggioCorrette > 5) {
    console.log(punteggioCorrette);
    messaggio.textContent = "You passed the exam";
    scuse.textContent = "Congratulation";
    articolo.textContent =
      " We'll send you the certificate in few minutes. Check yout email (including promotions / spam folder)";
  } else {
    messaggio.textContent = "You failed the exam";
    scuse.textContent = "I'm sorry but";
    articolo.textContent = "I'm sorry, but you need a bit more study.";
  }
}
//////////////////////////////////////
//funzione cambia numero pagina
function numeroPagina() {
  if (nPagina.textContent === "9") {
    nPagina.style.color = "#ba008b";
    nPagina.textContent++;
  } else {
    nPagina.textContent++;
  }
}
/////////////////////////////////////////////////////////////////////////////////////////
////////////////////js difficult////////////////////////////////////////////////////////
const startDiff = document.getElementById("btn");
const difficolta = document.getElementsByClassName("difficolta")[0];
startDiff.addEventListener("click", function () {
  difficolta.style.display = "none";
  alfio.style.display = "block";
});
///////////////////////////////////////////////////////////////
//funzioni radio
////////////////////livello difficolta////////////////////////
let radioEasy = document.querySelector("#difEasy");
let radioMedium = document.querySelector("#difMedium");
let radioHard = document.querySelector("#difHard");

let labelEasy = document.getElementsByClassName("easy")[0];
let labelMedium = document.getElementsByClassName("medium")[0];
let labelHard = document.getElementsByClassName("difficult")[0];
//////////////////numero domande/////////////////
let radioN10 = document.querySelector("#radioD");
let radioN20 = document.querySelector("#radioV");
let radioN30 = document.querySelector("#radioT");

let dieci = document.getElementsByClassName("ten")[0];
let venti = document.getElementsByClassName("twenty")[0];
let trenta = document.getElementsByClassName("thirty")[0];

let arrayRadioDifficult = [radioEasy, radioMedium, radioHard];
let arrayLabelDifficult = [labelEasy, labelMedium, labelHard];
let arrayRadioN = [radioN10, radioN20, radioN30];
let arrayLabelN = [dieci, venti, trenta];



function pulisciColore(valore) {
  valore.forEach((e) => {
    e.classList.remove("viola");
  });
}

arrayLabelDifficult.forEach((e, index) => {
  e.onclick = function () {
    pulisciColore(arrayLabelDifficult);
    console.log(e);
    e.classList.add("viola");
  };
});

arrayLabelN.forEach((e, index) => {
  e.onclick = function () {
    pulisciColore(arrayLabelN);
    console.log(e);
    e.classList.add("viola");
  };
});
///////////////////////
// difficilissimi =async function fetchQuestions(e, n) {
//   try {
//     const response = await fetch(`https://opentdb.com/api.php?amount=${e}&category=18&difficulty=${n}`);
//     if (response.ok) {
//       const data = await response.json();
//       return data.results; // Ritorna solo la parte 'results' dell'oggetto JSON
//     } else {
//       throw new Error('Errore nella richiesta HTTP');
//     }
//   } catch (error) {
//     console.error('Si è verificato un errore:', error);
//     // Puoi gestire l'errore in modo appropriato, ad esempio restituendo un array vuoto o lanciando l'errore
//     return []; // Oppure, puoi lanciare l'errore con 'throw error;' per gestirlo altrove
//   }
// }