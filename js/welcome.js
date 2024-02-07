const checkbox = document.getElementById("checkbox");
checkbox.addEventListener("change", validationCheck);
const a = document.getElementById("a");

function validationCheck(e) {
  if (e.target.checked) {
    a.setAttribute("href", "../html/benchmark.html");
  } else {
    a.setAttribute("href", "");
  }

  console.log(a);
}
