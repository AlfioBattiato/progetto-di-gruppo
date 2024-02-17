const checkbox = document.getElementById("checkbox");
const a = document.getElementById("a");
const checkmark=document.getElementsByClassName('checkmark')[0];

function validationCheck(e) {
  let button = document.getElementsByClassName("button")[0];

  if (e.target.checked) {
    checkmark.style="background-color:#c2128d"
    a.setAttribute("href", "../html/benchmark.html");

    button.addEventListener("mouseenter", function () {
      button.style = "  box-shadow: -0px 2px 10px 9px #00ffff57";
      button.style.opacity = "1";
    });
    button.addEventListener("mouseleave", function () {
      this.style = " box-shadow:none";
      button.style.opacity = "1";
    });
    button.style.opacity = "1";
  } else {
    checkmark.style="background-color:none"

    a.setAttribute("href", "#");

    button.style.opacity = "0.5";
    button.addEventListener("mouseenter", function () {
      button.style = "  box-shadow:none";
    });
    button.addEventListener('mouseleave', function() {
      this.style=" box-shadow:none";
    });
  }
}
checkbox.addEventListener("change", validationCheck);
