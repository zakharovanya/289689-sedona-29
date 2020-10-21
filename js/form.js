const searchButton = document.querySelector(".search-form-button");
const searchPopup = document.querySelector(".form-block");
const searchForm = searchPopup.querySelector(".search-form");
const searchDate = searchPopup.querySelector(".search-input-date");
const searchNumbers = searchPopup.querySelector (".search-input-number");

searchButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  searchPopup.classList.toggle("form-show");
  searchPopup.offsetWidth = searchPopup.offsetWidth;
  searchPopup.classList.remove("form-error");

  searchDate.focus();
});

searchForm.addEventListener("submit", function (evt) {
  if (!searchDate.value || !searchNumbers.value) {
    evt.preventDefault();
    searchPopup.classList.add("form-error");
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