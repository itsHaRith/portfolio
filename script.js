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
    // دالة للصعود الناعم والبطيء
    const duration = 1500; // المدة بالمللي ثانية (1.5 ثانية) - عدل هذا الرقم لزيادة/إنقاص السرعة
    const start = window.scrollY;
    const startTime = performance.now();

    function animation(currentTime) {
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);
        
        // دالة Ease Out Cubic لحركة ناعمة في النهاية
        const ease = 1 - Math.pow(1 - progress, 3);
        
        window.scrollTo(0, start * (1 - ease));

        if (timeElapsed < duration) {
            requestAnimationFrame(animation);
        }
    }
    requestAnimationFrame(animation);
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
        skills_frontend: "Front-End",
        skills_backend: "Back-End & DBs",
        skills_design: "Design & 3D",
        skills_languages: "Languages",
        skill_ar: "Arabic (Native)",
        skill_en: "English (B2)",
        projects_title: "My Projects",
        proj_1_title: "Educational Courses Platform",
        proj_1_desc: "A modern and interactive platform for online courses, featuring an intuitive UI and responsive design for an optimal learning experience.",
        btn_visit: "Visit Site",
        proj_2_title: "TEDx Website",
        proj_2_desc: "Design and development of a TEDx event website, including speakers and schedule.",
        proj_3_title: "Attendance Management System",
        proj_3_desc: "A fully integrated check-in and attendance tracking system with a comprehensive dashboard.",
        proj_4_title: "Sky Beauty E-commerce",
        proj_4_desc: "A complete cosmetics store with an admin dashboard, full inventory control, and delivery management.",
        proj_5_title: "Nexus Portfolio Template",
        proj_5_desc: "A modern and customizable portfolio template designed for developers and creatives.",
        proj_6_title: "Restaurant Menu & Landing Page",
        proj_6_desc: "An interactive digital menu seamlessly connected with a professional restaurant landing page.",
        gallery_title: "Gallery",
        gallery_desc: "A glimpse of my university and professional life",
        footer_about: "Web Designer & Developer aiming to provide the best digital solutions. Thanks for visiting my portfolio.",
        footer_links: "Quick Links",
        footer_uni: "University of Technology",
        footer_copy: "All rights reserved &copy; 2023 HaRith",
        services_page_title: "Services & Pricing",
        services_desc: "I offer professional software solutions at competitive prices.",
        btn_order: "Order Now",
        serv_1_title: "Landing Page / Portfolio",
        price_1: "Starts at $50",
        serv_1_f1: "Single page or personal portfolio",
        serv_1_f2: "Frontend only (React & Tailwind)",
        serv_1_f3: "Responsive design & fast loading",
        serv_1_f4: "Free hosting setup (Vercel/GitHub)",
        serv_2_title: "Business Website",
        price_2: "Starts at $150",
        serv_2_f1: "Multi-page site (Home, About, Services)",
        serv_2_f2: "Modern UI/UX using Next.js",
        serv_2_f3: "Basic SEO & Contact Forms",
        serv_2_f4: "Custom Domain setup assistance",
        serv_3_title: "E-Commerce & Dynamic",
        price_3: "Starts at $350",
        serv_3_f1: "Online store or dynamic site",
        serv_3_f2: "Full Stack (Next.js + MongoDB)",
        serv_3_f3: "Admin Dashboard for management",
        serv_3_f4: "Includes Domain for the 1st year",
        serv_4_title: "Custom Web System",
        price_4: "Starts at $600+",
        serv_4_f1: "Complex systems (CRM, Attendance, etc.)",
        serv_4_f2: "Custom Backend (Python/Django)",
        serv_4_f3: "Advanced Databases & Secure APIs",
        serv_4_f4: "Scalable Cloud Deployment",
        contact_name: "Harith",
        modal_btn_confirm: "Confirm Order & Contact",
        contact_bio: "Web Developer and UI Designer, currently working on private projects and studying at the University of Technology. Available for Full Stack projects or UI design. You can contact me directly via the platforms below to discuss your project details.",
        alt_hero_img: "Harith's Photo",
        alt_gallery_img: "Personal Photo"
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
        skills_frontend: "تطوير الواجهات",
        skills_backend: "الخوادم وقواعد البيانات",
        skills_design: "التصميم وثلاثي الأبعاد",
        skills_languages: "اللغات",
        skill_ar: "العربية (اللغة الأم)",
        skill_en: "الإنجليزية (مستوى B2)",
        projects_title: "مشاريعي",
        proj_1_title: "منصة كورسات تعليمية",
        proj_1_desc: "منصة تفاعلية وحديثة للكورسات عبر الإنترنت، تتميز بواجهة مستخدم سلسة وتصميم متجاوب لضمان أفضل تجربة تعليمية.",
        btn_visit: "زيارة الموقع",
        proj_2_title: "موقع تيدكس (TEDx)",
        proj_2_desc: "تصميم وتطوير موقع لحدث تيدكس، يشمل المتحدثين والجدول الزمني.",
        proj_3_title: "نظام تسجيل الحضور المتكامل",
        proj_3_desc: "نظام متكامل لتسجيل ومتابعة الحضور والانصراف مع لوحة تحكم شاملة لإدارة البيانات.",
        proj_4_title: "متجر سكاي بيوتي لمستحضرات التجميل",
        proj_4_desc: "متجر إلكتروني متكامل لمستحضرات التجميل مع لوحة تحكم، إدارة المخزون، ونظام التوصيل.",
        proj_5_title: "قالب بورتفوليو Nexus",
        proj_5_desc: "قالب بورتفوليو حديث واحترافي قابل للتخصيص، مصمم خصيصاً للمطورين والمبدعين.",
        proj_6_title: "منيو رقمي وموقع تعريفي للمطاعم",
        proj_6_desc: "منيو مطاعم تفاعلي متصل بموقع تعريفي متكامل لعرض تفاصيل وخدمات المطعم.",
        gallery_title: "المعرض",
        gallery_desc: "جانب من حياتي الجامعية والمهنية",
        footer_about: "مصمم ومطور ويب أهدف لتقديم أفضل الحلول الرقمية. شكراً لزيارتك موقعي الشخصي.",
        footer_links: "روابط سريعة",
        footer_uni: "الجامعة التكنولوجية",
        footer_copy: "جميع الحقوق محفوظة &copy; 2023 HaRith",
        services_page_title: "الخدمات والأسعار",
        services_desc: "أقدم لك حلول برمجية احترافية بأسعار تنافسية.",
        btn_order: "اطلب الآن",
        serv_1_title: "صفحة هبوط / بورتفوليو",
        price_1: "يبدأ من $50",
        serv_1_f1: "صفحة واحدة أو بورتفوليو شخصي",
        serv_1_f2: "واجهات فقط (Front-End) بـ React و Tailwind",
        serv_1_f3: "تصميم متجاوب وسريع التحميل",
        serv_1_f4: "استضافة مجانية على (Vercel/GitHub)",
        serv_2_title: "موقع تعريفي للأعمال",
        price_2: "يبدأ من $150",
        serv_2_f1: "موقع متعدد الصفحات (الرئيسية، خدمات...)",
        serv_2_f2: "تجربة مستخدم حديثة باستخدام Next.js",
        serv_2_f3: "تحسين محركات البحث ونماذج تواصل",
        serv_2_f4: "المساعدة في حجز وربط الدومين (Domain)",
        serv_3_title: "متاجر ومواقع ديناميكية",
        price_3: "يبدأ من $350",
        serv_3_f1: "متجر إلكتروني أو موقع محتوى ديناميكي",
        serv_3_f2: "برمجة متكاملة (Full Stack) بـ Next.js و MongoDB",
        serv_3_f3: "لوحة تحكم (Dashboard) لإدارة المنتجات",
        serv_3_f4: "السعر يشمل دومين مجاني للسنة الأولى",
        serv_4_title: "أنظمة برمجية مخصصة",
        price_4: "يبدأ من $600+",
        serv_4_f1: "تطبيقات معقدة (أنظمة حضور، CRM...)",
        serv_4_f2: "باك إند مخصص (Back-End) بـ Python/Django",
        serv_4_f3: "قواعد بيانات متقدمة وحماية عالية (APIs)",
        serv_4_f4: "استضافة سحابية قابلة للتوسع",
        contact_name: "حارث",
        modal_btn_confirm: "تأكيد الطلب والتواصل",
        contact_bio: "مطور ويب ومصمم واجهات، أعمل حالياً على مشاريع خاصة وأدرس في الجامعة التكنولوجية. متاح لاستلام مشاريع برمجية كاملة (Full Stack) أو تصميم واجهات. يمكنك التواصل معي مباشرة عبر المنصات أدناه لمناقشة تفاصيل مشروعك.",
        alt_hero_img: "صورة حارث",
        alt_gallery_img: "صورة خاصة"
    }
};

const langBtn = document.getElementById('lang-btn');
const elements = document.querySelectorAll('[data-i18n]');

function setLanguage(lang) {
    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    
    if (langBtn) {
        langBtn.textContent = lang === 'ar' ? 'EN' : 'AR';
    }
    localStorage.setItem('lang', lang);

    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            if (el.tagName === 'IMG') {
                el.setAttribute('alt', translations[lang][key]);
            } else {
                el.innerHTML = translations[lang][key];
            }
        }
    });
}

if (langBtn) {
    langBtn.addEventListener('click', () => {
        const currentLang = document.documentElement.getAttribute('lang');
        setLanguage(currentLang === 'en' ? 'ar' : 'en');
    });
}

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

if (themeBtn) {
    themeBtn.addEventListener('click', () => {
        const currentTheme = htmlElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
    });
}

// تحميل الثيم المحفوظ
const savedTheme = localStorage.getItem('theme') || 'dark';
setTheme(savedTheme);

// --- Modal Logic (نافذة الطلب المنبثقة) ---
const serviceModal = document.getElementById('service-modal');
const modalBody = document.getElementById('modal-body');
const modalCloseBtns = document.querySelectorAll('.modal-close');
const openModalBtns = document.querySelectorAll('.open-modal');

if (serviceModal) {
    openModalBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            // الحصول على البطاقة التي تم الضغط عليها
            const card = e.target.closest('.service-card');
            const headerContent = card.querySelector('.plan-header').outerHTML;
            const featuresContent = card.querySelector('.features').outerHTML;
            
            // وضع التفاصيل داخل النافذة المنبثقة
            modalBody.innerHTML = headerContent + featuresContent;
            serviceModal.classList.add('active');
        });
    });

    // إغلاق النافذة
    modalCloseBtns.forEach(btn => btn.addEventListener('click', () => serviceModal.classList.remove('active')));
    
    window.addEventListener('click', (e) => {
        if (e.target === serviceModal) {
            serviceModal.classList.remove('active');
        }
    });
}