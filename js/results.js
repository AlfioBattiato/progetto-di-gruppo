const data = {
  datasets: [
    {
      borderWidth: 0,
      label: "My First Dataset",
      data: [20, 80],
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
