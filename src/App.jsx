import { useState, useEffect, useRef } from 'react';
import './App.css';

function App() {
  // 1. ESTADO PARA EL MODO OSCURO
  // Leemos la preferencia guardada o usamos 'dark' por defecto
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  // 2. ESTADO PARA LOS INPUTS (Para los contadores de caracteres)
  const [formValues, setFormValues] = useState({
    usuario: "",
    correo: "",
    password: ""
  });

  // 3. ESTADO PARA EL MENÚ RESPONSIVO
  const [menuOpen, setMenuOpen] = useState(false);

  // 4. REFERENCIA PARA EL CANVAS
  const canvasRef = useRef(null);

  // EFECTO: Aplicar el tema (Modo Oscuro/Claro)
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'light') {
      root.classList.add('theme-light');
      localStorage.setItem("theme", "light");
    } else {
      root.classList.remove('theme-light');
      localStorage.setItem("theme", "dark");
    }
  }, [theme]);

  // EFECTO: Dibujar en el Canvas al cargar
  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      // Fondo azul cielo
      ctx.fillStyle = "#87CEEB";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      // Texto
      ctx.fillStyle = "#0b2545";
      ctx.font = "20px Arial";
      ctx.fillText("Bienvenido a GameHub 💙", 80, 110);
    }
  }, []);

  // FUNCIONES DE MANEJO
  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Evita recargar la página
    // Tu confirmación original
    const confirmar = window.confirm("¿Deseas enviar el formulario, Angelo?");
    if (confirmar) {
      alert("¡Formulario enviado!");
      // Aquí iría la lógica real de envío
    }
  };

  const execCmd = (cmd) => {
    // Ejecuta comandos de formato para el editor de texto rico
    document.execCommand(cmd, false, null);
  };

  return (
    <div className="App">
      {/* HEADER */}
      <header>
        <h1>GameHub</h1>
        <p>
          GameHub nació como un proyecto académico para la materia de <strong>Desarrollo Web</strong> a lo largo de un ciclo escolar.
          Sin embargo, el objetivo va más allá de cumplir con una entrega: la idea es construir una <strong>wiki funcional </strong>
          enfocada en videojuegos.
        </p>

        {/* Botón de Tema */}
        <button 
          id="themeToggle" 
          className="glow-button" 
          onClick={toggleTheme}
          style={{ margin: '10px 0', padding: '8px 14px', fontSize: '1rem' }}
        >
          {theme === 'light' ? "🌙 Modo Oscuro" : "☀️ Modo Claro"}
        </button>

        {/* Menú de Navegación */}
        <nav style={{ position: 'relative' }}>
          {/* Botón de Menú Responsivo (creado dinámicamente en tu JS original) */}
          <button 
            className="btn-menu" 
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ 
              display: 'block', 
              marginBottom: '10px', 
              fontSize: '1.5rem', 
              background: 'transparent', 
              border: 'none', 
              color: 'var(--text-color)', 
              cursor: 'pointer' 
            }}
          >
            ☰
          </button>

          {/* Lista de links con clase condicional para mostrar/ocultar */}
          <ul className={menuOpen ? "open" : ""} style={menuOpen ? { display: 'block' } : {}}>
            <li><a href="#parrafos">Párrafos</a></li>
            <li><a href="#encabezados">Encabezados</a></li>
            <li><a href="#listas">Listas</a></li>
            <li><a href="#organizacion">Organización</a></li>
            <li><a href="#genericos">Genericos</a></li>
            <li><a href="#formularios">Formularios</a></li>
            <li><a href="#incrustado">Canvas</a></li>
          </ul>
        </nav>
      </header>

      {/* MAIN CONTENT */}
      <main>
        {/* Secciones de texto omitidas para ahorrar espacio visual, 
            pero aquí va todo tu contenido de texto (Párrafos, Encabezados, Listas...) 
            Tal cual como lo tenías en el HTML anterior. */}
        
        <section id="parrafos">
          <h2>Párrafos</h2>
          <p>Bienvenido a la versión React de GameHub. Aquí el contenido sigue igual.</p>
        </section>

        {/* ... Resto de secciones ... */}

        <section id="formularios">
          <h2>Formularios</h2>
          <form onSubmit={handleSubmit}>
            
            {/* USUARIO */}
            <label htmlFor="usuario">Usuario:</label>
            <input 
              type="text" 
              id="usuario" 
              name="usuario" 
              value={formValues.usuario}
              onChange={handleInputChange}
            />
            <span className="contador" style={{ fontSize: '0.8rem', display: 'block', marginTop: '4px', opacity: 0.7 }}>
              {formValues.usuario.length} caracteres
            </span>

            {/* CORREO */}
            <label htmlFor="correo">Correo:</label>
            <input 
              type="email" 
              id="correo" 
              name="correo" 
              value={formValues.correo}
              onChange={handleInputChange}
            />
             <span className="contador" style={{ fontSize: '0.8rem', display: 'block', marginTop: '4px', opacity: 0.7 }}>
              {formValues.correo.length} caracteres
            </span>

            {/* PASSWORD */}
            <label htmlFor="password">Contraseña:</label>
            <input 
              type="password" 
              id="password" 
              name="password" 
              value={formValues.password}
              onChange={handleInputChange}
            />
             <span className="contador" style={{ fontSize: '0.8rem', display: 'block', marginTop: '4px', opacity: 0.7 }}>
              {formValues.password.length} caracteres
            </span>

            {/* EDITOR RICH TEXT (Integrado en React) */}
            <div className="rich-tools" style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
              <button type="button" onClick={() => execCmd('bold')}><b>B</b></button>
              <button type="button" onClick={() => execCmd('italic')}><i>I</i></button>
              <button type="button" onClick={() => execCmd('underline')}><u>U</u></button>
              <button type="button" onClick={() => execCmd('insertOrderedList')}>1.</button>
              <button type="button" onClick={() => execCmd('insertUnorderedList')}>•</button>
            </div>
            
            <div 
              className="rich-editor" 
              contentEditable="true"
              style={{
                minHeight: '120px',
                border: '2px solid #ccc',
                padding: '10px',
                marginTop: '10px',
                background: 'white',
                color: 'black' // Forzamos texto negro en el editor
              }}
            ></div>

            <button type="submit" style={{ marginTop: '1rem' }}>Registrar</button>
          </form>
        </section>

        <section id="incrustado">
          <h2>Contenido incrustado (Canvas)</h2>
          <canvas ref={canvasRef} id="canvas-gamehub" width="400" height="200"></canvas>
        </section>
      </main>

      {/* FOOTER */}
      <footer>
        <p>GameHub — Proyecto React | <a href="mailto:soportegamehub@gmail.com">Contacto</a></p>
      </footer>
    </div>
  );
}

export default App;