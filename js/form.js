const searchPopup = document.querySelector('.form-block');
const searchButton = document.querySelector('.search-form-button');
const searchForm = searchPopup.querySelector(".search-form");
const searchDate = searchPopup.querySelector(".search-input-date");
const searchNumbers = searchPopup.querySelector (".search-input-number");
const formButton = searchPopup.querySelector (".search-button")

searchButton.addEventListener("click", function (evt) {
  searchPopup.classList.toggle("form-show");
  searchPopup.classList.toggle("form-hide");
  searchDate.focus();
});

searchForm.addEventListener("submit", function (evt) {
  if (!searchDate.value || !searchNumbers.value) {
    evt.preventDefault();
    searchPopup.classList.remove("form-error");
    searchPopup.offsetWidth = searchPopup.offsetWidth;
    searchPopup.classList.add("form-error");
  } else {
    searchPopup.classList.add("form-hide");
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (searchPopup.classList.contains("form-show")) {
      evt.preventDefault();
      searchPopup.classList.remove("form-show");
      searchPopup.classList.remove("form-error");
    }
  }
});