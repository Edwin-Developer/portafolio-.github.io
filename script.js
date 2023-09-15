const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

// Agregar evento de clic al botón de menú para abrir y cerrar el menú
menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
});

// Agregar evento de clic en el documento para cerrar el menú si se hace clic fuera de él
document.addEventListener('click', (e) => {
    if (!menu.contains(e.target) && e.target !== menuToggle) {
        menu.classList.remove('active');
    }
});
