//   //-------Tittle of Services Page---------//

// Valor corresponderá al nombre del servicio obtenido mediante la API, los ejemplos posibles son: "Retail Services, Retail Scanning, Home Pantry"
const data_of_tittle = "Servicio proporcionado por la API";

window.document.title = ('|Atenas|' + ' ' + data_of_tittle);



var select_options = document.getElementById('select-options');
//-- tarejta de selección de opciones --//

//---seleccion de categorías---//
Categories = document.createElement('DIV');
Categories.id = 'container_categories'
select_options.appendChild(Categories);

Tittle_Options_Categories = document.createElement('h2');
Tittle_Options_Categories.innerHTML = 'CATEGORÍAS'; //-- Contendrá el valor leído mediante la api para sustituirse según el servicio.
Tittle_Options_Categories.id = 'tittle-categories-options'
container_categories.appendChild(Tittle_Options_Categories);

Select_Options_Categories = document.createElement('select');
Select_Options_Categories.innerHTML = ''; //-- Contendrá el valor leído mediante la api para sustituirse según el servicio.
Select_Options_Categories.id = 'select-categories-options'
container_categories.appendChild(Select_Options_Categories);

//---selección del periodo de reporte---//
Tittle_Options = document.createElement('h3');
Tittle_Options.innerHTML = 'REPORTE'; //-- Contendrá el valor leído mediante la api para sustituirse según el servicio.
Tittle_Options.id = 'tittle-reports-options'
select_options.appendChild(Tittle_Options);

container_Options = document.createElement('div');
container_Options.id = 'reports-options'
select_options.appendChild(container_Options);

var services_options = document.getElementById('reports-options');

Options = document.createElement('button');
Options.innerHTML = 'SEMANAL'; //-- Contendrá el valor leído mediante la api para sustituirse según el servicio.
Options.id = 'option-1'
Options.className = 'options'
services_options.appendChild(Options);

Options = document.createElement('button');
Options.innerHTML = 'MENSUAL'; //-- Contendrá el valor leído mediante la api para sustituirse según el servicio.
Options.id = 'option-2'
Options.className = 'options'
services_options.appendChild(Options);

Options = document.createElement('button');
Options.innerHTML = 'TRIMESTAL'; //-- Contendrá el valor leído mediante la api para sustituirse según el servicio.
Options.id = 'option-3'
Options.className = 'options'
services_options.appendChild(Options);

Options = document.createElement('button');
Options.innerHTML = 'SEMESTRAL'; //-- Contendrá el valor leído mediante la api para sustituirse según el servicio.
Options.id = 'option-4'
Options.className = 'options'

services_options.appendChild(Options);


var menu = document.getElementById('menu');
var cancel_menu = document.getElementById('cancel-menu');

var change = false;
menu.addEventListener('click', () => {
    if (!change) {
        cancel_menu.style.visibility = "visible";
        menu.style.visibility = "hidden";
        document.getElementById('menu-des').style.left = ("0%");
    }
})

cancel_menu.addEventListener('click', () => {
    console.log('si')
    if (!change) {
        document.getElementById('menu-des').style.left = ("-80%")

        cancel_menu.style.visibility = "hidden";
        menu.style.visibility = "visible";
    }
})