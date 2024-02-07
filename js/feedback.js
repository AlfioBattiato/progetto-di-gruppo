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

//funzione che cambia colore alle mie stelle se cliccate
divStars = Array.from(divStars.children);

divStars.forEach((el, index) => {
  //click
  el.onclick = function () {
    divStars.forEach((child) => {
      child.classList.remove("acceso");
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
