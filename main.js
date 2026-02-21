const htmlElement = document.documentElement;
const themeBtn = document.getElementById('theme-btn');
const langBtn = document.getElementById('lang-btn');
const mbtiGrid = document.getElementById('mbti-grid');
const mbtiDetails = document.getElementById('mbti-details');
const mbtiTitle = document.getElementById('mbti-title');
const mbtiDesc = document.getElementById('mbti-desc');
const mainTitle = document.getElementById('main-title');
const mainSubtitle = document.getElementById('main-subtitle');
const aboutTitle = document.getElementById('about-title');
const aboutContent = document.getElementById('about-content');

const icons = {
    'INTJ': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>',
    'INTP': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>',
    'ENTJ': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>',
    'ENTP': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>',
    'INFJ': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>',
    'INFP': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>',
    'ENFJ': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
    'ENFP': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 3l14 9-14 9V3z"/></svg>',
    'ISTJ': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="9" y1="3" x2="9" y2="21"/><line x1="15" y1="3" x2="15" y2="21"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="3" y1="15" x2="21" y2="15"/></svg>',
    'ISFJ': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
    'ESTJ': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>',
    'ESFJ': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>',
    'ISTP': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-6.77 6.77L14.7 6.3z"/><path d="M10.3 14.7L3.77 21.23a6 6 0 0 0 6.77-6.77l-1.47-1.47a1 1 0 0 0-1.4 0l-1.6 1.6a1 1 0 0 0 0 1.4l1.6 1.6z"/><path d="M16 16l4 4"/><path d="M4 4l4 4"/></svg>',
    'ISFP': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l5 5"/><path d="M9.5 14.5L16 18"/></svg>',
    'ESTP': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>',
    'ESFP': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>'
};

const translations = {
    en: {
        title: 'MBTI Insight',
        subtitle: 'Explore the depths of personality types with detailed characteristics.',
        themeLight: 'Light Mode',
        themeDark: 'Dark Mode',
        langBtn: '한국어',
        aboutTitle: 'What is MBTI?',
        aboutContent: 'The Myers-Briggs Type Indicator (MBTI) is an introspective self-report questionnaire indicating differing psychological preferences in how people perceive the world and make decisions. Understanding your type can help you in various aspects of life, including career choice and relationships.',
        headers: {
            summary: 'Summary',
            strengths: 'Strengths',
            weaknesses: 'Weaknesses',
            careers: 'Best Careers'
        },
        data: {
            'INTJ': {
                name: 'Architect',
                summary: 'Strategic, logical, and highly organized thinkers who enjoy planning and problem-solving.',
                strengths: '• Rational and evidence-based\n• Independent and decisive\n• Determined and hardworking\n• Innovative and open-minded',
                weaknesses: '• Can be arrogant or overly critical\n• Dismissive of emotions\n• Socially oblivious at times\n• Prone to "over-analyzing"',
                careers: 'Software Architect, Systems Analyst, Strategic Planner, Scientist, Project Manager.'
            },
            'INTP': {
                name: 'Logician',
                summary: 'Innovative, curious, and analytical thinkers who love exploring new ideas and theories.',
                strengths: '• Great at objective analysis\n• Creative and original\n• Open-minded and curious\n• Enthusiastic about new ideas',
                weaknesses: '• Can be disconnected or absent-minded\n• Impatient with routine or small talk\n• Self-doubting regarding execution\n• Can be insensitive to others',
                careers: 'Philosopher, Programmer, Researcher, Mathematician, College Professor.'
            },
            'ENTJ': {
                name: 'Commander',
                summary: 'Bold, strong-willed, and natural leaders who excel at organizing people and resources.',
                strengths: '• Efficient and productive\n• Self-confident and strong-willed\n• Strategic thinkers\n• Charismatic and inspiring',
                weaknesses: '• Stubborn and dominant\n• Intolerant of inefficiency\n• Arrogant or cold-hearted\n• Poor at handling emotions',
                careers: 'Business Executive, Lawyer, Entrepreneur, Judge, Management Consultant.'
            },
            'ENTP': {
                name: 'Debater',
                summary: 'Smart, curious, and enthusiastic thinkers who enjoy challenging conventional wisdom.',
                strengths: '• Knowledgeable and quick-witted\n• Excellent brainstormers\n• Charismatic and energetic\n• Adaptable and versatile',
                weaknesses: '• Argumentative for the sake of it\n• Insensitive to others\' feelings\n• Difficulty focusing on details\n• Dislike practical implementation',
                careers: 'Lawyer, Journalist, Creative Director, Marketing Specialist, Political Consultant.'
            },
            'INFJ': {
                name: 'Advocate',
                summary: 'Quiet, mystical, and inspiring idealists who are driven by a deep sense of purpose.',
                strengths: '• Creative and insightful\n• Principled and passionate\n• Altruistic and empathetic\n• Decisive and organized',
                weaknesses: '• Sensitive to criticism\n• Extremely private and guarded\n• Prone to burnout\n• Perfectionistic expectations',
                careers: 'Counselor, Psychologist, Writer, Human Resources, Non-profit Leader.'
            },
            'INFP': {
                name: 'Mediator',
                summary: 'Poetic, kind, and altruistic individuals who are always eager to help a good cause.',
                strengths: '• Empathetic and compassionate\n• Creative and imaginative\n• Idealistic and passionate\n• Open-minded and flexible',
                weaknesses: '• Overly idealistic\n• Self-critical and private\n• Difficulty dealing with data\n• Take things too personally',
                careers: 'Writer, Artist, Therapist, Librarian, Social Worker.'
            },
            'ENFJ': {
                name: 'Protagonist',
                summary: 'Charismatic, inspiring, and empathetic leaders who are passionate about helping others.',
                strengths: '• Receptive and reliable\n• Passionate and altruistic\n• Natural leaders and charmers\n• Strong communication skills',
                weaknesses: '• Overly idealistic or naive\n• Intense and smothering\n• Overly sensitive to criticism\n• Prone to self-sacrifice',
                careers: 'Teacher, Sales Manager, Public Relations, Human Resources, Minister.'
            },
            'ENFP': {
                name: 'Campaigner',
                summary: 'Enthusiastic, creative, and sociable free spirits who can always find a reason to smile.',
                strengths: '• Curious and observant\n• Enthusiastic and energetic\n• Excellent communicators\n• Warm and friendly',
                weaknesses: '• People-pleasing tendencies\n• Unfocused or disorganized\n• Overly optimistic\n• Restless and easily bored',
                careers: 'Entertainer, Consultant, Psychologist, Creative Writer, PR Specialist.'
            },
            'ISTJ': {
                name: 'Logistician',
                summary: 'Practical, fact-minded, and reliable individuals who value order and responsibility.',
                strengths: '• Honest and direct\n• Strong-willed and dutiful\n• Responsible and organized\n• Calm and practical',
                weaknesses: '• Stubborn and inflexible\n• Judgmental of others\n• Often blame themselves\n• Insensitive to emotions',
                careers: 'Accountant, Auditor, Police Officer, Military Leader, Office Manager.'
            },
            'ISFJ': {
                name: 'Defender',
                summary: 'Dedicated, warm, and protective individuals who are always ready to support their loved ones.',
                strengths: '• Supportive and reliable\n• Patient and observant\n• Imaginative and enthusiastic\n• Loyal and hardworking',
                weaknesses: '• Humble to a fault\n• Take things personally\n• Repress their feelings\n• Overload themselves',
                careers: 'Nurse, Teacher, Social Worker, Customer Service, Interior Designer.'
            },
            'ESTJ': {
                name: 'Executive',
                summary: 'Excellent administrators who are unsurpassed at managing things and people.',
                strengths: '• Dedicated and strong-willed\n• Direct and honest\n• Loyal and reliable\n• Excellent organizers',
                weaknesses: '• Inflexible and stubborn\n• Uncomfortable with change\n• Judgmental and bossy\n• Difficulty expressing emotion',
                careers: 'Project Manager, General Manager, Financial Officer, Government Official.'
            },
            'ESFJ': {
                name: 'Consul',
                summary: 'Caring, social, and community-minded individuals who are always eager to help.',
                strengths: '• Strong practical skills\n• Strong sense of duty\n• Very loyal and social\n• Good at connecting with others',
                weaknesses: '• Worried about social status\n• Inflexible or traditional\n• Vulnerable to criticism\n• Too needy for approval',
                careers: 'Healthcare Worker, Event Planner, Teacher, Special Education, HR Manager.'
            },
            'ISTP': {
                name: 'Virtuoso',
                summary: 'Bold, practical, and experimental masters of all kinds of tools.',
                strengths: '• Optimistic and energetic\n• Creative and practical\n• Spontaneous and rational\n• Great in a crisis',
                weaknesses: '• Stubborn and insensitive\n• Private and reserved\n• Easily bored and risk-prone\n• Dislike commitment',
                careers: 'Engineer, Mechanic, Pilot, Forensic Scientist, Data Analyst.'
            },
            'ISFP': {
                name: 'Adventurer',
                summary: 'Flexible, charming, and artistic individuals who are always ready to explore something new.',
                strengths: '• Charming and sensitive\n• Imaginative and curious\n• Passionate and artistic\n• Flexible and original',
                weaknesses: '• Fiercely independent\n• Unpredictable and stressed\n• Overly competitive\n• Fluctuating self-esteem',
                careers: 'Artist, Musician, Chef, Veterinarian, Designer.'
            },
            'ESTP': {
                name: 'Entrepreneur',
                summary: 'Smart, energetic, and very perceptive people who truly enjoy living on the edge.',
                strengths: '• Bold and direct\n• Rational and practical\n• Perceptive and sociable\n• Original and energetic',
                weaknesses: '• Insensitive to feelings\n• Impatient and risk-prone\n• May miss the "big picture"\n• Defiant of structure',
                careers: 'Salesperson, Stockbroker, Entrepreneur, Athlete, Firefighter.'
            },
            'ESFP': {
                name: 'Entertainer',
                summary: 'Spontaneous, energetic, and enthusiastic people who make life around them more fun.',
                strengths: '• Bold and original\n• Excellent people skills\n• Aesthetic and practical\n• Observant and fun',
                weaknesses: '• Sensitive to criticism\n• Easily bored\n• Poor long-term planners\n• Conflict-averse',
                careers: 'Actor, Event Coordinator, Tour Guide, Fashion Designer, Public Relations.'
            }
        }
    },
    ko: {
        title: 'MBTI 인사이트',
        subtitle: '상세한 특징 분석을 통해 성격 유형의 깊이를 탐구해보세요.',
        themeLight: '라이트 모드',
        themeDark: '다크 모드',
        langBtn: 'English',
        aboutTitle: 'MBTI란 무엇인가요?',
        aboutContent: '마이어스-브릭스 유형 지표(MBTI)는 사람들이 세상을 어떻게 인식하고 결정을 내리는지에 대한 심리적 선호도를 나타내는 자기 보고식 설문 조사입니다. 자신의 유형을 이해하면 직업 선택과 인간관계를 포함한 삶의 다양한 측면에서 큰 도움이 될 수 있습니다.',
        headers: {
            summary: '개요',
            strengths: '강점',
            weaknesses: '약점',
            careers: '추천 직업'
        },
        data: {
            'INTJ': {
                name: '용의주도한 전략가',
                summary: '전략적이며 논리적이고, 계획 세우기와 문제 해결을 즐기는 체계적인 사고가입니다.',
                strengths: '• 이성적이고 근거 중심적임\n• 독립적이고 결단력이 강함\n• 목표 지향적이며 근면함\n• 혁신적이고 개방적인 사고',
                weaknesses: '• 거만하거나 지나치게 비판적일 수 있음\n• 감정을 무시하는 경향\n• 때때로 사회적 눈치가 부족함\n• 과도한 분석에 빠지기 쉬움',
                careers: '소프트웨어 아키텍트, 시스템 분석가, 전략 기획가, 과학자, 프로젝트 매니저'
            },
            'INTP': {
                name: '논리적인 사색가',
                summary: '혁신적이고 호기심이 많으며, 새로운 아이디어와 이론 탐구를 좋아하는 분석적인 사고가입니다.',
                strengths: '• 객관적인 분석 능력이 뛰어남\n• 독창적이고 창의적임\n• 개방적이고 지적 호기심이 강함\n• 새로운 아이디어에 대한 열정',
                weaknesses: '• 현실과 동떨어지거나 건망증이 있을 수 있음\n• 반복적인 일상이나 잡담을 견디기 힘들어함\n• 실행력에 대한 자기 의심\n• 타인에게 무심하게 비칠 수 있음',
                careers: '철학자, 프로그래머, 연구원, 수학자, 대학교수'
            },
            'ENTJ': {
                name: '대담한 통솔자',
                summary: '대담하고 의지가 강하며, 사람과 자원을 조직하는 데 뛰어난 천성적인 리더입니다.',
                strengths: '• 효율적이고 생산적임\n• 자신감이 넘치고 의지가 강함\n• 전략적인 사고 능력\n• 카리스마 있고 영감을 주는 리더십',
                weaknesses: '• 고집이 세고 지배적일 수 있음\n• 비효율을 참지 못함\n• 오만하거나 냉정하게 보일 수 있음\n• 타인의 감정을 다루는 데 미숙함',
                careers: '기업 경영인, 변호사, 기업가, 판사, 경영 컨설턴트'
            },
            'ENTP': {
                name: '뜨거운 논쟁을 즐기는 변론가',
                summary: '지적이고 호기심이 많으며, 전통적인 지혜에 도전하는 것을 즐기는 열정적인 사고가입니다.',
                strengths: '• 박학다식하고 재치가 넘침\n• 뛰어난 브레인스토밍 능력\n• 카리스마 있고 에너지가 넘침\n• 적응력이 뛰어나고 다재다능함',
                weaknesses: '• 논쟁 자체를 위해 논쟁하는 경향\n• 타인의 감정에 무심할 수 있음\n• 세부 사항에 집중하기 어려워함\n• 실제 구현보다 아이디어 자체를 선호함',
                careers: '변호사, 저널리스트, 크리에이티브 디렉터, 마케팅 전문가, 정치 컨설턴트'
            },
            'INFJ': {
                name: '선의의 옹호자',
                summary: '조용하고 신비로우며, 깊은 사명감을 바탕으로 움직이는 이상주의자입니다.',
                strengths: '• 창의적이고 통찰력이 뛰어남\n• 원칙이 뚜렷하고 열정적임\n• 이타적이고 공감 능력이 좋음\n• 결단력 있고 체계적임',
                weaknesses: '• 비판에 민감함\n• 매우 사적인 성향으로 속마음을 잘 드러내지 않음\n• 번아웃에 취약함\n• 지나치게 완벽주의적인 기대치',
                careers: '상담사, 심리학자, 작가, 인사 담당자, 비영리 단체 리더'
            },
            'INFP': {
                name: '열정적인 중재자',
                summary: '시적이고 친절하며, 선한 일을 위해 항상 도울 준비가 된 이타적인 개인입니다.',
                strengths: '• 공감 능력이 뛰어나고 따뜻함\n• 창의적이고 상상력이 풍부함\n• 이상주의적이고 열정적임\n• 개방적이고 유연한 사고',
                weaknesses: '• 지나치게 이상주의적일 수 있음\n• 자기비판적이고 내성적임\n• 데이터나 수치 처리에 어려움을 느낌\n• 상황을 지나치게 개인적으로 받아들임',
                careers: '작가, 예술가, 치료사, 사서, 사회복지사'
            },
            'ENFJ': {
                name: '정의로운 사회운동가',
                summary: '카리스마 있고 영감을 주며, 타인을 돕는 일에 열정적인 공감 능력이 뛰어난 리더입니다.',
                strengths: '• 수용적이고 신뢰할 수 있음\n• 열정적이고 이타적임\n• 타고난 리더십과 매력\n• 뛰어난 의사소통 능력',
                weaknesses: '• 지나치게 이상주의적이거나 순진할 수 있음\n• 과하게 열정적이어서 상대가 부담을 느낄 수 있음\n• 비판에 지나치게 민감함\n• 자기희생이 지나칠 수 있음',
                careers: '교사, 영업 관리자, 홍보 전문가, 인사 담당자, 종교인'
            },
            'ENFP': {
                name: '재기발랄한 활동가',
                summary: '열정적이고 창의적이며, 사교적인 자유로운 영혼으로 언제나 미소 지을 이유를 찾아냅니다.',
                strengths: '• 호기심이 많고 관찰력이 뛰어남\n• 열정적이고 에너지가 넘침\n• 뛰어난 의사소통 능력\n• 따뜻하고 친근한 성격',
                weaknesses: '• 사람들의 기분을 지나치게 맞추려 함\n• 집중력이 부족하거나 무질서할 수 있음\n• 지나치게 낙관적일 수 있음\n• 쉽게 지루함을 느끼고 안절부절못함',
                careers: '연예인, 컨설턴트, 심리학자, 작가, 홍보 전문가'
            },
            'ISTJ': {
                name: '청렴결백한 논리주의자',
                summary: '실용적이고 사실에 근거하며, 질서와 책임감을 중시하는 신뢰할 수 있는 개인입니다.',
                strengths: '• 정직하고 직설적임\n• 의지가 강하고 의무감이 투철함\n• 책임감이 강하고 체계적임\n• 침착하고 실용적임',
                weaknesses: '• 고집이 세고 융통성이 부족할 수 있음\n• 타인을 비판적으로 판단하는 경향\n• 종종 자신을 자책함\n• 감정 표현에 서툶',
                careers: '회계사, 감사관, 경찰관, 군인, 사무 관리자'
            },
            'ISFJ': {
                name: '용감한 수호자',
                summary: '헌신적이고 따뜻하며, 사랑하는 사람들을 보호하고 지원할 준비가 된 개인입니다.',
                strengths: '• 협조적이고 신뢰할 수 있음\n• 인내심이 강하고 관찰력이 좋음\n• 상상력이 풍부하고 열정적임\n• 충성스럽고 근면함',
                weaknesses: '• 지나치게 겸손하여 본인의 공을 내세우지 않음\n• 상황을 개인적으로 받아들여 상처받기 쉬움\n• 감정을 억제하는 경향\n• 과도한 업무를 스스로 떠맡음',
                careers: '간호사, 교사, 사회복지사, 고객 지원, 인테리어 디자이너'
            },
            'ESTJ': {
                name: '엄격한 관리자',
                summary: '사물과 사람을 관리하는 데 타의 추종을 불허하는 우수한 행정가입니다.',
                strengths: '• 헌신적이고 의지가 강함\n• 직설적이고 정직함\n• 충성스럽고 신뢰할 수 있음\n• 뛰어난 조직 운영 능력',
                weaknesses: '• 융통성이 부족하고 고집이 셈\n• 변화를 불편해함\n• 판단력이 앞서고 지시하려 함\n• 감정 표현에 어려움을 느낌',
                careers: '프로젝트 매니저, 총무, 재무관, 공무원'
            },
            'ESFJ': {
                name: '사교적인 외교관',
                summary: '타인을 돕는 데 열성적이며, 공동체 의식이 강하고 사교적인 개인입니다.',
                strengths: '• 실용적인 능력이 뛰어남\n• 강한 의무감\n• 매우 충성스럽고 사교적임\n• 타인과 유대감을 형성하는 데 능숙함',
                weaknesses: '• 사회적 지위에 민감함\n• 융통성이 부족하거나 전통에 집착함\n• 비판에 취약함\n• 타인의 인정을 지나치게 갈구함',
                careers: '의료 종사자, 이벤트 플래너, 교사, 특수 교육, 인사 매니저'
            },
            'ISTP': {
                name: '만능 재주꾼',
                summary: '대담하고 실용적인 실험가이자 모든 종류의 도구에 능숙한 마스터입니다.',
                strengths: '• 낙천적이고 에너지가 넘침\n• 창의적이고 실용적임\n• 즉흥적이면서도 이성적임\n• 위기 상황 대처 능력이 뛰어남',
                weaknesses: '• 고집이 세고 무심할 수 있음\n• 사생활을 중요시하고 내성적임\n• 쉽게 지루함을 느끼고 위험을 감수함\n• 약속이나 구속을 싫어함',
                careers: '엔지니어, 정비사, 조종사, 법의학자, 데이터 분석가'
            },
            'ISFP': {
                name: '호기심 많은 예술가',
                summary: '유연하고 매력적이며, 항상 새로운 것을 탐구할 준비가 된 예술적인 개인입니다.',
                strengths: '• 매력적이고 감수성이 풍부함\n• 상상력이 좋고 호기심이 많음\n• 열정적이고 예술적인 기질\n• 유연하고 독창적임',
                weaknesses: '• 독립심이 강해 간섭을 싫어함\n• 예측 불가능하고 스트레스에 취약함\n• 과도하게 경쟁적인 면모\n• 자존감의 기복이 있음',
                careers: '예술가, 음악가, 요리사, 수의사, 디자이너'
            },
            'ESTP': {
                name: '모험을 즐기는 사업가',
                summary: '영리하고 에너지 넘치며, 매우 통찰력 있고 삶의 긴장감을 즐기는 사람들입니다.',
                strengths: '• 대담하고 직설적임\n• 이성적이고 실용적임\n• 통찰력이 좋고 사교적임\n• 독창적이고 에너지가 넘침',
                weaknesses: '• 감정에 무심할 수 있음\n• 성급하고 위험한 행동을 즐김\n• 전체적인 "큰 그림"을 놓칠 수 있음\n• 정해진 규칙이나 구조에 저항함',
                careers: '영업사원, 증권 중개인, 기업가, 운동선수, 소방관'
            },
            'ESFP': {
                name: '자유로운 영혼의 연예인',
                summary: '즉흥적이고 에너지 넘치며, 주변 사람들을 즐겁게 만드는 열정적인 사람들입니다.',
                strengths: '• 대담하고 독창적임\n• 뛰어난 대인 관계 능력\n• 심미안이 있고 실용적임\n• 관찰력이 좋고 재미있음',
                weaknesses: '• 비판에 민감함\n• 쉽게 지루해함\n• 장기 계획을 세우는 데 미숙함\n• 갈등을 피하려 함',
                careers: '배우, 이벤트 코디네이터, 가이드, 패션 디자이너, 홍보 전문가'
            }
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
    aboutTitle.textContent = t.aboutTitle;
    aboutContent.textContent = t.aboutContent;
    
    if (htmlElement.getAttribute('data-theme') === 'dark') {
        themeBtn.textContent = t.themeLight;
    } else {
        themeBtn.textContent = t.themeDark;
    }

    // Update active details if visible
    const activeType = mbtiTitle.dataset.currentType;
    if (activeType) {
        renderDetails(activeType);
    }
}

function renderGrid() {
    mbtiGrid.innerHTML = '';
    Object.keys(translations.en.data).forEach(type => {
        const card = document.createElement('div');
        card.classList.add('mbti-card');
        
        const iconContainer = document.createElement('div');
        iconContainer.innerHTML = icons[type];
        
        const typeName = document.createElement('span');
        typeName.classList.add('mbti-type-name');
        typeName.textContent = type;
        
        card.appendChild(iconContainer);
        card.appendChild(typeName);
        
        card.addEventListener('click', () => {
            showDetails(type);
        });
        mbtiGrid.appendChild(card);
    });
}

function showDetails(type) {
    mbtiTitle.dataset.currentType = type;
    renderDetails(type);
    mbtiDetails.style.display = 'block';
    mbtiDetails.scrollIntoView({ behavior: 'smooth' });
}

function renderDetails(type) {
    const t = translations[currentLang];
    const data = t.data[type];
    
    mbtiTitle.textContent = `${type}: ${data.name}`;
    
    mbtiDesc.innerHTML = `
        <div class="detail-section">
            <span class="detail-header">${t.headers.summary}</span>
            <p class="detail-content">${data.summary}</p>
        </div>
        <div class="detail-section">
            <span class="detail-header">${t.headers.strengths}</span>
            <p class="detail-content">${data.strengths}</p>
        </div>
        <div class="detail-section">
            <span class="detail-header">${t.headers.weaknesses}</span>
            <p class="detail-content">${data.weaknesses}</p>
        </div>
        <div class="detail-section">
            <span class="detail-header">${t.headers.careers}</span>
            <p class="detail-content">${data.careers}</p>
        </div>
    `;
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

// Initial Render
renderGrid();
updateUI();
