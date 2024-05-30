const form = document.querySelector("form");
console.log(form);

function updateRestrictedWords(event) {
  event.preventDefault();
  console.log(event);
  console.log(event.target.textarea);
  const data = new formData(event.target);
  console.log(data.get("textarea"));
  //   console.log(event.target.textarea.value);
}

form.addEventListener("submit", (event) => updateRestrictedWords(event));
