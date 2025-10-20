# Guía de Despliegue - ETS InfoPlus

## Tabla de Contenidos
1. [Despliegue Local](#despliegue-local)
2. [GitHub Pages](#github-pages)
3. [Netlify](#netlify)
4. [Servidor Web Tradicional](#servidor-web-tradicional)
5. [Solución de Problemas](#solución-de-problemas)

---

## Despliegue Local

### Opción 1: Abrir Directamente en el Navegador

1. Extrae el archivo ZIP
2. Abre `index.html` con tu navegador favorito
3. ¡Listo! El sitio funcionará completamente

**Ventaja**: No requiere instalación
**Desventaja**: Algunos navegadores pueden tener restricciones de CORS

### Opción 2: Servidor Local con Python

**Requisitos**: Python 3.x instalado

```bash
# Navega a la carpeta del proyecto
cd ets_infoplus_html

# Inicia el servidor
python -m http.server 8000

# O en Python 2:
python -m SimpleHTTPServer 8000
```

Abre en tu navegador: `http://localhost:8000`

### Opción 3: Servidor Local con Node.js

**Requisitos**: Node.js instalado

```bash
# Instala http-server globalmente
npm install -g http-server

# Navega a la carpeta del proyecto
cd ets_infoplus_html

# Inicia el servidor
http-server

# El servidor estará disponible en http://localhost:8080
```

### Opción 4: Servidor Local con PHP

**Requisitos**: PHP instalado

```bash
# Navega a la carpeta del proyecto
cd ets_infoplus_html

# Inicia el servidor PHP
php -S localhost:8000
```

Abre en tu navegador: `http://localhost:8000`

---

## GitHub Pages

### Paso 1: Crear Repositorio en GitHub

1. Ve a https://github.com/new
2. Nombre del repositorio: `ets_infoplus_html` (o el que prefieras)
3. Descripción: "Plataforma de educación y prevención en ETS"
4. Selecciona "Public"
5. Haz clic en "Create repository"

### Paso 2: Subir Archivos

**Opción A: Usando Git (Recomendado)**

```bash
# Clona el repositorio
git clone https://github.com/tu-usuario/ets_infoplus_html.git
cd ets_infoplus_html

# Copia todos los archivos del proyecto aquí
# (index.html, css/, js/, images/, README.md, DEPLOYMENT.md)

# Agrega los archivos
git add .

# Commit
git commit -m "Initial commit: ETS InfoPlus"

# Push
git push origin main
```

**Opción B: Usando la Web de GitHub**

1. Ve a tu repositorio
2. Haz clic en "Add file" → "Upload files"
3. Arrastra y suelta todos los archivos
4. Haz clic en "Commit changes"

### Paso 3: Configurar GitHub Pages

1. Ve a tu repositorio
2. Haz clic en "Settings"
3. En el menú lateral, selecciona "Pages"
4. En "Source", selecciona:
   - Branch: `main`
   - Folder: `/ (root)`
5. Haz clic en "Save"

### Paso 4: Acceder al Sitio

Tu sitio estará disponible en:
```
https://tu-usuario.github.io/ets_infoplus_html/
```

**Nota**: Puede tomar 1-2 minutos para que GitHub publique el sitio.

### Verificación

- Abre tu navegador
- Ve a `https://tu-usuario.github.io/ets_infoplus_html/`
- Prueba todas las páginas y funcionalidades
- Verifica que las imágenes se carguen correctamente

---

## Netlify

### Opción 1: Despliegue Manual

1. Ve a https://app.netlify.com
2. Haz clic en "New site from Git"
3. Selecciona tu repositorio de GitHub
4. Configura:
   - **Build command**: (dejar vacío)
   - **Publish directory**: `.` (punto)
5. Haz clic en "Deploy site"

### Opción 2: Despliegue por Arrastrar y Soltar

1. Ve a https://app.netlify.com
2. Arrastra y suelta la carpeta `ets_infoplus_html`
3. Netlify desplegará automáticamente
4. Tu sitio estará disponible en una URL temporal

### Opción 3: Despliegue con Netlify CLI

```bash
# Instala Netlify CLI
npm install -g netlify-cli

# Navega a la carpeta del proyecto
cd ets_infoplus_html

# Inicia sesión en Netlify
netlify login

# Despliega
netlify deploy --prod
```

### Configurar Dominio Personalizado

1. Ve a tu sitio en Netlify
2. Haz clic en "Domain settings"
3. Haz clic en "Add custom domain"
4. Ingresa tu dominio (ej: ets-infoplus.com)
5. Sigue las instrucciones para configurar DNS

---

## Servidor Web Tradicional

### Requisitos

- Acceso a un servidor web (Apache, Nginx, IIS, etc.)
- FTP o acceso SSH
- Espacio en disco (mínimo 2 MB)

### Pasos

1. **Conecta al servidor**
   - Usa FTP (FileZilla, WinSCP)
   - O SSH (Terminal, PuTTY)

2. **Sube los archivos**
   ```
   /public_html/
   ├── index.html
   ├── css/
   │   └── styles.css
   ├── js/
   │   └── script.js
   ├── images/
   │   └── (todas las imágenes)
   └── README.md
   ```

3. **Verifica permisos**
   - Archivos: 644
   - Carpetas: 755

4. **Accede al sitio**
   - Si está en raíz: `https://tu-dominio.com`
   - Si está en subcarpeta: `https://tu-dominio.com/ets_infoplus_html`

### Configuración de .htaccess (Opcional)

Si usas Apache, crea un archivo `.htaccess` en la raíz:

```apache
# Habilitar compresión
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript
</IfModule>

# Cache de navegador
<IfModule mod_expires.c>
    ExpiresActive On
    ExpiresByType image/jpeg "access plus 1 year"
    ExpiresByType image/gif "access plus 1 year"
    ExpiresByType image/png "access plus 1 year"
    ExpiresByType text/css "access plus 1 month"
    ExpiresByType application/javascript "access plus 1 month"
    ExpiresByType text/html "access plus 1 week"
</IfModule>

# Reescritura de URLs para SPA
<IfModule mod_rewrite.c>
    RewriteEngine On
    RewriteBase /
    RewriteRule ^index\.html$ - [L]
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteRule . /index.html [L]
</IfModule>
```

---

## Solución de Problemas

### Las imágenes no se cargan

**Causa**: Rutas de imagen incorrectas

**Solución**:
1. Verifica que la carpeta `images/` esté en el mismo nivel que `index.html`
2. Verifica que los nombres de archivo sean correctos (sensibles a mayúsculas)
3. En el navegador, abre la consola (F12) y revisa los errores

### El sitio no se ve correctamente

**Causa**: CSS no se carga

**Solución**:
1. Verifica que `css/styles.css` exista
2. Verifica que la ruta en HTML sea correcta: `<link rel="stylesheet" href="css/styles.css">`
3. Limpia el caché del navegador (Ctrl+Shift+Delete)

### JavaScript no funciona

**Causa**: Script no se carga

**Solución**:
1. Verifica que `js/script.js` exista
2. Verifica que la ruta en HTML sea correcta: `<script src="js/script.js"></script>`
3. Abre la consola (F12) y revisa los errores

### Error 404 en GitHub Pages

**Causa**: Archivo `index.html` no está en la raíz

**Solución**:
1. Asegúrate de que `index.html` esté en la raíz del repositorio
2. No debe estar en una subcarpeta

### El sitio es muy lento

**Causa**: Imágenes no optimizadas

**Solución**:
1. Comprime las imágenes (usa TinyPNG, ImageOptim, etc.)
2. Usa formatos modernos (WebP)
3. Implementa lazy loading

### Los links no funcionan

**Causa**: Rutas incorrectas

**Solución**:
1. Verifica que los IDs de las secciones sean correctos
2. Usa rutas relativas: `href="#seccion"`
3. No uses rutas absolutas: `href="https://..."`

---

## Optimización para Producción

### 1. Minificar CSS y JavaScript

```bash
# Instala csso-cli y terser
npm install -g csso-cli terser

# Minifica CSS
csso css/styles.css -o css/styles.min.css

# Minifica JavaScript
terser js/script.js -o js/script.min.js
```

Luego actualiza los links en `index.html`:
```html
<link rel="stylesheet" href="css/styles.min.css">
<script src="js/script.min.js"></script>
```

### 2. Optimizar Imágenes

```bash
# Instala imagemin
npm install -g imagemin-cli imagemin-jpeg imagemin-png

# Optimiza imágenes
imagemin images/*.{jpg,png} --out-dir=images
```

### 3. Agregar Caché

En `.htaccess`:
```apache
<IfModule mod_expires.c>
    ExpiresActive On
    ExpiresByType text/css "access plus 1 month"
    ExpiresByType application/javascript "access plus 1 month"
    ExpiresByType image/jpeg "access plus 1 year"
    ExpiresByType image/png "access plus 1 year"
</IfModule>
```

### 4. Agregar Compresión

En `.htaccess`:
```apache
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript
</IfModule>
```

---

## Monitoreo y Mantenimiento

### Google Analytics

Agrega este código antes de `</body>` en `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GA_ID');
</script>
```

Reemplaza `GA_ID` con tu ID de Google Analytics.

### Certificado SSL

- **GitHub Pages**: Automático con HTTPS
- **Netlify**: Automático con HTTPS
- **Servidor tradicional**: Usa Let's Encrypt (gratis)

---

## Resumen Rápido

| Plataforma | Dificultad | Costo | Tiempo |
|-----------|-----------|-------|--------|
| GitHub Pages | Fácil | Gratis | 5 min |
| Netlify | Muy Fácil | Gratis | 2 min |
| Servidor Tradicional | Media | Pagado | 10 min |
| Local | Muy Fácil | Gratis | 1 min |

---

## Recomendación

Para máxima facilidad y mejor rendimiento:
1. **Usa Netlify** como principal (más rápido)
2. **Usa GitHub Pages** como respaldo (más control)

Ambos son gratuitos y pueden estar activos simultáneamente.

---

**¡Tu sitio está listo para el mundo!**

Para más ayuda, consulta la documentación oficial de cada plataforma.

