// ============================================
// NAVEGACIÓN Y PÁGINAS
// ============================================

function navigateTo(pageId) {
    // Ocultar todas las páginas
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));

    // Mostrar la página seleccionada
    const selectedPage = document.getElementById(pageId);
    if (selectedPage) {
        selectedPage.classList.add('active');
    }

    // Actualizar links activos en navegación
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => link.classList.remove('active'));
    
    const activeLink = document.querySelector(`a[href="#${pageId}"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    }

    // Cerrar menú hamburguesa
    const navMenu = document.getElementById('navMenu');
    if (navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
    }

    // Scroll al inicio
    window.scrollTo(0, 0);
}

// ============================================
// MENÚ HAMBURGUESA
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');

    if (hamburger) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }

    // Cerrar menú al hacer clic en un link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
        });
    });

    // Inicializar página de inicio
    navigateTo('inicio');
});

// ============================================
// GALERÍA
// ============================================

function openGallery(index) {
    const images = [
        {
            src: 'images/tDtDjY5HQbiT.png',
            caption: 'Enfermedades de Transmisión Sexual'
        },
        {
            src: 'images/ONuacT5P65YA.jpeg',
            caption: 'Guía de Prevención de ETS'
        },
        {
            src: 'images/Bip5KyQVTCxN.png',
            caption: 'Educación Sexual Integral'
        },
        {
            src: 'images/CKy5GmEPtwT9.jpg',
            caption: 'Tipos de Patógenos'
        }
    ];

    const modal = document.getElementById('galleryModal');
    const modalImage = document.getElementById('modalImage');
    const caption = document.getElementById('caption');

    if (images[index]) {
        modal.style.display = 'block';
        modalImage.src = images[index].src;
        caption.innerHTML = images[index].caption;
    }
}

function closeGallery() {
    const modal = document.getElementById('galleryModal');
    modal.style.display = 'none';
}

// Cerrar modal al hacer clic fuera de la imagen
window.addEventListener('click', function(event) {
    const modal = document.getElementById('galleryModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// ============================================
// SÍNTOMAS
// ============================================

const symptomsData = {
    clamidia: {
        title: 'Clamidia',
        symptoms: [
            'Flujo vaginal anormal o uretral',
            'Dolor al orinar',
            'Dolor durante las relaciones sexuales',
            'Dolor abdominal bajo',
            'Sangrado entre períodos menstruales',
            'Muchos casos son asintomáticos'
        ]
    },
    gonorrea: {
        title: 'Gonorrea',
        symptoms: [
            'Flujo genital purulento',
            'Dolor al orinar',
            'Dolor o inflamación testicular',
            'Dolor abdominal',
            'Secreción rectal',
            'Irritación de garganta'
        ]
    },
    sifilis: {
        title: 'Sífilis',
        symptoms: [
            'Úlcera indolora (chancro) en genitales',
            'Erupción cutánea en todo el cuerpo',
            'Fiebre',
            'Ganglios linfáticos inflamados',
            'Fatiga y debilidad',
            'Dolor articular'
        ]
    },
    vih: {
        title: 'VIH/SIDA',
        symptoms: [
            'Fiebre',
            'Fatiga',
            'Dolor articular y muscular',
            'Ganglios linfáticos inflamados',
            'Erupciones cutáneas',
            'Úlceras bucales',
            'Muchos casos sin síntomas iniciales'
        ]
    },
    herpes: {
        title: 'Herpes Genital',
        symptoms: [
            'Ampollas dolorosas en genitales',
            'Picazón o ardor',
            'Dolor al orinar',
            'Secreción vaginal',
            'Síntomas similares a la gripe',
            'Ganglios linfáticos inflamados'
        ]
    },
    tricomoniasis: {
        title: 'Tricomoniasis',
        symptoms: [
            'Flujo vaginal espumoso y verdoso',
            'Olor vaginal fuerte',
            'Picazón o irritación genital',
            'Dolor al orinar',
            'Dolor durante las relaciones sexuales',
            'Síntomas pueden aparecer 5-28 días después de la exposición'
        ]
    }
};

function showSymptoms(etsType) {
    const data = symptomsData[etsType];
    const display = document.getElementById('symptom-display');
    const title = document.getElementById('symptom-title');
    const list = document.getElementById('symptom-list');

    if (data) {
        title.innerHTML = data.title;
        list.innerHTML = '';
        
        data.symptoms.forEach(symptom => {
            const li = document.createElement('li');
            li.textContent = symptom;
            list.appendChild(li);
        });

        display.style.display = 'block';
        
        // Scroll a la sección de síntomas
        display.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// ============================================
// SMOOTH SCROLL PARA ENLACES
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#' && !href.includes('onclick')) {
            e.preventDefault();
            const pageId = href.substring(1);
            navigateTo(pageId);
        }
    });
});

// ============================================
// FUNCIONALIDAD ADICIONAL
// ============================================

// Detectar cambios en el hash de la URL
window.addEventListener('hashchange', function() {
    const hash = window.location.hash.substring(1);
    if (hash) {
        navigateTo(hash);
    }
});

// Agregar animación al scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 0) {
        header.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
    }
});

// ============================================
// VALIDACIÓN Y UTILIDADES
// ============================================

// Función para descargar archivos (simulada)
function downloadFile(filename) {
    alert(`Descargando: ${filename}\n\nEn una aplicación real, esto descargaría el archivo.`);
}

// Función para enviar formularios (simulada)
function submitForm(formId) {
    alert('Formulario enviado correctamente.\n\nEn una aplicación real, esto enviaría los datos a un servidor.');
}

// ============================================
// INICIALIZACIÓN
// ============================================

console.log('ETS InfoPlus - Plataforma de Educación y Prevención');
console.log('Versión: 1.0.0');
console.log('Todos los derechos reservados © 2024');

