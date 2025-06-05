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
    setBg('base-theme');
}

function FilterBySaiyan(){
    apiURL = "https://dragonball-api.com/api/characters?race=Saiyan"
    renderDatos()
    setBg('saiyan-theme');
}

function FilterByHuman(){
    apiURL = "https://dragonball-api.com/api/characters?race=Human"
    renderDatos()
    setBg('human-theme');
}

function FilterByNamekian(){
    apiURL = "https://dragonball-api.com/api/characters?race=Namekian"
    renderDatos()
    setBg('namek-theme');
}

function FilterByAndroid(){
    apiURL = "https://dragonball-api.com/api/characters?race=Android"
    renderDatos()
    setBg('android-theme');
}

function FilterByMale(){
    apiURL = "https://dragonball-api.com/api/characters?gender=Male"
    renderDatos()
    setBg('men-theme');
}

function FilterByFemale(){
    apiURL = "https://dragonball-api.com/api/characters?gender=Female"
    renderDatos()
    setBg('women-theme');
}

function FilterByVillain(){
    apiURL = "https://dragonball-api.com/api/characters?affiliation=Villain"
    renderDatos()
    setBg('villian-theme');
}

// las funciones Filter son usada para filtrar los datos desde la api 


function setBg(themeName)
{
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName; 
}
// esta funcion cambia el fondo de la pagina dependiendo  la función filter