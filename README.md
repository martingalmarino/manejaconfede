# Manejá con Fede

Sitio one-page de marca personal para **Manejá con Fede**, instructor de manejo y creador de contenido en Córdoba, con sección sustancial de **Praga Escuela de Conductores**.

Stack: Astro + TypeScript, salida estática, HTML semántico y CSS propio.

## Comandos

```bash
npm install
npm run dev        # desarrollo local
npm run check      # validación TypeScript / Astro
npm run build      # check + build de producción en dist/
npm run preview    # previsualizar dist/
```

## Despliegue en Vercel (estático)

1. Subí el repo a GitHub.
2. Creá un proyecto en Vercel apuntando a ese repo.
3. Framework preset: **Astro**.
4. Build command: `npm run build`
5. Output directory: `dist`
6. No hace falta adapter de servidor: el sitio es estático.

Documentación oficial: [Deploy Astro to Vercel](https://docs.astro.build/en/guides/deploy/vercel/)

## Dónde editar el contenido

| Qué | Archivo |
| --- | --- |
| Modo preview/producción y dominio canónico | `src/data/publishing.mjs` |
| Título, meta description, identidad | `src/data/site.ts` |
| Bio, hero, marcas, navegación | `src/data/content.ts` |
| Cursos, horarios, refuerzos | `src/data/courses.ts` |
| WhatsApp y email comercial | `src/data/contacts.ts` |
| Instagram, YouTube, posts y videos | `src/data/social.ts` |

## Contactos

En `src/data/contacts.ts`:

- `whatsappNumber`: solo dígitos internacionales, sin `+` (ej. `5493511234567`). Si es `null`, los CTA de cursos apuntan al Instagram real de Praga.
- `commercialEmail`: si es `null`, se oculta el compositor y se usa “Hablemos por Instagram” hacia el perfil de Fede.
- `mediaKitUrl`: opcional; si está vacío no se muestra.

## Assets

Archivos listos para el sitio (en `src/assets/images/`):

| Archivo | Uso |
| --- | --- |
| `hero-clase.jpg` | Hero |
| `bio-clase.jpg` | Biografía |
| `praga-vehiculo.jpg` | Sección Praga |
| `logo-praga.jpg` | Logo oficial (fondo blanco preservado) |
| `originals/` | Originales preservados (HEIC/JPG de origen) |

Imagen social: `public/og-image.jpg`

Para reemplazar una foto, mantené el mismo nombre de archivo o actualizá el import en el componente correspondiente (`Hero.astro`, `Biography.astro`, `Courses.astro`).

## Instagram y YouTube

- Instagram: completá `instagramPosts` en `src/data/social.ts` con `id`, `permalink`, `image`, `alt` y `title` reales. Solo se renderizan entradas completas. Mientras esté vacío, se muestra el bloque editorial con `@manejaconfede`.
- YouTube: cargá `youtubeVideos.featured` y `youtubeVideos.secondary` con `videoId` y `title` verificados del canal. Si están vacíos, queda el bloque con link al canal.
- El feed automático de Instagram **no** es parte del MVP: requiere proveedor autorizado, configuración de acceso y caché. No scrapear ni exponer tokens en el navegador.

## Indexación (preview → producción)

1. En `src/data/publishing.mjs` poné el dominio real en `canonicalDomain` (sin `https://`).
2. Cambiá `publishingMode` a `'production'`.
3. En producción, actualizá `public/robots.txt` a permitir indexación, por ejemplo:

```txt
User-agent: *
Allow: /

Sitemap: https://TU-DOMINIO/sitemap-index.xml
```

Hoy el sitio está en **preview** (`noindex`) y `robots.txt` bloquea crawlers a propósito.

## Analytics

`src/scripts/analytics.ts` empuja eventos a `window.dataLayer` sin cargar proveedores. Eventos: `course_cta`, `collaboration_cta`, `instagram_click`, `youtube_channel_click`, `video_activation`. No envía emails, nombres ni cuerpos de mensaje. Conectá GTM/GA solo cuando existan IDs reales.

## Limitaciones del MVP

- Contenido social curado a mano (no live feed).
- Contacto comercial por `mailto` (abre la app de correo del visitante; no confirma envío).
- Consultas de cursos por WhatsApp (si está configurado) o Instagram de Praga.
- Sin blog, tienda, login de alumnos ni CMS.

## Inputs pendientes del dueño

- Número de WhatsApp de Praga
- Email comercial
- Dominio canónico definitivo
- Permalinks e imágenes reales de Instagram
- IDs/títulos verificados de videos de YouTube
- (Opcional) media kit, métricas verificadas con fecha, ejemplos de colaboración
