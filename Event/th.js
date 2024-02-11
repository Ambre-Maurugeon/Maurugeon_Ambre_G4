const tabs = document.querySelectorAll(".tabs li");

const maisons = document.querySelector(".maisons");
const serdaigle = document.querySelector(".serdaigle");
const poufsouffle = document.querySelector(".poufsouffle");
const gryffondor = document.querySelector(".gryffondor");
const serpentard = document.querySelector(".serpentard");

tabs.forEach(function (tab) {
  tab.addEventListener("click", function () {
    // sélectionne toutes les div + enleve la classe "activeTab" pr chaque div
    const contents = document.querySelectorAll(".content");
    contents.forEach(function (content) {
      content.classList.remove("activeTab");
    });

    tabs.forEach(function (tab) {
      tab.classList.remove("tab-active"); // si li cliqué enlever tous les tab-active
    });

    if (this.classList.contains("tab-maisons")) {     // add class activeTab au li cliqué (affiche contenu du bloc)
      maisons.classList.add("activeTab");
    } else if (this.classList.contains("tab-serdaigle")) {
      serdaigle.classList.add("activeTab");
    } else if (this.classList.contains("tab-poufsouffle")) {
      poufsouffle.classList.add("activeTab");
    } else if (this.classList.contains("tab-gryffondor")) {
      gryffondor.classList.add("activeTab");
    } else if (this.classList.contains("tab-serpentard")) {
      serpentard.classList.add("activeTab");
    }

    this.classList.add("tab-active"); // add tab-active sur li cliqué (change couleur de la catégorie cliquée)
  });
});
