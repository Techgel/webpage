/* ----------------------------
    MODO CLARO AZUL CIELO (CORREGIDO)
-----------------------------*/
// 🟢 CORRECCIÓN: Obtenemos el botón existente por su ID del HTML.
const themeToggle = document.getElementById("themeToggle"); 

let lightMode = false;

themeToggle.addEventListener("click", () => {
    lightMode = !lightMode;

    // document.documentElement se refiere al <html>
    if (lightMode) {
        document.documentElement.style.setProperty("--bg-color", "#E6F3FF");
        document.documentElement.style.setProperty("--text-color", "#003366");
        document.documentElement.style.setProperty("--card-bg", "#FFFFFF");
        themeToggle.textContent = "🌙 Modo Oscuro";
    } else {
        document.documentElement.style.removeProperty("--bg-color");
        document.documentElement.style.removeProperty("--text-color");
        document.documentElement.style.removeProperty("--card-bg");
        themeToggle.textContent = "☀️ Modo Claro";
    }
});


/* ----------------------------
    MENÚ RESPONSIVO
-----------------------------*/
const nav = document.querySelector("nav");
const navList = nav.querySelector("ul");

const btnMenu = document.createElement("button");
btnMenu.textContent = "☰";
btnMenu.classList.add("btn-menu");

nav.prepend(btnMenu);

btnMenu.addEventListener("click", () => {
    navList.classList.toggle("open");
});


/* ----------------------------
    CONFIRMACIÓN DE FORMULARIOS
-----------------------------*/
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    const confirmar = confirm("¿Deseas enviar el formulario, Angelo?");
    if (!confirmar) {
        e.preventDefault();
    }
});

/* ----------------------------
    CONTADOR DE CARACTERES
-----------------------------*/
const usuarioInput = document.getElementById("usuario");
const correoInput = document.getElementById("correo");
const passInput = document.getElementById("password");

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

// ⚠️ Usamos una comprobación para evitar errores si los elementos no existen
if (usuarioInput) addCounter(usuarioInput);
if (correoInput) addCounter(correoInput);
if (passInput) addCounter(passInput);


/* ----------------------------
    RICH TEXT (Editor)
-----------------------------*/

// Creamos barra de herramientas
const richTools = document.createElement("div");
richTools.classList.add("rich-tools");
richTools.style.padding = "10px";
richTools.style.display = "flex";
richTools.style.gap = "10px";

richTools.innerHTML = `
    <button data-cmd="bold"><b>B</b></button>
    <button data-cmd="italic"><i>I</i></button>
    <button data-cmd="underline"><u>U</u></button>
    <button data-cmd="insertOrderedList">1.</button>
    <button data-cmd="insertUnorderedList">•</button>
`;

// ⚠️ Usamos una comprobación para asegurar que el formulario exista antes de añadir el editor
if (form) {
    // Insertamos el editor debajo del form
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

    // Botones RichText
    richTools.querySelectorAll("button").forEach(btn => {
        btn.addEventListener("click", () => {
            const cmd = btn.dataset.cmd;
            document.execCommand(cmd, false, null);
        });
    });
}


/* ----------------------------
    CANVAS (relleno básico)
-----------------------------*/
// ⚠️ Usamos una comprobación para evitar errores si el canvas no existe
const canvas = document.getElementById("canvas-gamehub");
if (canvas) {
    const ctx = canvas.getContext("2d");

    ctx.fillStyle = "skyblue";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "black";
    ctx.font = "20px Arial";
    ctx.fillText("Bienvenido a GameHub!", 90, 100);
}