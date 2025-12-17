import { useState, useEffect, useRef } from 'react';
import './App.css';

function App() {
  // 1. ESTADO DE NAVEGACIÓN
  const [activeSection, setActiveSection] = useState("parrafos"); 

  // 2. ESTADO DEL TEMA
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  // 3. ESTADO DEL FORMULARIO
  const [formValues, setFormValues] = useState({
    usuario: "",
    correo: "",
    password: ""
  });

  // 4. MENÚ RESPONSIVO (Estado de apertura)
  const [menuOpen, setMenuOpen] = useState(false);

  // 5. CANVAS
  const canvasRef = useRef(null);

  // EFECTOS
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

  useEffect(() => {
    if (activeSection === 'incrustado') {
      const canvas = canvasRef.current;
      if (canvas) {
        const ctx = canvas.getContext("2d");
        ctx.fillStyle = "#87CEEB";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "#0b2545";
        ctx.font = "20px Arial";
        ctx.fillText("GameHub Interactivo 🎮", 80, 110);
      }
    }
  }, [activeSection]);

  // MANEJADORES
  const toggleTheme = () => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  const handleInputChange = (e) => setFormValues({ ...formValues, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    if(window.confirm("¿Enviar datos?")) alert("¡Enviado!");
  };
  const execCmd = (cmd) => document.execCommand(cmd, false, null);

  // Función auxiliar para navegar y cerrar el menú móvil al mismo tiempo
  const navigateTo = (section) => {
    setActiveSection(section);
    setMenuOpen(false); // Cierra el menú al hacer clic
  };

  return (
    <div className="App">
      <header>
        <h1>GameHub</h1>
        {/* TEXTO DE ENCABEZADO */}
        <p style={{ maxWidth: '800px', margin: '0 auto 20px auto', lineHeight: '1.5' }}>
          GameHub nació como un proyecto académico para la materia de <strong>Desarrollo Web</strong> a lo largo de un ciclo escolar. 
          Sin embargo, el objetivo va más allá de cumplir con una entrega: la idea es construir una <strong>wiki funcional</strong> enfocada en videojuegos.
        </p>

        <button id="themeToggle" className="glow-button" onClick={toggleTheme} style={{ margin: '10px 0', padding: '8px 14px' }}>
          {theme === 'light' ? "🌙 Modo Oscuro" : "☀️ Modo Claro"}
        </button>

        {/* NAVEGACIÓN RESPONSIVA MODIFICADA */}
        <nav className="navbar">
          {/* Botón Hamburguesa (Solo visible en Móvil gracias al CSS) */}
          <button 
            className="btn-menu" 
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰ Menú
          </button>

          {/* Lista de Enlaces (Se oculta/muestra con CSS y la clase 'open') */}
          <ul className={menuOpen ? "nav-links open" : "nav-links"}>
            <li><button onClick={() => navigateTo("parrafos")}>Inicio</button></li>
            <li><button onClick={() => navigateTo("encabezados")}>Encabezados</button></li>
            <li><button onClick={() => navigateTo("listas")}>Listas</button></li>
            <li><button onClick={() => navigateTo("organizacion")}>Organización</button></li>
            <li><button onClick={() => navigateTo("genericos")}>Genéricos</button></li>
            <li><button onClick={() => navigateTo("formularios")}>Formularios</button></li>
            <li><button onClick={() => navigateTo("incrustado")}>Canvas</button></li>
          </ul>
        </nav>
      </header>

      <main>
        {/* SECCIÓN 1: INICIO */}
        {activeSection === "parrafos" && (
          <section className="fade-in">
            <h2>Bienvenido a GameHub</h2>
            <p>Este es el hub central para todo lo relacionado con videojuegos. Aquí encontrarás información detallada organizada de manera eficiente.</p>
            <p>Navega por el menú para ver los diferentes componentes HTML/React implementados.</p>
          </section>
        )}

        {/* SECCIÓN 2: ENCABEZADOS */}
        {activeSection === "encabezados" && (
          <section className="fade-in">
            <h2>Jerarquía de Encabezados</h2>
            <hr />
            <h1>Noticias de Última Hora</h1>
            <h2>Lanzamientos de la Semana</h2>
            <h3>Reseñas de Usuarios</h3>
            <h4>Detalles Técnicos (FPS/Resolución)</h4>
            <h5>Notas del Parche v1.2</h5>
            <h6>Copyright 2025</h6>
          </section>
        )}

        {/* SECCIÓN 3: LISTAS */}
        {activeSection === "listas" && (
          <section className="fade-in">
            <h2>Inventario Gamer</h2>
            
            {/* Lista Desordenada */}
            <ul>
              <li>Mouse Gamer RGB</li>
              <li>Teclado Mecánico 60%</li>
              <li>Monitor 144hz Curvo</li>
            </ul>
            <br />

            {/* Lista Ordenada */}
            <ol>
              <li>The Legend of Zelda: Ocarina of Time</li>
              <li>Grand Theft Auto V</li>
              <li>Elden Ring</li>
            </ol>
            <br />

            {/* Lista Anidada */}
            <ul>
              <li>Plataformas
                <ol>
                  <li>PlayStation 5</li>
                  <li>Xbox Series X</li>
                  <li>Nintendo Switch</li>
                </ol>
              </li>
              <li>PC Master Race</li>
            </ul>
            <br />

            {/* Lista de Definición */}
            <dl style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '5px' }}>
              <dt><strong>NPC</strong></dt>
              <dd>Non-Playable Character (Personaje no jugable).</dd>
              
              <dt><strong>FPS</strong></dt>
              <dd>Frames Per Second (Cuadros por segundo) o First Person Shooter.</dd>
              
              <dt><strong>Lag</strong></dt>
              <dd>Retraso en la comunicación entre el servidor y tu juego.</dd>
            </dl>
          </section>
        )}

        {/* SECCIÓN 4: ORGANIZACIÓN (Tabla) */}
        {activeSection === "organizacion" && (
          <section className="fade-in">
            <h2>Comparativa de Hardware</h2>
            <p>Tabla de requisitos recomendados para juegos AAA en 2025:</p>

            <div style={{ overflowX: 'auto' }}>
              <table border="1" style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px', textAlign: 'left' }}>
                <thead>
                  <tr style={{ backgroundColor: 'rgba(0,0,0,0.2)' }}>
                    <th style={{ padding: '10px' }}>Componente</th>
                    <th style={{ padding: '10px' }}>Mínimo</th>
                    <th style={{ padding: '10px' }}>Recomendado</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ padding: '10px' }}>Procesador</td>
                    <td style={{ padding: '10px' }}>Intel i5 10400</td>
                    <td style={{ padding: '10px' }}>Intel i7 13700K</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '10px' }}>Gráfica</td>
                    <td style={{ padding: '10px' }}>GTX 1660 Super</td>
                    <td style={{ padding: '10px' }}>RTX 4070</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '10px' }}>Almacenamiento</td>
                    <td style={{ padding: '10px' }}>50GB SSD</td>
                    <td style={{ padding: '10px' }}>1TB NVMe</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        )}

        {/* SECCIÓN 5: GENÉRICOS */}
        {activeSection === "genericos" && (
          <section className="fade-in">
            <h2>Curiosidades del Gaming</h2>
            
            <h3>Frases Icónicas (`blockquote`)</h3>
            <blockquote style={{ borderLeft: '4px solid #e60012', paddingLeft: '10px', margin: '20px 0', fontStyle: 'italic' }}>
              "It's dangerous to go alone! Take this." 
              <br />— The Legend of Zelda (NES, 1986)
            </blockquote>

            <h3>Secretos Ocultos (`details`)</h3>
            <details style={{ background: 'rgba(255,255,255,0.1)', padding: '10px', borderRadius: '5px', marginBottom: '10px' }}>
              <summary style={{ cursor: 'pointer', fontWeight: 'bold' }}>¿Sabías que Mario golpea los bloques con...?</summary>
              <p style={{ marginTop: '10px' }}>
                ¡Con el puño! Mucha gente cree que usa la cabeza, pero si miras el sprite original detenidamente, verás que levanta el puño justo antes de impactar.
              </p>
            </details>

            <h3>Desarrolladora Legendaria (`address`)</h3>
            <address style={{ border: '1px dashed gray', padding: '10px', marginTop: '20px' }}>
              <strong>Nintendo Co., Ltd.</strong><br />
              11-1 Hokotate-cho, Kamitoba,<br />
              Minami-ku, Kyoto 601-8501, Japan<br />
              Creadores de: Mario, Zelda, Metroid.
            </address>

            <h3>El Código Konami (`pre`)</h3>
            <p>El truco más famoso de la historia:</p>
            <pre style={{ background: '#222', padding: '10px', borderRadius: '5px', overflowX: 'auto', fontFamily: 'monospace' }}>
Up, Up, Down, Down, Left, Right, Left, Right, B, A, Start
            </pre>
          </section>
        )}

        {/* SECCIÓN 6: FORMULARIOS */}
        {activeSection === "formularios" && (
          <section className="fade-in">
            <h2>Registro Gamer</h2>
            <form onSubmit={handleSubmit}>
              <label>Gamertag: <input type="text" name="usuario" value={formValues.usuario} onChange={handleInputChange} /></label>
              <label>Email: <input type="email" name="correo" value={formValues.correo} onChange={handleInputChange} /></label>
              <label>Password: <input type="password" name="password" value={formValues.password} onChange={handleInputChange} /></label>
              
              <div className="rich-tools" style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
                <button type="button" onClick={() => execCmd('bold')}><b>B</b></button>
                <button type="button" onClick={() => execCmd('italic')}><i>I</i></button>
                <button type="button" onClick={() => execCmd('underline')}><u>U</u></button>
              </div>
              <div className="rich-editor" contentEditable="true" style={{ minHeight: '80px', border: '1px solid #ccc', background: 'white', color: 'black', padding: '5px', marginTop: '5px' }}></div>
              
              <button type="submit" style={{ marginTop: '10px' }}>Unirse</button>
            </form>
          </section>
        )}

        {/* SECCIÓN 7: CANVAS */}
        {activeSection === "incrustado" && (
          <section className="fade-in">
            <h2>Canvas (Dibujo JS)</h2>
            <canvas ref={canvasRef} width="400" height="200" style={{ border: '2px solid white', marginTop: '10px' }}></canvas>
          </section>
        )}
      </main>

      <footer>
        <p>GameHub 2025 — Desarrollado en React</p>
      </footer>
    </div>
  );
}

export default App;