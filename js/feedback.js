const divStars = document.getElementsByClassName("container-stars")[0];
const star = document.getElementById("star");

function creaStar() {
  for (let i = 0; i < 9; i++) {
    /* console.log(star); */
    let clonedStar = star.cloneNode(true);
    divStars.appendChild(clonedStar);
  }
}
creaStar();
