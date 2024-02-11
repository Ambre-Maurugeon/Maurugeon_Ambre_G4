let activeMode = document.querySelector(".activeMode");

activeMode.addEventListener("click", function () {
  const body = document.body;

  if (body.classList.contains("dark")) {
    // si body contient class "dark", remplacer class par "light"
    body.classList.remove("dark");
    body.classList.add("light");
    activeMode.innerHTML = "Activer le mode sombre";
  } else if (body.classList.contains("light")) {
    // si body contient class "dark", remplacer class par "light"
    body.classList.add("dark");
    body.classList.remove("light");

    activeMode.innerHTML = "Activer le mode clair";
  }
});
