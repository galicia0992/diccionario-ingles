import { buscar } from "./API.js";
const form = document.getElementsByTagName("form")[0];
const lupa = document.getElementsByTagName("img")[0];
const card = document.querySelector("#card")
const significado = document.querySelector("#significado");
const palabraMostrar = document.querySelector("#palabra");


lupa.addEventListener("click", buscador);
form.addEventListener("submit", buscador);

async function buscador(e) {
  e.preventDefault();
  significado.innerHTML = "";
  palabraMostrar.innerHTML = "";
  const busc = await buscar()
  busc.map((item) => {
    item.meanings.map((item2) => {
      item2.definitions.map((item3) => {
        card.classList.add("card", "shadow-drop-2-center", "scale-up-center")
        significado.classList.add("px-3", "pb-3")
        console.log(item3.definition);
        palabraMostrar.innerHTML = item.word;
        const li = document.createElement("li");
        li.textContent = item3.definition;
        significado.appendChild(li);
      });
    });
  });
}

