// Angelo Entertainment Group — Landing Page (Flowbite React optimizado)
// Stack: React + Flowbite React + Tailwind CSS

import { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
  Dropdown,
  DropdownItem,
  Button,
  Footer,
  FooterBrand,
  FooterCopyright,
  FooterDivider,
  FooterIcon,
  FooterLink,
  FooterLinkGroup,
  FooterTitle,
  TextInput,
  Card,
  Badge,
} from "flowbite-react";
import {
  BsFacebook,
  BsInstagram,
  BsTwitterX,
  BsLinkedin,
  BsYoutube,
  BsChevronRight,
} from "react-icons/bs";

// ─── Helpers ─────────────────────────────────────────────────────────────────

// CORRECCIÓN: Template literals con backticks en todas las expresiones className
// CORRECCIÓN: `rounded` → `pill` (prop correcta en Flowbite React)

const GradientButton = ({ children, size = "md", className = "", ...props }) => (
  <Button
    gradientDuoTone="purpleToRed"
    pill
    size={size}
    className={`px-6 py-3 font-semibold ${className}`}
    {...props}
  >
    {children}
  </Button>
);

const OutlineButton = ({ children, size = "md", className = "", ...props }) => (
  <Button
    outline
    color="gray"
    pill
    size={size}
    className={`border-white/40 px-6 py-3 font-semibold text-white hover:bg-white/10 ${className}`}
    {...props}
  >
    {children}
  </Button>
);

const TextLink = ({ children, className = "", onClick, ...props }) => (
  <button
    onClick={onClick}
    className={`flex items-center gap-1 text-white/80 transition-colors hover:text-white ${className}`}
    {...props}
  >
    {children} <BsChevronRight className="text-sm" />
  </button>
);

// ─── Secciones ────────────────────────────────────────────────────────────────

/** 1. Navbar */
function AppNavbar() {
  return (
    <Navbar
      fluid
      className="fixed top-0 z-50 w-full border-b-0 bg-[#00e5cc] px-6 py-3"
    >
      <NavbarBrand href="#" className="flex items-center">
        <span className="text-xl font-bold text-black">
          Angelo Entertainment Group
        </span>
      </NavbarBrand>

      <div className="flex items-center gap-3 md:order-2">
        <Button
          size="sm"
          outline
          color="dark"
          className="hidden md:block"
        >
          Entrar
        </Button>
        <GradientButton size="sm" className="hidden md:block">
          Registrarse
        </GradientButton>
        <NavbarToggle />
      </div>

      <NavbarCollapse>
        <NavbarLink href="#" className="text-black hover:underline">
          Juegos
        </NavbarLink>
        <NavbarLink href="#" className="text-black hover:underline">
          Noticias
        </NavbarLink>
        <NavbarLink href="#" className="text-black hover:underline">
          Comunidad
        </NavbarLink>
        {/* CORRECCIÓN: z-index explícito para evitar conflicto con navbar fixed */}
        <div className="relative z-[60]">
          <Dropdown label="Más" inline>
            <DropdownItem>Soporte</DropdownItem>
            <DropdownItem>Descargas</DropdownItem>
            <DropdownItem>Configuración</DropdownItem>
          </Dropdown>
        </div>
      </NavbarCollapse>
    </Navbar>
  );
}

/** 2. Hero principal */
function HeroSection() {
  return (
    <section
      className="flex min-h-screen flex-col items-center justify-center px-6 pt-20 text-center"
      style={{
        background:
          "radial-gradient(ellipse at 50% 0%, #0d1f2d 0%, #050c10 70%)",
      }}
    >
      <h1
        className="mb-6 text-5xl font-black uppercase leading-tight tracking-widest text-white md:text-7xl lg:text-8xl"
        style={{ fontFamily: "'Orbitron', sans-serif" }}
      >
        BIENVENIDO A
        <br />
        ANGELO
        <br />
        ENTERTAINMENT
        <br />
        GROUP
      </h1>
      <p className="mb-10 max-w-xl text-base text-white/70 md:text-lg">
        Panel flotante que respira luz. Entra al hub donde las cartas
        holográficas giran y la consola te escucha.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <GradientButton>Iniciar</GradientButton>
        <OutlineButton>Explorar</OutlineButton>
      </div>
    </section>
  );
}

/** 3. Collage de imágenes */
function ImageCollageSection() {
  return (
    <section
      className="flex min-h-screen items-center justify-center px-6 py-20"
      style={{ background: "#060e18" }}
    >
      <div className="relative mx-auto max-w-5xl">
        {/* Imagen central */}
        <div className="relative z-10 overflow-hidden rounded-2xl">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900&q=80"
            alt="Comunidad"
            className="h-96 w-full object-cover md:h-[480px]"
          />
        </div>
        {/* Imagen izquierda */}
        <div className="absolute -bottom-10 -left-8 z-20 hidden w-48 overflow-hidden rounded-xl shadow-2xl md:block">
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80"
            alt="Jugadora"
            className="h-56 w-full object-cover"
          />
        </div>
        {/* Imagen derecha */}
        <div className="absolute -bottom-10 -right-8 z-20 hidden w-48 overflow-hidden rounded-xl shadow-2xl md:block">
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80"
            alt="Jugador"
            className="h-56 w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

/** 4. Hub / Hero con fondo de imagen */
function HubHeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1593640408182-31c228e09e97?w=1400&q=80"
        alt="Hub background"
        className="absolute inset-0 h-full w-full object-cover opacity-40"
      />
      <div className="relative z-10 px-6 text-center">
        <Badge color="info" className="mb-4">
          HUB
        </Badge>
        <h2
          className="mb-6 text-5xl font-black uppercase leading-tight tracking-widest text-white md:text-7xl"
          style={{ fontFamily: "'Orbitron', sans-serif" }}
        >
          INTERFAZ
          <br />
          COMANDO
          <br />
          ARCADE
        </h2>
        <p className="mb-10 max-w-xl text-white/70">
          Oscura, viva y precisa. HUD, carrusel 3D y dock rápido se combinan
          para lanzar juegos sin ruido.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <GradientButton>Iniciar</GradientButton>
          <OutlineButton>Probar</OutlineButton>
        </div>
      </div>
    </section>
  );
}

/** 5. Features grid */
function FeaturesSection() {
  const features = [
    {
      icon: "⬛",
      title: "PANEL HOLOGRÁFICO CENTRAL",
      desc: "carrusel 3D con tarjetas translúcidas y rotación suave",
    },
    {
      icon: "☰",
      title: "BARRA DE ESTADO HUD",
      desc: "avatar, usuario, rango, hora del sistema y señal en una franja superior",
    },
    {
      icon: "☰",
      title: "NAVEGACIÓN LATERAL NEON",
      desc: "paneles verticales marcados: library, store, achievements, social, settings, news",
    },
    {
      icon: "📱",
      title: "DOCK INFERIOR DE ACCESO RÁPIDO",
      desc: "descargas, amigos en línea, notificaciones y estado del mando en un muelle luminoso",
    },
  ];

  return (
    <section className="bg-[#050c10] px-6 py-24">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <Badge color="gray" className="mb-3">
              Características
            </Badge>
            <h2
              className="text-4xl font-black uppercase leading-tight text-white md:text-6xl"
              style={{ fontFamily: "'Orbitron', sans-serif" }}
            >
              HERRAMIENTAS
              <br />
              DEL CENTRO
              <br />
              DE MANDO
            </h2>
          </div>
          <div className="flex items-start pt-8">
            <p className="text-white/60">
              Todo diseñado para acción rápida y sensación de sala de juego
              espacial.
            </p>
          </div>
        </div>

        {/* Cards usando Flowbite */}
        {/* CORRECCIÓN: Card usa `theme` prop para override de estilos internos en vez de className directo */}
        <div className="mb-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <Card
              key={f.title}
              theme={{
                root: {
                  base: "flex rounded-lg border border-white/10 bg-[#0a1218] shadow-md hover:border-white/20 transition",
                },
              }}
            >
              <div className="mb-4 text-3xl text-white/80">{f.icon}</div>
              <h3
                className="mb-2 text-lg font-black uppercase text-white"
                style={{ fontFamily: "'Orbitron', sans-serif" }}
              >
                {f.title}
              </h3>
              <p className="text-sm text-white/60">{f.desc}</p>
            </Card>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-6">
          <OutlineButton>Explorar</OutlineButton>
          <TextLink>Abrir</TextLink>
        </div>
      </div>
    </section>
  );
}

/** 6. Feature split sections */
function FeatureSplitSection({
  tag,
  title,
  desc,
  primaryBtn,
  secondaryBtn,
  imageSrc,
  imageAlt,
  bgColor = "#7c3aed",
}) {
  return (
    <section
      className="flex min-h-screen items-center px-6 py-20"
      style={{ background: bgColor }}
    >
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 md:grid-cols-2">
        {/* Texto */}
        <div>
          <Badge color="light" className="mb-4">
            {tag.toUpperCase()}
          </Badge>
          <h2
            className="mb-5 text-4xl font-black uppercase leading-tight text-white md:text-6xl"
            style={{ fontFamily: "'Orbitron', sans-serif" }}
          >
            {title}
          </h2>
          <p className="mb-8 text-white/80">{desc}</p>
          <div className="flex items-center gap-5">
            <OutlineButton>{primaryBtn}</OutlineButton>
            <TextLink>{secondaryBtn}</TextLink>
          </div>
        </div>

        {/* Imagen */}
        <div className="overflow-hidden rounded-2xl shadow-2xl">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="h-80 w-full object-cover md:h-96"
          />
        </div>
      </div>
    </section>
  );
}

/** 7. Steps section */
function StepsSection() {
  const steps = [
    {
      num: "01",
      stepLabel: "inicia sesión",
      tag: "Comienzo",
      title: "ACCEDE AL HUB\nEN SEGUNDOS",
      desc: "ingresa tus credenciales, confirma tu avatar y ajusta la señal",
      primaryBtn: "Entrar",
      secondaryBtn: "Conectar",
      // CORRECCIÓN: campo `isLast` en lugar de comparar por string "03"
      isLast: false,
      imageSrc:
        "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=700&q=80",
    },
    {
      num: "02",
      stepLabel: "Elige juego",
      tag: "Selección",
      title: "CARRUSEL",
      desc: "desliza la carta holográfica, mira la vista previa y abre la ficha",
      primaryBtn: "Ver",
      secondaryBtn: "Probar",
      isLast: false,
      imageSrc:
        "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=700&q=80",
    },
    {
      num: "03",
      stepLabel: "Lanzar partida",
      tag: "Ejecución",
      title:
        "CONFIRMA CONTROLES,\nOBSERVA LA BARRA DE\nENERGÍA Y DEJA QUE\nEL JUEGO RESPIRE",
      desc: "Jugar",
      primaryBtn: "Abrir",
      secondaryBtn: "Ver",
      isLast: true,
      imageSrc:
        "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=700&q=80",
    },
  ];

  return (
    <>
      {steps.map((s) => (
        <section
          key={s.num}
          className="flex min-h-screen items-center px-6 py-20"
          style={{ background: "#080f07" }}
        >
          <div className="mx-auto w-full max-w-6xl">
            {/* Step indicator */}
            <Badge color="gray" className="mb-10">
              {s.num}&nbsp;&nbsp;&nbsp;{s.stepLabel.toUpperCase()}
            </Badge>

            <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
              {/* Texto */}
              <div>
                <Badge color="light" className="mb-3">
                  {s.tag.toUpperCase()}
                </Badge>
                <h2
                  className="mb-5 whitespace-pre-line text-4xl font-black uppercase leading-tight text-white md:text-6xl"
                  style={{ fontFamily: "'Orbitron', sans-serif" }}
                >
                  {s.title}
                </h2>
                {/* CORRECCIÓN: usar s.isLast en vez de s.num === "03" */}
                <p
                  className={`mb-8 ${
                    s.isLast ? "text-sm text-white/50" : "text-white/70"
                  }`}
                >
                  {s.desc}
                </p>
                <div className="flex items-center gap-5">
                  <OutlineButton>{s.primaryBtn}</OutlineButton>
                  <TextLink>{s.secondaryBtn}</TextLink>
                </div>
              </div>

              {/* Imagen */}
              <div className="overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src={s.imageSrc}
                  alt={s.stepLabel}
                  className="h-80 w-full object-cover md:h-96"
                />
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}

/** 8. Testimoniales */
function TestimonialsSection() {
  const testimonials = [
    {
      quote: "LA PANTALLA SE SIENTE VIVA Y NO HAY NADA QUE ESTORBE MI JUEGO",
      name: "TAY",
      role: "Desarrollador Indie",
      avatar: "https://i.pravatar.cc/80?img=11",
    },
    {
      quote: "LOS MENÚS RESPONDEN COMO SI SUPIERAN LO QUE QUIERO",
      name: "TECHGEL",
      role: "Desarrollador Indie",
      avatar: "https://i.pravatar.cc/80?img=12",
    },
    {
      quote: "FÁCIL DE PERSONALIZAR, RÁPIDO DE USAR, HERMOSO DE VER",
      name: "Ana Cruz",
      role: "Probadora QA",
      avatar: "https://i.pravatar.cc/80?img=47",
    },
  ];

  return (
    <section className="px-6 py-24" style={{ background: "#0a1628" }}>
      <div className="mx-auto max-w-5xl text-center">
        <h2
          className="mb-3 text-5xl font-black uppercase text-white"
          style={{ fontFamily: "'Orbitron', sans-serif" }}
        >
          OPINIONES
        </h2>
        <p className="mb-16 text-white/60">
          La interfaz entrega una mezcla de nostalgia y precisión sin
          distracciones
        </p>

        {/* CORRECCIÓN: Card usa `theme` prop para override correcto */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <Card
              key={t.name}
              theme={{
                root: {
                  base: "flex flex-col items-center rounded-lg border border-white/10 bg-[#0f1a28] shadow-md",
                },
              }}
            >
              <p
                className="mb-6 text-lg font-black uppercase leading-snug text-white"
                style={{ fontFamily: "'Orbitron', sans-serif" }}
              >
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex flex-col items-center gap-2">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <p className="text-sm font-bold uppercase text-white">
                  {t.name}
                </p>
                <p className="text-xs text-white/50">{t.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

/** 9. CTA final */
function CTASection() {
  return (
    <section
      className="flex flex-col items-center px-6 pb-0 pt-24"
      style={{ background: "#060e07" }}
    >
      <h2
        className="mb-4 text-4xl font-black uppercase tracking-widest text-white md:text-6xl"
        style={{ fontFamily: "'Orbitron', sans-serif" }}
      >
        DESCARGA Y ÚNETE
      </h2>
      <p className="mb-10 max-w-xl text-center text-white/60">
        Baja el launcher, conecta tu cuenta y entra a una comunidad que juega
        y comparte sin ruido
      </p>
      <div className="mb-16 flex flex-wrap items-center justify-center gap-4">
        <GradientButton>Descargar</GradientButton>
        <OutlineButton>Unirse</OutlineButton>
      </div>

      {/* Imagen al fondo */}
      <div className="w-full overflow-hidden rounded-t-2xl">
        <img
          src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1400&q=80"
          alt="Comunidad"
          className="h-72 w-full object-cover md:h-96"
        />
      </div>
    </section>
  );
}

/** 10. Footer */
function AppFooter() {
  const [email, setEmail] = useState("");

  return (
    // CORRECCIÓN: `bgDark` eliminado — no existe en versiones recientes de Flowbite React
    // El fondo oscuro se maneja directamente con style
    <Footer
      className="rounded-none border-t border-white/10"
      style={{ background: "#040a04" }}
    >
      <div className="mx-auto w-full max-w-6xl px-6 py-16">
        {/* Brand */}
        <FooterBrand
          href="#"
          src="https://flowbite.com/docs/images/logo.svg"
          alt="Angelo Logo"
          name="Angelo Entertainment Group"
          className="text-white"
        />

        {/* Links + Newsletter */}
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {/* Explorar */}
          <div>
            <FooterTitle title="Explorar" className="text-white" />
            <FooterLinkGroup col>
              {["Juegos", "Noticias", "Comunidad", "Descargas", "Soporte"].map(
                (l) => (
                  <FooterLink
                    key={l}
                    href="#"
                    className="text-white/60 hover:text-white"
                  >
                    {l}
                  </FooterLink>
                )
              )}
            </FooterLinkGroup>
          </div>

          {/* Cuenta */}
          <div>
            <FooterTitle title="Cuenta" className="text-white" />
            <FooterLinkGroup col>
              {[
                "Perfil",
                "Logros",
                "Amigos",
                "Configuración",
                "Notificaciones",
              ].map((l) => (
                <FooterLink
                  key={l}
                  href="#"
                  className="text-white/60 hover:text-white"
                >
                  {l}
                </FooterLink>
              ))}
            </FooterLinkGroup>
          </div>

          {/* Sistema */}
          <div>
            <FooterTitle title="Sistema" className="text-white" />
            <FooterLinkGroup col>
              {["Estado", "Red", "Contraseña", "Privacidad", "Temas"].map(
                (l) => (
                  <FooterLink
                    key={l}
                    href="#"
                    className="text-white/60 hover:text-white"
                  >
                    {l}
                  </FooterLink>
                )
              )}
            </FooterLinkGroup>
          </div>

          {/* Newsletter */}
          <div>
            <FooterTitle title="Suscribirse" className="text-white" />
            <p className="mb-4 text-sm text-white/60">
              Recibe actualizaciones sobre nuevos títulos y eventos exclusivos
              del nexo.
            </p>
            <div className="flex gap-2">
              <TextInput
                type="email"
                placeholder="Tu correo aquí"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1"
                sizing="sm"
              />
              <Button
                size="sm"
                color="light"
                pill
                onClick={() => setEmail("")}
              >
                Enviar
              </Button>
            </div>
            <p className="mt-3 text-xs text-white/40">
              Al suscribirse aceptas nuestra política de privacidad y consientes
              recibir comunicaciones.
            </p>
          </div>
        </div>

        <FooterDivider className="border-white/10" />

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <FooterCopyright
            href="#"
            by="Angelo Entertainment Group. Todos los derechos reservados."
            year={2024}
            className="text-white/40"
          />

          <div className="flex items-center gap-3 text-xs text-white/40">
            <a href="#" className="underline hover:text-white">
              Política privada
            </a>
            <a href="#" className="underline hover:text-white">
              Términos de servicio
            </a>
            <a href="#" className="underline hover:text-white">
              Configuración cookies
            </a>
          </div>

          <div className="flex gap-4 text-white/50">
            <FooterIcon href="#" icon={BsFacebook} className="hover:text-white" />
            <FooterIcon href="#" icon={BsInstagram} className="hover:text-white" />
            <FooterIcon href="#" icon={BsTwitterX} className="hover:text-white" />
            <FooterIcon href="#" icon={BsLinkedin} className="hover:text-white" />
            <FooterIcon href="#" icon={BsYoutube} className="hover:text-white" />
          </div>
        </div>
      </div>
    </Footer>
  );
}

// ─── App principal ────────────────────────────────────────────────────────────

export default function AngeloEntertainmentGroup() {
  return (
    <div className="overflow-x-hidden">
      <AppNavbar />

      <main>
        <HeroSection />
        <ImageCollageSection />
        <HubHeroSection />
        <FeaturesSection />

        <FeatureSplitSection
          tag="ventaja"
          title={"MOVIMIENTO SIN\nFRICCIÓN"}
          desc="navega menús y lanza juegos en un latido"
          primaryBtn="Entrar"
          secondaryBtn="Abrir"
          imageSrc="https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=700&q=80"
          imageAlt="Guitar Hero"
          bgColor="#7c3aed"
        />

        <FeatureSplitSection
          tag="inmerso"
          title={"ATMÓSFERA QUE\nATRAPA"}
          desc="gráficos de neón y audio limpio que te colocan en la sala"
          primaryBtn="Probar"
          secondaryBtn="Ver"
          imageSrc="https://images.unsplash.com/photo-1542751371-adc38448a05e?w=700&q=80"
          imageAlt="Fortnite"
          bgColor="#6d28d9"
        />

        <FeatureSplitSection
          tag="personal"
          title={"AJUSTA A TU\nMANERA"}
          desc="perfiles, temas y accesos directos que siguen tu ritmo"
          primaryBtn="Guardar"
          secondaryBtn="Editar"
          imageSrc="https://images.unsplash.com/photo-1511512578047-dfb367046420?w=700&q=80"
          imageAlt="GTA Online"
          bgColor="#7c3aed"
        />

        <FeatureSplitSection
          tag="rápido"
          title={"TODO AL\nALCANCE"}
          desc="descargas, amigos y notificaciones listos en un muelle luminoso"
          primaryBtn="Ir"
          secondaryBtn="Entrar"
          imageSrc="https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=700&q=80"
          imageAlt="Gaming setup"
          bgColor="#6d28d9"
        />

        <StepsSection />
        <TestimonialsSection />
        <CTASection />
      </main>

      <AppFooter />
    </div>
  );
}