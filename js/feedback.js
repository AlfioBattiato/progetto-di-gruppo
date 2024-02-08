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
let divEmo = document.getElementById("svgContainer");
const img = document.createElement("img");

divStars.forEach((el, index) => {
  //click
  el.onclick = function () {
    starValore = index + 1;
    console.log(starValore);
    divStars.forEach((child) => {
      child.classList.remove("acceso");

      //aggiunta della faccina
      if (starValore <= 4) {
        // console.log("pessimo");
        img.src = "../assets/faces/sad-svgrepo-com.svg";
        divEmo.appendChild(img);
      } else if (starValore > 4 && starValore < 8) {
        // console.log("buono");
        img.src = "../assets/faces/straight-svgrepo-com.svg";
        divEmo.appendChild(img);
      } else if (starValore >= 8) {
        // console.log("ottimo");
        img.src = "../assets/faces/smile-svgrepo-com.svg";
        divEmo.appendChild(img);
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

/* function aggiungiImmagine(src, width, height) {
  img.src = "../assets/emojii.svg";
  const svgContainer = document.getElementById("svgContainer");
  svgContainer.appendChild(img);
}
console.log(img);
aggiungiImmagine("../assets/emojii.svg", 40, 40);
 */
