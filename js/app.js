const formacion = document.querySelector("#training");
const profesional = document.querySelector('#professional');
const proyectos = document.querySelector('#projects');
const habilidades = document.querySelector('#skills');
const contacto = document.querySelector('#contact');

const cuadro1 = document.querySelector("#cuadro1");
const cuadro2 = document.querySelector('#cuadro2');
const cuadro3 = document.querySelector('#cuadro3');
const cuadro4 = document.querySelector('#cuadro4');
const cuadro5 = document.querySelector('#cuadro5');

formacion.addEventListener('click', () => {
    cuadro1.classList.add('cuadros1');
});
profesional.addEventListener('click', () => {
    cuadro2.classList.add('cuadros');
});
proyectos.addEventListener('click', () => {
    cuadro3.classList.add('cuadros');
});
habilidades.addEventListener('click', () => {
    cuadro4.classList.add('cuadros1');
});
contacto.addEventListener('click', () => {
    cuadro5.classList.add('cuadros1');
});