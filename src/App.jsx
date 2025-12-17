import { useState, useEffect, useRef } from 'react';
import './App.css';

function App() {
  // ==========================================
  // 1. ESTADOS (Cerebro de la App)
  // ==========================================
  const [activeSection, setActiveSection] = useState("parrafos"); 
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileTab, setProfileTab] = useState('STATS'); // <--- NUEVO: Para las pestañas del perfil

  // Formulario
  const [formValues, setFormValues] = useState({ usuario: "", correo: "", password: "" });
  
  // Canvas
  const canvasRef = useRef(null);

  // ==========================================
  // 2. EFECTOS (Lo que pasa automático)
  // ==========================================
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

  // Efecto del Canvas
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

  // ==========================================
  // 3. FUNCIONES (Manejadores de eventos)
  // ==========================================
  const toggleTheme = () => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  
  const handleInputChange = (e) => setFormValues({ ...formValues, [e.target.name]: e.target.value });
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if(window.confirm("¿Enviar datos?")) alert("¡Enviado!");
  };
  
  const execCmd = (cmd) => document.execCommand(cmd, false, null);

  const navigateTo = (section) => {
    setActiveSection(section);
    setMenuOpen(false);
  };

  // ==========================================
  // 4. RENDERIZADO (HTML / JSX)
  // ==========================================
  return (
    <div className="App">
      <header>
        <h1>GameHub</h1>
        <p style={{ maxWidth: '800px', margin: '0 auto 20px auto', lineHeight: '1.5' }}>
          GameHub nació como un proyecto académico para la materia de <strong>Desarrollo Web</strong>. 
          Ahora incluye perfiles dinámicos y adaptación de temas.
        </p>

        <button id="themeToggle" className="glow-button" onClick={toggleTheme} style={{ margin: '10px 0', padding: '8px 14px' }}>
          {theme === 'light' ? "🌙 Modo Oscuro" : "☀️ Modo Claro"}
        </button>

        {/* NAVEGACIÓN */}
        <nav className="navbar">
          <button className="btn-menu" onClick={() => setMenuOpen(!menuOpen)}>☰ Menú</button>

          <ul className={menuOpen ? "nav-links open" : "nav-links"}>
            <li><button onClick={() => navigateTo("parrafos")}>Inicio</button></li>
            <li><button onClick={() => navigateTo("encabezados")}>Encabezados</button></li>
            <li><button onClick={() => navigateTo("listas")}>Listas</button></li>
            <li><button onClick={() => navigateTo("perfil")}>Perfil Gamer</button></li> {/* <--- NUEVO BOTÓN */}
            <li><button onClick={() => navigateTo("organizacion")}>Hardware</button></li>
            <li><button onClick={() => navigateTo("genericos")}>Curiosidades</button></li>
            <li><button onClick={() => navigateTo("formularios")}>Registro</button></li>
            <li><button onClick={() => navigateTo("incrustado")}>Canvas</button></li>
          </ul>
        </nav>
      </header>

      <main>
        {/* SECCIÓN 1: INICIO */}
        {activeSection === "parrafos" && (
          <section className="fade-in">
            <h2>Bienvenido a GameHub</h2>
            <p>Este es el hub central para todo lo relacionado con videojuegos.</p>
          </section>
        )}

        {/* SECCIÓN 2: ENCABEZADOS */}
        {activeSection === "encabezados" && (
          <section className="fade-in">
            <h2>Jerarquía de Noticias</h2>
            <hr />
            <h1>Gran Actualización de FGO</h1>
            <h2>Nuevos Servants Disponibles</h2>
            <h3>Análisis del Meta Actual</h3>
          </section>
        )}

        {/* SECCIÓN 3: LISTAS */}
        {activeSection === "listas" && (
          <section className="fade-in">
            <h2>Inventario</h2>
            <ul>
              <li>Excalibur</li>
              <li>Saints Quartz</li>
              <li>Golden Apples</li>
            </ul>
          </section>
        )}

        {/* ========================================================
             SECCIÓN NUEVA: PERFIL GAMER (INTEGRADO Y TEMATIZADO)
           ======================================================== */}
        {activeSection === "perfil" && (
          <section className="fade-in" style={{ width: '100%' }}>
            
            {/* Tarjeta Principal: Usa variables CSS para cambiar de color con el tema */}
            <div style={{
              background: 'var(--bg-card)', // <--- ESTO HACE LA MAGIA DEL TEMA
              color: 'var(--text-color)',
              padding: '2rem',
              borderRadius: '12px',
              border: '1px solid #333',
              maxWidth: '800px',
              margin: '0 auto',
              boxShadow: '0 0 20px rgba(0, 212, 255, 0.1)',
              transition: 'background 0.3s, color 0.3s'
            }}>
              
              {/* Header del Perfil */}
              <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <h2 style={{ fontSize: '2.5rem', margin: 0, color: '#06b6d4' }}>
                  Gamer<span style={{ color: '#facc15' }}>Hub</span> Profile
                </h2>
                <p style={{ opacity: 0.7 }}>ID: 943-201-442</p>
              </div>

              {/* Ficha del Personaje */}
              <div style={{ 
                background: theme === 'light' ? '#f0f0f0' : '#151921', // Fondo interior reactivo
                padding: '1.5rem', 
                borderRadius: '8px', 
                border: '1px solid var(--primary-color)',
                display: 'flex',
                flexWrap: 'wrap',
                gap: '20px',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                
                {/* Avatar */}
                <div style={{ 
                  width: '120px', height: '120px', borderRadius: '50%', 
                  background: '#333', border: '3px solid #06b6d4',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  boxShadow: '0 0 15px #06b6d4', overflow: 'hidden'
                }}>
                   <span style={{fontSize: '2rem'}}>👑</span>
                </div>

                {/* Datos */}
                <div style={{ flex: 1, minWidth: '200px' }}>
                  <h3 style={{ fontSize: '1.8rem', margin: '0 0 5px 0' }}>Altria Pendragon</h3>
                  <p style={{ color: '#06b6d4', fontStyle: 'italic', margin: 0, fontWeight: 'bold' }}>"Saber Class"</p>
                  
                  {/* Grid de Stats */}
                  <div style={{ display: 'flex', gap: '10px', marginTop: '15px', flexWrap: 'wrap' }}>
                    {[
                      { l: 'HP', v: '15,150', c: '#22d3ee' },
                      { l: 'ATK', v: '11,221', c: '#f87171' },
                      { l: 'COST', v: '16', c: '#facc15' }
                    ].map((st) => (
                      <div key={st.l} style={{ 
                        background: theme === 'light' ? '#fff' : '#0d1117', 
                        padding: '8px 15px', borderRadius: '6px', border: '1px solid #444', flex: 1
                      }}>
                        <span style={{ fontSize: '0.7rem', opacity: 0.7, display: 'block' }}>{st.l}</span>
                        <strong style={{ color: st.c, fontSize: '1.1rem' }}>{st.v}</strong>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Pestañas Interactivas */}
              <div style={{ marginTop: '2rem' }}>
                <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', marginBottom: '1rem' }}>
                  {['STATS', 'SKILLS', 'EVALUATION'].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setProfileTab(tab)}
                      style={{ 
                        padding: '8px 20px', 
                        background: profileTab === tab ? '#06b6d4' : 'transparent', 
                        color: profileTab === tab ? 'black' : 'var(--text-color)', 
                        border: profileTab === tab ? 'none' : '1px solid #444', 
                        borderRadius: '4px', 
                        fontWeight: 'bold', 
                        cursor: 'pointer',
                        transition: 'all 0.2s'
                      }}
                    >
                      {tab}
                    </button>
                  ))}
                </div>

                {/* Contenido de Pestañas */}
                <div style={{ 
                  background: theme === 'light' ? '#f9f9f9' : '#1c2128', 
                  padding: '1.5rem', borderRadius: '8px', border: '1px solid #333' 
                }}>
                  {profileTab === 'STATS' && (
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                      <li style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #333', padding: '10px 0' }}>
                        <span>Fuerza</span> <strong style={{ color: '#facc15' }}>A</strong>
                      </li>
                      <li style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #333', padding: '10px 0' }}>
                        <span>Resistencia</span> <strong style={{ color: '#22d3ee' }}>B</strong>
                      </li>
                      <li style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0' }}>
                        <span>Agilidad</span> <strong style={{ color: '#c084fc' }}>B</strong>
                      </li>
                    </ul>
                  )}
                  
                  {profileTab === 'SKILLS' && (
                    <div>
                      <h3 style={{ color: '#facc15', marginTop: 0 }}>Mana Burst A</h3>
                      <p>Incrementa el rendimiento de las cartas Buster por 1 turno.</p>
                      <hr style={{borderColor: '#444'}}/>
                      <h3 style={{ color: '#facc15', marginTop: 10 }}>Charisma B</h3>
                      <p>Incrementa el ataque de todo el equipo.</p>
                    </div>
                  )}

                  {profileTab === 'EVALUATION' && (
                    <p style={{fontStyle: 'italic', lineHeight: '1.6'}}>
                      "Excelente Servant para farming y daño en área. Su Noble Phantasm puede limpiar oleadas enteras de enemigos con facilidad. Recomendada para principiantes."
                    </p>
                  )}
                </div>
              </div>

            </div>
          </section>
        )}

        {/* SECCIÓN 4: ORGANIZACIÓN */}
        {activeSection === "organizacion" && (
          <section className="fade-in">
            <h2>Comparativa de Hardware</h2>
            <div style={{ overflowX: 'auto' }}>
              <table border="1">
                <thead>
                  <tr>
                    <th>Componente</th>
                    <th>Mínimo</th>
                    <th>Recomendado</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>CPU</td>
                    <td>Ryzen 3</td>
                    <td>Ryzen 5 7600</td>
                  </tr>
                  <tr>
                    <td>GPU</td>
                    <td>GTX 1060</td>
                    <td>RTX 4060</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        )}

        {/* SECCIÓN 5: GENÉRICOS */}
        {activeSection === "genericos" && (
          <section className="fade-in">
            <h2>Curiosidades</h2>
            <details style={{ background: 'var(--bg-card)', padding: '10px', borderRadius: '5px' }}>
              <summary style={{ cursor: 'pointer', fontWeight: 'bold' }}>¿Cuál fue el primer videojuego?</summary>
              <p>Muchos consideran a 'Pong', pero 'Tennis for Two' (1958) vino antes.</p>
            </details>
          </section>
        )}

        {/* SECCIÓN 6: FORMULARIOS */}
        {activeSection === "formularios" && (
          <section className="fade-in">
            <h2>Registro</h2>
            <form onSubmit={handleSubmit}>
              <label>Gamertag: <input type="text" name="usuario" value={formValues.usuario} onChange={handleInputChange} /></label>
              <label>Email: <input type="email" name="correo" value={formValues.correo} onChange={handleInputChange} /></label>
              <button type="submit" style={{ marginTop: '10px' }}>Unirse</button>
            </form>
          </section>
        )}

        {/* SECCIÓN 7: CANVAS */}
        {activeSection === "incrustado" && (
          <section className="fade-in">
            <h2>Canvas</h2>
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