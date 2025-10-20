# ETS InfoPlus - Plataforma Digital de Educación y Prevención

## Descripción

**ETS InfoPlus** es una plataforma web integral desarrollada en HTML, CSS y JavaScript vanilla para la educación, prevención y orientación en enfermedades de transmisión sexual. El proyecto combina contenido educativo multimedia con herramientas interactivas para promover la prevención y reducir la desinformación.

## Características

✅ **Contenido Educativo Multimedia**
- Galería de infografías descargables
- Blogs y artículos informativos
- Videos educativos
- Recursos interactivos

✅ **Herramientas Interactivas**
- Autoevaluación de síntomas
- Información sobre ETS comunes
- Guías de prevención
- Información de centros médicos

✅ **Diseño Responsivo**
- Compatible con dispositivos móviles
- Interfaz intuitiva y accesible
- Navegación fluida
- Rendimiento optimizado

✅ **Fácil de Desplegar**
- Sin dependencias externas
- HTML, CSS y JavaScript puro
- Funciona en cualquier servidor web
- Compatible con GitHub Pages y Netlify

## Estructura del Proyecto

```
ets_infoplus_html/
├── index.html          # Página principal (todas las secciones)
├── css/
│   └── styles.css      # Estilos completos
├── js/
│   └── script.js       # Funcionalidad interactiva
├── images/             # Carpeta de imágenes
│   ├── Bip5KyQVTCxN.png
│   ├── CKy5GmEPtwT9.jpg
│   ├── EcTYBhlLUzLT.jpg
│   ├── ONuacT5P65YA.jpeg
│   ├── PXXdoc8aUGoq.svg
│   ├── RMOviJMBhtvW.jpg
│   ├── r8BIPvLVWdzu.jpg
│   └── tDtDjY5HQbiT.png
├── README.md           # Este archivo
└── DEPLOYMENT.md       # Guía de despliegue

```

## Páginas Incluidas

### 1. **Inicio**
- Hero section con llamada a la acción
- Características principales
- Información sobre la plataforma
- Sección de prevención
- Call-to-action

### 2. **Educación**
- Información sobre ETS
- Galería de infografías
- Blogs y artículos
- Contenido educativo

### 3. **Prevención**
- Medidas preventivas
- Métodos de protección
- Infografías de prevención
- Guías prácticas

### 4. **Síntomas**
- Autoevaluación interactiva
- Síntomas de 6 ETS comunes
- Información sobre cuándo buscar ayuda
- Advertencias médicas

### 5. **Recursos**
- Infografías descargables
- Guías de salud
- Videos educativos
- Información de centros médicos
- Blogs destacados

### 6. **Acerca de**
- Misión del proyecto
- Valores
- Equipo de desarrollo
- Información del prototipo

## Cómo Usar

### Opción 1: Abrir Localmente

1. Descarga el archivo ZIP
2. Extrae el contenido
3. Abre `index.html` en tu navegador
4. ¡Listo! El sitio funcionará completamente

### Opción 2: Servir Localmente (Recomendado)

**Con Python 3:**
```bash
cd ets_infoplus_html
python -m http.server 8000
```

Luego abre: `http://localhost:8000`

**Con Node.js (http-server):**
```bash
npm install -g http-server
cd ets_infoplus_html
http-server
```

## Despliegue

### GitHub Pages

1. Crea un repositorio en GitHub
2. Sube el contenido de la carpeta `ets_infoplus_html`
3. Ve a Settings → Pages
4. Selecciona rama `main` y carpeta `/ (root)`
5. Tu sitio estará en: `https://tu-usuario.github.io/ets_infoplus_html/`

### Netlify

1. Crea una cuenta en Netlify
2. Conecta tu repositorio de GitHub
3. Configura:
   - Build command: (dejar vacío)
   - Publish directory: `.` (raíz)
4. ¡Listo! Se desplegará automáticamente

### Servidor Web Tradicional

1. Sube todos los archivos a tu servidor web
2. Asegúrate de que `index.html` esté en la raíz
3. Las carpetas `css`, `js` e `images` deben estar en el mismo nivel

## Características Técnicas

### HTML
- Semántica HTML5
- Estructura limpia y organizada
- Accesibilidad mejorada
- Meta tags optimizados

### CSS
- Diseño responsive con media queries
- Variables CSS para fácil personalización
- Animaciones suaves
- Gradientes y sombras modernas
- Grid y Flexbox

### JavaScript
- Navegación SPA (Single Page Application)
- Funcionalidad interactiva
- Galería de imágenes con modal
- Autoevaluación de síntomas
- Menú hamburguesa responsivo

## Navegación

La navegación es completamente funcional:
- Menú principal en el header
- Menú hamburguesa en dispositivos móviles
- Links internos entre páginas
- Scroll suave
- Botones de acción

## Personalización

### Cambiar Colores

Edita las variables CSS en `css/styles.css`:

```css
:root {
    --primary-color: #4f46e5;        /* Color principal */
    --secondary-color: #06b6d4;      /* Color secundario */
    --success-color: #10b981;        /* Color de éxito */
    --warning-color: #f59e0b;        /* Color de advertencia */
    --danger-color: #ef4444;         /* Color de peligro */
    /* ... más variables ... */
}
```

### Agregar Imágenes

1. Coloca las imágenes en la carpeta `images/`
2. Referencia en HTML: `<img src="images/nombre.jpg" alt="descripción">`

### Agregar Contenido

Edita `index.html` para agregar o modificar contenido en cualquier sección.

## Compatibilidad

- ✅ Chrome/Chromium
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Opera
- ✅ Navegadores móviles (iOS Safari, Chrome Mobile)

## Rendimiento

- Tamaño total: ~1 MB (incluyendo imágenes)
- Carga rápida: < 2 segundos en conexión 3G
- Sin dependencias externas
- Optimizado para SEO

## Equipo de Desarrollo

- Juan Jose Restrepo Alvarez
- Joseph Alexander Morales Cardona
- Emanuel Granados Pulgarin
- Samuel Torres Atehortua
- Jacobo Morales Londoño

## Modalidad

**Prototipo** - Plataforma digital integral para la educación, prevención y orientación en enfermedades de transmisión sexual.

## Licencia

© 2024 ETS InfoPlus. Todos los derechos reservados.

Este proyecto es de código abierto para fines educativos.

## Soporte

Para reportar problemas o sugerencias, contacta al equipo de desarrollo.

## Changelog

### Versión 1.0.0 (2024-10-20)
- Lanzamiento inicial
- 6 páginas completas
- 8 imágenes integradas
- Funcionalidad interactiva
- Diseño responsive
- Documentación completa

---

**¡Gracias por usar ETS InfoPlus!**

Para más información, visita el sitio web o contacta al equipo de desarrollo.

