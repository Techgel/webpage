/* =====================================================
   MODO CLARO / OSCURO — AZUL CIELO (GameHub)
===================================================== */

// Esperamos a que cargue el DOM
document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("themeToggle");
    const root = document.documentElement;

    if (!themeToggle) return;

    // Verificar preferencia guardada
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light") {
        root.classList.add("theme-light");
        themeToggle.textContent = "🌙 Modo Oscuro";
    } else {
        themeToggle.textContent = "☀️ Modo Claro";
    }

    // Evento click
    themeToggle.addEventListener("click", () => {
        const isLight = root.classList.toggle("theme-light");

        if (isLight) {
            themeToggle.textContent = "🌙 Modo Oscuro";
            localStorage.setItem("theme", "light");
        } else {
            themeToggle.textContent = "☀️ Modo Claro";
            localStorage.setItem("theme", "dark");
        }
    });
});

/* =====================================================
   MENÚ RESPONSIVO
===================================================== */
const nav = document.querySelector("nav");
const navList = nav?.querySelector("ul");

if (nav && navList) {
    const btnMenu = document.createElement("button");
    btnMenu.textContent = "☰";
    btnMenu.classList.add("btn-menu");

    nav.prepend(btnMenu);

    btnMenu.addEventListener("click", () => {
        navList.classList.toggle("open");
    });
}

/* =====================================================
   CONFIRMACIÓN DE FORMULARIO
===================================================== */
const form = document.querySelector("form");

if (form) {
    form.addEventListener("submit", (e) => {
        const confirmar = confirm("¿Deseas enviar el formulario, Angelo?");
        if (!confirmar) e.preventDefault();
    });
}

/* =====================================================
   CONTADOR DE CARACTERES
===================================================== */
function addCounter(input) {
    const counter = document.createElement("span");
    counter.classList.add("contador");
    counter.style.fontSize = "0.8rem";
    counter.style.display = "block";
    counter.style.marginTop = "4px";
    counter.textContent = "0 caracteres";

    input.insertAdjacentElement("afterend", counter);

    input.addEventListener("input", () => {
        counter.textContent = `${input.value.length} caracteres`;
    });
}

const usuarioInput = document.getElementById("usuario");
const correoInput = document.getElementById("correo");
const passInput = document.getElementById("password");

if (usuarioInput) addCounter(usuarioInput);
if (correoInput) addCounter(correoInput);
if (passInput) addCounter(passInput);

/* =====================================================
   RICH TEXT EDITOR
===================================================== */
if (form) {
    const richTools = document.createElement("div");
    richTools.classList.add("rich-tools");
    richTools.style.display = "flex";
    richTools.style.gap = "10px";
    richTools.style.marginTop = "10px";

    richTools.innerHTML = `
        <button type="button" data-cmd="bold"><b>B</b></button>
        <button type="button" data-cmd="italic"><i>I</i></button>
        <button type="button" data-cmd="underline"><u>U</u></button>
        <button type="button" data-cmd="insertOrderedList">1.</button>
        <button type="button" data-cmd="insertUnorderedList">•</button>
    `;

    const editor = document.createElement("div");
    editor.contentEditable = "true";
    editor.classList.add("rich-editor");
    editor.style.minHeight = "120px";
    editor.style.border = "2px solid #ccc";
    editor.style.padding = "10px";
    editor.style.marginTop = "10px";
    editor.style.background = "white";

    form.append(richTools);
    form.append(editor);

    richTools.querySelectorAll("button").forEach(btn => {
        btn.addEventListener("click", () => {
            document.execCommand(btn.dataset.cmd, false, null);
        });
    });
}

/* =====================================================
   CANVAS — BIENVENIDA
===================================================== */
const canvas = document.getElementById("canvas-gamehub");

if (canvas) {
    const ctx = canvas.getContext("2d");

    ctx.fillStyle = "#87CEEB";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#0b2545";
    ctx.font = "20px Arial";
    ctx.fillText("Bienvenido a GameHub 💙", 80, 110);
}
