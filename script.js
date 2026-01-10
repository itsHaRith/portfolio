// تفعيل القائمة في الموبايل
const mobileMenu = document.getElementById('mobile-menu');
const navMenu = document.querySelector('.nav-menu');

if (mobileMenu) {
    mobileMenu.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

// زر الصعود للأعلى
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
};

scrollToTopBtn.addEventListener("click", function() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

// أنيميشن المهارات (Skills Animation)
const skillsSection = document.querySelector('.skills-section');
const skillItems = document.querySelectorAll('.skill-item');

const observerOptions = {
    threshold: 0.5 // يبدأ الأنيميشن عندما يظهر 50% من القسم
};

const skillsObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            skillItems.forEach(item => {
                const target = item.getAttribute('data-target');
                const fill = item.querySelector('.fill');
                const percentText = item.querySelector('.skill-percent');
                
                // تحريك الشريط
                fill.style.width = target + '%';
                
                // عداد الأرقام
                let count = 0;
                const updateCount = () => {
                    const increment = target / 50; // سرعة العد
                    if(count < target) {
                        count += increment;
                        if (count > target) count = target;
                        percentText.innerText = Math.ceil(count) + "%";
                        requestAnimationFrame(updateCount);
                    } else {
                        percentText.innerText = target + "%";
                    }
                };
                updateCount();
            });
            // إيقاف المراقبة بعد التشغيل مرة واحدة
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

if (skillsSection) {
    skillsObserver.observe(skillsSection);
}

// إظهار العناصر عند السكرول (للعناصر التي تحمل كلاس hidden)
const hiddenElements = document.querySelectorAll('.hidden');
const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

hiddenElements.forEach((el) => scrollObserver.observe(el));

// --- Translation & Language Switcher ---
const translations = {
    en: {
        nav_home: "Home",
        nav_services: "Services",
        nav_contact: "Contact",
        hero_title: 'Hi, I\'m <span class="highlight">Harith</span>',
        hero_desc: "I work as a Freelance Web Developer specializing in building modern websites and applications. I combine my practical market experience with my academic studies in Computer Science at the University of Technology, giving me a deep understanding of programming fundamentals and the latest technologies. I master database management (MongoDB), Front-end development, and User Experience (UX) to provide you with a complete and professional digital product.",
        btn_contact: "Contact Me",
        btn_projects: "View Projects",
        skills_title: "Skills",
        projects_title: "My Projects",
        proj_1_title: "Commercial Website Design",
        proj_1_desc: "A fully responsive website to display products and services professionally.",
        btn_visit: "Visit Site",
        proj_2_title: "TEDx Website",
        proj_2_desc: "Design and development of a TEDx event website, including speakers and schedule.",
        gallery_title: "Gallery",
        gallery_desc: "A glimpse of my university and professional life",
        footer_about: "Web Designer & Developer aiming to provide the best digital solutions. Thanks for visiting my portfolio.",
        footer_links: "Quick Links",
        footer_uni: "University of Technology",
        footer_copy: "All rights reserved &copy; 2023 HaRith",
        services_page_title: "Services & Pricing",
        services_desc: "I offer professional software solutions at competitive prices.",
        service_1_title: "Portfolio Building",
        price_1: "20$",
        service_1_f1: "Modern and attractive design",
        service_1_f2: "Responsive to all screens",
        service_1_f3: "Social media integration",
        service_1_f4: "(Price excludes domain)",
        btn_order: "Order Now",
        service_simple_title: "Basic",
        price_simple: "$50",
        service_simple_desc: "High-converting Landing Page for ad campaigns",
        service_medium_title: "Standard",
        price_medium: "$150",
        service_medium_desc: "Professional 5-page website (Home, About, Services...)",
        service_advanced_title: "Premium",
        price_advanced: "$300+",
        service_advanced_desc: "Dynamic website with Admin Dashboard & Official Emails",
        contact_name: "Harith",
        contact_bio: "Web Developer and UI Designer, currently working on private projects and studying at the University of Technology. Available for Full Stack projects or UI design. You can contact me directly via the platforms below to discuss your project details."
    },
    ar: {
        nav_home: "الرئيسية",
        nav_services: "خدماتي",
        nav_contact: "تواصل",
        hero_title: 'أهلاً، أنا <span class="highlight">حارث</span>',
        hero_desc: "أعمل كمطور ويب مستقل (Freelancer) متخصص في بناء المواقع والتطبيقات الحديثة. أجمع بين خبرتي العملية في السوق وبين دراستي الأكاديمية في قسم علوم الحاسوب بالجامعة التكنولوجية، مما يمنحني فهماً عميقاً للأساسيات البرمجية وأحدث التقنيات. أتقن التعامل مع قواعد البيانات (MongoDB) وتطوير الواجهات (Front-end) وتجربة المستخدم، لأقدم لك منتجاً رقمياً متكاملاً واحترافياً.",
        btn_contact: "تواصل",
        btn_projects: "شاهد أعمالي",
        skills_title: "المهارات",
        projects_title: "مشاريعي",
        proj_1_title: "تصميم موقع تجاري",
        proj_1_desc: "موقع متجاوب بالكامل لعرض المنتجات والخدمات بشكل احترافي.",
        btn_visit: "زيارة الموقع",
        proj_2_title: "موقع تيدكس (TEDx)",
        proj_2_desc: "تصميم وتطوير موقع لحدث تيدكس، يشمل المتحدثين والجدول الزمني.",
        gallery_title: "المعرض",
        gallery_desc: "جانب من حياتي الجامعية والمهنية",
        footer_about: "مصمم ومطور ويب أهدف لتقديم أفضل الحلول الرقمية. شكراً لزيارتك موقعي الشخصي.",
        footer_links: "روابط سريعة",
        footer_uni: "الجامعة التكنولوجية",
        footer_copy: "جميع الحقوق محفوظة &copy; 2023 HaRith",
        services_page_title: "الخدمات والأسعار",
        services_desc: "أقدم لك حلول برمجية احترافية بأسعار تنافسية.",
        service_1_title: "بناء بورتفوليو",
        price_1: "20$",
        service_1_f1: "تصميم عصري وجذاب",
        service_1_f2: "متجاوب مع جميع الشاشات",
        service_1_f3: "ربط مواقع التواصل",
        service_1_f4: "(السعر لا يشمل الدومين)",
        btn_order: "اطلب الآن",
        service_simple_title: "أساسي",
        price_simple: "$50",
        service_simple_desc: "صفحة هبوط (Landing Page) مخصصة للحملات الإعلانية",
        service_medium_title: "متوسط",
        price_medium: "$150",
        service_medium_desc: "موقع تعريفي متكامل (5 صفحات) لعرض خدماتك",
        service_advanced_title: "متقدم",
        price_advanced: "$300+",
        service_advanced_desc: "موقع ديناميكي مع لوحة تحكم (Dashboard) وبريد رسمي",
        contact_name: "حارث",
        contact_bio: "مطور ويب ومصمم واجهات، أعمل حالياً على مشاريع خاصة وأدرس في الجامعة التكنولوجية. متاح لاستلام مشاريع برمجية كاملة (Full Stack) أو تصميم واجهات. يمكنك التواصل معي مباشرة عبر المنصات أدناه لمناقشة تفاصيل مشروعك."
    }
};

const langBtn = document.getElementById('lang-btn');
const elements = document.querySelectorAll('[data-i18n]');

function setLanguage(lang) {
    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    
    langBtn.textContent = lang === 'ar' ? 'EN' : 'AR';
    localStorage.setItem('lang', lang);

    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });
}

langBtn.addEventListener('click', () => {
    const currentLang = document.documentElement.getAttribute('lang');
    setLanguage(currentLang === 'en' ? 'ar' : 'en');
});

// Load saved language
const savedLang = localStorage.getItem('lang') || 'en';
setLanguage(savedLang);

// --- Theme Switcher (Dark/Light) ---
const themeBtn = document.getElementById('theme-btn');
const htmlElement = document.documentElement;

function setTheme(theme) {
    htmlElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
}

themeBtn.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
});

// تحميل الثيم المحفوظ
const savedTheme = localStorage.getItem('theme') || 'dark';
setTheme(savedTheme);