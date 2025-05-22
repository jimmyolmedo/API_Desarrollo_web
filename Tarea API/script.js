const datosSection = document.querySelector(".datos");
const apiURL = "https://dragonball-api.com/api/characters";

async function getDatos() {
const res = await fetch(apiURL);
const datos = await res.json();
return datos;
}

async function renderDatos() {
const datos = await getDatos();
let template = "";

datos.items.forEach((datos) => {
template += `
    <div class="dato">
        <h3>${datos.name}</h3>
        <p>${datos.race}</p>
        <img src="${datos.image}" alt="${datos.name}" width="200"/>
        <p>${datos.description}</p>  
    </div>
    `;
});

datosSection.innerHTML = template;
}
renderDatos();