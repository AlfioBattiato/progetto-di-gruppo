let divStars = document.getElementsByClassName("container-stars")[0];
const star = document.getElementById("star");
// funzione per creare le stelle in modo dinamico
function creaStar() {
  for (let i = 0; i < 9; i++) {
    let clonedStar = star.cloneNode(true);
    divStars.appendChild(clonedStar);
  }
}
creaStar();
let starValore = 0;
//funzione che cambia colore alle mie stelle se cliccate
divStars = Array.from(divStars.children);
let divEmo = document.getElementsByClassName("svgContainer")[0];

divStars.forEach((el, index) => {
  //click
  el.onclick = function () {
    starValore = index + 1;
    console.log(starValore);
    divStars.forEach((child) => {
      child.classList.remove("acceso");
      if (starValore <= 4) {
        console.log("pessimo");
      } else if (starValore > 4 && starValore < 8) {
        console.log("buono");
      } else if (starValore >= 8) {
        console.log("ottimo");
      }
    });

    for (let i = 0; i <= index; i++) {
      divStars[i].classList.add("acceso");
    }
  };

  //nohover
  el.addEventListener("mouseout", function () {
    divStars.forEach((child) => {
      child.classList.remove("isHover");
    });
  });
  //ishover
  el.addEventListener("mouseover", function () {
    divStars.forEach((child) => {
      child.classList.remove("isHover");
    });

    for (let i = 0; i <= index; i++) {
      if (!divStars[i].classList.contains("acceso")) {
        divStars[i].classList.add("isHover");
      }
    }
  });
});

//salvare la p(XD)come variabile
//alla base di questa variabile cioe al suo valore avremo bisogno di un qualcosa che ci cambia il colore della p
