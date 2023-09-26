// 1. Creamos una función que se habilita cuando el DOM se carga completamente addEventListener('DOMContentLoaded', function() {})
// 2. Esta función lo que hace es hacer funcionar el botón de hamburguesa que se crea en el navbar en su versión mobile
document.addEventListener('DOMContentLoaded', function() {

    const menus = document.querySelectorAll('.navbar-burger');
    const dropdowns = document.querySelectorAll('.navbar-menu');

    if (menus.length && dropdowns.length) {

        for (var i = 0; i < menus.length; i++) {

            menus[i].addEventListener('click', function() {

                for (var j = 0; j < dropdowns.length; j++) {
                    dropdowns[j].classList.toggle('is-active');
                }

            });
        }

    }

});



// <--- Aquí debes escribir la funcionalidad asociada al formulario

// Función Flecha que nos dará un Console.log("Hola Mundo")
const formSubmitted = () => {

    // Capturamos el botón con JavaScript
    const boton = document.getElementById('button_submit_form');


    // Deshabilitamos el Botón agregandole el atributo "disabled" no se puede volver a presionar
    boton.setAttribute('disabled', '') ;


    // Agregamos la clase de bulma "is-loading" para agregar un efecto de cargando ...
    boton.classList.add('is-loading');


    // Ejecutamos nuestro SweetAlert2 Personalizado durante 3 segundos
    Swal.fire({position: 'center',icon: 'success',title: '🚀 Reserva Enviada', text: '📬 Instrucciones en tu correo electrónico', showConfirmButton: false, timer: 3000 }) ;



    // Se lo quitamos después de 3.5 Segundos ...
    const timeout = setTimeout(()=> {

        // Removemos la clase "is-loading" para que deje de cargar
        boton.classList.remove('is-loading');


        // Volvemos a habilitar el botón removiendo el atributo "disabled"
        boton.removeAttribute('disabled');


        // cambio de texto
        boton.innerHTML = 'Reserva Enviada ✉️'

// tiempo en milisegundos
    }, 3500 );

}






















