let difficilissimi = [];

let numeroDifficolta;
let numeroLunghezza;
let indiceD = 0; //variabile che serve per scalare man mano il mio array di oggetti


difficilissimi= async function fetchQuestions(e,n) {
  return await fetch(  `https://opentdb.com/api.php?amount=${e}&category=18&difficulty=${n}`)
    .then((response) => {
      console.log(response);
      if (response.ok) {
        return response.json();
      }

      return Promise.reject(response);
    })
    .catch((error) => (document.body.textContent = error.status));
}

/////////////////////////////////////////////////////////////////////////////////////////
////////////////////js difficult////////////////////////////////////////////////////////
const startDiff = document.getElementById("btn");
const difficolta = document.getElementsByClassName("difficolta")[0];
startDiff.addEventListener("click", function () {
  fetchQuestions(numeroLunghezza, numeroDifficolta);
  console.log(difficilissimi);
  // createQuestion();
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

arrayLabelDifficult.forEach((e) => {
  e.onclick = function () {
    pulisciColore(arrayLabelDifficult);
    numeroDifficolta = e.textContent;
    e.classList.add("viola");
  };
});

arrayLabelN.forEach((e) => {
  e.onclick = function () {
    pulisciColore(arrayLabelN);
    numeroLunghezza = e.textContent;
    e.classList.add("viola");
  };
});



// async function fetchQuestions(e, n) {
//   const response = await fetch(
//     `https://opentdb.com/api.php?amount=${e}&category=18&difficulty=${n}`
//   );
//   const data = await response.json();
//   const questions = data.results;
//   // Push dell'array di domande all'interno dell'array vuoto
//   difficilissimi.push(...questions);
// }
//////////////////////////////////////////////////////////

let domanda = document.getElementsByClassName("domanda")[0];
let divRisposte = document.getElementsByClassName("btn-container")[0];
let punteggioCorrette = 0;
let punteggioSbagliate = 0;
let nPagina = document.getElementsByClassName("attuale")[0];
const marco = document.getElementsByClassName("result")[0];
const alfio = document.getElementsByClassName("benchmark")[0];

function createQuestion() {
  let random = Math.floor(
    Math.random() * difficilissimi[indiceD].incorrect_answers.length
  ); //crea un numero casuale da usare come indice che andremo ad usare nella riga sotto

  let arrayRisposte = difficilissimi[indiceD].incorrect_answers.toSpliced(
    random,
    0,
    difficilissimi[indiceD].correct_answer
  ); //creo un array di tutte le risposte con quella corretta messa casualmente prendendo il numero ramdom come indice dove inserirla

  //   console.log(arrayRisposte);
  divRisposte.innerHTML = ""; // Pulisce il contenitore prima di aggiungere nuovi bottoni

  for (let i = 0; i < arrayRisposte.length; i++) {
    domanda.innerText = difficilissimi[indiceD].question;
    let btn = document.createElement("button");
    divRisposte.appendChild(btn);
    btn.innerText = arrayRisposte[i];

    btn.onclick = function () {
      indiceD++;
      restartTimer();

      // Passa alla prossima domanda se ce ne sono ancora
      if (indiceD < difficilissimi.length) {
        if (this.textContent === difficilissimi[indiceD].correct_answer) {
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
