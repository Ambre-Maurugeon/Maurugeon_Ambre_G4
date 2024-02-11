let form = document.querySelector("#formulaire");

form.addEventListener("submit", function (event) {
  // Annule le comportement par défaut (envoi du formulaire)
  event.preventDefault();

  //Cotnainer des erreurs
  let errorContainer = document.querySelector(".message-error");
  //Liste des erreurs
  let errorList = document.querySelector(".message-error ul");

  //On vide les erreurs et cache le container
  errorList.innerHTML = "";
  errorContainer.classList.remove("visible");

  //recup le champ email
  let email = document.querySelector("#email");

  //si l email est vide
  if (email.value == "") {
    //on affiche le container des erreurs et supp le succes
    errorContainer.classList.add("visible");
    email.classList.remove("success");

    //Créer un li ds HTML
    let err = document.createElement("li");
    err.innerText = "Le champ email ne peut pas etre vide";

    // add le li ds la iste des erreurs
    errorList.appendChild(err);
  } else {
    email.classList.add("success");
  }

  //recup le champ pseudo
  let pseudo = document.querySelector("#pseudo");

  //si le pseudo <6
  if (pseudo.value.length < 6) {
    //on affiche le container des erreurs et supp le succes
    errorContainer.classList.add("visible");
    pseudo.classList.remove("success");

    //Créer un li ds HTML
    let err = document.createElement("li");
    err.innerText = "Le pseudo ne peut pas être inférieur à 6 caractères";

    // add le li ds la iste des erreurs
    errorList.appendChild(err);
  } else {
    pseudo.classList.add("success");
  }

  let passCheck = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[-+_!@#$%^&*.,?]).+$"
  );

  //recup le champ password
  let password = document.querySelector("#password");

  //si le password <10 ou que le match avec RegExp marche pas = error
  if (password.value.length < 10 || passCheck.test(password.value) === false) {
    //on affiche le container des erreurs et supp le succes
    errorContainer.classList.add("visible");
    password.classList.remove("success");

    //Créer un li ds HTML
    let err = document.createElement("li");
    err.innerText =
      "Le password ne peut pas être inférieur à 10 caractères et doit contenir au moins une majuscule, une minuscule, un chiffre et un caractère spécial.";

    // add le li ds la iste des erreurs
    errorList.appendChild(err);
  } else {
    password.classList.add("success");
  }

  //recup le champ password
  let passwordConfirm = document.querySelector("#password2");

  if (
    passwordConfirm.value !== password.value ||
    passwordConfirm.value === ""
  ) {
    //on affiche le container des erreurs et supp le succes
    errorContainer.classList.add("visible");
    password.classList.remove("success");

    //Créer un li ds HTML
    let err = document.createElement("li");
    err.innerText = "Les deux mdp doivent être identiques";

    // add le li ds la iste des erreurs
    errorList.appendChild(err);
  } else {
    passwordConfirm.classList.add("success");
  }

  // Arrivé ici, tous les check sont passés
  let successContainer = document.querySelector(".message-success");
  successContainer.classList.remove("visible");

  if (
    email.classList.contains("success") &&
    pseudo.classList.contains("success") &&
    password.classList.contains("success") &&
    passwordConfirm.classList.contains("success")
  ) {
    successContainer.classList.add("visible");
  }
});
