const form = document.querySelector("form");
const textarea = document.querySelector("textarea");
let value = null;
console.log(form);

function updateRestrictedWords(event) {
  event.preventDefault();
  console.log(value);
  // add value to local storage in an array
}

form.addEventListener("submit", (event) => updateRestrictedWords(event));

textarea.addEventListener("change", (event) => {
  value = event.target.value;
});
