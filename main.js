const themeBtn = document.getElementById('theme-btn');
const langBtn = document.getElementById('lang-btn');
const htmlElement = document.documentElement;
const mbtiGrid = document.getElementById('mbti-grid');
const mbtiDetails = document.getElementById('mbti-details');
const mbtiTitle = document.getElementById('mbti-title');
const mbtiDesc = document.getElementById('mbti-desc');
const mainTitle = document.getElementById('main-title');
const mainSubtitle = document.getElementById('main-subtitle');

const translations = {
    en: {
        title: 'MBTI Characteristics',
        subtitle: 'Select an MBTI type to see its characteristics.',
        themeLight: 'Light Mode',
        themeDark: 'Dark Mode',
        langBtn: '한국어',
        data: {
            'INTJ': 'Architect: Strategic, logical, and highly organized thinkers who enjoy planning and problem-solving.',
            'INTP': 'Logician: Innovative, curious, and analytical thinkers who love exploring new ideas and theories.',
            'ENTJ': 'Commander: Bold, strong-willed, and natural leaders who excel at organizing people and resources.',
            'ENTP': 'Debater: Smart, curious, and enthusiastic thinkers who enjoy challenging conventional wisdom.',
            'INFJ': 'Advocate: Quiet, mystical, and inspiring idealists who are driven by a deep sense of purpose.',
            'INFP': 'Mediator: Poetic, kind, and altruistic individuals who are always eager to help a good cause.',
            'ENFJ': 'Protagonist: Charismatic, inspiring, and empathetic leaders who are passionate about helping others.',
            'ENFP': 'Campaigner: Enthusiastic, creative, and sociable free spirits who can always find a reason to smile.',
            'ISTJ': 'Logistician: Practical, fact-minded, and reliable individuals who value order and responsibility.',
            'ISFJ': 'Defender: Dedicated, warm, and protective individuals who are always ready to support their loved ones.',
            'ESTJ': 'Executive: Excellent administrators who are unsurpassed at managing things and people.',
            'ESFJ': 'Consul: Caring, social, and community-minded individuals who are always eager to help.',
            'ISTP': 'Virtuoso: Bold, practical, and experimental masters of all kinds of tools.',
            'ISFP': 'Adventurer: Flexible, charming, and artistic individuals who are always ready to explore something new.',
            'ESTP': 'Entrepreneur: Smart, energetic, and very perceptive people who truly enjoy living on the edge.',
            'ESFP': 'Entertainer: Spontaneous, energetic, and enthusiastic people who make life around them more fun.'
        }
    },
    ko: {
        title: 'MBTI 특징 소개',
        subtitle: 'MBTI 유형을 선택하여 특징을 확인해보세요.',
        themeLight: '라이트 모드',
        themeDark: '다크 모드',
        langBtn: 'English',
        data: {
            'INTJ': '용의주도한 전략가: 전략적이며 논리적이고, 계획 세우기와 문제 해결을 즐기는 체계적인 사고가입니다.',
            'INTP': '논리적인 사색가: 혁신적이고 호기심이 많으며, 새로운 아이디어와 이론 탐구를 좋아하는 분석적인 사고가입니다.',
            'ENTJ': '대담한 통솔자: 대담하고 의지가 강하며, 사람과 자원을 조직하는 데 뛰어난 천성적인 리더입니다.',
            'ENTP': '뜨거운 논쟁을 즐기는 변론가: 지적이고 호기심이 많으며, 전통적인 지혜에 도전하는 것을 즐기는 열정적인 사고가입니다.',
            'INFJ': '선의의 옹호자: 조용하고 신비로우며, 깊은 사명감을 바탕으로 움직이는 이상주의자입니다.',
            'INFP': '열정적인 중재자: 시적이고 친절하며, 선한 일을 위해 항상 도울 준비가 된 이타적인 개인입니다.',
            'ENFJ': '정의로운 사회운동가: 카리스마 있고 영감을 주며, 타인을 돕는 일에 열정적인 공감 능력이 뛰어난 리더입니다.',
            'ENFP': '재기발랄한 활동가: 열정적이고 창의적이며, 사교적인 자유로운 영혼으로 언제나 미소 지을 이유를 찾아냅니다.',
            'ISTJ': '청렴결백한 논리주의자: 실용적이고 사실에 근거하며, 질서와 책임감을 중시하는 신뢰할 수 있는 개인입니다.',
            'ISFJ': '용감한 수호자: 헌신적이고 따뜻하며, 사랑하는 사람들을 보호하고 지원할 준비가 된 개인입니다.',
            'ESTJ': '엄격한 관리자: 사물과 사람을 관리하는 데 타의 추종을 불허하는 우수한 행정가입니다.',
            'ESFJ': '사교적인 외교관: 타인을 돕는 데 열성적이며, 공동체 의식이 강하고 사교적인 개인입니다.',
            'ISTP': '만능 재주꾼: 대담하고 실용적인 실험가이자 모든 종류의 도구에 능숙한 마스터입니다.',
            'ISFP': '호기심 많은 예술가: 유연하고 매력적이며, 항상 새로운 것을 탐구할 준비가 된 예술적인 개인입니다.',
            'ESTP': '모험을 즐기는 사업가: 영리하고 에너지 넘치며, 매우 통찰력 있고 삶의 긴장감을 즐기는 사람들입니다.',
            'ESFP': '자유로운 영혼의 연예인: 즉흥적이고 에너지 넘치며, 주변 사람들을 즐겁게 만드는 열정적인 사람들입니다.'
        }
    }
};

let currentLang = localStorage.getItem('lang') || 'en';
let currentTheme = localStorage.getItem('theme') || 'light';

function updateUI() {
    const t = translations[currentLang];
    mainTitle.textContent = t.title;
    mainSubtitle.textContent = t.subtitle;
    langBtn.textContent = t.langBtn;
    
    if (htmlElement.getAttribute('data-theme') === 'dark') {
        themeBtn.textContent = t.themeLight;
    } else {
        themeBtn.textContent = t.themeDark;
    }

    // Refresh grid to update any active details
    const activeType = mbtiTitle.textContent;
    if (activeType && t.data[activeType]) {
        mbtiDesc.textContent = t.data[activeType];
    }
}

// Initialize theme
if (currentTheme === 'dark') {
    htmlElement.setAttribute('data-theme', 'dark');
}

themeBtn.addEventListener('click', () => {
    if (htmlElement.getAttribute('data-theme') === 'dark') {
        htmlElement.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
    } else {
        htmlElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
    updateUI();
});

langBtn.addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'ko' : 'en';
    localStorage.setItem('lang', currentLang);
    updateUI();
});

// Render MBTI Grid
Object.keys(translations.en.data).forEach(type => {
    const card = document.createElement('div');
    card.classList.add('mbti-card');
    card.textContent = type;
    card.addEventListener('click', () => {
        showDetails(type);
    });
    mbtiGrid.appendChild(card);
});

function showDetails(type) {
    const t = translations[currentLang];
    mbtiTitle.textContent = type;
    mbtiDesc.textContent = t.data[type];
    mbtiDetails.style.display = 'block';
    mbtiDetails.scrollIntoView({ behavior: 'smooth' });
}

// Initial UI Update
updateUI();
