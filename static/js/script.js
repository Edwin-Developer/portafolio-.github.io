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
    const openModalLinks = document.querySelectorAll('.openModalLink');
    const modal = document.getElementById('myModal');
    const modalContent = document.getElementById('modalContent');
    const closeModalButton = document.querySelector('.close');

    openModalLinks.forEach((link) => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const linkURL = link.getAttribute('data-link');
            modalContent.innerHTML = `<iframe src="${linkURL}" frameborder="0" width="100%" height="870px"></iframe>`;
            modal.style.display = 'block';
        });
    });

    closeModalButton.addEventListener('click', () => {
        modalContent.innerHTML = '';
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modalContent.innerHTML = '';
            modal.style.display = 'none';
        }
    });
});


