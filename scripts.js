// Manejar el envío del formulario de contacto
document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();  // Evitar que el formulario se envíe de manera predeterminada
    alert('¡Gracias por contactarnos! Responderemos lo antes posible.');  // Mostrar mensaje de agradecimiento
});
