const divStars = document.getElementsByClassName("container-stars")[0];
const star = document.getElementById("star");
// funzione per creare le stelle in modo dinamico
function creaStar() {
  for (let i = 0; i < 9; i++) {
    /* console.log(star); */
    let clonedStar = star.cloneNode(true);
    divStars.appendChild(clonedStar);
  }
}
creaStar();

//funzione che cambia colore alle mie stelle se cliccate
const divStars2 = divStars;

Array.from(divStars2.children).forEach((e, index) => {
  e.onclick = function () {
    Array.from(divStars2.children).forEach((child) => {
      // child.style.removeProperty('color');
      child.style.color = "hsl(233 60% 18% / 1)";

    });
    for (let i = 0; i <= index; i++) {
      divStars2.children[i].style.color = " #00ffff";
    }
  };
});
// console.log(divStars2)