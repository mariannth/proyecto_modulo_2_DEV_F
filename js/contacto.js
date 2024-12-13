document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    const modalName = document.getElementById('modalName');
    const modalEmail = document.getElementById('modalEmail');
    const modalMessage = document.getElementById('modalMessage');
    const confirmationModal = new bootstrap.Modal(document.getElementById('confirmationModal'));

    // Manejar el envío del formulario
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Evitar recargar la página

        // Obtener los valores del formulario
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Mostrar los datos en el modal
        modalName.textContent = name;
        modalEmail.textContent = email;
        modalMessage.textContent = message;

        // Mostrar el modal de confirmación
        confirmationModal.show();

        // Limpiar el formulario
        contactForm.reset();
    });
});
