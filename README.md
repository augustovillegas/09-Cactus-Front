<div align="center">

# 🌵 Cactus - Ecommerce tecnológico

Tienda online de tecnología y accesorios con catálogo filtrable, carrito persistente y flujo de checkout guiado.

![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-6-646CFF?logo=vite&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-3-38BDF8?logo=tailwindcss&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-7-CA4245?logo=reactrouter&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-9-4B32C3?logo=eslint&logoColor=white)

[Demo](https://cactusv2.netlify.app/) · [Documentación](#-tabla-de-contenidos) · [Reporte de issues](#-contribuciones)

</div>

<div align="center">

**Índice rápido**

[Descripción](#-descripcion) · [Características](#-caracteristicas) · [Stack](#-stack-tecnologico) · [Inicio rápido](#-inicio-rapido) · [Arquitectura](#-arquitectura)

</div>

---

## 📚 Tabla de Contenidos

- [📝 Descripción](#-descripcion)
- [✅ Características](#-caracteristicas)
- [🧰 Stack Tecnológico](#-stack-tecnologico)
- [🚀 Inicio Rápido](#-inicio-rapido)
- [🧭 Arquitectura](#-arquitectura)
- [🗂️ Estructura del Proyecto](#-estructura-del-proyecto)
- [🧩 Componentes / Módulos Principales](#-componentes--modulos-principales)
- [🧪 Validaciones](#-validaciones)
- [🔌 API Integration / Endpoints](#-api-integration--endpoints)
- [📜 Scripts Disponibles](#-scripts-disponibles)
- [🔐 Variables de Entorno](#-variables-de-entorno)
- [📦 Deployment](#-deployment)
- [📖 Guías de Uso](#-guias-de-uso)
- [🧩 Personalización / Extensión](#-personalizacion--extension)
- [🤝 Contribuciones](#-contribuciones)
- [📄 Licencia](#-licencia)

---

## 📝 Descripción

**Qué problema resuelve:** centraliza la experiencia de compra de accesorios de tecnología con un catálogo navegable, filtros avanzados y un checkout claro para aumentar la conversión.

**Para quién es:** equipos de marketing, ventas y desarrollo que necesitan un storefront rápido de desplegar con un look premium y flujos listos para personalizar.

**Tipo de aplicación:** Frontend SPA en React con routing cliente, estado global por contexto y persistencia en `localStorage`.

---

## ✅ Características

- ✅ Catálogo con filtros por categoría, marca, color, rango de precio y stock
- ✅ Ordenamiento por relevancia, precio y rating
- ✅ Carrito desplegable con ajustes de cantidad y resumen de compra
- ✅ Wishlist persistente con toggle rápido
- ✅ Checkout multipaso con validaciones en vivo
- ✅ Formularios de login, registro y contacto con feedback inmediato
- ✅ Lazy loading de imágenes y componentes optimizados
- ✅ Navegación por secciones con scroll suave y botón volver arriba

---

## 🧰 Stack Tecnológico

| Tecnología | Propósito |
| --- | --- |
| React 18 | UI declarativa y composición de componentes |
| Vite 6 | Build tool y dev server rápido |
| React Router 7 | Navegación SPA y rutas anidadas |
| Tailwind CSS 3 | Estilos utility-first |
| React Hook Form | Manejo de formularios y validaciones |
| Swiper / Splide | Carruseles y sliders de productos |
| React Lazy Load Image | Carga diferida de imágenes |
| ESLint | Reglas de calidad de código |

---

## 🚀 Inicio Rápido

**Prerrequisitos**

- Node.js 18+ (recomendado)
- npm 9+ o pnpm/yarn

**Instalación**

```bash
npm install
```

**Desarrollo**

```bash
npm run dev
```

**Build de producción**

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
- Data estática en `src/data/db.js` (mock de catálogo)

**Flujo de datos (ASCII)**

```text
Usuario
  |
  v
Router (React Router)
  |
  v
Páginas (Home, Productos, Checkout, etc.)
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
|-- public
|   |-- category
|   |-- icons
|   |-- products
|   `-- hero.jpg
|-- src
|   |-- components
|   |-- context
|   |-- data
|   |-- helpers
|   |-- pages
|   |-- App.jsx
|   |-- index.css
|   `-- main.jsx
|-- index.html
|-- tailwind.config.js
|-- postcss.config.js
|-- vite.config.js
`-- package.json
```

---

## 🧩 Componentes / Módulos Principales

**Contexto**

- `src/context/ShopContext.jsx`: estado global de carrito y wishlist con persistencia.

**Componentes clave**

- `src/components/Navbar.jsx`: navegación principal, accesos rápidos y menú.
- `src/components/Cart.jsx`: mini carrito con resumen y CTA al checkout.
- `src/components/Cards.jsx`: tarjeta de producto reutilizable para catálogo y destacados.
- `src/components/Productos.jsx`: grilla, filtros, paginado y ordenamiento.
- `src/components/WishlistMenu.jsx`: lista de favoritos y acciones rápidas.
- `src/components/Footer.jsx`: enlaces legales, ayuda y redes.
- `src/components/WhatsApp.jsx`: acceso directo a soporte.

**Páginas**

- `src/pages/Home.jsx`: hero, destacados, categorías y promociones.
- `src/pages/Checkout.jsx`: formulario completo de compra y resumen.
- `src/pages/Login.jsx`: inicio de sesión con validaciones.
- `src/pages/Registro.jsx`: alta de cuenta con términos.
- `src/pages/Contacto.jsx`: formulario de contacto con toast.
- `src/pages/Deseos.jsx`: wishlist detallada.
- `src/pages/Ofertas.jsx`: landing de promos.
- `src/pages/PreguntasFrecuentes.jsx`: FAQ.
- `src/pages/PoliticaEnvios.jsx` y `src/pages/CambiosDevoluciones.jsx`: legales.

---

## 🧪 Validaciones

- Formularios con `react-hook-form` y validación en tiempo real.
- Login y registro: email válido, mínimos de contraseña y aceptación de términos.
- Checkout: datos personales, dirección, envío, pago y aceptación de términos.
- Contacto: nombre, email, teléfono y mensaje con feedback visual.

---

## 🔌 API Integration / Endpoints

Este proyecto actualmente usa datos locales desde `src/data/db.js`. La integración con API está preparada para ser incorporada.

| Método | Endpoint | Uso | Estado |
| --- | --- | --- | --- |
| GET | `/api/products` | Listado de productos | Pendiente |
| GET | `/api/products/:id` | Detalle de producto | Pendiente |
| POST | `/api/checkout` | Crear orden | Pendiente |
| POST | `/api/auth/login` | Autenticación | Pendiente |

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

| Script | Descripción |
| --- | --- |
| `npm run dev` | Levanta el entorno local con HMR |
| `npm run build` | Genera build optimizado |
| `npm run preview` | Previsualiza el build |
| `npm run lint` | Ejecuta ESLint |

---

## 🔐 Variables de Entorno

Este frontend funciona sin variables obligatorias. Si se integra un backend, se recomienda definir una base URL.

| Variable | Descripción | Requerida | Ejemplo |
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

**Ejemplo de configuración (Vercel)**

```text
Build Command: npm run build
Output Directory: dist
Install Command: npm install
```

---

## 📖 Guías de Uso

**Explorar catálogo**

1. Ir a `Productos` desde el menú principal.
2. Aplicar filtros de categoría, marca, color o rango de precio.
3. Ordenar resultados y navegar por páginas.

**Agregar al carrito**

1. Seleccionar un producto.
2. Usar el botón de compra para agregarlo.
3. Ajustar cantidades desde el mini carrito.

**Finalizar compra**

1. Ir a `Checkout`.
2. Completar datos personales y dirección.
3. Elegir envío y método de pago.
4. Revisar el resumen y confirmar.

**Contactar soporte**

1. Entrar a `Contacto`.
2. Completar el formulario.
3. Enviar y esperar el toast de confirmación.

---

## 🧩 Personalización / Extensión

- Reemplazar el catálogo en `src/data/db.js` por una API real.
- Extender `ShopContext` para manejar cupones, impuestos o stock en tiempo real.
- Crear nuevas categorías y colecciones en `public/category`.
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

Hecho con dedicación para experiencias de compra rápidas y claras.  
[LinkedIn](https://www.linkedin.com/in/augustovillegas/) · [Volver arriba](#-cactus---ecommerce-tecnologico)

</div>
