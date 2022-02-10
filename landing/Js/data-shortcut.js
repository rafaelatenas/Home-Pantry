//   //-------Tittle of Services Page---------//

// Valor corresponderá al nombre del servicio obtenido mediante la API, los ejemplos posibles son: "Retail Services, Retail Scanning, Home Pantry"
const data_of_tittle = "Servicio proporcionado por la API";

window.document.title = ('|Atenas|' + ' ' + data_of_tittle);

//-- -- --Interactive drop - down menu button

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
        if (!change) {
            document.getElementById('menu-des').style.left = ("-82%")

            cancel_menu.style.visibility = "hidden";
            menu.style.visibility = "visible";
        }
    })
    //---- Alert Temporal de disposición de servicios----
var alert_message = document.getElementById('alert-message');

function event_temporal() {
    addEventListener('click', () => {
        alert_message.style.visibility = 'visible'
    })

}
//-- -- -- -- --matchMedia

var boton = document.getElementById('boton'); //-- Boton Desplegable movil

var active_modal = document.getElementById('Icon-Top_SKU'); //--Ejemplo de activador Modal exclusive desktop
var close_modal = document.getElementById('close-modal'); //-- Boton de cerrar modal exclusivo desktop
var popup = document.getElementById('popup'); //--Modal exclusive desktop

var select_options = document.getElementById('select-options'); //-- Card de selección de opciones --//
if (window.matchMedia("(max-width: 991px)").matches) {

    // document.getElementById('buttons-complementary').style.visibility = "hidden"

    //-- --Drop down bar MOVIL
    var despliegue = false;

    boton.addEventListener("click", function() {
        if (!despliegue) {
            document.getElementById('desplegable').style.top = "0%";

            despliegue = true;
        } else {
            document.getElementById('desplegable').style.top = "50%";
            despliegue = false;
        }
    });


} else {
    document.getElementById('desplegable').style.top = "";

}