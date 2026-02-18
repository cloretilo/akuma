/* --- main.js --- */
const translations = {
    es: {
        "nav.home": "INICIO",
        "nav.hardware": "HARDWARE",
        "nav.firmware": "FIRMWARE",
        "nav.support": "SOPORTE",
        "status": "ESTADO: 100% INDETECTABLE / SEGURO",
        "hero.text": "Hardware DMA de grado militar y firmware FPGA con emulación 1:1. La ventaja invisible que estabas buscando.",
        "btn.catalog": "VER CATÁLOGO",
        "sec.title": "Arsenal Técnico",
        "sec.subtitle": "// ELIGE TU EQUIPAMIENTO",
        "card1.desc": "Basada en chip Xilinx Artix-7 35T. Gateware personalizado pre-instalado. Máxima velocidad de lectura.",
        "card1.btn": "VER DETALLES",
        "card2.desc": "Emulación perfecta de dispositivos reales (WIFI, Bluetooth, Ethernet). Totalmente invisible al sistema.",
        "card2.btn": "CONFIGURAR",
        "card3.desc": "Controlador de periféricos por red. Simulación de ratón y teclado indetectable.",
        "card3.btn": "AÑADIR AL CARRITO",
        "faq.title": "Preguntas Frecuentes",
        "faq.subtitle": "// DUDAS & RESPUESTAS",
        "faq.q1": "¿Es realmente indetectable?",
        "faq.a1": "Sí. Al usar DMA (Acceso Directo a Memoria), el hardware lee la memoria sin ejecutar código en la CPU del PC de juego. Para el sistema operativo y los anti-cheats, somos invisibles.",
        "faq.q2": "¿Hacéis envíos internacionales?",
        "faq.a2": "Enviamos a todo el mundo (Europa, LATAM, USA). El tiempo de envío estándar es de 3-7 días laborables mediante DHL o FedEx.",
        "faq.q3": "¿Necesito un segundo PC?",
        "faq.a3": "Sí, para garantizar la seguridad total, necesitas un segundo ordenador (puede ser un portátil básico) para procesar los datos que lee la tarjeta DMA.",
        "reviews.title": "Clientes Verificados",
        "reviews.subtitle": "// TESTIMONIOS",
        "reviews.r1": "\"La tarjeta llegó en 3 días a España. El firmware es extremadamente estable, llevo 6 meses en FaceIT sin problemas.\"",
        "reviews.r2": "\"El soporte en Telegram es excelente. Me ayudaron a configurar el KMBox cuando me atasqué. Recomendado.\"",
        "reviews.r3": "\"Hardware de calidad industrial. Nada que ver con las copias baratas. Vale cada euro invertido.\"",
        "reviews.r4": "\"Envío rápido a Alemania. La configuración fue más fácil de lo que pensaba gracias a la guía incluida.\"",
        "reviews.r5": "\"Indetectable en Vanguard y EAC. Llevo usándolo un año y sigue funcionando perfecto.\"",
        "reviews.r6": "\"La mejor inversión para mi setup. El firmware 1:1 realmente marca la diferencia.\"",
        "footer.disclaimer": "DESCARGO DE RESPONSABILIDAD: Todo el material es para fines educativos y de investigación de seguridad. El uso indebido es responsabilidad del usuario final.",
        "hw.title": "DMA V5 BOARD",
        "hw.subtitle": "// ESPECIFICACIONES TÉCNICAS",
        "hw.desc": "Lectura de memoria directa sin carga en la CPU. Latencia ultrabaja. Incluye Kill-Switch físico de emergencia.",
        "hw.btn": "COMPRAR AHORA - €299",
        "fw.title": "FIRMWARE 1:1",
        "fw.subtitle": "// EMULACIÓN TOTAL",
        "fw.desc": "Compilación única por usuario. Emula una tarjeta de red legítima para evitar vectores de detección por comportamiento.",
        "fw.list1": "> Espacio de Configuración Único",
        "fw.list2": "> Driver Signing Bypass",
        "fw.list3": "> Actualizaciones en la Nube",
        "fw.btn": "SOLICITAR BUILD - €149"
    },
    en: {
        "nav.home": "HOME",
        "nav.hardware": "HARDWARE",
        "nav.firmware": "FIRMWARE",
        "nav.support": "SUPPORT",
        "status": "STATUS: 100% UNDETECTED / SAFE",
        "hero.text": "Military-grade DMA Hardware and 1:1 FPGA Firmware. The invisible advantage you were looking for.",
        "btn.catalog": "VIEW CATALOG",
        "sec.title": "Technical Arsenal",
        "sec.subtitle": "// SELECT YOUR GEAR",
        "card1.desc": "Based on Xilinx Artix-7 35T. Custom Gateware pre-flashed. Maximum read speed.",
        "card1.btn": "VIEW DETAILS",
        "card2.desc": "Perfect 1:1 emulation of real devices (WIFI, Bluetooth, Ethernet). Completely invisible to the system.",
        "card2.btn": "CONFIGURE",
        "card3.desc": "Network peripheral controller. Undetectable mouse and keyboard simulation.",
        "card3.btn": "ADD TO CART",
        "faq.title": "F.A.Q.",
        "faq.subtitle": "// QUESTIONS & ANSWERS",
        "faq.q1": "Is it really undetectable?",
        "faq.a1": "Yes. By using DMA (Direct Memory Access), the hardware reads memory without running code on the gaming PC's CPU. We are invisible to the OS and anti-cheats.",
        "faq.q2": "Do you ship internationally?",
        "faq.a2": "We ship worldwide (Europe, LATAM, USA). Standard shipping time is 3-7 business days via DHL or FedEx.",
        "faq.q3": "Do I need a second PC?",
        "faq.a3": "Yes, to guarantee total safety, you need a second computer (a basic laptop works) to process the data read by the DMA card.",
        "reviews.title": "Verified Clients",
        "reviews.subtitle": "// TESTIMONIALS",
        "reviews.r1": "\"Card arrived in 3 days. Firmware is extremely stable, been on FaceIT for 6 months with zero issues.\"",
        "reviews.r2": "\"Telegram support is top tier. They helped me set up the KMBox when I got stuck. Highly recommended.\"",
        "reviews.r3": "\"Industrial quality hardware. Nothing like those cheap copies. Worth every penny.\"",
        "reviews.r4": "\"Fast shipping to Germany. Setup was easier than I thought thanks to the included guide.\"",
        "reviews.r5": "\"Undetected on Vanguard and EAC. Been using it for a year and it still works perfectly.\"",
        "reviews.r6": "\"Best investment for my setup. The 1:1 firmware really makes the difference.\"",
        "footer.disclaimer": "DISCLAIMER: All material is for educational and security research purposes only. Misuse is the sole responsibility of the end user.",
        "hw.title": "DMA V5 BOARD",
        "hw.subtitle": "// TECH SPECS",
        "hw.desc": "Direct memory access with zero CPU load. Ultra-low latency. Includes physical emergency Kill-Switch.",
        "hw.btn": "BUY NOW - €299",
        "fw.title": "1:1 FIRMWARE",
        "fw.subtitle": "// FULL EMULATION",
        "fw.desc": "Unique build per user. Emulates a legitimate network card to avoid behavioral detection vectors.",
        "fw.list1": "> Unique Config Space",
        "fw.list2": "> Driver Signing Bypass",
        "fw.list3": "> Cloud Updates",
        "fw.btn": "REQUEST BUILD - €149"
    }
};

document.addEventListener('DOMContentLoaded', () => {
    // 1. Lógica de Idioma
    const langSelect = document.getElementById('language-select');
    const currentLang = localStorage.getItem('site-lang') || 'es';
    if(langSelect) {
        langSelect.value = currentLang;
        updateLanguage(currentLang);
        langSelect.addEventListener('change', (e) => {
            const selectedLang = e.target.value;
            localStorage.setItem('site-lang', selectedLang); 
            updateLanguage(selectedLang);
        });
    }

    // 2. Lógica FAQ Acordeón
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        item.querySelector('.faq-question').addEventListener('click', () => {
            faqItems.forEach(i => { if (i !== item) i.classList.remove('active'); });
            item.classList.toggle('active');
        });
    });

    // 3. Animación Scroll Tarjetas
    const cards = document.querySelectorAll('.card');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    cards.forEach(card => {
        if(!card.classList.contains('review-card')) { // Excluir las tarjetas del carrusel para que no afecte la animacion
            card.style.opacity = 0;
            card.style.transform = 'translateY(50px)';
            card.style.transition = 'all 0.6s ease-out';
            observer.observe(card);
        }
    });
});

function updateLanguage(lang) {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            element.innerText = translations[lang][key];
        }
    });
}