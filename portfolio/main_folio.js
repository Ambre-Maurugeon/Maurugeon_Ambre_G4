const lightbox = new SimpleLightbox(".card a");

const options = {
  gutterPixels: 50,
};

const filterizr = new Filterizr(".portfolio-elements", options);

let filtersItems = document.querySelectorAll(".filters li");
filtersItems.forEach(function (filterItem) {
  filterItem.addEventListener("click", function () {
    document.querySelector(".filters .active").classList.remove("active"); // supprime li déjà activé
    filterItem.classList.add("active"); // active le li cliqué
  });
});
