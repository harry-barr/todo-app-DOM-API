const h1 = document.createElement("h1");
const form = document.createElement("form");
const input = document.createElement("input");
input.placeholder = "To do";
input.type = "text";
const button = document.createElement("button");
button.innerText = "Add";
const list = document.createElement("ul");
h1.innerHTML = "TO-DO LIST";
const body = document.querySelector("body");
document.body.appendChild(h1);
document.body.appendChild(form);
form.appendChild(input);
form.appendChild(button);
document.body.appendChild(list);
button.addEventListener("click", (e) => {
  e.preventDefault();
  const li = document.createElement("li");
  li.innerHTML = input.value;
  list.appendChild(li);
  li.style.cursor = "pointer";
  li.onclick = () => {
    li.remove();
  };
  input.value = "";
});
