const themeBtn = document.getElementById('theme-btn');
const htmlElement = document.documentElement;
const mbtiGrid = document.getElementById('mbti-grid');
const mbtiDetails = document.getElementById('mbti-details');
const mbtiTitle = document.getElementById('mbti-title');
const mbtiDesc = document.getElementById('mbti-desc');

const mbtiData = {
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
};

// Initialize theme
const currentTheme = localStorage.getItem('theme') || 'light';
if (currentTheme === 'dark') {
    htmlElement.setAttribute('data-theme', 'dark');
    themeBtn.textContent = 'Light Mode';
}

themeBtn.addEventListener('click', () => {
    if (htmlElement.getAttribute('data-theme') === 'dark') {
        htmlElement.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
        themeBtn.textContent = 'Dark Mode';
    } else {
        htmlElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        themeBtn.textContent = 'Light Mode';
    }
});

// Render MBTI Grid
Object.keys(mbtiData).forEach(type => {
    const card = document.createElement('div');
    card.classList.add('mbti-card');
    card.textContent = type;
    card.addEventListener('click', () => {
        showDetails(type);
    });
    mbtiGrid.appendChild(card);
});

function showDetails(type) {
    mbtiTitle.textContent = type;
    mbtiDesc.textContent = mbtiData[type];
    mbtiDetails.style.display = 'block';
    mbtiDetails.scrollIntoView({ behavior: 'smooth' });
}
