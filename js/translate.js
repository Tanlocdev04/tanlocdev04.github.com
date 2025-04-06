const translations = {
    en: {
        education: "Education",
        skills: "Technical Skills",
        projects: "Projects",
        certifications: "Certifications",
        activities: "Activities & Interests",
        // Add all other text elements
    },
    vi: {
        education: "Học Vấn",
        skills: "Kỹ Năng Kỹ Thuật",
        projects: "Dự Án",
        certifications: "Chứng Chỉ",
        activities: "Hoạt Động & Sở Thích",
        // Vietnamese translations
    },
    ja: {
        education: "学歴",
        skills: "技術スキル",
        projects: "プロジェクト",
        certifications: "認定資格",
        activities: "活動・趣味",
        // Japanese translations
    }
};

const languageSelect = document.getElementById('language-select');
const html = document.documentElement;

// Load saved language
const savedLang = localStorage.getItem('lang') || 'en';
html.lang = savedLang;
languageSelect.value = savedLang;

// Language change handler
languageSelect.addEventListener('change', (e) => {
    const lang = e.target.value;
    html.lang = lang;
    localStorage.setItem('lang', lang);
    updateTextContent(lang);
});

function updateTextContent(lang) {
    // Update all translatable elements
    Object.keys(translations[lang]).forEach(key => {
        const elements = document.querySelectorAll(`[data-translate="${key}"]`);
        elements.forEach(element => {
            element.textContent = translations[lang][key];
        });
    });
}

// Initial update
updateTextContent(savedLang);
