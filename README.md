<div align="center">

# 🌵 Cactus - Ecommerce tecnologico

Tienda online de tecnologia y accesorios con catalogo filtrable, carrito persistente y flujo de checkout guiado.

![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-6-646CFF?logo=vite&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-3-38BDF8?logo=tailwindcss&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-7-CA4245?logo=reactrouter&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-9-4B32C3?logo=eslint&logoColor=white)

[Demo](https://cactusv2.netlify.app/) · [Documentacion](#-tabla-de-contenidos) · [Reporte de issues](#-contribuciones)

</div>

<div align="center">

**Indice rapido**

[Descripcion](#-descripcion) · [Caracteristicas](#-caracteristicas) · [Stack](#-stack-tecnologico) · [Inicio rapido](#-inicio-rapido) · [Arquitectura](#-arquitectura)

</div>

---

## 📚 Tabla de Contenidos

- [📝 Descripcion](#-descripcion)
- [✅ Caracteristicas](#-caracteristicas)
- [🧰 Stack Tecnologico](#-stack-tecnologico)
- [🚀 Inicio Rapido](#-inicio-rapido)
- [🧭 Arquitectura](#-arquitectura)
- [🗂️ Estructura del Proyecto](#-estructura-del-proyecto)
- [🧩 Componentes / Modulos Principales](#-componentes--modulos-principales)
- [🧪 Validaciones](#-validaciones)
- [🔌 API Integration / Endpoints](#-api-integration--endpoints)
- [📜 Scripts Disponibles](#-scripts-disponibles)
- [🔐 Variables de Entorno](#-variables-de-entorno)
- [📦 Deployment](#-deployment)
- [📖 Guias de Uso](#-guias-de-uso)
- [🧩 Personalizacion / Extension](#-personalizacion--extension)
- [🤝 Contribuciones](#-contribuciones)
- [📄 Licencia](#-licencia)

---

## 📝 Descripcion

**Que problema resuelve:** centraliza la experiencia de compra de accesorios de tecnologia con un catalogo navegable, filtros avanzados y un checkout claro para aumentar la conversion.

**Para quien es:** equipos de marketing, ventas y desarrollo que necesitan un storefront rapido de desplegar con un look premium y flujos listos para personalizar.

**Tipo de aplicacion:** Frontend SPA en React con routing cliente, estado global por contexto y persistencia en `localStorage`.

---

## ✅ Caracteristicas

- ✅ Catalogo con filtros por categoria, marca, color, rango de precio y stock
- ✅ Ordenamiento por relevancia, precio y rating
- ✅ Carrito desplegable con ajustes de cantidad y resumen de compra
- ✅ Wishlist persistente con toggle rapido
- ✅ Checkout multi paso con validaciones en vivo
- ✅ Formularios de login, registro y contacto con feedback inmediato
- ✅ Lazy loading de imagenes y componentes optimizados
- ✅ Navegacion por secciones con scroll suave y boton volver arriba

---

## 🧰 Stack Tecnologico

| Tecnologia | Proposito |
| --- | --- |
| React 18 | UI declarativa y composicion de componentes |
| Vite 6 | Build tool y dev server rapido |
| React Router 7 | Navegacion SPA y rutas anidadas |
| Tailwind CSS 3 | Estilos utility-first |
| React Hook Form | Manejo de formularios y validaciones |
| Swiper / Splide | Carruseles y sliders de productos |
| React Lazy Load Image | Carga diferida de imagenes |
| ESLint | Reglas de calidad de codigo |

---

## 🚀 Inicio Rapido

**Prerrequisitos**

- Node.js 18+ (recomendado)
- npm 9+ o pnpm/yarn

**Instalacion**

```bash
npm install
```

**Desarrollo**

```bash
npm run dev
```

**Build de produccion**

```bash
npm run build
```

**Vista previa del build**

```bash
npm run preview
```

---

## 🧭 Arquitectura

**Patrones utilizados**

- SPA con rutas cliente y layout compartido
- Estado global por Context API
- Persistencia local con `localStorage` para carrito y wishlist
- Data statica en `src/data/db.js` (mock de catalogo)

**Flujo de datos (ASCII)**

```text
Usuario
  |
  v
Router (React Router)
  |
  v
Paginas (Home, Productos, Checkout, etc.)
  |
  v
Componentes UI (Cards, Cart, Navbar, Footer)
  |
  v
ShopContext (carrito, wishlist)
  |             \
  v              \
localStorage    src/data/db.js
```

<details>
<summary>Notas de arquitectura</summary>

- `ShopContext` expone acciones para agregar, quitar y actualizar cantidades.
- La UI se mantiene desacoplada del origen de datos, facilitando migrar a API real.

</details>

---

## 🗂️ Estructura del Proyecto

```text
C:\Users\Asus\Desktop\09-Cactus-Front
├── public
│   ├── category
│   ├── icons
│   ├── products
│   └── hero.jpg
├── src
│   ├── components
│   ├── context
│   ├── data
│   ├── helpers
│   ├── pages
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── package.json
```

---

## 🧩 Componentes / Modulos Principales

**Contexto**

- `src/context/ShopContext.jsx`: estado global de carrito y wishlist con persistencia.

**Componentes clave**

- `src/components/Navbar.jsx`: navegacion principal, accesos rapidos y menu.
- `src/components/Cart.jsx`: mini carrito con resumen y CTA al checkout.
- `src/components/Cards.jsx`: tarjeta de producto reutilizable para catalogo y destacados.
- `src/components/Productos.jsx`: grilla, filtros, paginado y ordenamiento.
- `src/components/WishlistMenu.jsx`: lista de favoritos y acciones rapidas.
- `src/components/Footer.jsx`: enlaces legales, ayuda y redes.
- `src/components/WhatsApp.jsx`: acceso directo a soporte.

**Paginas**

- `src/pages/Home.jsx`: hero, destacados, categorias y promociones.
- `src/pages/Checkout.jsx`: formulario completo de compra y resumen.
- `src/pages/Login.jsx`: inicio de sesion con validaciones.
- `src/pages/Registro.jsx`: alta de cuenta con terminos.
- `src/pages/Contacto.jsx`: formulario de contacto con toast.
- `src/pages/Deseos.jsx`: wishlist detallada.
- `src/pages/Ofertas.jsx`: landing de promos.
- `src/pages/PreguntasFrecuentes.jsx`: FAQ.
- `src/pages/PoliticaEnvios.jsx` y `src/pages/CambiosDevoluciones.jsx`: legales.

---

## 🧪 Validaciones

- Formularios con `react-hook-form` y validacion en tiempo real.
- Login y registro: email valido, minimos de contrasena y aceptacion de terminos.
- Checkout: datos personales, direccion, envio, pago y aceptacion de terminos.
- Contacto: nombre, email, telefono y mensaje con feedback visual.

---

## 🔌 API Integration / Endpoints

Este proyecto actualmente usa datos locales desde `src/data/db.js`. La integracion con API esta preparada para ser incorporada.

| Metodo | Endpoint | Uso | Estado |
| --- | --- | --- | --- |
| GET | `/api/products` | Listado de productos | Pendiente |
| GET | `/api/products/:id` | Detalle de producto | Pendiente |
| POST | `/api/checkout` | Crear orden | Pendiente |
| POST | `/api/auth/login` | Autenticacion | Pendiente |

**Modelo base (TypeScript, referencia)**

```ts
type Product = {
  id: string;
  name: string;
  price: number;
  oldPrice?: number;
  image: string;
  rating?: number;
  reviewsCount?: number;
  colors?: string[];
  brand?: string;
  category?: string;
  inStock?: boolean;
};
```

---

## 📜 Scripts Disponibles

| Script | Descripcion |
| --- | --- |
| `npm run dev` | Levanta el entorno local con HMR |
| `npm run build` | Genera build optimizado |
| `npm run preview` | Previsualiza el build |
| `npm run lint` | Ejecuta ESLint |

---

## 🔐 Variables de Entorno

Este frontend funciona sin variables obligatorias. Si se integra un backend, se recomienda definir una base URL.

| Variable | Descripcion | Requerida | Ejemplo |
| --- | --- | --- | --- |
| `VITE_API_BASE_URL` | URL base del API | No | `https://api.tu-dominio.com` |

**Ejemplo `.env`**

```bash
# Opcional
VITE_API_BASE_URL=https://api.tu-dominio.com
```

---

## 📦 Deployment

**Servicio recomendado:** Vercel o Netlify para apps Vite.

**Deploy actual:** https://cactusv2.netlify.app/

**Pasos generales**

1. Crear un nuevo proyecto apuntando al repo.
2. Configurar el comando de build: `npm run build`.
3. Configurar el directorio de salida: `dist`.
4. Definir variables de entorno si aplica.

**Ejemplo de configuracion (Vercel)**

```text
Build Command: npm run build
Output Directory: dist
Install Command: npm install
```

---

## 📖 Guias de Uso

**Explorar catalogo**

1. Ir a `Productos` desde el menu principal.
2. Aplicar filtros de categoria, marca, color o rango de precio.
3. Ordenar resultados y navegar por paginas.

**Agregar al carrito**

1. Seleccionar un producto.
2. Usar el boton de compra para agregarlo.
3. Ajustar cantidades desde el mini carrito.

**Finalizar compra**

1. Ir a `Checkout`.
2. Completar datos personales y direccion.
3. Elegir envio y metodo de pago.
4. Revisar el resumen y confirmar.

**Contactar soporte**

1. Entrar a `Contacto`.
2. Completar el formulario.
3. Enviar y esperar el toast de confirmacion.

---

## 🧩 Personalizacion / Extension

- Reemplazar el catalogo en `src/data/db.js` por una API real.
- Extender `ShopContext` para manejar cupones, impuestos o stock en tiempo real.
- Crear nuevas categorias y colecciones en `public/category`.
- Ajustar el diseño en `src/index.css` y componentes con Tailwind.

---

## 🤝 Contribuciones

1. Haz un fork del proyecto.
2. Crea una rama: `git checkout -b feature/mi-mejora`.
3. Commit con mensajes claros.
4. Abre un Pull Request con contexto y capturas si aplica.

---

## 📄 Licencia

Este proyecto se distribuye bajo la licencia `MIT`. Reemplaza este texto si necesitas otra licencia.

---

<div align="center">

Hecho con dedicacion para experiencias de compra rapidas y claras.  
[LinkedIn](https://www.linkedin.com/in/augustovillegas/) · [Volver arriba](#-cactus---ecommerce-tecnologico)

</div>
