const EmailPrueba = "usuario@empresa.com";
const PasswordPrueba = "Clave_123456789";

document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.querySelector(".login-form");

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const email = document.getElementById("Email").value.trim();
        const password = document.getElementById("password").value.trim();

        if (!validarEmail(email)) {
            alert('Por favor, ingrese un email válido.');
            return;
        }

        if (!validarPassword(password)) {
            alert("La contraseña debe tener al menos 8 caracteres, una letra mayúscula y un número.");
            return;
        }

        if (email === EmailPrueba && password === PasswordPrueba) {
            alert("Inicio de sesión exitoso.");
            window.location.href = "QR.html";
        } else {
            alert("Credenciales incorrectas.");
        }
    });

    function validarEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    function validarPassword(password) {
        const regex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
        return regex.test(password);
    }
});










