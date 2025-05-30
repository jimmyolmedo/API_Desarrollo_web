const datosSection = document.querySelector(".datos");
let apiURL = "https://dragonball-api.com/api/characters?affiliation=Z Fighter";

async function getDatos() {
const res = await fetch(apiURL);
const datos = await res.json();
return datos;
}

async function renderDatos() {
const datos = await getDatos();
let template = "";

datos.forEach((datos) => {
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

function FilterByAll(){
    apiURL = "https://dragonball-api.com/api/characters?affiliation=Z Fighter"
    renderDatos()
}

function FilterBySaiyan(){
    apiURL = "https://dragonball-api.com/api/characters?race=Saiyan"
    renderDatos()
}

function FilterByHuman(){
    apiURL = "https://dragonball-api.com/api/characters?race=Human"
    renderDatos()
}

function FilterByNamekian(){
    apiURL = "https://dragonball-api.com/api/characters?race=Namekian"
    renderDatos()
}

function FilterByAndroid(){
    apiURL = "https://dragonball-api.com/api/characters?race=Android"
    renderDatos()
}

function FilterByMale(){
    apiURL = "https://dragonball-api.com/api/characters?gender=Male"
    renderDatos()
}

function FilterByFemale(){
    apiURL = "https://dragonball-api.com/api/characters?gender=Female"
    renderDatos()
}

function FilterByVillain(){
    apiURL = "https://dragonball-api.com/api/characters?affiliation=Villain"
    renderDatos()
}