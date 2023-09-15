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


document.addEventListener("DOMContentLoaded", function() {
    const openModalLink = document.getElementById('openModalLink');
    const modal = document.getElementById('myModal');
    const closeModal = document.querySelector('.close');

    // Agrega un evento clic para abrir la ventana emergente
    openModalLink.addEventListener('click', () => {
        modal.style.display = 'block';
    });

    // Agrega un evento clic para cerrar la ventana emergente
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Cierra la ventana emergente si se hace clic fuera de ella
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});

