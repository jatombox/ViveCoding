# Guía Completa: Desplegar en GitHub Pages SIN Errores 404

## ⚠️ Problema Común

Al desplegar en GitHub Pages, ves un error **404 "File not found"** cuando intentas acceder a rutas como:
- `https://tu-usuario.github.io/ets_infoplus_html/educacion`
- `https://tu-usuario.github.io/ets_infoplus_html/prevencion`

## ✅ Solución

He incluido un archivo `404.html` que redirige automáticamente todas las rutas a `index.html`. Esto permite que la navegación funcione correctamente.

---

## Paso 1: Crear Repositorio en GitHub

1. Ve a https://github.com/new
2. **Nombre del repositorio**: `ets_infoplus_html`
3. **Descripción**: "Plataforma de educación y prevención en ETS"
4. **Visibilidad**: Selecciona "Public"
5. Haz clic en **"Create repository"**

---

## Paso 2: Subir los Archivos

### Opción A: Con Git (Recomendado)

**En tu computadora:**

```bash
# 1. Abre la terminal/CMD
# 2. Navega a la carpeta donde descargaste el ZIP
cd ruta/a/ets_infoplus_html

# 3. Inicializa Git
git init

# 4. Agrega tu usuario de GitHub
git config user.name "Tu Nombre"
git config user.email "tu-email@gmail.com"

# 5. Agrega todos los archivos
git add .

# 6. Crea el primer commit
git commit -m "Initial commit: ETS InfoPlus"

# 7. Agrega el repositorio remoto
git remote add origin https://github.com/tu-usuario/ets_infoplus_html.git

# 8. Sube los archivos
git branch -M main
git push -u origin main
```

**Reemplaza:**
- `Tu Nombre` con tu nombre
- `tu-email@gmail.com` con tu email
- `tu-usuario` con tu usuario de GitHub

### Opción B: Interfaz Web de GitHub

1. Ve a tu repositorio en GitHub
2. Haz clic en **"Add file"** → **"Upload files"**
3. Arrastra y suelta todos los archivos y carpetas:
   - `index.html`
   - `404.html`
   - Carpeta `css/`
   - Carpeta `js/`
   - Carpeta `images/`
   - `README.md`
   - `DEPLOYMENT.md`
4. Haz clic en **"Commit changes"**

---

## Paso 3: Configurar GitHub Pages

1. Ve a tu repositorio: `https://github.com/tu-usuario/ets_infoplus_html`
2. Haz clic en **"Settings"** (arriba a la derecha)
3. En el menú lateral izquierdo, selecciona **"Pages"**
4. En la sección **"Build and deployment"**:
   - **Source**: Selecciona **"Deploy from a branch"**
   - **Branch**: Selecciona **"main"** y **"/ (root)"**
5. Haz clic en **"Save"**

---

## Paso 4: Esperar a que se Publique

GitHub Pages tardará 1-2 minutos en publicar tu sitio.

1. Ve a la pestaña **"Deployments"** en tu repositorio
2. Verás un mensaje como **"Your site is live at..."**
3. Haz clic en el enlace o ve a:

```
https://tu-usuario.github.io/ets_infoplus_html/
```

---

## Paso 5: Verificar que Funciona

Prueba lo siguiente:

✅ **Página de inicio**
```
https://tu-usuario.github.io/ets_infoplus_html/
```

✅ **Educación**
```
https://tu-usuario.github.io/ets_infoplus_html/
```
(Haz clic en "Educación" en el menú)

✅ **Prevención**
```
https://tu-usuario.github.io/ets_infoplus_html/
```
(Haz clic en "Prevención" en el menú)

✅ **Síntomas**
```
https://tu-usuario.github.io/ets_infoplus_html/
```
(Haz clic en "Síntomas" en el menú)

✅ **Recursos**
```
https://tu-usuario.github.io/ets_infoplus_html/
```
(Haz clic en "Recursos" en el menú)

✅ **Acerca de**
```
https://tu-usuario.github.io/ets_infoplus_html/
```
(Haz clic en "Acerca de" en el menú)

---

## ¿Por Qué Ahora Funciona?

El archivo `404.html` que incluí hace lo siguiente:

1. **GitHub Pages intenta cargar** una ruta como `/educacion`
2. **No encuentra el archivo** y devuelve un 404
3. **GitHub Pages carga automáticamente** el archivo `404.html`
4. **El script en 404.html redirige** a `index.html`
5. **JavaScript en index.html maneja** la navegación correctamente

---

## Solución de Problemas

### Aún veo error 404

**Solución 1: Limpia el caché**
- Presiona `Ctrl+Shift+Delete` (Windows) o `Cmd+Shift+Delete` (Mac)
- Selecciona "Cached images and files"
- Haz clic en "Clear data"
- Recarga la página

**Solución 2: Espera más tiempo**
- GitHub Pages puede tomar hasta 5 minutos
- Ve a "Deployments" y verifica el estado

**Solución 3: Verifica la configuración**
- Ve a Settings → Pages
- Asegúrate de que Source sea "Deploy from a branch"
- Asegúrate de que la rama sea "main" y la carpeta sea "/ (root)"

### Las imágenes no se cargan

**Solución:**
1. Abre la consola (F12)
2. Revisa los errores de red
3. Verifica que la carpeta `images/` esté en el repositorio
4. Verifica que los nombres de archivo sean exactos (sensibles a mayúsculas)

### El menú no funciona

**Solución:**
1. Abre la consola (F12)
2. Revisa si hay errores de JavaScript
3. Verifica que `js/script.js` esté en el repositorio
4. Verifica que `css/styles.css` esté en el repositorio

---

## Comandos Git Útiles

### Actualizar el sitio después de cambios

```bash
# 1. Haz cambios en los archivos
# 2. Abre la terminal en la carpeta del proyecto

# 3. Agrega los cambios
git add .

# 4. Crea un commit
git commit -m "Descripción de los cambios"

# 5. Sube los cambios
git push origin main
```

### Ver el estado

```bash
git status
```

### Ver el historial de cambios

```bash
git log --oneline
```

---

## Estructura Correcta en GitHub

Tu repositorio debe verse así:

```
ets_infoplus_html/
├── index.html
├── 404.html
├── README.md
├── DEPLOYMENT.md
├── GITHUB_SETUP.md
├── css/
│   └── styles.css
├── js/
│   └── script.js
└── images/
    ├── Bip5KyQVTCxN.png
    ├── CKy5GmEPtwT9.jpg
    ├── EcTYBhlLUzLT.jpg
    ├── ONuacT5P65YA.jpeg
    ├── PXXdoc8aUGoq.svg
    ├── RMOviJMBhtvW.jpg
    ├── r8BIPvLVWdzu.jpg
    └── tDtDjY5HQbiT.png
```

---

## Resumen Rápido

| Paso | Acción |
|------|--------|
| 1 | Crear repositorio en GitHub |
| 2 | Subir archivos (Git o web) |
| 3 | Ir a Settings → Pages |
| 4 | Seleccionar "main" y "/ (root)" |
| 5 | Esperar 1-2 minutos |
| 6 | ¡Acceder a tu sitio! |

---

## Preguntas Frecuentes

**P: ¿Por qué necesito el archivo 404.html?**
R: GitHub Pages no redirige automáticamente las rutas SPA. El archivo 404.html lo hace.

**P: ¿Puedo usar un dominio personalizado?**
R: Sí, ve a Settings → Pages → Custom domain

**P: ¿Puedo cambiar el nombre del repositorio?**
R: Sí, pero la URL cambiará. Mejor mantenerlo como `ets_infoplus_html`.

**P: ¿Cuánto tiempo tarda en publicarse?**
R: Normalmente 1-2 minutos. A veces hasta 5 minutos.

**P: ¿Puedo hacer cambios después de desplegar?**
R: Sí, solo haz cambios y sube con `git push`.

---

## Soporte

Si tienes problemas:

1. Revisa la consola del navegador (F12)
2. Verifica que todos los archivos estén en el repositorio
3. Verifica la configuración de GitHub Pages
4. Intenta limpiar el caché del navegador
5. Espera a que GitHub Pages termine de publicar

---

**¡Tu sitio está listo para el mundo! 🚀**

Para más ayuda, consulta:
- https://docs.github.com/en/pages
- https://docs.github.com/en/pages/getting-started-with-github-pages


