const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// Animación suave de entrada de los capítulos
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.08 });

document.querySelectorAll('.article, .index-item, .sources a').forEach(el => {
  el.classList.add('reveal');
  observer.observe(el);
});



/* =========================================
   REVOLUCIÓN INTELECTUAL
   IDEAS INTERACTIVAS
   ========================================= */

const ideas = document.querySelectorAll(".idea");

const ideaTitle = document.getElementById("ideaTitle");

const ideaText = document.getElementById("ideaText");


/* Mostrar una idea */

function mostrarIdea(idea) {

    const titulo = idea.textContent.trim();

    const texto = idea.dataset.text;

    ideaTitle.textContent = titulo;

    ideaText.textContent = texto;

}


/* Cuando el usuario pasa el mouse */

ideas.forEach(idea => {

    idea.addEventListener("mouseenter", () => {

        mostrarIdea(idea);

    });


    /* Para celulares */

    idea.addEventListener("click", () => {

        mostrarIdea(idea);

    });

});


/* =========================================
   CAMBIO AUTOMÁTICO
   ========================================= */

let ideaActual = 0;


function cambiarIdea() {

    if (!ideas.length) return;


    mostrarIdea(ideas[ideaActual]);


    ideaActual++;


    if (ideaActual >= ideas.length) {

        ideaActual = 0;

    }

}


/* Primera idea */

cambiarIdea();


/* Cambiar cada 4 segundos */

setInterval(cambiarIdea, 4000);



