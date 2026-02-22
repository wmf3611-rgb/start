const htmlElement = document.documentElement;
const themeBtn = document.getElementById('theme-btn');
const langBtn = document.getElementById('lang-btn');
const langMenu = document.getElementById('lang-menu');
const mbtiGrid = document.getElementById('mbti-grid');
const mbtiDetails = document.getElementById('mbti-details');
const mbtiTitle = document.getElementById('mbti-title');
const mbtiDesc = document.getElementById('mbti-desc');
const mainTitle = document.getElementById('main-title');
const mainSubtitle = document.getElementById('main-subtitle');
const aboutTitle = document.getElementById('about-title');
const aboutContent = document.getElementById('about-content');

const languages = ['en', 'ko', 'ja', 'zh', 'es'];
const langNames = {
    'en': 'English',
    'ko': '한국어',
    'ja': '日本語',
    'zh': '中文',
    'es': 'Español'
};

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
        aboutTitle: 'What is MBTI?',
        aboutContent: 'The Myers-Briggs Type Indicator (MBTI) is an introspective self-report questionnaire indicating differing psychological preferences in how people perceive the world and make decisions. Understanding your type can help you in various aspects of life, including career choice and relationships.',
        headers: {
            summary: 'Summary',
            strengths: 'Strengths',
            weaknesses: 'Weaknesses',
            careers: 'Best Careers',
            famous: 'Famous Figures',
            compatibility: 'Compatibility',
            dating: 'Dating Style',
            communication: 'Communication Style',
            caution: 'Things to Watch Out For'
        },
        data: {
            'INTJ': {
                name: 'Architect',
                summary: 'Strategic, logical, and highly organized thinkers who enjoy planning and problem-solving. They possess a thirst for knowledge and a desire for efficiency, often seeing the world as a giant chess match where every move counts.',
                strengths: '• Rational and evidence-based: They rely on logic rather than emotion.\n• Independent and decisive: They trust their own judgment and take action.\n• Determined and hardworking: When they have a goal, they are relentless.\n• Innovative and open-minded: They look for new ways to improve systems.',
                weaknesses: '• Can be arrogant or overly critical: Their high standards apply to everyone.\n• Dismissive of emotions: They may struggle to validate others\' feelings.\n• Socially oblivious: Small talk and social niceties often feel like a waste of time.\n• Over-analyzing: They can get stuck in "analysis paralysis."',
                careers: 'Software Architect, Systems Analyst, Strategic Planner, Scientist, Project Manager.',
                famous: 'Elon Musk, Nikola Tesla, Michelle Obama, Christopher Nolan.',
                compatibility: 'Best with ENFP and ENTP. They value intellectual depth and growth in partners above all else.\nThey also work well with other Analysts who share their rational approach to life and problem-solving.\nHowever, they may find it challenging to connect with types that are highly emotional or spontaneous without a logical basis.',
                dating: 'They approach dating logically and with high standards, looking for long-term stability rather than casual flings.\nThey prefer intellectual connection and appreciate partners who respect their need for deep, meaningful independence.\nInitially, they may seem cold or distant, but once committed, they are incredibly loyal and dedicated to mutual growth.',
                communication: 'Direct, concise, and heavily focused on facts and logic. They dislike redundant explanations or emotional appeals during debates.\nThey value efficiency in conversation and expect others to get to the point quickly without unnecessary filler.\nDuring disagreements, they remain objective and focus on solving the problem rather than managing interpersonal feelings.',
                caution: 'Avoid being overly emotional or illogical when discussing problems as it may cause them to dismiss the conversation.\nAlways give them enough space and time to process information alone before expecting a definitive response.\nBe honest and direct; they have a low tolerance for mind games, manipulation, or superficial social niceties.'
            },
            'INTP': {
                name: 'Logician',
                summary: 'Innovative, curious, and analytical thinkers who love exploring new ideas and theories. They are often lost in thought, constantly analyzing everything around them to understand the underlying principles.',
                strengths: '• Objective analysis: They see things as they are, without bias.\n• Creative and original: They offer unique perspectives on complex problems.\n• Open-minded: They are always willing to reconsider their positions.\n• Enthusiastic: When a topic interests them, their energy is contagious.',
                weaknesses: '• Disconnected: They can become so absorbed in thought they ignore the real world.\n• Impatient with routine: Repetitive tasks are their biggest enemy.\n• Self-doubting: Their constant analysis can lead to hesitation in execution.\n• Insensitive: Their focus on truth can sometimes come across as cold.',
                careers: 'Philosopher, Programmer, Researcher, Mathematician, College Professor.',
                famous: 'Albert Einstein, Bill Gates, Isaac Newton, Elliot Page.',
                compatibility: 'Best with ENTJ and ESTJ who can help ground their theoretical ideas and bring them into reality.\nThey also enjoy the company of other Introverted Thinkers who can engage in deep, abstract discussions for hours.\nThey may struggle with highly social or traditional types who prioritize social conventions over logical truth.',
                dating: 'Casual and low-pressure. They value intellectual connection and radical honesty above traditional romantic gestures.\nThey are often unconventional in their approach to relationships, preferring to skip social games for sincere connection.\nPartners might find them difficult to read initially, as they express affection through shared knowledge and ideas rather than emotions.',
                communication: 'Complex and theoretical. They often use analogies and may skip over basic details assuming others follow their logic.\nThey enjoy debating for the sake of learning and will often play "devil\'s advocate" to test the strength of an idea.\nIn conversation, they are more interested in the "why" and "how" of a system than in mundane day-to-day updates.',
                caution: 'Don\'t force them into strict schedules or small talk, as this feels draining and restrictive to their creative process.\nRespect their need for intellectual autonomy and avoid being overly emotional during logical discussions.\nUnderstand that their occasional social withdrawal is not personal but a necessary time for them to recharge their mental energy.'
            },
            'ENTJ': {
                name: 'Commander',
                summary: 'Bold, strong-willed, and natural leaders who excel at organizing people and resources. They are decisive and value efficiency above all else, often taking charge to ensure goals are met quickly and effectively.',
                strengths: '• Efficient: They maximize productivity in any environment.\n• Self-confident: They trust their abilities to lead and succeed.\n• Strategic thinkers: They see the big picture and plan long-term.\n• Charismatic: They inspire others to follow their vision.',
                weaknesses: '• Stubborn and dominant: They can be inflexible once they\'ve made a decision.\n• Intolerant: They have little patience for inefficiency or incompetence.\n• Arrogant: Their confidence can sometimes cross into hubris.\n• Cold-hearted: They may prioritize results over people\'s feelings.',
                careers: 'Business Executive, Lawyer, Entrepreneur, Judge, Management Consultant.',
                famous: 'Steve Jobs, Gordon Ramsay, Margaret Thatcher, Franklin D. Roosevelt.',
                compatibility: 'Best with INFP and INTP. They value partners who can challenge them intellectually but also offer emotional depth.\nThey enjoy the company of other high-achievers who share their drive for success and personal development.\nThey may find it difficult to tolerate partners who lack ambition or are resistant to logical self-improvement.',
                dating: 'They are intentional and direct in relationships. They look for high-achieving partners and value honesty and clear communication.\nThey treat relationships as a partnership where both parties work toward shared goals and future success.\nWhile they may struggle with softer emotions, they show commitment through loyalty and active problem-solving.',
                communication: 'Commanding, clear, and task-oriented. They expect others to be as direct as they are and appreciate well-reasoned arguments.\nThey have a low tolerance for ambiguity or emotional reasoning and will often challenge statements that lack evidence.\nIn a group setting, they naturally take charge and direct the flow of information toward a specific conclusion or action.',
                caution: 'Don\'t take their directness personally; it is their way of being efficient, not an attempt to be hurtful.\nBe prepared with facts and logic when challenging their ideas; they respect competence and well-thought-out positions.\nAvoid being passive-aggressive or indirect, as they find this behavior frustrating and a waste of valuable time.'
            },
            'ENTP': {
                name: 'Debater',
                summary: 'Smart, curious, and enthusiastic thinkers who enjoy challenging conventional wisdom. They thrive on intellectual stimulation and love playing devil\'s advocate to explore every angle of an idea.',
                strengths: '• Knowledgeable: They have a broad range of interests and insights.\n• Quick-witted: They excel at thinking on their feet.\n• Charismatic: Their energy and humor make them engaging.\n• Adaptable: They can pivot easily when presented with new information.',
                weaknesses: '• Argumentative: They may argue just for the sake of it, exhausting others.\n• Insensitive: They can overlook the emotional impact of their words.\n• Unfocused: They love starting new projects but may struggle to finish them.\n• Dislike implementation: They prefer brainstorming over boring execution.',
                careers: 'Lawyer, Journalist, Creative Director, Marketing Specialist, Political Consultant.',
                famous: 'Robert Downey Jr., Mark Twain, Tom Hanks, Thomas Edison.',
                compatibility: 'Best with INFJ and INTJ. They need partners who can handle their energy and keep them grounded while matching their intellect.\nThey also thrive with other intuitive types who can keep up with their rapid-fire brainstorming sessions.\nThey may find traditional or overly rigid personalities boring and restrictive to their creative freedom.',
                dating: 'Exciting and unpredictable. They value growth and novelty in relationships and need a partner who can keep up with their fast-paced mind.\nThey enjoy the "chase" and intellectual sparring during the early stages of dating.\nIn long-term relationships, they are supportive of their partner\'s individual goals but need constant variety to remain fully engaged.',
                communication: 'Witty, provocative, and highly verbal. They enjoy debating and may jump from one topic to another rapidly as new ideas arise.\nThey often use humor and irony to make their points, which can sometimes be misunderstood as a lack of seriousness.\nThey value truth over feelings and will often point out logical inconsistencies even in casual social settings.',
                caution: 'Understand that their debating is an intellectual exercise, not a personal attack; they are testing the logic of the idea.\nEncourage them to follow through on their best ideas, as they can sometimes get lost in a sea of new possibilities.\nDon\'t expect them to follow tradition or "the rules" without a good logical reason; they need to understand the "why" first.'
            },
            'INFJ': {
                name: 'Advocate',
                summary: 'Quiet, mystical, and inspiring idealists who are driven by a deep sense of purpose. They possess a unique ability to understand complex human emotions and are often dedicated to helping others realize their potential.',
                strengths: '• Creative and insightful: They see patterns and meanings others miss.\n• Principled: They live by strong internal values.\n• Altruistic: Their focus is on making a positive impact.\n• Decisive: When they have a vision, they are determined to achieve it.',
                weaknesses: '• Sensitive to criticism: They take negative feedback deeply to heart.\n• Extremely private: They are often difficult to get to know.\n• Prone to burnout: Their intense idealism can lead to exhaustion.\n• Perfectionistic: They set impossibly high standards for themselves and others.',
                careers: 'Counselor, Psychologist, Writer, Human Resources, Non-profit Leader.',
                famous: 'Martin Luther King Jr., Nelson Mandela, Lady Gaga, Nicole Kidman.',
                compatibility: 'Best with ENFP and ENTP. They need partners who appreciate their depth and support their vision while providing an energetic balance.\nThey value authenticity and soul-deep connection, often seeking a partner who shares their core humanitarian values.\nThey may find it draining to be around superficial types or those who are purely driven by material success.',
                dating: 'They look for "soulmates" and value deep, emotional connections. They are loyal and protective of their loved ones.\nThey take dating very seriously and are rarely interested in casual flings; they want a relationship that has a higher purpose.\nPartners need to be patient, as Advocates reveal their true selves slowly and only to those they deeply trust.',
                communication: 'Empathetic, symbolic, and often quiet. They prefer one-on-one conversations that touch on meaningful, philosophical topics.\nThey are expert listeners and often pick up on non-verbal cues and underlying emotions that others completely miss.\nIn group settings, they may be reserved, only speaking when they have something truly significant or helpful to contribute.',
                caution: 'Don\'t take their need for solitude personally; it is essential for them to process their intense emotions and avoid burnout.\nBe sincere and avoid superficiality or dishonesty; they have an uncanny ability to sense when someone is being "fake."\nRespect their boundaries and values; they are deeply principled and will withdraw if they feel their core integrity is being compromised.'
            },
            'INFP': {
                name: 'Mediator',
                summary: 'Poetic, kind, and altruistic individuals who are always eager to help a good cause. They are guided by their strong internal values and often spend their lives searching for meaning and harmony.',
                strengths: '• Empathetic and compassionate: They feel the emotions of others deeply.\n• Creative and imaginative: They are often gifted in the arts or writing.\n• Idealistic: They believe in the inherent goodness of people.\n• Flexible: They are open-minded and adaptable to new situations.',
                weaknesses: '• Overly idealistic: They can be disappointed by reality.\n• Self-critical: They are often their own harshest judges.\n• Difficulty with data: They may struggle with purely logical or objective tasks.\n• Take things personally: They can easily feel hurt by minor slights.',
                careers: 'Writer, Artist, Therapist, Librarian, Social Worker.',
                famous: 'William Shakespeare, J.R.R. Tolkien, Julia Roberts, Johnny Depp.',
                compatibility: 'Best with ENFJ and ENTJ. They need partners who can help them organize their ideas into action and provide structure to their dreams.\nThey value deep empathy and creative expression, often feeling most at home with other intuitive and feeling types.\nThey may struggle with highly critical or practical types who dismiss their idealism as "unrealistic."',
                dating: 'They are romantic idealists who value authenticity and emotional depth above all else in a partner.\nThey may be shy and reserved initially, but they are deeply committed and nurturing once they find the right person.\nThey often have a "fairy tale" view of love and can be disappointed when the realities of a relationship don\'t match their high ideals.',
                communication: 'Gentle, expressive, and non-confrontational. They prefer using metaphors and discussing values over cold facts.\nThey are excellent listeners who provide a safe space for others to express their feelings without judgment.\nWhen discussing important topics, they speak from the heart and are deeply hurt if their sincere expressions are dismissed or ridiculed.',
                caution: 'Avoid harsh, blunt criticism or forcing them to conform to strict social norms; they need room to be their unique selves.\nRespect their need for personal values and internal harmony; they will not compromise on what they believe is right.\nBe patient with their occasional indecisiveness; they are often weighing many emotional possibilities before making a choice.'
            },
            'ENFJ': {
                name: 'Protagonist',
                summary: 'Charismatic, inspiring, and empathetic leaders who are passionate about helping others. They have a natural ability to connect with people and are often seen as the "heart" of any community they are part of.',
                strengths: '• Receptive: They are excellent listeners and value others\' opinions.\n• Altruistic: Their primary motivation is to help others succeed.\n• Natural leaders: People are naturally drawn to their energy and warmth.\n• Strong communication: They are eloquent and persuasive speakers.',
                weaknesses: '• Overly idealistic: They may struggle to see the harsh realities of people.\n• Intense: Their passion can sometimes be overwhelming for others.\n• Sensitive to criticism: They feel personal failure when they can\'t help someone.\n• Prone to self-sacrifice: They often ignore their own needs for others.',
                careers: 'Teacher, Sales Manager, Public Relations, Human Resources, Minister.',
                famous: 'Barack Obama, Oprah Winfrey, Maya Angelou, Malala Yousafzai.',
                compatibility: 'Best with INFP and ISFP. They value partners who are appreciative of their support and share their core humanitarian values.\nThey thrive in relationships where there is mutual growth and a shared desire to make the world a better place.\nThey may feel unappreciated with partners who are overly independent or dismissive of emotional connection.',
                dating: 'They are warm, supportive, and highly committed partners who enjoy planning meaningful activities and surprises.\nThey strive for harmony in relationships and will often go to great lengths to resolve conflicts and ensure their partner is happy.\nSometimes they can be "over-nurturing," potentially stifling their partner\'s independence in their desire to be helpful.',
                communication: 'Inspirational, warm, and highly persuasive. They are experts at reading a room and adjusting their tone to fit the audience.\nThey focus on building consensus and making everyone feel heard and valued in a conversation.\nThey use emotional appeals and personal stories to inspire others and are deeply concerned with maintaining positive social dynamics.',
                caution: 'Don\'t take their helpfulness for granted; they need to feel that their efforts are recognized and appreciated.\nBe open about your feelings but avoid being overly pessimistic or cold, as this can deeply discourage them.\nRemind them to take time for themselves; they often prioritize everyone else\'s needs until they are completely exhausted.'
            },
            'ENFP': {
                name: 'Campaigner',
                summary: 'Enthusiastic, creative, and sociable free spirits who can always find a reason to smile. They are driven by a sense of adventure and a deep curiosity about the world and the people in it.',
                strengths: '• Curious: They are always looking for new possibilities and meanings.\n• Enthusiastic: Their energy is infectious and uplifting.\n• Excellent communicators: They are charming and can talk to anyone.\n• Warm and friendly: They genuinely care about connecting with others.',
                weaknesses: '• People-pleasing: They may struggle to say "no" and overcommit.\n• Unfocused: Their love for new ideas can lead to a lack of follow-through.\n• Overly optimistic: They may ignore practical problems or red flags.\n• Restless: They get bored easily with routine or administrative tasks.',
                careers: 'Entertainer, Consultant, Psychologist, Creative Writer, PR Specialist.',
                famous: 'Robert Downey Jr., Robin Williams, Quentin Tarantino, Ellen DeGeneres.',
                compatibility: 'Best with INFJ and INTJ. They need partners who can help them ground their energy and focus while appreciating their creativity.\nThey value deep emotional connection and a sense of shared adventure, thriving with partners who are open to new experiences.\nThey may find highly structured or traditional environments stifling and will seek partners who respect their need for freedom.',
                dating: 'Exciting, playful, and deeply emotional. They value shared experiences and want a partner who can join them on their spontaneous adventures.\nThey are very affectionate and expressive, often seeing the best in their partners and encouraging their personal growth.\nHowever, they can struggle with the "boring" parts of a long-term relationship and need constant novelty to stay fully engaged.',
                communication: 'Animated, passionate, and non-linear. They jump between ideas quickly and love discussing "what if" scenarios and future possibilities.\nThey are excellent at making others feel special and heard, using their warmth to create an immediate sense of connection.\nThey prefer discussing big ideas and emotions over mundane details, which they often find tedious and uninspiring.',
                caution: 'Don\'t box them in with too many rules or a rigid routine; they need to feel that they have options and freedom.\nShow genuine appreciation for their creativity and spontaneous nature; they thrive on positive reinforcement.\nHelp them stay focused on their most important goals without being overly critical of their many other interests.'
            },
            'ISTJ': {
                name: 'Logistician',
                summary: 'Practical, fact-minded, and reliable individuals who value order and responsibility. They are the backbone of any organization, ensuring that systems and traditions are upheld with integrity and precision.',
                strengths: '• Honest and direct: They value integrity above all.\n• Strong-willed: They fulfill their duties regardless of obstacles.\n• Responsible: They are highly organized and meet deadlines.\n• Calm and practical: They stay grounded even in stressful situations.',
                weaknesses: '• Stubborn: They can be resistant to new ideas that challenge tradition.\n• Judgmental: They may have little patience for those who don\'t follow rules.\n• Self-blaming: They take responsibility for things outside their control.\n• Insensitive: Their focus on facts can sometimes ignore emotional needs.',
                careers: 'Accountant, Auditor, Police Officer, Military Leader, Office Manager.',
                famous: 'George Washington, Angela Merkel, Anthony Hopkins, Natalie Portman.',
                compatibility: 'Best with ESFP and ESTP. They value partners who bring excitement and spontaneity but respect their need for stability and order.\nThey appreciate loyalty and reliability in others, often seeking partners who have a clear sense of duty and responsibility.\nThey may find it difficult to connect with types that are highly emotional, unpredictable, or dismissive of established rules.',
                dating: 'They are serious, reliable, and dedicated partners who show love through practical actions rather than grand romantic gestures.\nThey value traditional relationship structures and believe in honoring their commitments and responsibilities to their family.\nInitially, they may be reserved, but they are incredibly steady and provide a strong foundation for a long-term relationship.',
                communication: 'Factual, structured, and literal. They prefer clear, direct instructions and have a low tolerance for ambiguity, exaggeration, or "fluff."\nThey value efficiency and honesty, expecting others to be as straightforward and dependable as they are in their interactions.\nDuring disagreements, they stick to the facts and evidence, sometimes appearing cold or dismissive of purely emotional arguments.',
                caution: 'Be clear, concise, and honest with your expectations; they appreciate directness and feel frustrated by vague or hidden meanings.\nRespect their need for order and tradition; don\'t change plans at the last minute without a very good, practical reason.\nShow appreciation for the many practical ways they support you; they may not ask for praise, but they value being recognized for their reliability.'
            },
            'ISFJ': {
                name: 'Defender',
                summary: 'Dedicated, warm, and protective individuals who are always ready to support their loved ones. They are the silent helpers, often working behind the scenes to ensure everyone is cared for and comfortable.',
                strengths: '• Supportive: They are always there when someone needs help.\n• Patient: They have the ability to handle repetitive or difficult tasks.\n• Loyal: Their commitment to family and friends is unwavering.\n• Observant: They notice small details that others often miss.',
                weaknesses: '• Humble to a fault: They often downplay their own achievements.\n• Take things personally: They can be deeply hurt by minor criticisms.\n• Repress feelings: They may hide their emotions to avoid burdening others.\n• Overload themselves: They have difficulty saying "no" to people.',
                careers: 'Nurse, Teacher, Social Worker, Customer Service, Interior Designer.',
                famous: 'Mother Teresa, Beyonce, Aretha Franklin, Kate Middleton.',
                compatibility: 'Best with ESFP and ESTP. They need partners who can help them step out of their comfort zone and appreciate their nurturing care.\nThey value long-term stability and traditional values, often seeking partners who are equally committed to family and community.\nThey may struggle with partners who are overly critical, dismissive of traditions, or emotionally unavailable.',
                dating: 'They are incredibly nurturing, loyal, and supportive partners who show love through thoughtful gestures and practical acts of service.\nThey value harmony and will often prioritize their partner\'s needs above their own to ensure a comfortable and happy home life.\nThey take their commitments very seriously and look for a partner who is ready for a stable, long-term, and traditional relationship.',
                communication: 'Gentle, kind, and detail-oriented. They are excellent listeners who focus on the practical needs and well-being of others.\nThey often remember small details about people\'s lives and use this information to make others feel special and cared for.\nIn conflict, they are non-confrontational and may struggle to express their own needs for fear of causing disharmony.',
                caution: 'Don\'t take their quiet support and service for granted; show genuine, active appreciation for the many things they do for you.\nAvoid being overly harsh, abrasive, or critical; they are sensitive and can be deeply hurt by a cold or judgmental tone.\nEncourage them to express their own needs and feelings, as they have a tendency to repress them to keep others happy.'
            },
            'ESTJ': {
                name: 'Executive',
                summary: 'Excellent administrators who are unsurpassed at managing things and people. They value tradition, order, and clear rules, and they are often the ones who bring people together for a common purpose.',
                strengths: '• Dedicated: They are committed to seeing a job through to the end.\n• Direct and honest: You always know where you stand with them.\n• Loyal: They are dependable partners and friends.\n• Excellent organizers: They are experts at managing resources and people.',
                weaknesses: '• Inflexible: They may struggle with change or unconventional ideas.\n• Uncomfortable with new: They prefer tried-and-true methods over innovation.\n• Judgmental: They can be harsh with those who don\'t meet their standards.\n• Difficulty with emotion: They may see feelings as a sign of weakness.',
                careers: 'Project Manager, General Manager, Financial Officer, Government Official.',
                famous: 'John D. Rockefeller, Frank Sinatra, Martha Stewart, Hillary Clinton.',
                compatibility: 'Best with INFP and ISFP. They value partners who can provide emotional depth and flexibility to balance their structured nature.\nThey appreciate partners who are reliable, hardworking, and respect the social order and traditions they hold dear.\nThey may find it challenging to deal with partners who are highly emotional, disorganized, or dismissive of established rules.',
                dating: 'They are stable, committed, and dependable partners who value clarity and structure in their personal relationships.\nThey show love through providing stability and ensuring that all practical aspects of the relationship and household are running efficiently.\nThey have high expectations for themselves and their partners, believing that a successful relationship requires hard work and mutual responsibility.',
                communication: 'Clear, authoritative, and fact-based. They value efficiency and expect others to be as direct, organized, and honest as they are.\nThey have a "no-nonsense" approach to conversation and will often cut through emotional complexity to get to the core practical issue.\nIn a group, they naturally take the lead, organizing tasks and ensuring that everyone understands their role and the rules.',
                caution: 'Be organized and reliable; they respect competence and have little patience for disorganization or lack of punctuality.\nIf you have a disagreement, present your case with logic and evidence rather than raw emotion; they value rational arguments.\nUnderstand that their desire for order is an expression of care for the stability of the relationship, not an attempt to be "bossy."'
            },
            'ESFJ': {
                name: 'Consul',
                summary: 'Caring, social, and community-minded individuals who are always eager to help. They are the social butterflies who thrive on harmony and ensuring that everyone around them feels included and valued.',
                strengths: '• Strong practical skills: They excel at managing daily tasks and events.\n• Strong sense of duty: They feel a personal responsibility to help others.\n• Loyal: They are deeply committed to their social circles and family.\n• Good at connecting: They are naturally skilled at reading social cues.',
                weaknesses: '• Worried about status: They can be overly concerned with how others see them.\n• Inflexible: They may struggle to accept non-traditional lifestyles.\n• Vulnerable to criticism: They take negative feedback very personally.\n• Too needy: They may require constant validation and approval.',
                careers: 'Healthcare Worker, Event Planner, Teacher, Special Education, HR Manager.',
                famous: 'Taylor Swift, Bill Clinton, Jennifer Garner, Steve Harvey.',
                compatibility: 'Best with ISFP and INFP. They need partners who appreciate their social energy and return their warmth and dedication.\nThey thrive with partners who value community, family traditions, and maintaining a harmonious social environment.\nThey may feel hurt or neglected with partners who are overly detached, critical, or dismissive of social conventions.',
                dating: 'They are very traditional, supportive, and dedicated partners who love social activities and strive for a harmonious home life.\nThey show love through constant care, planning social events, and ensuring that their partner feels included in all aspects of their community.\nThey value stability and clear social roles, often seeking a relationship that leads toward a traditional family structure and social status.',
                communication: 'Warm, social, and inclusive. They are great at small talk and often use positive reinforcement to build and maintain relationships.\nThey are sensitive to the emotional needs of others and will adjust their communication to ensure that everyone feels comfortable and valued.\nThey prefer discussing people, community events, and shared values over abstract theories or purely logical debates.',
                caution: 'Show active, verbal appreciation for their efforts; they thrive on positive feedback and need to feel that their care is noticed.\nAvoid being cold, dismissive, or overtly critical of the social norms they value; it can feel like a personal rejection to them.\nBe open and inclusive in your own social interactions, as they value a partner who can integrate well into their large social network.'
            },
            'ISTP': {
                name: 'Virtuoso',
                summary: 'Bold, practical, and experimental masters of all kinds of tools. They enjoy exploring the world through their hands and eyes, often taking things apart just to see how they work.',
                strengths: '• Optimistic and energetic: They approach life with a sense of adventure.\n• Creative and practical: They are experts at finding hands-on solutions.\n• Spontaneous and rational: They are adaptable but rely on logic.\n• Great in a crisis: They stay calm and focused when things go wrong.',
                weaknesses: '• Stubborn: They may resist rules or structures that feel restrictive.\n• Insensitive: They may prioritize logic over others\' emotional needs.\n• Private: They can be difficult to get to know deeply.\n• Risk-prone: Their love for novelty can lead to dangerous situations.',
                careers: 'Engineer, Mechanic, Pilot, Forensic Scientist, Data Analyst.',
                famous: 'Bear Grylls, Michael Jordan, Tom Cruise, Mulan (Fictional).',
                compatibility: 'Best with ESFJ and ESTJ. They value partners who are practical and respect their deep need for individual independence.\nThey enjoy the company of people who are active and spontaneous, preferring shared activities over long emotional discussions.\nThey may find highly emotional or demanding partners overwhelming and will withdraw if they feel their freedom is being threatened.',
                dating: 'They value their freedom and need partners who are equally independent and capable of enjoying life in the moment.\nThey show love through shared adventures, physical connection, and solving practical problems for their partner rather than through words.\nInitially, they can be hard to read, as they prefer to live for today and may be hesitant to make long-term emotional commitments too early.',
                communication: 'Concise, objective, and action-oriented. They prefer discussing "how" something works rather than "why" in a philosophical sense.\nThey have a "wait and see" approach to conversation, often listening more than they speak until they have a practical solution to offer.\nThey have little patience for abstract theories or emotional drama, preferring to keep interactions simple and focused on reality.',
                caution: 'Don\'t try to control, micro-manage, or limit their freedom; they need physical and mental space to explore and experiment.\nRespect their need for hands-on exploration and occasional solitude; it is how they process information and recharge.\nBe direct and practical when discussing problems; they respond much better to logic than to intense emotional appeals.'
            },
            'ISFP': {
                name: 'Adventurer',
                summary: 'Flexible, charming, and artistic individuals who are always ready to explore something new. They live in a world of sensory possibilities and often express themselves through their personal aesthetic and actions.',
                strengths: '• Charming: Their relaxed and friendly nature makes them easy to be around.\n• Sensitive: They are deeply in tune with their own and others\' emotions.\n• Artistic: They have a strong sense of beauty and aesthetics.\n• Flexible: They are open to new experiences and change.',
                weaknesses: '• Fiercely independent: They may resist any attempts to be "boxed in."\n• Unpredictable: Their focus on the present can lead to sudden changes in direction.\n• Stressed easily: They may struggle with high-pressure environments.\n• Competitive: Their desire for originality can sometimes lead to unhealthy rivalry.',
                careers: 'Artist, Musician, Chef, Veterinarian, Designer.',
                famous: 'Lana Del Rey, Jungkook (BTS), Rihanna, David Bowie.',
                compatibility: 'Best with ENFJ and ESFJ. They need partners who appreciate their artistry and provide the emotional warmth and stability they need.\nThey value authenticity and sensory experiences, thriving with partners who are kind, supportive, and open to the beauty in the world.\nThey may struggle with partners who are overly critical, rigid, or focus purely on logic and efficiency at the expense of feeling.',
                dating: 'They are romantic, loyal, and deeply sensitive partners who value sensory experiences like good food, music, and travel in a relationship.\nThey need plenty of personal space to be themselves and express their creativity without being "boxed in" by too many rules.\nWhile they may not be the most vocal about their feelings, they show deep commitment through their actions and the beauty they bring to their partner\'s life.',
                communication: 'Quiet, observant, and non-judgmental. They prefer expressing themselves through actions or artistic mediums rather than long speeches.\nThey are excellent at reading the emotional atmosphere of a room and will often use their presence to provide quiet support to those in need.\nThey value sincerity and will often withdraw from conversations that feel fake, overly competitive, or aggressively logical.',
                caution: 'Avoid being overly critical or pushy; they are sensitive and need to feel that their unique perspective is respected and valued.\nRespect their need for creative freedom and spontaneous changes in direction; they live for the "now" and hate being tied to a rigid plan.\nShow appreciation for their aesthetic sense and the small, beautiful details they add to your life; it is their way of expressing love.'
            },
            'ESTP': {
                name: 'Entrepreneur',
                summary: 'Smart, energetic, and very perceptive people who truly enjoy living on the edge. They are action-oriented and often prefer to "leap before they look," trusting their ability to handle whatever comes their way.',
                strengths: '• Bold: They are not afraid to take risks and try new things.\n• Rational and practical: They focus on what works in the moment.\n• Perceptive: They notice small changes in their environment immediately.\n• Sociable: They are natural entertainers and love being the center of attention.',
                weaknesses: '• Insensitive: Their focus on action can lead to ignoring others\' feelings.\n• Impatient: They hate waiting and may rush into situations prematurely.\n• Risk-prone: Their desire for excitement can lead to reckless behavior.\n• Defiant: They may disregard rules that they see as obstacles to action.',
                careers: 'Salesperson, Stockbroker, Entrepreneur, Athlete, Firefighter.',
                famous: 'Donald Trump, Madonna, Bruce Willis, Samuel L. Jackson.',
                compatibility: 'Best with ISFJ and ISTJ. They value partners who are reliable and provide a stable home base for their high-energy life.\nThey thrive with partners who are active, adventurous, and don\'t take things too seriously, preferring to live life to the fullest together.\nThey may find highly sensitive or abstract-minded partners confusing and will struggle with those who want to over-analyze every emotion.',
                dating: 'Exciting, adventurous, and very direct. They value physical connection and shared activities, looking for partners who are as energetic as they are.\nThey live in the "here and now" and may struggle with long-term planning or heavy emotional discussions in the early stages of a relationship.\nIn a committed partnership, they are exciting and playful, always looking for the next adventure to share with their loved one.',
                communication: 'Energetic, direct, and focused on reality. They are great at storytelling and using humor to engage and entertain others.\nThey have a "get it done" attitude and will often grow impatient with long, theoretical discussions or emotional "drifting" during a talk.\nThey are very observant and will often comment on the immediate physical world around them, using their sharp wit to navigate social situations.',
                caution: 'Don\'t try to tie them down with too much long-term planning or rigid rules; they need to feel that they can seize the moment.\nBe direct and keep up with their high energy levels; they respect people who are active and capable of handling a fast-paced environment.\nUnderstand that their occasional lack of sensitivity is not intended to be hurtful; they are simply more focused on action and logic than on subtle emotions.'
            },
            'ESFP': {
                name: 'Entertainer',
                summary: 'Spontaneous, energetic, and enthusiastic people who make life around them more fun. They love being the center of attention and are experts at finding joy in the present moment.',
                strengths: '• Bold: They love trying new things and being the first to experience them.\n• Excellent people skills: They are naturally warm and engaging.\n• Aesthetic: They have a strong sense of style and enjoy the finer things in life.\n• Observant: They are highly aware of others\' needs and emotions.',
                weaknesses: '• Sensitive to criticism: They take negative feedback very personally.\n• Easily bored: They struggle with routine and long-term planning.\n• Poor planners: Their focus on the "now" can lead to neglecting future responsibilities.\n• Conflict-averse: They may avoid necessary but difficult conversations.',
                careers: 'Actor, Event Coordinator, Tour Guide, Fashion Designer, Public Relations.',
                famous: 'Marilyn Monroe, Adele, Justin Bieber, Miley Cyrus.',
                compatibility: 'Best with ISFJ and ISTJ. They need partners who can provide a sense of stability and support while appreciating their vibrant social energy.\nThey thrive in relationships where there is plenty of fun, physical affection, and shared social experiences with friends and family.\nThey may feel neglected or bored with partners who are overly serious, critical, or prefer to spend all their time in solitary, abstract thought.',
                dating: 'Playful, affectionate, and fun-loving partners who value variety and excitement in their relationships.\nThey love surprising their partners with gifts or spontaneous outings and believe that a relationship should be a constant source of joy.\nHowever, they can struggle with the serious or "heavy" parts of a partnership, often using their charm to avoid necessary but difficult conversations.',
                communication: 'Friendly, animated, and story-driven. They love sharing their personal experiences and use many sensory details to bring their stories to life.\nThey are excellent at making others feel welcome and included, using their natural warmth to create an immediate sense of fun and connection.\nThey prefer discussing current events, people, and sensory experiences over abstract theories or long-term, purely logical plans.',
                caution: 'Show enthusiasm for their ideas and social energy; they thrive on positive reinforcement and love being the center of your attention.\nAvoid being overly critical or focusing too much on long-term, abstract plans that take away from the joy of the present moment.\nBe supportive when they encounter conflict; they are sensitive and may need help navigating difficult emotions that they would otherwise avoid.'
            }
        }
    },
    ko: {
        title: 'MBTI 인사이트',
        subtitle: '상세한 특징 분석을 통해 성격 유형의 깊이를 탐구해보세요.',
        themeLight: '라이트 모드',
        themeDark: '다크 모드',
        aboutTitle: 'MBTI란 무엇인가요?',
        aboutContent: '마이어스-브릭스 유형 지표(MBTI)는 사람들이 세상을 어떻게 인식하고 결정을 내리는지에 대한 심리적 선호도를 나타내는 자기 보고식 설문 조사입니다. 자신의 유형을 이해하면 직업 선택과 인간관계를 포함한 삶의 다양한 측면에서 큰 도움이 될 수 있습니다.',
        headers: {
            summary: '개요',
            strengths: '강점',
            weaknesses: '약점',
            careers: '추천 직업',
            famous: '유명 인사',
            compatibility: '궁합',
            dating: '연애 스타일',
            communication: '대화 스타일',
            caution: '주의할 점'
        },
        data: {
            'INTJ': {
                name: '용의주도한 전략가',
                summary: '전략적이며 논리적이고, 계획 세우기와 문제 해결을 즐기는 체계적인 사고가입니다. 지식에 대한 갈망이 크고 효율성을 중시하며, 세상을 거대한 체스판처럼 바라보는 경향이 있습니다.',
                strengths: '• 이성적이고 근거 중심적: 감정보다 논리에 의존합니다.\n• 독립적이고 결단력: 자신의 판단을 믿고 과감하게 행동합니다.\n• 목표 지향적이며 근면: 한번 정한 목표는 끝까지 완수합니다.\n• 혁신적이고 개방적: 시스템을 개선할 새로운 방법을 항상 찾습니다.',
                weaknesses: '• 거만하거나 비판적: 높은 기준을 타인에게도 엄격하게 적용합니다.\n• 감정을 무시: 타인의 감정적 필요를 공감하는 데 어려움을 겪습니다.\n• 사회적 눈치 부족: 잡담이나 사교적인 관례를 시간 낭비로 여깁니다.\n• 과도한 분석: 생각이 너무 많아 실행이 늦어질 때가 있습니다.',
                careers: '소프트웨어 아키텍트, 시스템 분석가, 전략 기획가, 과학자, 프로젝트 매니저',
                famous: '일론 머스크, 니콜라 테슬라, 미셸 오바마, 크리스토퍼 놀란',
                compatibility: 'ENFP, ENTP와 지적 깊이를 공유할 수 있어 가장 잘 어울리는 환상적인 궁합을 자랑합니다.\n삶과 문제 해결에 대해 이성적인 접근 방식을 공유하는 다른 분석가형(NT)들과도 생산적인 관계를 맺습니다.\n다만, 논리적 근거 없이 지나치게 감정적이거나 즉흥적인 유형과는 깊은 유대감을 형성하는 데 다소 시간이 걸릴 수 있습니다.',
                dating: '연애를 매우 논리적으로 접근하며 높은 기준을 가지고 있어, 가벼운 만남보다는 미래를 함께할 장기적인 안정을 추구합니다.\n지적인 연결을 최우선으로 생각하며, 서로의 깊고 의미 있는 독립성을 존중해주는 파트너를 만났을 때 진정한 행복을 느낍니다.\n처음에는 차갑거나 거리가 느껴질 수 있지만, 신뢰가 쌓이면 누구보다 헌신적이며 상대와 함께 성장하기 위해 끊임없이 노력합니다.',
                communication: '직설적이고 간결하며, 명확한 사실과 논리에 집중하여 대화하는 스타일입니다. 중언부언하거나 감정에 호소하는 대화 방식을 싫어합니다.\n대화에서 효율성을 극도로 중시하므로, 상대방이 불필요한 서술 없이 결론부터 명확하게 말해주기를 기대하는 경향이 있습니다.\n갈등 상황에서도 감정적으로 대응하기보다는 객관적인 거리를 유지하며 문제의 근본 원인을 해결하는 데에만 초점을 맞춥니다.',
                caution: '문제를 논의할 때 지나치게 감정적으로 대응하면 대화 자체를 거부할 수 있으니, 가능한 한 이성적인 태도를 유지하는 것이 좋습니다.\n정보를 혼자 처리할 충분한 공간과 시간을 주어야 하며, 즉각적인 감정적 반응을 강요하는 것은 관계에 독이 될 수 있습니다.\n솔직함이 최고의 무기입니다. 이들은 복잡한 심리 게임이나 돌려 말하기, 피상적인 사교적 관례를 매우 지루하고 비효율적으로 여깁니다.'
            },
            'INTP': {
                name: '논리적인 사색가',
                summary: '혁신적이고 호기심이 많으며, 새로운 아이디어와 이론 탐구를 좋아하는 분석적인 사고가입니다. 근본 원리를 이해하기 위해 끊임없이 주변 세상을 분석하며 생각에 잠겨 있을 때가 많습니다.',
                strengths: '• 객관적인 분석: 편견 없이 사물을 있는 그대로 바라봅니다.\n• 독창적이고 창의적: 복잡한 문제에 대해 독특한 해결책을 제시합니다.\n• 개방적 사고: 자신의 의견이 틀렸을 때 언제든 수용할 준비가 되어 있습니다.\n• 열정적: 관심 분야에 대해서는 엄청난 에너지와 집중력을 보입니다.',
                weaknesses: '• 현실과의 단절: 생각에 너무 몰두하여 주변 상황을 놓치기 쉽습니다.\n• 반복되는 일상 기피: 단순하고 반복적인 업무를 매우 지루해합니다.\n• 자기 의심: 너무 많은 분석 끝에 실행 단계에서 주저하는 경향이 있습니다.\n• 무심함: 진실을 중시하다 보니 의도치 않게 타인에게 상처를 줄 수 있습니다.',
                careers: '철학자, 프로그래머, 연구원, 수학자, 대학교수',
                famous: '알베르트 아인슈타인, 빌 게이츠, 아이작 뉴턴, 엘리엇 페이지',
                compatibility: '자신의 이론적 아이디어를 현실로 구현하도록 돕는 ENTJ, ESTJ와 상호보완적인 아주 좋은 궁합을 보여줍니다.\n추상적인 주제로 몇 시간이고 깊은 대화를 나눌 수 있는 다른 내향적 사고형(IN)들과 지적인 즐거움을 공유합니다.\n논리적 진실보다 사교적 관례나 전통을 중시하는 유형과는 대화의 접점을 찾기 어려워하며 답답함을 느낄 수 있습니다.',
                dating: '부담 없는 자유로운 연애를 선호하며, 전형적인 로맨틱한 이벤트보다는 지적인 연결과 가식 없는 솔직함을 훨씬 높게 평가합니다.\n인간관계의 복잡한 심리전보다는 진정성 있는 소통을 원하며, 자신만의 독특한 세계를 이해해주는 파트너를 찾습니다.\n애정 표현이 감정적이기보다는 자신이 아는 지식이나 새로운 아이디어를 공유하는 방식으로 나타나기 때문에 초기에는 이해하기 어려울 수 있습니다.',
                communication: '복잡하고 이론적인 대화를 즐기며, 비유를 자주 사용하고 상대가 자신의 논리 전개를 따라올 것이라 믿고 세부 사항을 생략하기도 합니다.\n배움 자체를 목적으로 하는 토론을 좋아하며, 아이디어의 허점을 찾기 위해 일부러 반대 입장에서 논쟁하는 \'악마의 대변인\' 역할을 즐깁니다.\n일상적인 안부 묻기보다는 시스템의 작동 원리나 세상의 근본적인 "왜"와 "어떻게"에 대해 깊이 파고드는 대화를 훨씬 선호합니다.',
                caution: '엄격한 스케줄이나 단순한 반복 업무를 강요하지 마세요. 이는 이들의 창의적인 사고 프로세스를 억제하고 에너지를 고갈시킵니다.\n지적인 자율성을 존중해주어야 하며, 논리적인 토론 중에 지나치게 감정적인 호소를 하는 것은 이들에게 설득력이 전혀 없습니다.\n이들이 가끔 사회적으로 고립되어 혼자만의 시간을 갖는 것은 당신이 싫어서가 아니라, 정신적 에너지를 재충전하기 위한 필수 과정입니다.'
            },
            'ENTJ': {
                name: '대담한 통솔자',
                summary: '대담하고 의지가 강하며, 사람과 자원을 조직하는 데 뛰어난 천성적인 리더입니다. 결단력이 있고 효율성을 무엇보다 중시하며, 목표 달성을 위해 신속하고 효과적으로 상황을 통제합니다.',
                strengths: '• 효율성 극대화: 어떤 환경에서도 최고의 생산성을 끌어냅니다.\n• 자신감: 자신의 리더십과 성공 가능성을 굳게 믿습니다.\n• 전략적 사고: 큰 그림을 보고 장기적인 계획을 세우는 데 능합니다.\n• 카리스마: 자신의 비전을 통해 타인에게 영감을 주고 이끕니다.',
                weaknesses: '• 고집과 지배욕: 결정을 내린 후에는 융통성이 부족해질 수 있습니다.\n• 무관용: 비효율적이거나 무능력한 상황을 견디지 못합니다.\n• 오만함: 강한 자신감이 때로는 자만심으로 비칠 수 있습니다.\n• 냉정함: 결과에 집중하다 보니 사람의 감정을 소홀히 할 때가 있습니다.',
                careers: '기업 경영인, 변호사, 기업가, 판사, 경영 컨설턴트',
                famous: '스티브 Jobs, 고든 램지, 마가렛 대처, 프랭클린 D. 루스벨트',
                compatibility: 'INFP, INTP와 지적으로 도전적이면서도 정서적인 깊이를 나눌 수 있어 가장 이상적인 조화를 이룹니다.\n자신과 비슷하게 성취욕이 강하고 자기 계발에 열정적인 파트너와 함께할 때 서로 시너지를 내며 크게 성장합니다.\n야망이 없거나 논리적인 조언을 거부하고 감정적인 고집을 피우는 상대와는 관계를 유지하는 것을 매우 힘들어합니다.',
                dating: '관심 있는 상대에게 매우 직접적이고 의도적으로 다가가며, 연애도 하나의 목표처럼 열정적이고 책임감 있게 관리합니다.\n관계가 명확한 목표를 향해 나아가기를 원하며, 서로의 발전을 돕고 미래의 성공을 함께 설계하는 동반자적 관계를 선호합니다.\n감정 표현에는 다소 서툴 수 있지만, 신뢰를 바탕으로 한 충성심과 실질적인 문제 해결을 통해 자신의 사랑을 확실하게 증명합니다.',
                communication: '당당하고 명확하며 업무 지향적입니다. 상대방도 자신처럼 직설적이길 원하며 근거가 확실한 논리적인 대화를 높게 평가합니다.\n모호한 표현이나 감정적인 하소연을 견디지 못하며, 논점이 흐려지면 이를 바로잡기 위해 다소 공격적으로 질문을 던질 수 있습니다.\n집단 내에서 자연스럽게 대화의 주도권을 잡고, 정보를 결론이나 행동으로 연결하여 조직의 효율성을 높이는 역할을 수행합니다.',
                caution: '그들의 직설적인 화법을 개인적인 공격으로 받아들이지 마세요. 이는 상처를 주려는 것이 아니라 효율적으로 결론에 도달하려는 노력입니다.\n의견을 제안할 때는 확실한 팩트와 논리를 준비해야 합니다. 이들은 유능함과 철저하게 준비된 입장을 가진 사람을 깊이 존중합니다.\n수동공격적인 태도나 돌려 말하기는 피하세요. 이들에게는 시간 낭비일 뿐이며 관계의 신뢰를 무너뜨리는 가장 빠른 길입니다.'
            },
            'ENTP': {
                name: '뜨거운 논쟁을 즐기는 변론가',
                summary: '지적이고 호기심이 많으며, 전통적인 지혜에 도전하는 것을 즐기는 열정적인 사고가입니다. 지적인 자극에서 활력을 얻으며, 모든 각도에서 아이디어를 탐구하기 위해 반론을 제기하는 것을 즐깁니다.',
                strengths: '• 박학다식: 광범위한 분야에 호기심이 많고 통찰력이 있습니다.\n• 순발력: 임기응변에 능하며 즉흥적인 상황에서 빛을 발합니다.\n• 카리스마: 넘치는 에너지와 유머 감각으로 사람들을 매료시킵니다.\n• 적응력: 새로운 정보가 들어오면 유연하게 방향을 전환합니다.',
                weaknesses: '• 논쟁적: 단순히 재미를 위해 논쟁을 벌여 상대를 지치게 할 수 있습니다.\n• 무심함: 논리에 집중하다 말의 정서적 파급력을 간과하곤 합니다.\n• 집중력 부족: 시작은 화려하나 끝맺음이 부족할 때가 많습니다.\n• 실행 기피: 아이디어 구상은 좋아하지만 반복적인 구현 작업은 싫어합니다.',
                careers: '변호사, 저널리스트, 크리에이티브 디렉터, 마케팅 전문가, 정치 컨설턴트',
                famous: '로버트 다우니 주니어, 마크 트웨인, 톰 행크스, 토마스 에디슨',
                compatibility: 'INFJ, INTJ와 지적 능력이 비슷하면서도 자신의 넘치는 에너지를 받아줄 수 있어 환상적인 시너지를 냅니다.\n끊임없이 쏟아지는 자신의 아이디어를 함께 즐기고 더 발전시킬 수 있는 직관적이고 개방적인 파트너를 선호합니다.\n전통에 집착하거나 지나치게 경직된 사고를 가진 유형과는 가치관의 차이로 인해 잦은 갈등을 겪을 가능성이 높습니다.',
                dating: '예측 불가능하고 흥미진진한 연애를 지향하며, 관계에서의 끊임없는 성장과 새로운 자극을 파트너와 함께 나누기를 원합니다.\n연애 초기에는 지적인 밀당과 재치 있는 대화를 즐기며, 상대를 파악해 나가는 과정 자체에서 큰 즐거움을 얻습니다.\n장기적인 관계에서는 파트너의 개인적인 목표를 전폭적으로 지지하지만, 일상이 너무 단조로워지면 지루함을 느끼고 새로운 변화를 시도하려 합니다.',
                communication: '재치 있고 도발적이며 언변이 뛰어납니다. 새로운 아이디어가 떠오를 때마다 주제를 빠르게 전환하며 열정적으로 토론합니다.\n유머와 반어법을 섞어 대화하는 것을 좋아하여 때로는 진지하지 못하다는 오해를 받기도 하지만, 그 속에는 항상 날카로운 논리가 들어있습니다.\n감정보다는 진실을 우선시하므로 사소한 대화에서도 논리적 모순을 찾아내어 지적하는 것을 멈추지 않는 경향이 있습니다.',
                caution: '그들의 논쟁이 지적 유희일 뿐 개인적인 공격이 아님을 이해하세요. 이들은 아이디어의 논리적 타당성을 검증하는 과정을 즐기는 것뿐입니다.\n아이디어 뱅크인 이들이 좋은 생각들을 끝까지 실행할 수 있도록 실질적인 격려와 도움을 주는 것이 관계 발전에 매우 중요합니다.\n논리적 근거 없는 규칙이나 관습을 강요하지 마세요. 이들은 반드시 행동의 이유를 이해해야만 납득하고 움직이는 유형입니다.'
            },
            'INFJ': {
                name: '선의의 옹호자',
                summary: '조용하고 신비로우며, 깊은 사명감을 바탕으로 움직이는 이상주의자입니다. 복잡한 인간 감정을 이해하는 독특한 능력을 갖추고 있으며, 타인이 잠재력을 실현할 수 있도록 돕는 데 헌신적입니다.',
                strengths: '• 창의적이고 통찰력: 남들이 놓치는 패턴과 의미를 발견합니다.\n• 원칙 중심: 확고한 내면의 가치관에 따라 살아갑니다.\n• 이타적: 긍정적인 변화를 만드는 데 집중합니다.\n• 결단력: 비전이 정해지면 이를 달성하기 위해 끈기 있게 노력합니다.',
                weaknesses: '• 비판에 민감: 부정적인 피드백을 매우 개인적이고 깊게 받아들입니다.\n• 매우 폐쇄적: 진정으로 알기까지 오랜 시간이 걸리는 유형입니다.\n• 번아웃 취약: 강렬한 이상주의로 인해 정서적 고갈을 겪기 쉽습니다.\n• 완벽주의: 자신과 타인에게 불가능할 정도로 높은 기준을 제시합니다.',
                careers: '상담사, 심리학자, 작가, 인사 담당자, 비영리 단체 리더',
                famous: '마틴 루터 킹, 넬슨 만델라, 레이디 가가, 니콜 키드먼',
                compatibility: 'ENFP, ENTP와 자신의 깊이를 이해해주고 비전을 지지해주며 에너지를 북돋아 줄 수 있는 최고의 궁합을 자랑합니다.\n피상적인 관계보다는 영혼의 울림을 나눌 수 있는 진정성 있는 관계를 갈구하며, 가치관이 비슷한 상대에게 깊이 빠집니다.\n물질적인 성공만을 쫓거나 타인의 감정에 무심하고 피상적인 태도를 보이는 사람과는 깊은 유대감을 형성하기 매우 어렵습니다.',
                dating: '단순한 연애 상대를 넘어 "영혼의 단짝"을 찾으며, 매우 깊고 헌신적이며 정서적인 연결을 관계의 최우선 가치로 둡니다.\n가벼운 만남에는 전혀 관심이 없으며, 인생의 높은 목적을 함께 공유할 수 있는 진지한 파트너십을 원하고 소중히 여깁니다.\n자신의 속마음을 아주 천천히 드러내는 편이므로, 이들이 마음을 열 때까지 기다려줄 줄 아는 인내심 있고 진실한 상대가 필요합니다.',
                communication: '공감 능력이 뛰어나고 상징적이며 조용한 편입니다. 의미 있는 철학적 주제를 다루는 깊이 있는 1:1 대화를 가장 선호합니다.\n상대방의 언어 너머에 숨겨진 의도나 정서를 읽어내는 능력이 탁월하며, 경청을 통해 상대가 존중받고 있음을 느끼게 해줍니다.\n집단 내에서는 대개 조용히 관찰하는 편이지만, 자신의 핵심 가치나 비전과 관련된 주제가 나오면 매우 단호하고 호소력 있게 말합니다.',
                caution: '혼자만의 시간이 필요한 그들의 특성을 개인적으로 받아들이지 마세요. 이는 강렬한 감정을 처리하고 번아웃을 막기 위한 생존 전략입니다.\n가식이나 거짓말은 금방 알아차리므로 피해야 합니다. 이들은 상대의 진심을 파악하는 예리한 직관을 가지고 있습니다.\n그들의 도덕적 원칙과 가치관을 존중하세요. 자신의 신념이 훼손된다고 느끼면 가차 없이 관계를 끊어버리는 \'도어슬램\'을 할 수도 있습니다.'
            },
            'INFP': {
                name: '열정적인 중재자',
                summary: '시적이고 친절하며, 선한 일을 위해 항상 도울 준비가 된 이타적인 개인입니다. 강한 내면의 가치에 따라 움직이며 인생의 의미와 조화를 찾는 데 일생을 바치기도 합니다.',
                strengths: '• 공감과 동정심: 타인의 감정을 자신의 것처럼 깊게 느낍니다.\n• 창의적이고 상상력 풍부: 예술이나 글쓰기에 탁월한 재능을 보입니다.\n• 이상주의: 사람들의 내면에는 기본적으로 선함이 있다고 믿습니다.\n• 유연성: 개방적이며 새로운 상황에 잘 적응합니다.',
                weaknesses: '• 지나친 이상주의: 현실의 가혹함에 쉽게 상처받거나 실망합니다.\n• 자기비판적: 자신에게 가장 엄격한 잣대를 들이대곤 합니다.\n• 데이터 처리 미숙: 순수하게 논리적이거나 객관적인 작업에 어려움을 느끼옵니다.\n• 개인적으로 받아들임: 작은 무심함에도 깊은 상처를 받을 수 있습니다.',
                careers: '작가, 예술가, 치료사, 사서, 사회복지사',
                famous: '윌리엄 셰익스피어, J.R.R. 톨킨, 줄리아 로버츠, 조니 뎁',
                compatibility: '자신의 몽상적인 아이디어를 현실로 이끌어주고 구조를 잡아줄 수 있는 ENFJ, ENTJ와 보완적인 좋은 관계를 맺습니다.\n깊은 공감과 예술적 감성을 공유할 수 있는 다른 직관적 감정형들과 정서적으로 풍요로운 관계를 유지하는 것을 좋아합니다.\n자신의 이상주의를 "비현실적"이라고 비하하거나 지나치게 비판적이고 효율성만 강조하는 사람과는 마음의 문을 닫기 쉽습니다.',
                dating: '진정성과 정서적 깊이를 무엇보다 중요하게 생각하는 낭만주의자로, 파트너에게 무한한 지지와 따뜻함을 쏟아붓습니다.\n처음에는 수줍음을 많이 타지만, 마음을 연 파트너에게는 누구보다 헌신적이며 상대의 잠재력을 믿고 응원하는 든든한 조력자가 됩니다.\n사랑에 대해 영화 같은 환상을 품기도 하여, 연애의 현실적인 문제나 갈등이 발생했을 때 이상과의 괴리로 인해 크게 상심하기도 합니다.',
                communication: '부드럽고 표현력이 풍부하며 갈등을 최대한 피하려 합니다. 딱딱한 팩트보다는 비유와 가치 중심의 대화를 훨씬 좋아합니다.\n상대방이 비판받지 않고 자신의 감정을 온전히 드러낼 수 있는 안전한 대화 환경을 만들어주는 탁월한 경청자입니다.\n진심을 담아 이야기할 때 상대가 이를 가볍게 여기거나 비웃으면 깊은 상처를 받으므로, 이들의 가치를 인정해주는 대화 태도가 중요합니다.',
                caution: '가혹한 비판이나 엄격한 사회적 규범을 강요하지 마세요. 이들은 자신만의 독특한 자아를 유지할 자유로운 공간이 필요합니다.\n그들의 개인적인 가치관과 내면의 조화를 존중해 주어야 합니다. 신념에 어긋나는 일을 하라고 압박하는 것은 이들에게 큰 고통입니다.\n이들이 결정을 내리는 데 시간이 걸리더라도 독촉하지 말고 기다려 주세요. 수많은 정서적 가능성을 신중하게 검토하는 중입니다.'
            },
            'ENFJ': {
                name: '정의로운 사회운동가',
                summary: '카리스마 있고 영감을 주며, 타인을 돕는 일에 열정적인 공감 능력이 뛰어난 리더입니다. 사람들과 연결되는 타고난 능력이 있으며 집단 내에서 "심장"과 같은 역할을 수행합니다.',
                strengths: '• 수용적: 경청의 달인이며 타인의 의견을 소중히 여깁니다.\n• 이타적: 타인의 성공을 돕는 것을 가장 큰 보람으로 느킵니다.\n• 타고난 리더: 사람들은 그들의 따뜻함과 에너지에 자연스럽게 이끌립니다.\n• 뛰어난 소통: 설득력 있고 유려한 화술을 구사합니다.',
                weaknesses: '• 과도한 이상주의: 사람들의 냉혹한 현실을 직시하는 데 어려움을 겪습니다.\n• 강렬함: 그들의 넘치는 열정이 때로는 상대에게 부담을 줄 수 있습니다.\n• 비판에 민감: 누군가를 돕지 못했을 때 심한 자책감을 느낍니다.\n• 자기희생적: 타인을 위해 정작 자신의 필요를 무시하곤 합니다.',
                careers: '교사, 영업 관리자, 홍보 전문가, 인사 담당자, 종교인',
                famous: '버락 오바마, 오프라 윈프리, 마야 안젤루, 말랄라 유사프자이',
                compatibility: 'INFP, ISFP와 자신의 따뜻한 지지를 고마워하고 가치관을 공유할 수 있어 서로의 성장을 돕는 아주 좋은 궁합입니다.\n공동체의 발전과 타인에 대한 헌신이라는 삶의 목적을 공유할 수 있는 파트너와 함께할 때 가장 큰 행복을 느낍니다.\n지나치게 독립적이어서 정서적 교감을 거부하거나 이타적인 노력을 무시하는 차가운 성격의 소유자와는 조화를 이루기 어렵습니다.',
                dating: '연인에게 무한한 지지와 응원을 보내는 따뜻하고 헌신적인 연인으로, 의미 있는 활동을 함께 계획하고 공유하는 것을 즐깁니다.\n관계의 화합을 위해 갈등을 앞장서서 해결하려 노력하며, 파트너가 행복해하는 모습에서 자신의 존재 가치를 확인하곤 합니다.\n때로는 상대에게 너무 많은 관심을 쏟아 상대방이 부담을 느끼거나 독립성이 침해된다고 생각할 수 있으니 주의가 필요합니다.',
                communication: '사람들에게 영감을 주는 따뜻하고 설득력 있는 대화가 특징입니다. 분위기를 읽고 상대의 기분에 맞춰 화법을 조절하는 능력이 탁월합니다.\n대화를 통해 합의를 끌어내고 모든 사람이 존중받고 있다는 느낌을 주려 노력하며, 긍정적인 사회적 역동을 유지하는 데 집중합니다.\n자신의 경험담과 감성적인 호소를 적절히 섞어 사람들의 마음을 움직이며, 타인을 칭찬하고 격려하는 데 아낌이 없습니다.',
                caution: '그들의 친절과 헌신을 당연하게 여기지 마세요. 이들은 자신의 노력이 인정받고 있다는 확인을 받을 때 더 큰 힘을 얻습니다.\n감정을 솔직하게 표현하되, 너무 비관적이거나 냉담한 태도로 이들을 대하지 마세요. 이는 이들의 열정을 꺾는 치명적인 행동입니다.\n이들이 자기 자신을 돌볼 수 있도록 도와주세요. 타인만을 챙기다가 정작 본인이 완전히 탈진해버리는 경우가 많기 때문입니다.'
            },
            'ENFP': {
                name: '재기발랄한 활동가',
                summary: '열정적이고 창의적이며, 사교적인 자유로운 영혼으로 언제나 미소 지을 이유를 찾아냅니다. 모험심과 세상 및 사람들에 대한 깊은 호기심을 바탕으로 행동합니다.',
                strengths: '• 호기심: 항상 새로운 가능성과 의미를 찾아다닙니다.\n• 열정적: 그들의 에너지는 주변 사람들까지 기분 좋게 만듭니다.\n• 뛰어난 소통: 매력적이며 누구와도 대화를 잘 이끌어 나갑니다.\n• 따뜻하고 친근함: 진심으로 사람들과 교감하고 싶어 합니다.',
                weaknesses: '• 거절을 못 함: 타인의 기분을 맞추려다 과도한 약속을 하곤 합니다.\n• 집중력 부족: 새로운 아이디어는 좋아하지만 마무리가 약할 수 있습니다.\n• 지나친 낙관: 실질적인 문제나 위험 신호를 간과할 때가 있습니다.\n• 안절부절못함: 반복적인 일상이나 행정적인 업무를 매우 견디기 힘들어합니다.',
                careers: '연예인, 컨설턴트, 심리학자, 작가, 홍보 전문가',
                famous: '로버트 다우니 주니어, 로빈 윌리엄스, 쿠엔틴 타란티노, 엘런 디제너러스',
                compatibility: 'INFJ, INTJ와 자신의 넘치는 에너지를 집중시켜 주고 창의성을 인정해 줄 수 있는 환상적인 궁합을 보여줍니다.\n새로운 도전을 즐기고 정서적 깊이가 있는 파트너와 함께할 때 삶의 활력을 얻으며 모험을 떠나는 것을 좋아합니다.\n지나치게 경직된 규칙을 강조하거나 창의적인 발상을 억제하고 통제하려 하는 사람과는 관계에서 큰 답답함을 느낍니다.',
                dating: '장난기 넘치고 정열적이며 감정 표현이 풍부한 연인입니다. 파트너와 함께하는 모든 순간을 하나의 모험처럼 즐기고 싶어 합니다.\n상대의 장점을 발견해 주고 성장을 독려하는 따뜻한 연인이지만, 연애의 단조로운 일상은 이들을 금방 지치게 할 수 있습니다.\n장기적인 관계를 유지하기 위해서는 늘 새로운 자극과 성취가 필요하며, 서로의 자유를 존중하는 신뢰가 무엇보다 중요합니다.',
                communication: '활기차고 열정적이며 상상력이 넘칩니다. 하나의 주제에 얽매이지 않고 "만약에"와 같은 수많은 가능성을 넘나들며 대화합니다.\n사람들에게 즉각적인 유대감을 느끼게 하는 마법 같은 매력이 있으며, 상대방을 특별하게 만드는 화법을 구사합니다.\n지루한 세부 사항이나 행정적인 보고 방식보다는 큰 그림과 아이디어, 감정에 대해 이야기할 때 가장 눈을 반짝이며 즐거워합니다.',
                caution: '너무 많은 규칙이나 지루한 일상에 가두려 하지 마세요. 이들은 선택지가 있고 자유롭다고 느낄 때 최고의 능력을 발휘합니다.\n그들의 창의성과 돌발적인 행동에 대해 열린 마음으로 반응해 주세요. 긍정적인 피드백은 이들을 움직이게 하는 원동력입니다.\n수많은 관심사 사이에서 가장 중요한 목표에 집중할 수 있도록 돕되, 다른 관심사들을 비하하거나 무시하지 않는 태도가 필요합니다.'
            },
            'ISTJ': {
                name: '청렴결백한 논리주의자',
                summary: '실용적이고 사실에 근거하며, 질서와 책임감을 중시하는 신뢰할 수 있는 개인입니다. 어떤 조직에서든 중추적인 역할을 하며, 성실함과 정확성으로 시스템과 전통을 유지합니다.',
                strengths: '• 정직과 직설적: 무엇보다 무결성을 중요시합니다.\n• 강한 의지: 장애물에 상관없이 자신의 의무를 다합니다.\n• 책임감: 매우 체계적이며 약속 시간을 철저히 지킵니다.\n• 침착하고 실용적: 스트레스 상황에서도 평정심을 유지합니다.',
                weaknesses: '• 고집스러움: 전통에 도전하는 새로운 아이디어에 거부감을 느낄 수 있습니다.\n• 판단적: 규칙을 따르지 않는 사람들을 이해하기 힘들어합니다.\n• 자책: 자신의 통제 밖의 일까지 책임을 지려 할 때가 있습니다.\n• 무심함: 팩트에 집중하다 보니 상대의 감정적 필요를 간과할 수 있습니다.',
                careers: '회계사, 감사관, 경찰관, 군인, 사무 관리자',
                famous: '조지 워싱턴, 앙겔라 메르켈, 안소니 홉킨스, 나탈리 포트만',
                compatibility: 'ESFP, ESTP와 자신의 안정을 존중해 주면서도 삶에 활력을 불어넣어 줄 수 있는 상호보완적인 궁합을 자랑합니다.\n자신처럼 책임감이 강하고 가정과 의무를 소중히 여기는 성실한 사람을 파트너로 만났을 때 깊은 신뢰를 형성합니다.\n지나치게 감정적이거나 계획 없이 즉흥적으로 행동하고 규칙을 우습게 여기는 사람과는 가치관의 차이로 매우 힘들어합니다.',
                dating: '화려한 로맨스보다는 실질적인 행동과 책임감으로 사랑을 증명하는, 매우 진지하고 믿음직하며 헌신적인 연인입니다.\n가정의 질서와 전통을 중요시하며, 자신이 맡은 역할과 의무를 다함으로써 파트너에게 정서적이고 실용적인 안정을 제공합니다.\n초기에는 다소 보수적이고 신중한 태도를 보이지만, 한 번 맺은 인연은 끝까지 책임지는 굳건한 바위 같은 신뢰를 보여줍니다.',
                communication: '사실적이고 구조적이며 명확합니다. 모호한 표현이나 과장, 화려한 미사여구보다는 직설적인 정보 전달을 선호합니다.\n효율성과 정직함을 최우선으로 하며, 상대방도 자신처럼 약속을 잘 지키고 말에 책임감을 갖는 신중한 태도를 보이길 기대합니다.\n갈등 상황에서는 감정적인 호소에 흔들리지 않고 오직 입증된 팩트와 논리만을 바탕으로 문제를 해결하려는 경향이 강합니다.',
                caution: '기대 사항을 명확하고 정직하게 전달하세요. 모호한 요구나 돌려 말하기는 이들을 혼란스럽게 하고 불필요한 에너지를 쓰게 합니다.\n그들의 질서와 전통을 존중해야 합니다. 합리적인 이유 없이 갑작스럽게 계획을 변경하는 것은 이들에게 큰 스트레스를 줍니다.\n그들이 실무적으로 도와주는 많은 일들에 대해 감사를 표현하세요. 말은 안 해도 자신의 성실함이 인정받는 것을 중요하게 생각합니다.'
            },
            'ISFJ': {
                name: '용감한 수호자',
                summary: '헌신적이고 따뜻하며, 사랑하는 사람들을 보호하고 지원할 준비가 된 개인입니다. 보이지 않는 곳에서 모두를 돌보고 편안하게 만드는 조력자 역할을 수행합니다.',
                strengths: '• 지지적: 누군가 도움이 필요할 때 항상 그 자리에 있습니다.\n• 인내심: 반복적이거나 힘든 업무를 묵묵히 처리하는 능력이 있습니다.\n• 충성심: 가족과 친구에 대한 헌신이 매우 강합니다.\n• 관찰력: 다른 사람들이 놓치기 쉬운 세부 사항을 잘 포착합니다.',
                weaknesses: '• 겸손함: 자신의 성취를 과소평가하고 타인에게 공을 돌리곤 합니다.\n• 개인적으로 받아들임: 사소한 비판에도 깊은 상처를 입을 수 있습니다.\n• 감정 억제: 타인에게 짐이 되지 않으려 자신의 힘든 감정을 숨깁니다.\n• 과부하: 거절을 잘 못 해서 감당하기 힘든 수준까지 일을 떠맡기도 합니다.',
                careers: '간호사, 교사, 사회복지사, 고객 지원, 인테리어 디자이너',
                famous: '테레사 수녀, 비욘세, 아레사 프랭클린, 케이트 미들턴',
                compatibility: 'ESFP, ESTP와 자신의 세심한 보살핌을 알아주고 삶의 즐거움을 깨워줄 수 있는 아주 조화로운 궁합을 보여줍니다.\n가족 중심적이고 전통적인 가치를 소중히 여기며, 함께 안정적인 가정을 꾸려갈 수 있는 성실한 상대를 파트너로 원합니다.\n지나치게 비판적이거나 감정적으로 냉담하고, 예의와 사교적 관례를 무시하는 사람과는 함께하는 것을 매우 힘들어합니다.',
                dating: '매우 헌신적이고 따뜻하며 배려심 넘치는 연인으로, 말보다는 세심한 행동과 정성 어린 봉사를 통해 자신의 사랑을 표현합니다.\n관계의 화합을 위해 자신의 필요를 뒤로 미루고 파트너의 행복을 챙기는 이타적인 모습을 보이며, 안정적인 가정을 꿈꿉니다.\n한 번 약속한 것은 끝까지 지키려는 강한 책임감을 느끼며, 파트너가 필요로 하는 모든 것을 뒤에서 조용히 챙겨주는 스타일입니다.',
                communication: '부드럽고 친절하며 세부 사항에 집중하는 경향이 있습니다. 경청을 잘하며 타인의 안녕을 확인하는 질문을 자주 던집니다.\n상대방의 삶에 관한 사소한 정보들을 잘 기억해 두었다가 이를 활용해 상대를 감동시키고 세심하게 배려하는 대화법을 구사합니다.\n갈등이 생기면 공동체의 화합을 깨지 않으려 자신의 의견을 억누르기도 하므로, 이들의 진심을 끌어내려는 노력이 필요합니다.',
                caution: '그들의 조용한 헌신과 배려를 당연한 것으로 여기지 마세요. 진심 어린 감사를 자주 표현하는 것이 이들에게는 가장 큰 보상입니다.\n비판할 때는 부드러운 화법을 사용해야 합니다. 거칠고 냉담한 말투는 이들의 마음을 깊게 다치게 하고 입을 닫게 만듭니다.\n이들이 자신의 감정과 필요를 솔직하게 말할 수 있도록 독려해 주세요. 늘 남만 챙기다가 속으로 병이 드는 경우가 많기 때문입니다.'
            },
            'ESTJ': {
                name: '엄격한 관리자',
                summary: '사물과 사람을 관리하는 데 타의 추종을 불허하는 우수한 행정가입니다. 전통, 질서, 명확한 규칙을 중시하며 공통의 목적을 위해 사람들을 결집시키는 역할을 합니다.',
                strengths: '• 헌신적: 업무가 끝날 때까지 책임지고 완수합니다.\n• 직설적이고 정직: 자신의 입장을 명확히 밝히며 거짓이 없습니다.\n• 충성심: 믿음직한 파트너이자 친구가 되어줍니다.\n• 뛰어난 조직 운영: 자원과 인력을 관리하는 데 전문가입니다.',
                weaknesses: '• 유연성 부족: 변화나 관습을 벗어난 아이디어를 수용하는 데 어려움을 겪습니다.\n• 새로움에 대한 불편함: 혁신보다는 검증된 방식을 선호합니다.\n• 판단적: 자신의 기준에 미치지 못하는 사람들에게 가혹할 수 있습니다.\n• 감정 다루기 미숙: 감정을 약함의 신호로 여기기도 합니다.',
                careers: '프로젝트 매니저, 총무, 재무관, 공무원',
                famous: '존 D. 록펠러, 프랭크 시나트라, 마사 스튜어트, 힐러리 클린턴',
                compatibility: 'INFP, ISFP와 정서적 깊이와 유연함을 보완해 줄 수 있어 서로의 단점을 채워주는 좋은 궁합을 형성합니다.\n성실하고 신뢰할 수 있으며 사회적 질서와 전통을 존중하는 가치관이 뚜렷한 상대를 만났을 때 깊은 안정감을 느낍니다.\n계획 없이 무질서하게 행동하거나 효율성을 무시하고 감정적으로만 대응하는 사람과는 관계에서 끊임없는 충돌을 겪습니다.',
                dating: '연인에게 안정과 신뢰를 제공하는 매우 든든하고 책임감 있는 파트너로, 연애의 모든 과정에서도 명확함과 구조를 중시합니다.\n관계를 안정적으로 유지하기 위해 집안의 모든 실질적인 업무를 완벽하게 관리하며, 파트너와 함께 가정을 세워가는 것에 자부심을 느낍니다.\n자신과 파트너 모두에게 높은 기준을 적용하며, 성공적인 관계를 위해서는 양측 모두가 성실하게 의무를 다해야 한다고 굳게 믿습니다.',
                communication: '명확하고 권위 있으며 사실에 철저히 근거합니다. 대화의 효율성을 중시하며 상대방도 자신처럼 정직하고 체계적이길 바랍니다.\n감정적인 복잡함을 걷어내고 문제의 본질인 실질적인 해결책에 집중하는 "노-넌센스" 대화 방식을 고수하며 직설적으로 말합니다.\n집단 내에서 목표를 향해 사람들을 조직하고 각자의 역할과 규칙을 명확히 전달하여 조직이 원활하게 돌아가도록 만드는 데 탁월합니다.',
                caution: '유능하고 믿음직한 모습을 보여주세요. 이들은 게으름이나 불성실, 약속을 지키지 않는 행동을 매우 싫어하고 존중하지 않습니다.\n이견이 있을 때는 감정에 호소하지 말고 확실한 논리와 증거를 제시하세요. 이들은 합리적인 근거가 있다면 언제든 수용할 준비가 되어 있습니다.\n그들이 질서를 세우려는 노력이 당신을 통제하려는 것이 아니라, 관계를 안정시키기 위한 이들만의 사랑 표현임을 이해해 주어야 합니다.'
            },
            'ESFJ': {
                name: '사교적인 외교관',
                summary: '타인을 돕는 데 열성적이며, 공동체 의식이 강하고 사교적인 개인입니다. 조화를 추구하며 주변 사람들이 존중받고 가치 있게 느껴지도록 만드는 분위기 메이커입니다.',
                strengths: '• 강한 실용적 기술: 일상적인 과업이나 이벤트를 관리하는 데 탁월합니다.\n• 강한 의무감: 타인을 돕는 것을 개인적인 사명으로 느킵니다.\n• 충성심: 가족과 사회적 관계에 깊이 헌신합니다.\n• 사회적 교감: 사회적 신호를 읽고 유대감을 형성하는 데 능숙합니다.',
                weaknesses: '• 지위에 대한 걱정: 타인의 시선을 지나치게 의식할 때가 있습니다.\n• 융통성 부족: 비전통적인 라이프스타일을 받아들이는 데 서툴 수 있습니다.\n• 비판에 취약: 부정적인 피드백을 매우 개인적인 공격으로 받아들입니다.\n• 과도한 인정 욕구: 끊임없는 확인과 승인을 필요로 할 수 있습니다.',
                careers: '의료 종사자, 이벤트 플래너, 교사, 특수 교육, 인사 매니저',
                famous: '테일러 스위프트, 빌 클린턴, 제니퍼 가너, 스티브 하비',
                compatibility: 'ISFP, INFP와 자신의 사교적인 에너지를 지지해 주고 정서적 온기를 나눌 수 있는 아주 따뜻한 궁합입니다.\n가족의 전통과 공동체 의식을 소중히 여기며, 조화로운 사회 환경을 함께 만들어갈 수 있는 성실한 파트너를 원합니다.\n지나치게 냉소적이거나 비판적이고, 사회적 예절과 관습을 무시하는 사람과는 정서적 접점을 찾지 못하고 깊은 상처를 받습니다.',
                dating: '매우 헌신적이고 지지적이며 연인의 모든 사교 활동에 적극적으로 참여하고 도움을 주려는 다정한 파트너입니다.\n끊임없는 배려와 사교적인 이벤트를 통해 파트너가 소속감을 느끼게 하며, 화목하고 잘 정돈된 가정 생활을 위해 최선을 다합니다.\n관계가 안정적인 사회적 지위와 가족의 형태로 발전하기를 원하며, 파트너와 함께하는 일상의 소소한 행복을 매우 중요하게 생각합니다.',
                communication: '따뜻하고 포용적이며 사교적입니다. 긍정적인 피드백을 아끼지 않으며 사람들을 연결하고 관계를 돈독히 하는 데 탁월한 능력을 보입니다.\n주변 사람들의 정서적 상태에 매우 민감하여 상황에 맞게 자신의 화법을 조절하며, 모두가 가치 있게 느껴지도록 대화를 주도합니다.\n이론적인 논쟁보다는 사람들의 안부나 공동체의 소식, 공유하는 가치관에 대해 이야기할 때 가장 편안함과 즐거움을 느낍니다.',
                caution: '그들의 세심한 노력에 대해 적극적이고 구체적인 감사를 말로 표현해 주세요. 이들은 칭찬과 인정 없이는 금방 활력을 잃어버립니다.\n그들이 중요하게 생각하는 사회적 관습이나 예절을 무시하지 마세요. 이는 이들에게 매우 무례하고 자신을 존중하지 않는 것으로 느껴집니다.\n이들의 넓은 인맥과 사교 활동에 함께 어우러지려 노력해 주세요. 이들은 파트너가 자신의 소중한 사람들과 잘 지내는 것을 큰 기쁨으로 여깁니다.'
            },
            'ISTP': {
                name: '만능 재주꾼',
                summary: '대담하고 실용적인 실험가이자 모든 종류의 도구에 능숙한 마스터입니다. 손과 눈을 통해 세상을 탐구하는 것을 즐기며, 사물이 어떻게 작동하는지 확인하기 위해 분해해보는 것을 좋아합니다.',
                strengths: '• 낙천적이고 활기참: 삶을 하나의 모험으로 여기며 즐겁게 살아갑니다.\n• 창의적이고 실용적: 실질적인 해결책을 찾아내는 데 탁월합니다.\n• 즉흥적이면서도 이성적: 유연하게 대처하면서도 논리적인 근거를 둡니다.\n• 위기에 강함: 위기 상황에서 당황하지 않고 냉철하게 집중합니다.',
                weaknesses: '• 고집스러움: 자신을 제약한다고 느끼는 규칙이나 틀에 저항합니다.\n• 무심함: 논리를 우선시하다 타인의 감정적 필요를 놓칠 수 있습니다.\n• 폐쇄적: 자신의 속마음을 드러내는 데 시간이 오래 걸립니다.\n• 위험 감수: 새로운 자극을 쫓다 위험한 상황에 처하기도 합니다.',
                careers: '엔지니어, 정비사, 조종사, 법의학자, 데이터 분석가',
                famous: 'Bear Grylls, 마이클 조던, 톰 크루즈, 뮬란(가상 인물)',
                compatibility: 'ESFJ, ESTJ와 실용적인 면모를 갖추면서도 자신의 강한 독립성을 존중해 줄 수 있어 상호보완적인 좋은 궁합을 보입니다.\n함께 활동적으로 무언가를 즐기고 즉흥적인 모험을 떠날 수 있는 에너지가 넘치고 쿨한 성격의 소유자를 파트너로 선호합니다.\n지나치게 감정적으로 의존하거나 일거수일투족을 통제하고 확인하려 하는 사람과는 관계에서 심한 압박감을 느끼고 금방 멀어집니다.',
                dating: '자유를 사랑하고 독립적인 공간이 필수적인 연인으로, 말보다는 함께하는 활동과 실질적인 도움을 통해 사랑을 표현합니다.\n현재의 즐거움에 충실하며 파트너와 함께하는 즉흥적인 모험을 즐기지만, 감정적인 깊은 약속을 하는 데에는 시간이 다소 걸릴 수 있습니다.\n속마음을 말로 잘 표현하지 않아 무심해 보일 수 있지만, 파트너가 곤경에 처하면 누구보다 빠르고 완벽하게 문제를 해결해 주는 스타일입니다.',
                communication: '간결하고 객관적이며 행동 중심적입니다. 철학적인 이론보다는 사물이 "어떻게" 작동하는지에 관한 실무적인 대화를 훨씬 좋아합니다.\n상황을 조용히 관찰하다가 확실한 해결책이 있을 때만 입을 여는 편이며, 불필요한 수식어나 감정적 과장은 거의 사용하지 않습니다.\n추상적인 미래 계획이나 복잡한 심리 분석 대화에는 큰 흥미를 느끼지 못하며, 명확하고 현실적인 주제를 다룰 때 가장 명쾌하게 소통합니다.',
                caution: '그들을 통제하거나 사소한 것까지 간섭하려 하지 마세요. 이들은 육체적, 정신적으로 자유로운 공간이 확보되어야 숨을 쉽니다.\n이들이 손으로 무언가 탐구하고 실험하거나 혼자만의 취미를 즐기는 시간을 존중해 주어야 합니다. 이는 이들의 에너지 충전 방식입니다.\n문제를 논의할 때는 감정에 호소하기보다 사실 관계를 명확히 하고 논리적으로 접근하세요. 이들은 실용적인 해결책에 훨씬 잘 반응합니다.'
            },
            'ISFP': {
                name: '호기심 많은 예술가',
                summary: '유연하고 매력적이며, 항상 새로운 것을 탐구할 준비가 된 예술적인 개인입니다. 감각적인 가능성의 세계에서 살아가며 자신의 미적 감각과 행동을 통해 자신을 표현합니다.',
                strengths: '• 매력적: 편안하고 친근한 태도로 주변 사람들을 즐겁게 합니다.\n• 감수성 풍부: 자신과 타인의 감정 변화를 매우 민감하게 포착합니다.\n• 예술적: 미적 감각이 뛰어나며 자신만의 스타일을 구축합니다.\n• 유연성: 새로운 경험과 변화에 대해 개방적입니다.',
                weaknesses: '• 강한 독립심: 누군가 자신을 통제하거나 틀에 가두려 하는 것을 거부합니다.\n• 예측 불가능: 현재에 집중하다 보니 계획을 갑작스럽게 변경하곤 합니다.\n• 스트레스 취약: 압박감이 심한 환경에서 평정심을 유지하기 힘들어합니다.\n• 경쟁심: 독창성에 대한 욕구가 과도한 경쟁으로 이어질 수 있습니다.',
                careers: '예술가, 뮤지션, 요리사, 수의사, 디자이너',
                famous: '라나 델 레이, 정국(BTS), 리한나, 데이비드 보위',
                compatibility: 'ENFJ, ESFJ와 자신의 예술적 감성을 이해해주고 정서적인 온기와 안정을 제공해줄 수 있어 매우 따뜻한 궁합입니다.\n친절하고 지지적이며 세상의 아름다움을 함께 즐길 줄 아는 다정한 사람을 파트너로 만났을 때 깊은 정서적 유대를 형성합니다.\n지나치게 비판적이거나 논리적 효율성만을 강조하고 자신의 감수성을 무시하는 사람과는 함께하는 매 순간이 고통스러울 수 있습니다.',
                dating: '낭만적이고 충실하며 매우 섬세한 감성을 지닌 연인으로, 맛있는 음식이나 여행 같은 감각적인 경험을 파트너와 함께 나누는 것을 좋아합니다.\n자신의 독특한 자아를 유지할 충분한 공간이 필요하며, 엄격한 규칙이나 통제 속에서 살아가야 하는 관계는 절대 견디지 못합니다.\n말로 사랑을 속삭이기보다는 파트너의 삶에 아름다움을 더해주거나 헌신적인 행동을 통해 자신이 얼마나 소중하게 생각하는지 증명합니다.',
                communication: '조용히 관찰하며 비판하지 않는 포용적인 대화 스타일을 가졌습니다. 말보다는 예술적 표현이나 행동으로 소통하는 것을 더 선호합니다.\n대화 중인 사람의 감정 상태를 본능적으로 읽어내어 따뜻한 지지를 보내지만, 논리적인 싸움이나 거친 경쟁 구도는 극도로 꺼립니다.\n자신의 진실된 감정을 드러낼 때 상대가 이를 가볍게 여기면 마음을 닫아버리므로, 이들의 가치관을 진지하게 들어주는 태도가 필수적입니다.',
                caution: '지나치게 비판적이거나 몰아붙이는 태도는 삼가 주세요. 이들은 자신의 독특한 감성과 세계관을 존중받는다고 느낄 때 활짝 피어납니다.\n즉흥적인 계획 변경이나 감각적인 탐험을 즐기는 그들의 특성을 이해해야 합니다. 경직된 틀에 가두는 것은 이들의 창의성을 죽이는 일입니다.\n그들이 보여주는 미적 감각이나 삶의 작은 아름다움들에 대해 감사를 표현하세요. 이는 이들이 파트너를 위해 정성껏 마련한 사랑의 신호입니다.'
            },
            'ESTP': {
                name: '모험을 즐기는 사업가',
                summary: '영리하고 에너지 넘치며, 매우 통찰력 있고 삶의 긴장감을 즐기는 사람들입니다. 행동 지향적이며, 어떤 상황이 닥치든 해결할 수 있다는 자신감으로 일단 부딪쳐 보는 것을 선호합니다.',
                strengths: '• 대담함: 위험을 두려워하지 않고 새로운 것에 도전합니다.\n• 이성적이고 실용적: 현재 상황에서 즉각적으로 통하는 해결책에 집중합니다.\n• 통찰력: 주변 환경의 미세한 변화를 즉각적으로 알아차립니다.\n• 사교적: 타고난 엔터테이너이며 주목받는 것을 즐깁니다.',
                weaknesses: '• 무심함: 행동에 집중하다 보니 타인의 감정을 간과할 수 있습니다.\n• 성급함: 기다리는 것을 싫어하며 너무 빨리 결정을 내리기도 합니다.\n• 위험 노출: 자극을 쫓다 무모한 행동을 할 가능성이 있습니다.\n• 저항적: 행동을 방해한다고 생각되는 규칙을 무시하는 경향이 있습니다.',
                careers: '영업사원, 증권 중개인, 기업가, 운동선수, 소방관',
                famous: '도널드 트럼프, 마돈나, Bruce Willis, 사무엘 L. 잭슨',
                compatibility: 'ISFJ, ISTJ와 자신의 활동적인 삶을 지지해 주고 안정적인 가정의 토대를 마련해 줄 수 있어 상호보완적인 좋은 궁합입니다.\n인생을 즐겁고 신나게 살아가려는 열정이 가득하며, 심각한 고민보다는 함께 즐거운 시간을 보낼 수 있는 쾌활한 사람을 좋아합니다.\n지나치게 추상적이거나 매사를 복잡하게 분석하려 하고 감정적인 깊은 대화만을 요구하는 사람과는 대화의 흐름이 끊겨 답답함을 느낍니다.',
                dating: '흥미진진하고 모험적이며 매우 직접적으로 감정을 표현하는 화끈한 연인으로, 활동적인 데이트를 즐기며 함께 웃는 시간을 소중히 여깁니다.\n미래에 대한 진지한 고민보다는 "지금 이 순간"을 최고로 행복하게 만드는 것에 집중하며, 파트너와 함께 세상의 즐거운 자극들을 만끽합니다.\n관계가 깊어지면 특유의 위트와 행동력으로 파트너를 즐겁게 하지만, 초기에 너무 무겁고 감정적인 짐을 지우는 것은 이들을 도망치게 할 수 있습니다.',
                communication: '활기차고 직설적이며 지극히 현실적인 주제에 집중합니다. 뛰어난 유머 감각과 실감 나는 이야기로 사람들을 매료시키는 능력이 있습니다.\n행동 지향적인 태도로 인해 장황한 이론이나 정서적인 방황에 대해 이야기할 때는 금방 인내심을 잃고 화제를 전환하려 할 수 있습니다.\n주변 환경의 변화를 즉각적으로 포착하여 농담을 던지거나 상황을 유쾌하게 만드는 데 천재적이며, 거침없는 언변으로 대화를 주도합니다.',
                caution: '너무 먼 미래의 계획이나 엄격한 규칙으로 이들을 묶어두려 하지 마세요. 이들은 매 순간 선택의 자유가 있다고 느낄 때 더 행복해합니다.\n솔직하고 명확하게 소통하세요. 이들은 빠르고 정확한 반응을 선호하며, 활동적인 이들의 속도에 맞춰주는 사람을 높게 평가합니다.\n이들의 무심해 보이는 태도가 악의가 아님을 이해해 주세요. 이들은 감정의 미묘한 흐름보다는 확실한 사실과 눈앞의 행동에 더 집중할 뿐입니다.'
            },
            'ESFP': {
                name: '자유로운 영혼의 연예인',
                summary: '즉흥적이고 에너지 넘치며, 주변 사람들을 즐겁게 만드는 열정적인 사람들입니다. 스포트라이트를 받는 것을 좋아하며 현재 이 순간에서 즐거움을 찾는 데 전문가입니다.',
                strengths: '• 대담함: 새로운 것을 시도하고 가장 먼저 경험하는 것을 즐깁니다.\n• 뛰어난 사교성: 따뜻하고 매력적인 태도로 사람들을 끌어당깁니다.\n• 미적 감각: 스타일 감각이 뛰어나며 삶의 즐거움을 누릴 줄 압니다.\n• 관찰력: 타인의 필요와 감정 상태를 잘 파악합니다.',
                weaknesses: '• 비판에 민감: 부정적인 피드백을 매우 개인적인 공격으로 느낍니다.\n• 쉽게 지루해함: 반복적인 일상이나 장기적인 계획 수립을 힘들어합니다.\n• 계획성 부족: 현재에만 집중하다 미래의 책임을 소홀히 할 수 있습니다.\n• 갈등 회피: 꼭 필요하지만 불편한 대화는 피하려는 경향이 있습니다.',
                careers: '배우, 이벤트 코디네이터, 가이드, 패션 디자이너, 홍보 전문가',
                famous: '마릴린 먼로, 아델, 저스틴 비버, 마일리 사이러스',
                compatibility: 'ISFJ, ISTJ와 자신의 화려한 에너지를 지지해 주면서도 현실적인 안정을 도와줄 수 있어 보완적인 좋은 궁합을 보입니다.\n함께 즐겁게 웃고 떠들며 친구, 가족들과 북적이는 사회적 활동을 즐길 수 있는 외향적이고 다정한 파트너와 함께할 때 행복해합니다.\n매사를 심각하고 비판적으로만 바라보고, 함께 즐길 줄 모르며 혼자만의 생각에만 빠져 있는 사람과는 정서적 거리감을 느끼고 힘들어합니다.',
                dating: '장난기 많고 애정 표현이 풍부하며 재미를 추구하는 연인으로, 파트너와 함께하는 일상을 끊임없는 파티와 기쁨으로 만들고 싶어 합니다.\n깜짝 선물이나 즉흥적인 데이트로 연인을 감동시키는 것을 좋아하며, 함께 맛있는 것을 먹고 즐거운 곳을 가는 감각적인 공유를 사랑합니다.\n다만 관계에서 발생하는 진지한 갈등이나 무거운 대화는 특유의 낙천성으로 피하려 할 수 있으니, 함께 문제를 해결해 나가는 연습이 필요합니다.',
                communication: '친근하고 활기차며 이야기 중심적입니다. 자신의 생생한 경험담을 화려한 수식어와 감각적인 묘사를 섞어 들려주어 상대를 즐겁게 만듭니다.\n상대방을 따뜻하게 반겨주고 포용하는 능력이 탁월하며, 대화 분위기를 즉각적으로 유쾌하고 즐겁게 만드는 마법 같은 사교성을 발휘합니다.\n추상적인 이론이나 지루한 미래 계획보다는 지금 당장 벌어지고 있는 일, 사람, 그리고 즐거운 경험들에 대해 이야기하는 것을 훨씬 좋아합니다.',
                caution: '그들의 아이디어와 사교적인 에너지에 열광적인 반응을 보여주세요. 이들은 자신이 주목받고 인정받는다고 느낄 때 최고의 매력을 발산합니다.\n지나치게 비판적이거나 먼 미래의 추상적인 걱정만 늘어놓는 것은 좋지 않습니다. 현재의 즐거움을 함께 만끽해주는 파트너가 되어 주세요.\n이들이 갈등을 겪을 때 따뜻하게 지지해 주세요. 예민한 이들이 회피하고 싶어 하는 어려운 감정들을 잘 헤쳐 나갈 수 있도록 옆에서 도와주어야 합니다.'
            }
        }
    },
    ja: {
        title: 'MBTIインサイト',
        subtitle: '詳細な特性分析を通じて、性格タイプの深層を探求してください。',
        themeLight: 'ライトモード',
        themeDark: 'ダークモード',
        aboutTitle: 'MBTIとは？',
        aboutContent: 'マイヤーズ・ブリッグス・タイプ指標（MBTI）は、人々が世界をどのように認識し、決定を下すかについての心理的な好みを表す自我報告式のアンケートです。自分のタイプを理解することは、キャリア選択や人間関係を含む人生のさまざまな側面で大いに役立ちます。',
        headers: {
            summary: '概要',
            strengths: '長所',
            weaknesses: '短所',
            careers: 'おすすめの職業',
            famous: '有名人',
            compatibility: '相性',
            dating: '恋愛スタイル',
            communication: '対話スタイル',
            caution: '注意点'
        },
        data: {}
    },
    zh: {
        title: 'MBTI 洞察',
        subtitle: '通过详细的特征分析，深入探索人格类型的奥秘。',
        themeLight: '亮色模式',
        themeDark: '暗色模式',
        aboutTitle: '什么是 MBTI？',
        aboutContent: '迈尔斯-布里格斯类型指标 (MBTI) 是一种内省的自我报告问卷，表明人们在感知世界和做决定方面不同的心理偏好。了解你的类型可以帮助你在职业选择和人际关系等生活的各个方面。',
        headers: {
            summary: '概要',
            strengths: '优势',
            weaknesses: '劣势',
            careers: '推荐职业',
            famous: '著名人物',
            compatibility: '兼容性',
            dating: '恋爱风格',
            communication: '沟通风格',
            caution: '注意事项'
        },
        data: {}
    },
    es: {
        title: 'Perspectiva MBTI',
        subtitle: 'Explora las profundidades de los tipos de personalidad con características detalladas.',
        themeLight: 'Modo Claro',
        themeDark: 'Modo Oscuro',
        aboutTitle: '¿Qué es MBTI?',
        aboutContent: 'El Indicador de Tipo Myers-Briggs (MBTI) es un cuestionario introspectivo de autoinforme que indica diferentes preferencias psicológicas en cómo las personas perciben el mundo y toman decisiones.',
        headers: {
            summary: 'Resumen',
            strengths: 'Fortalezas',
            weaknesses: 'Debilidades',
            careers: 'Mejores Carreras',
            famous: 'Figuras Famosas',
            compatibility: 'Compatibilidad',
            dating: 'Estilo de Citas',
            communication: 'Estilo de Comunicación',
            caution: 'Cosas a tener en cuenta'
        },
        data: {}
    }
};

// Populate data for new languages using English as fallback
['ja', 'zh', 'es'].forEach(lang => {
    translations[lang].data = JSON.parse(JSON.stringify(translations.en.data));
});

let currentLang = localStorage.getItem('lang') || 'en';
let currentTheme = localStorage.getItem('theme') || 'light';

function updateUI() {
    const t = translations[currentLang] || translations.en;
    
    htmlElement.setAttribute('lang', currentLang);
    mainTitle.textContent = t.title;
    mainSubtitle.textContent = t.subtitle;
    aboutTitle.textContent = t.aboutTitle;
    aboutContent.textContent = t.aboutContent;
    
    if (htmlElement.getAttribute('data-theme') === 'dark') {
        themeBtn.textContent = t.themeLight;
    } else {
        themeBtn.textContent = t.themeDark;
    }

    // Set button text to the CURRENT language name
    langBtn.textContent = langNames[currentLang];

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
        card.setAttribute('role', 'button');
        card.setAttribute('aria-label', `View details for ${type}`);
        
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
    const t = translations[currentLang] || translations.en;
    const data = t.data[type];
    
    mbtiTitle.textContent = `${type}: ${data.name}`;
    
    mbtiDesc.innerHTML = `
        <div class="detail-section">
            <h3 class="detail-header">${t.headers.summary}</h3>
            <p class="detail-content">${data.summary}</p>
        </div>
        <div class="detail-section">
            <h3 class="detail-header">${t.headers.strengths}</h3>
            <p class="detail-content">${data.strengths}</p>
        </div>
        <div class="detail-section">
            <h3 class="detail-header">${t.headers.weaknesses}</h3>
            <p class="detail-content">${data.weaknesses}</p>
        </div>
        <div class="detail-section">
            <h3 class="detail-header">${t.headers.careers}</h3>
            <p class="detail-content">${data.careers}</p>
        </div>
        <div class="detail-section">
            <h3 class="detail-header">${t.headers.famous}</h3>
            <p class="detail-content">${data.famous}</p>
        </div>
        <div class="detail-section">
            <h3 class="detail-header">${t.headers.compatibility}</h3>
            <p class="detail-content">${data.compatibility}</p>
        </div>
        <div class="detail-section">
            <h3 class="detail-header">${t.headers.dating}</h3>
            <p class="detail-content">${data.dating}</p>
        </div>
        <div class="detail-section">
            <h3 class="detail-header">${t.headers.communication}</h3>
            <p class="detail-content">${data.communication}</p>
        </div>
        <div class="detail-section">
            <h3 class="detail-header">${t.headers.caution}</h3>
            <p class="detail-content">${data.caution}</p>
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

// Language Dropdown Logic
langBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    langMenu.classList.toggle('show');
});

langMenu.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('click', () => {
        const selectedLang = btn.dataset.lang;
        if (selectedLang && languages.includes(selectedLang)) {
            currentLang = selectedLang;
            localStorage.setItem('lang', currentLang);
            updateUI();
            langMenu.classList.remove('show');
        }
    });
});

// Close dropdown when clicking outside
window.addEventListener('click', () => {
    langMenu.classList.remove('show');
});

// Initial Render
renderGrid();
updateUI();
