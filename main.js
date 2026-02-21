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
                compatibility: 'Best with ENFP and ENTP. They value intellectual depth and growth in partners.',
                dating: 'They approach dating logically. They prefer long-term stability over short-term flings and appreciate partners who respect their independence.',
                communication: 'Direct, concise, and focused on facts. They dislike redundant explanations and emotional outbursts during debates.',
                caution: 'Avoid being overly emotional or illogical when discussing problems. Give them space to process information alone.'
            },
            'INTP': {
                name: 'Logician',
                summary: 'Innovative, curious, and analytical thinkers who love exploring new ideas and theories. They are often lost in thought, constantly analyzing everything around them to understand the underlying principles.',
                strengths: '• Objective analysis: They see things as they are, without bias.\n• Creative and original: They offer unique perspectives on complex problems.\n• Open-minded: They are always willing to reconsider their positions.\n• Enthusiastic: When a topic interests them, their energy is contagious.',
                weaknesses: '• Disconnected: They can become so absorbed in thought they ignore the real world.\n• Impatient with routine: Repetitive tasks are their biggest enemy.\n• Self-doubting: Their constant analysis can lead to hesitation in execution.\n• Insensitive: Their focus on truth can sometimes come across as cold.',
                careers: 'Philosopher, Programmer, Researcher, Mathematician, College Professor.',
                famous: 'Albert Einstein, Bill Gates, Isaac Newton, Elliot Page.',
                compatibility: 'Best with ENTJ and ESTJ. They need partners who can help ground their theoretical ideas into reality.',
                dating: 'Casual and low-pressure. They value intellectual connection and honesty. They may struggle with traditional romantic gestures.',
                communication: 'Complex and theoretical. They often use analogies and may skip over basic details assuming others follow their logic.',
                caution: 'Don\'t force them into strict schedules or small talk. Respect their need for intellectual autonomy.'
            },
            'ENTJ': {
                name: 'Commander',
                summary: 'Bold, strong-willed, and natural leaders who excel at organizing people and resources. They are decisive and value efficiency above all else, often taking charge to ensure goals are met quickly and effectively.',
                strengths: '• Efficient: They maximize productivity in any environment.\n• Self-confident: They trust their abilities to lead and succeed.\n• Strategic thinkers: They see the big picture and plan long-term.\n• Charismatic: They inspire others to follow their vision.',
                weaknesses: '• Stubborn and dominant: They can be inflexible once they\'ve made a decision.\n• Intolerant: They have little patience for inefficiency or incompetence.\n• Arrogant: Their confidence can sometimes cross into hubris.\n• Cold-hearted: They may prioritize results over people\'s feelings.',
                careers: 'Business Executive, Lawyer, Entrepreneur, Judge, Management Consultant.',
                famous: 'Steve Jobs, Gordon Ramsay, Margaret Thatcher, Franklin D. Roosevelt.',
                compatibility: 'Best with INFP and INTP. They value partners who can challenge them intellectually but also offer emotional depth.',
                dating: 'They are intentional and direct in relationships. They look for high-achieving partners and value honesty and clear communication.',
                communication: 'Commanding, clear, and task-oriented. They expect others to be as direct as they are and appreciate well-reasoned arguments.',
                caution: 'Don\'t take their directness personally. Be prepared with facts and logic when challenging their ideas.'
            },
            'ENTP': {
                name: 'Debater',
                summary: 'Smart, curious, and enthusiastic thinkers who enjoy challenging conventional wisdom. They thrive on intellectual stimulation and love playing devil\'s advocate to explore every angle of an idea.',
                strengths: '• Knowledgeable: They have a broad range of interests and insights.\n• Quick-witted: They excel at thinking on their feet.\n• Charismatic: Their energy and humor make them engaging.\n• Adaptable: They can pivot easily when presented with new information.',
                weaknesses: '• Argumentative: They may argue just for the sake of it, exhausting others.\n• Insensitive: They can overlook the emotional impact of their words.\n• Unfocused: They love starting new projects but may struggle to finish them.\n• Dislike implementation: They prefer brainstorming over boring execution.',
                careers: 'Lawyer, Journalist, Creative Director, Marketing Specialist, Political Consultant.',
                famous: 'Robert Downey Jr., Mark Twain, Tom Hanks, Thomas Edison.',
                compatibility: 'Best with INFJ and INTJ. They need partners who can handle their energy and keep them grounded.',
                dating: 'Exciting and unpredictable. They value growth and novelty in relationships and need a partner who can keep up with their fast-paced mind.',
                communication: 'Witty, provocative, and highly verbal. They enjoy debating and may jump from one topic to another rapidly.',
                caution: 'Understand that their debating is an intellectual exercise, not a personal attack. Encourage them to follow through on their best ideas.'
            },
            'INFJ': {
                name: 'Advocate',
                summary: 'Quiet, mystical, and inspiring idealists who are driven by a deep sense of purpose. They possess a unique ability to understand complex human emotions and are often dedicated to helping others realize their potential.',
                strengths: '• Creative and insightful: They see patterns and meanings others miss.\n• Principled: They live by strong internal values.\n• Altruistic: Their focus is on making a positive impact.\n• Decisive: When they have a vision, they are determined to achieve it.',
                weaknesses: '• Sensitive to criticism: They take negative feedback deeply to heart.\n• Extremely private: They are often difficult to get to know.\n• Prone to burnout: Their intense idealism can lead to exhaustion.\n• Perfectionistic: They set impossibly high standards for themselves and others.',
                careers: 'Counselor, Psychologist, Writer, Human Resources, Non-profit Leader.',
                famous: 'Martin Luther King Jr., Nelson Mandela, Lady Gaga, Nicole Kidman.',
                compatibility: 'Best with ENFP and ENTP. They need partners who appreciate their depth and support their vision.',
                dating: 'They look for "soulmates" and value deep, emotional connections. They are loyal and protective of their loved ones.',
                communication: 'Empathetic, symbolic, and often quiet. They prefer one-on-one conversations that touch on meaningful topics.',
                caution: 'Don\'t take their need for solitude personally. Be sincere and avoid superficiality or dishonesty.'
            },
            'INFP': {
                name: 'Mediator',
                summary: 'Poetic, kind, and altruistic individuals who are always eager to help a good cause. They are guided by their strong internal values and often spend their lives searching for meaning and harmony.',
                strengths: '• Empathetic and compassionate: They feel the emotions of others deeply.\n• Creative and imaginative: They are often gifted in the arts or writing.\n• Idealistic: They believe in the inherent goodness of people.\n• Flexible: They are open-minded and adaptable to new situations.',
                weaknesses: '• Overly idealistic: They can be disappointed by reality.\n• Self-critical: They are often their own harshest judges.\n• Difficulty with data: They may struggle with purely logical or objective tasks.\n• Take things personally: They can easily feel hurt by minor slights.',
                careers: 'Writer, Artist, Therapist, Librarian, Social Worker.',
                famous: 'William Shakespeare, J.R.R. Tolkien, Julia Roberts, Johnny Depp.',
                compatibility: 'Best with ENFJ and ENTJ. They need partners who can help them organize their ideas into action.',
                dating: 'They are romantic idealists who value authenticity. They may be shy initially but are deeply committed once they find the right person.',
                communication: 'Gentle, expressive, and non-confrontational. They prefer using metaphors and discussing values over cold facts.',
                caution: 'Avoid harsh criticism or forcing them to conform to strict social norms. Respect their need for personal values.'
            },
            'ENFJ': {
                name: 'Protagonist',
                summary: 'Charismatic, inspiring, and empathetic leaders who are passionate about helping others. They have a natural ability to connect with people and are often seen as the "heart" of any community they are part of.',
                strengths: '• Receptive: They are excellent listeners and value others\' opinions.\n• Altruistic: Their primary motivation is to help others succeed.\n• Natural leaders: People are naturally drawn to their energy and warmth.\n• Strong communication: They are eloquent and persuasive speakers.',
                weaknesses: '• Overly idealistic: They may struggle to see the harsh realities of people.\n• Intense: Their passion can sometimes be overwhelming for others.\n• Sensitive to criticism: They feel personal failure when they can\'t help someone.\n• Prone to self-sacrifice: They often ignore their own needs for others.',
                careers: 'Teacher, Sales Manager, Public Relations, Human Resources, Minister.',
                famous: 'Barack Obama, Oprah Winfrey, Maya Angelou, Malala Yousafzai.',
                compatibility: 'Best with INFP and ISFP. They value partners who are appreciative of their support and share their values.',
                dating: 'They are warm, supportive, and highly committed. They enjoy planning meaningful activities and strive for harmony in relationships.',
                communication: 'Inspirational, warm, and highly persuasive. They are experts at reading a room and adjusting their tone to fit.',
                caution: 'Don\'t take their helpfulness for granted. Be open about your feelings but avoid being overly pessimistic or cold.'
            },
            'ENFP': {
                name: 'Campaigner',
                summary: 'Enthusiastic, creative, and sociable free spirits who can always find a reason to smile. They are driven by a sense of adventure and a deep curiosity about the world and the people in it.',
                strengths: '• Curious: They are always looking for new possibilities and meanings.\n• Enthusiastic: Their energy is infectious and uplifting.\n• Excellent communicators: They are charming and can talk to anyone.\n• Warm and friendly: They genuinely care about connecting with others.',
                weaknesses: '• People-pleasing: They may struggle to say "no" and overcommit.\n• Unfocused: Their love for new ideas can lead to a lack of follow-through.\n• Overly optimistic: They may ignore practical problems or red flags.\n• Restless: They get bored easily with routine or administrative tasks.',
                careers: 'Entertainer, Consultant, Psychologist, Creative Writer, PR Specialist.',
                famous: 'Robert Downey Jr., Robin Williams, Quentin Tarantino, Ellen DeGeneres.',
                compatibility: 'Best with INFJ and INTJ. They need partners who can help them ground their energy and focus.',
                dating: 'Exciting, playful, and deeply emotional. They value shared experiences and want a partner who can join them on their adventures.',
                communication: 'Animated, passionate, and non-linear. They jump between ideas quickly and love discussing "what if" scenarios.',
                caution: 'Don\'t box them in with too many rules or routine. Show appreciation for their creativity and spontaneous nature.'
            },
            'ISTJ': {
                name: 'Logistician',
                summary: 'Practical, fact-minded, and reliable individuals who value order and responsibility. They are the backbone of any organization, ensuring that systems and traditions are upheld with integrity and precision.',
                strengths: '• Honest and direct: They value integrity above all.\n• Strong-willed: They fulfill their duties regardless of obstacles.\n• Responsible: They are highly organized and meet deadlines.\n• Calm and practical: They stay grounded even in stressful situations.',
                weaknesses: '• Stubborn: They can be resistant to new ideas that challenge tradition.\n• Judgmental: They may have little patience for those who don\'t follow rules.\n• Self-blaming: They take responsibility for things outside their control.\n• Insensitive: Their focus on facts can sometimes ignore emotional needs.',
                careers: 'Accountant, Auditor, Police Officer, Military Leader, Office Manager.',
                famous: 'George Washington, Angela Merkel, Anthony Hopkins, Natalie Portman.',
                compatibility: 'Best with ESFP and ESTP. They value partners who bring excitement but respect their stability.',
                dating: 'They are serious and reliable partners. They show love through practical actions and value traditional relationship structures.',
                communication: 'Factual, structured, and literal. They prefer clear instructions and dislike ambiguity or exaggeration.',
                caution: 'Be clear and concise with your expectations. Respect their need for order and don\'t change plans at the last minute.'
            },
            'ISFJ': {
                name: 'Defender',
                summary: 'Dedicated, warm, and protective individuals who are always ready to support their loved ones. They are the silent helpers, often working behind the scenes to ensure everyone is cared for and comfortable.',
                strengths: '• Supportive: They are always there when someone needs help.\n• Patient: They have the ability to handle repetitive or difficult tasks.\n• Loyal: Their commitment to family and friends is unwavering.\n• Observant: They notice small details that others often miss.',
                weaknesses: '• Humble to a fault: They often downplay their own achievements.\n• Take things personally: They can be deeply hurt by minor criticisms.\n• Repress feelings: They may hide their emotions to avoid burdening others.\n• Overload themselves: They have difficulty saying "no" to people.',
                careers: 'Nurse, Teacher, Social Worker, Customer Service, Interior Designer.',
                famous: 'Mother Teresa, Beyonce, Aretha Franklin, Kate Middleton.',
                compatibility: 'Best with ESFP and ESTP. They need partners who can help them step out of their comfort zone and appreciate their care.',
                dating: 'They are incredibly nurturing and loyal partners. They value long-term stability and show love through thoughtful gestures and service.',
                communication: 'Gentle, kind, and detail-oriented. They listen more than they speak and often focus on others\' well-being.',
                caution: 'Don\'t take their quiet support for granted. Show genuine appreciation and avoid being overly harsh or abrasive.'
            },
            'ESTJ': {
                name: 'Executive',
                summary: 'Excellent administrators who are unsurpassed at managing things and people. They value tradition, order, and clear rules, and they are often the ones who bring people together for a common purpose.',
                strengths: '• Dedicated: They are committed to seeing a job through to the end.\n• Direct and honest: You always know where you stand with them.\n• Loyal: They are dependable partners and friends.\n• Excellent organizers: They are experts at managing resources and people.',
                weaknesses: '• Inflexible: They may struggle with change or unconventional ideas.\n• Uncomfortable with new: They prefer tried-and-true methods over innovation.\n• Judgmental: They can be harsh with those who don\'t meet their standards.\n• Difficulty with emotion: They may see feelings as a sign of weakness.',
                careers: 'Project Manager, General Manager, Financial Officer, Government Official.',
                famous: 'John D. Rockefeller, Frank Sinatra, Martha Stewart, Hillary Clinton.',
                compatibility: 'Best with INFP and ISFP. They value partners who can provide emotional depth and flexibility.',
                dating: 'They are stable and committed. They value clarity and structure in relationships and expect their partners to be as dependable as they are.',
                communication: 'Clear, authoritative, and fact-based. They value efficiency and expect others to be direct and organized.',
                caution: 'Be organized and reliable. If you have a disagreement, present your case with logic rather than raw emotion.'
            },
            'ESFJ': {
                name: 'Consul',
                summary: 'Caring, social, and community-minded individuals who are always eager to help. They are the social butterflies who thrive on harmony and ensuring that everyone around them feels included and valued.',
                strengths: '• Strong practical skills: They excel at managing daily tasks and events.\n• Strong sense of duty: They feel a personal responsibility to help others.\n• Loyal: They are deeply committed to their social circles and family.\n• Good at connecting: They are naturally skilled at reading social cues.',
                weaknesses: '• Worried about status: They can be overly concerned with how others see them.\n• Inflexible: They may struggle to accept non-traditional lifestyles.\n• Vulnerable to criticism: They take negative feedback very personally.\n• Too needy: They may require constant validation and approval.',
                careers: 'Healthcare Worker, Event Planner, Teacher, Special Education, HR Manager.',
                famous: 'Taylor Swift, Bill Clinton, Jennifer Garner, Steve Harvey.',
                compatibility: 'Best with ISFP and INFP. They need partners who appreciate their social energy and return their warmth.',
                dating: 'They are very traditional and supportive partners. They love social activities and strive for a harmonious and organized home life.',
                communication: 'Warm, social, and inclusive. They are great at small talk and often use positive reinforcement to build relationships.',
                caution: 'Show active appreciation for their efforts. Avoid being cold or dismissive of social norms they value.'
            },
            'ISTP': {
                name: 'Virtuoso',
                summary: 'Bold, practical, and experimental masters of all kinds of tools. They enjoy exploring the world through their hands and eyes, often taking things apart just to see how they work.',
                strengths: '• Optimistic and energetic: They approach life with a sense of adventure.\n• Creative and practical: They are experts at finding hands-on solutions.\n• Spontaneous and rational: They are adaptable but rely on logic.\n• Great in a crisis: They stay calm and focused when things go wrong.',
                weaknesses: '• Stubborn: They may resist rules or structures that feel restrictive.\n• Insensitive: They may prioritize logic over others\' emotional needs.\n• Private: They can be difficult to get to know deeply.\n• Risk-prone: Their love for novelty can lead to dangerous situations.',
                careers: 'Engineer, Mechanic, Pilot, Forensic Scientist, Data Analyst.',
                famous: 'Bear Grylls, Michael Jordan, Tom Cruise, Mulan (Fictional).',
                compatibility: 'Best with ESFJ and ESTJ. They value partners who are practical and respect their need for independence.',
                dating: 'They value their freedom and need partners who are equally independent. They show love through shared activities and practical help.',
                communication: 'Concise, objective, and action-oriented. They prefer discussing "how" something works rather than "why" in a philosophical sense.',
                caution: 'Don\'t try to control or micro-manage them. Give them physical space and respect their need for hands-on exploration.'
            },
            'ISFP': {
                name: 'Adventurer',
                summary: 'Flexible, charming, and artistic individuals who are always ready to explore something new. They live in a world of sensory possibilities and often express themselves through their personal aesthetic and actions.',
                strengths: '• Charming: Their relaxed and friendly nature makes them easy to be around.\n• Sensitive: They are deeply in tune with their own and others\' emotions.\n• Artistic: They have a strong sense of beauty and aesthetics.\n• Flexible: They are open to new experiences and change.',
                weaknesses: '• Fiercely independent: They may resist any attempts to be "boxed in."\n• Unpredictable: Their focus on the present can lead to sudden changes in direction.\n• Stressed easily: They may struggle with high-pressure environments.\n• Competitive: Their desire for originality can sometimes lead to unhealthy rivalry.',
                careers: 'Artist, Musician, Chef, Veterinarian, Designer.',
                famous: 'Lana Del Rey, Jungkook (BTS), Rihanna, David Bowie.',
                compatibility: 'Best with ENFJ and ESFJ. They need partners who appreciate their artistry and provide emotional warmth.',
                dating: 'They are romantic and loyal but need space to be themselves. They value sensory experiences like good food, music, and travel in a relationship.',
                communication: 'Quiet, observant, and non-judgmental. They prefer expressing themselves through actions or artistic mediums rather than long speeches.',
                caution: 'Avoid being overly critical or pushy. Respect their need for creative freedom and personal space.'
            },
            'ESTP': {
                name: 'Entrepreneur',
                summary: 'Smart, energetic, and very perceptive people who truly enjoy living on the edge. They are action-oriented and often prefer to "leap before they look," trusting their ability to handle whatever comes their way.',
                strengths: '• Bold: They are not afraid to take risks and try new things.\n• Rational and practical: They focus on what works in the moment.\n• Perceptive: They notice small changes in their environment immediately.\n• Sociable: They are natural entertainers and love being the center of attention.',
                weaknesses: '• Insensitive: Their focus on action can lead to ignoring others\' feelings.\n• Impatient: They hate waiting and may rush into situations prematurely.\n• Risk-prone: Their desire for excitement can lead to reckless behavior.\n• Defiant: They may disregard rules that they see as obstacles to action.',
                careers: 'Salesperson, Stockbroker, Entrepreneur, Athlete, Firefighter.',
                famous: 'Donald Trump, Madonna, Bruce Willis, Samuel L. Jackson.',
                compatibility: 'Best with ISFJ and ISTJ. They value partners who are reliable but can also keep up with their fast-paced life.',
                dating: 'Exciting, adventurous, and direct. They value physical connection and shared activities and look for partners who are as energetic as they are.',
                communication: 'Energetic, direct, and focused on the "here and now." They are great at storytelling and using humor to engage others.',
                caution: 'Don\'t try to tie them down with too much planning. Be direct and keep up with their high energy levels.'
            },
            'ESFP': {
                name: 'Entertainer',
                summary: 'Spontaneous, energetic, and enthusiastic people who make life around them more fun. They love being the center of attention and are experts at finding joy in the present moment.',
                strengths: '• Bold: They love trying new things and being the first to experience them.\n• Excellent people skills: They are naturally warm and engaging.\n• Aesthetic: They have a strong sense of style and enjoy the finer things in life.\n• Observant: They are highly aware of others\' needs and emotions.',
                weaknesses: '• Sensitive to criticism: They take negative feedback very personally.\n• Easily bored: They struggle with routine and long-term planning.\n• Poor planners: Their focus on the "now" can lead to neglecting future responsibilities.\n• Conflict-averse: They may avoid necessary but difficult conversations.',
                careers: 'Actor, Event Coordinator, Tour Guide, Fashion Designer, Public Relations.',
                famous: 'Marilyn Monroe, Adele, Justin Bieber, Miley Cyrus.',
                compatibility: 'Best with ISFJ and ISTJ. They need partners who can provide stability and support their social energy.',
                dating: 'Playful, affectionate, and fun-loving. They value variety and excitement in relationships and love surprising their partners with gifts or outings.',
                communication: 'Friendly, animated, and story-driven. They love sharing their experiences and use a lot of sensory details in their speech.',
                caution: 'Show enthusiasm for their ideas and social energy. Avoid being overly critical or focusing too much on long-term, abstract plans.'
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
                compatibility: 'ENFP, ENTP와 가장 잘 맞습니다. 지적인 깊이와 성장을 공유할 수 있는 상대를 선호합니다.',
                dating: '연애도 논리적으로 접근합니다. 가벼운 만남보다 장기적인 안정성을 추구하며, 자신의 독립성을 존중해주는 파트너를 원합니다.',
                communication: '직설적이고 간결하며 팩트 중심입니다. 중언부언하거나 토론 중 감정적으로 대응하는 것을 싫어합니다.',
                caution: '문제를 논의할 때 지나치게 감정적이거나 비논리적인 태도는 피하세요. 혼자 정보를 처리할 시간을 주는 것이 중요합니다.'
            },
            'INTP': {
                name: '논리적인 사색가',
                summary: '혁신적이고 호기심이 많으며, 새로운 아이디어와 이론 탐구를 좋아하는 분석적인 사고가입니다. 근본 원리를 이해하기 위해 끊임없이 주변 세상을 분석하며 생각에 잠겨 있을 때가 많습니다.',
                strengths: '• 객관적인 분석: 편견 없이 사물을 있는 그대로 바라봅니다.\n• 독창적이고 창의적: 복잡한 문제에 대해 독특한 해결책을 제시합니다.\n• 개방적 사고: 자신의 의견이 틀렸을 때 언제든 수용할 준비가 되어 있습니다.\n• 열정적: 관심 분야에 대해서는 엄청난 에너지와 집중력을 보입니다.',
                weaknesses: '• 현실과의 단절: 생각에 너무 몰두하여 주변 상황을 놓치기 쉽습니다.\n• 반복되는 일상 기피: 단순하고 반복적인 업무를 매우 지루해합니다.\n• 자기 의심: 너무 많은 분석 끝에 실행 단계에서 주저하는 경향이 있습니다.\n• 무심함: 진실을 중시하다 보니 의도치 않게 타인에게 상처를 줄 수 있습니다.',
                careers: '철학자, 프로그래머, 연구원, 수학자, 대학교수',
                famous: '알베르트 아인슈타인, 빌 게이츠, 아이작 뉴턴, 엘리엇 페이지',
                compatibility: 'ENTJ, ESTJ와 좋은 궁합을 보입니다. 자신의 이론적인 아이디어를 현실로 구현해줄 파트너를 필요로 합니다.',
                dating: '부담 없는 자유로운 연애를 선호합니다. 지적인 연결과 솔직함을 중시하며, 전형적인 로맨틱한 이벤트에는 서툴 수 있습니다.',
                communication: '복잡하고 이론적입니다. 비유를 자주 사용하며, 상대방이 자신의 논리를 이해할 것이라 가정하고 세부 사항을 건너뛰기도 합니다.',
                caution: '엄격한 스케줄이나 의미 없는 잡담을 강요하지 마세요. 그들의 지적인 자율성을 존중해주어야 합니다.'
            },
            'ENTJ': {
                name: '대담한 통솔자',
                summary: '대담하고 의지가 강하며, 사람과 자원을 조직하는 데 뛰어난 천성적인 리더입니다. 결단력이 있고 효율성을 무엇보다 중시하며, 목표 달성을 위해 신속하고 효과적으로 상황을 통제합니다.',
                strengths: '• 효율성 극대화: 어떤 환경에서도 최고의 생산성을 끌어냅니다.\n• 자신감: 자신의 리더십과 성공 가능성을 굳게 믿습니다.\n• 전략적 사고: 큰 그림을 보고 장기적인 계획을 세우는 데 능합니다.\n• 카리스마: 자신의 비전을 통해 타인에게 영감을 주고 이끕니다.',
                weaknesses: '• 고집과 지배욕: 결정을 내린 후에는 융통성이 부족해질 수 있습니다.\n• 무관용: 비효율적이거나 무능력한 상황을 견디지 못합니다.\n• 오만함: 강한 자신감이 때로는 자만심으로 비칠 수 있습니다.\n• 냉정함: 결과에 집중하다 보니 사람의 감정을 소홀히 할 때가 있습니다.',
                careers: '기업 경영인, 변호사, 기업가, 판사, 경영 컨설턴트',
                famous: '스티브 잡스, 고든 램지, 마가렛 대처, 프랭클린 D. 루스벨트',
                compatibility: 'INFP, INTP와 궁합이 좋습니다. 지적으로 도전이 되면서도 정서적인 깊이를 가진 상대를 선호합니다.',
                dating: '관심 있는 상대에게 매우 직접적이고 의도적으로 다가갑니다. 성취욕이 강한 파트너를 원하며 솔직한 소통을 중시합니다.',
                communication: '당당하고 명확하며 업무 지향적입니다. 상대방도 자신처럼 직설적이길 원하며, 논리적인 근거가 확실한 대화를 선호합니다.',
                caution: '그들의 직설적인 화법을 개인적인 공격으로 받아들이지 마세요. 의견을 제안할 때는 확실한 팩트와 논리를 준비하는 것이 좋습니다.'
            },
            'ENTP': {
                name: '뜨거운 논쟁을 즐기는 변론가',
                summary: '지적이고 호기심이 많으며, 전통적인 지혜에 도전하는 것을 즐기는 열정적인 사고가입니다. 지적인 자극에서 활력을 얻으며, 모든 각도에서 아이디어를 탐구하기 위해 반론을 제기하는 것을 즐깁니다.',
                strengths: '• 박학다식: 광범위한 분야에 호기심이 많고 통찰력이 있습니다.\n• 순발력: 임기응변에 능하며 즉흥적인 상황에서 빛을 발합니다.\n• 카리스마: 넘치는 에너지와 유머 감각으로 사람들을 매료시킵니다.\n• 적응력: 새로운 정보가 들어오면 유연하게 방향을 전환합니다.',
                weaknesses: '• 논쟁적: 단순히 재미를 위해 논쟁을 벌여 상대를 지치게 할 수 있습니다.\n• 무심함: 논리에 집중하다 말의 정서적 파급력을 간과하곤 합니다.\n• 집중력 부족: 시작은 화려하나 끝맺음이 부족할 때가 많습니다.\n• 실행 기피: 아이디어 구상은 좋아하지만 반복적인 구현 작업은 싫어합니다.',
                careers: '변호사, 저널리스트, 크리에이티브 디렉터, 마케팅 전문가, 정치 컨설턴트',
                famous: '로버트 다우니 주니어, 마크 트웨인, 톰 행크스, 토마스 에디슨',
                compatibility: 'INFJ, INTJ와 잘 맞습니다. 자신의 에너지를 받아주면서도 중심을 잡아줄 수 있는 파트너가 필요합니다.',
                dating: '예측 불가능하고 흥미진진한 연애를 합니다. 관계에서의 성장과 새로움을 추구하며, 지적 대화가 잘 통하는 상대를 찾습니다.',
                communication: '재치 있고 도발적이며 언변이 뛰어납니다. 토론 자체를 즐기며, 대화 주제를 빠르게 전환하는 경향이 있습니다.',
                caution: '그들의 논쟁이 지적 유희일 뿐 개인적인 공격이 아님을 이해하세요. 그들이 좋은 아이디어를 끝까지 실행할 수 있도록 격려해주는 것이 좋습니다.'
            },
            'INFJ': {
                name: '선의의 옹호자',
                summary: '조용하고 신비로우며, 깊은 사명감을 바탕으로 움직이는 이상주의자입니다. 복잡한 인간 감정을 이해하는 독특한 능력을 갖추고 있으며, 타인이 잠재력을 실현할 수 있도록 돕는 데 헌신적입니다.',
                strengths: '• 창의적이고 통찰력: 남들이 놓치는 패턴과 의미를 발견합니다.\n• 원칙 중심: 확고한 내면의 가치관에 따라 살아갑니다.\n• 이타적: 긍정적인 변화를 만드는 데 집중합니다.\n• 결단력: 비전이 정해지면 이를 달성하기 위해 끈기 있게 노력합니다.',
                weaknesses: '• 비판에 민감: 부정적인 피드백을 매우 개인적이고 깊게 받아들입니다.\n• 매우 폐쇄적: 진정으로 알기까지 오랜 시간이 걸리는 유형입니다.\n• 번아웃 취약: 강렬한 이상주의로 인해 정서적 고갈을 겪기 쉽습니다.\n• 완벽주의: 자신과 타인에게 불가능할 정도로 높은 기준을 제시합니다.',
                careers: '상담사, 심리학자, 작가, 인사 담당자, 비영리 단체 리더',
                famous: '마틴 루터 킹, 넬슨 만델라, 레이디 가가, 니콜 키드먼',
                compatibility: 'ENFP, ENTP와 잘 맞습니다. 자신의 깊이를 이해해주고 비전을 지지해주는 파트너를 원합니다.',
                dating: '영혼의 단짝을 찾으며 깊고 정서적인 연결을 중시합니다. 사랑하는 사람에게는 매우 헌신적이고 보호적입니다.',
                communication: '공감적이고 상징적이며 조용한 편입니다. 의미 있는 주제를 다루는 1:1 대화를 선호합니다.',
                caution: '혼자만의 시간이 필요한 그들의 특성을 개인적으로 받아들이지 마세요. 가식이나 거짓말은 피하고 진심으로 대해야 합니다.'
            },
            'INFP': {
                name: '열정적인 중재자',
                summary: '시적이고 친절하며, 선한 일을 위해 항상 도울 준비가 된 이타적인 개인입니다. 강한 내면의 가치에 따라 움직이며 인생의 의미와 조화를 찾는 데 일생을 바치기도 합니다.',
                strengths: '• 공감과 동정심: 타인의 감정을 자신의 것처럼 깊게 느낍니다.\n• 창의적이고 상상력 풍부: 예술이나 글쓰기에 탁월한 재능을 보입니다.\n• 이상주의: 사람들의 내면에는 기본적으로 선함이 있다고 믿습니다.\n• 유연성: 개방적이며 새로운 상황에 잘 적응합니다.',
                weaknesses: '• 지나친 이상주의: 현실의 가혹함에 쉽게 상처받거나 실망합니다.\n• 자기비판적: 자신에게 가장 엄격한 잣대를 들이대곤 합니다.\n• 데이터 처리 미숙: 순수하게 논리적이거나 객관적인 작업에 어려움을 느낍니다.\n• 개인적으로 받아들임: 작은 무심함에도 깊은 상처를 받을 수 있습니다.',
                careers: '작가, 예술가, 치료사, 사서, 사회복지사',
                famous: '윌리엄 셰익스피어, J.R.R. 톨킨, 줄리아 로버츠, 조니 뎁',
                compatibility: 'ENFJ, ENTJ와 궁합이 좋습니다. 자신의 아이디어를 현실적인 실행으로 옮겨줄 수 있는 파트너가 필요합니다.',
                dating: '진정성을 중요시하는 낭만주의자입니다. 처음에는 수줍어 보일 수 있지만, 믿음이 생기면 깊은 사랑을 쏟습니다.',
                communication: '부드럽고 표현력이 풍부하며 갈등을 피합니다. 팩트보다는 비유와 가치 중심의 대화를 선호합니다.',
                caution: '가혹한 비판이나 엄격한 사회적 규범을 강요하지 마세요. 그들의 개인적인 가치관을 존중해주는 것이 필수적입니다.'
            },
            'ENFJ': {
                name: '정의로운 사회운동가',
                summary: '카리스마 있고 영감을 주며, 타인을 돕는 일에 열정적인 공감 능력이 뛰어난 리더입니다. 사람들과 연결되는 타고난 능력이 있으며 집단 내에서 "심장"과 같은 역할을 수행합니다.',
                strengths: '• 수용적: 경청의 달인이며 타인의 의견을 소중히 여깁니다.\n• 이타적: 타인의 성공을 돕는 것을 가장 큰 보람으로 느낍니다.\n• 타고난 리더: 사람들은 그들의 따뜻함과 에너지에 자연스럽게 이끌립니다.\n• 뛰어난 소통: 설득력 있고 유려한 화술을 구사합니다.',
                weaknesses: '• 과도한 이상주의: 사람들의 냉혹한 현실을 직시하는 데 어려움을 겪습니다.\n• 강렬함: 그들의 넘치는 열정이 때로는 상대에게 부담을 줄 수 있습니다.\n• 비판에 민감: 누군가를 돕지 못했을 때 심한 자책감을 느낍니다.\n• 자기희생적: 타인을 위해 정작 자신의 필요를 무시하곤 합니다.',
                careers: '교사, 영업 관리자, 홍보 전문가, 인사 담당자, 종교인',
                famous: '버락 오바마, 오프라 윈프리, 마야 안젤루, 말랄라 유사프자이',
                compatibility: 'INFP, ISFP와 좋은 관계를 맺습니다. 자신의 지지를 고마워하고 가치관을 공유하는 상대를 선호합니다.',
                dating: '따뜻하고 지지적이며 헌신적인 연인입니다. 의미 있는 활동을 함께 계획하는 것을 좋아하며 관계의 화합을 위해 노력합니다.',
                communication: '영감을 주고 따뜻하며 설득력이 강합니다. 분위기를 읽고 상황에 맞춰 화법을 조절하는 데 능숙합니다.',
                caution: '그들의 친절을 당연하게 여기지 마세요. 자신의 감정을 솔직하게 표현하되, 너무 비관적이거나 냉담한 태도는 주의해야 합니다.'
            },
            'ENFP': {
                name: '재기발랄한 활동가',
                summary: '열정적이고 창의적이며, 사교적인 자유로운 영혼으로 언제나 미소 지을 이유를 찾아냅니다. 모험심과 세상 및 사람들에 대한 깊은 호기심을 바탕으로 행동합니다.',
                strengths: '• 호기심: 항상 새로운 가능성과 의미를 찾아다닙니다.\n• 열정적: 그들의 에너지는 주변 사람들까지 기분 좋게 만듭니다.\n• 뛰어난 소통: 매력적이며 누구와도 대화를 잘 이끌어 나갑니다.\n• 따뜻하고 친근함: 진심으로 사람들과 교감하고 싶어 합니다.',
                weaknesses: '• 거절을 못 함: 타인의 기분을 맞추려다 과도한 약속을 하곤 합니다.\n• 집중력 부족: 새로운 아이디어는 좋아하지만 마무리가 약할 수 있습니다.\n• 지나친 낙관: 실질적인 문제나 위험 신호를 간과할 때가 있습니다.\n• 안절부절못함: 반복적인 일상이나 행정적인 업무를 매우 견디기 힘들어합니다.',
                careers: '연예인, 컨설턴트, 심리학자, 작가, 홍보 전문가',
                famous: '로버트 다우니 주니어, 로빈 윌리엄스, 쿠엔틴 타란티노, 엘런 디제너러스',
                compatibility: 'INFJ, INTJ와 잘 맞습니다. 자신의 에너지를 집중시키고 중심을 잡아줄 수 있는 파트너가 필요합니다.',
                dating: '흥미진진하고 장난기 넘치며 감정적입니다. 공유하는 경험을 중요하게 생각하며 모험을 함께할 상대를 원합니다.',
                communication: '활기차고 열정적이며 비선형적입니다. 아이디어가 빠르게 도약하며 "만약에"와 같은 가상 시나리오를 즐깁니다.',
                caution: '너무 많은 규칙이나 일상적인 틀에 가두려 하지 마세요. 그들의 창의성과 즉흥적인 면모를 인정해주는 것이 중요합니다.'
            },
            'ISTJ': {
                name: '청렴결백한 논리주의자',
                summary: '실용적이고 사실에 근거하며, 질서와 책임감을 중시하는 신뢰할 수 있는 개인입니다. 어떤 조직에서든 중추적인 역할을 하며, 성실함과 정확성으로 시스템과 전통을 유지합니다.',
                strengths: '• 정직과 직설적: 무엇보다 무결성을 중요시합니다.\n• 강한 의지: 장애물에 상관없이 자신의 의무를 다합니다.\n• 책임감: 매우 체계적이며 약속 시간을 철저히 지킵니다.\n• 침착하고 실용적: 스트레스 상황에서도 평정심을 유지합니다.',
                weaknesses: '• 고집스러움: 전통에 도전하는 새로운 아이디어에 거부감을 느낄 수 있습니다.\n• 판단적: 규칙을 따르지 않는 사람들을 이해하기 힘들어합니다.\n• 자책: 자신의 통제 밖의 일까지 책임을 지려 할 때가 있습니다.\n• 무심함: 팩트에 집중하다 보니 상대의 감정적 필요를 간과할 수 있습니다.',
                careers: '회계사, 감사관, 경찰관, 군인, 사무 관리자',
                famous: '조지 워싱턴, 앙겔라 메르켈, 안소니 홉킨스, 나탈리 포트만',
                compatibility: 'ESFP, ESTP와 잘 맞습니다. 활력을 불어넣어 주면서도 자신의 안정을 존중해주는 파트너를 선호합니다.',
                dating: '진지하고 신뢰할 수 있는 연인입니다. 실질적인 행동을 통해 사랑을 표현하며 전통적인 관계 구조를 중시합니다.',
                communication: '사실적이고 구조적이며 직설적입니다. 명확한 지침을 선호하며 모호함이나 과장을 싫어합니다.',
                caution: '기대 사항을 명확하고 간결하게 전달하세요. 그들의 질서 정연한 생활 방식을 존중하고 갑작스러운 계획 변경은 피해야 합니다.'
            },
            'ISFJ': {
                name: '용감한 수호자',
                summary: '헌신적이고 따뜻하며, 사랑하는 사람들을 보호하고 지원할 준비가 된 개인입니다. 보이지 않는 곳에서 모두를 돌보고 편안하게 만드는 조력자 역할을 수행합니다.',
                strengths: '• 지지적: 누군가 도움이 필요할 때 항상 그 자리에 있습니다.\n• 인내심: 반복적이거나 힘든 업무를 묵묵히 처리하는 능력이 있습니다.\n• 충성심: 가족과 친구에 대한 헌신이 매우 강합니다.\n• 관찰력: 다른 사람들이 놓치기 쉬운 세부 사항을 잘 포착합니다.',
                weaknesses: '• 지나친 겸손: 자신의 성취를 과소평가하는 경향이 있습니다.\n• 개인적으로 받아들임: 사소한 비판에도 깊은 상처를 입을 수 있습니다.\n• 감정 억제: 타인에게 짐이 되지 않으려 자신의 감정을 숨기곤 합니다.\n• 과부하: 사람들의 부탁을 거절하는 데 큰 어려움을 느낍니다.',
                careers: '간호사, 교사, 사회복지사, 고객 지원, 인테리어 디자이너',
                famous: '테레사 수녀, 비욘세, 아레사 프랭클린, 케이트 미들턴',
                compatibility: 'ESFP, ESTP와 궁합이 좋습니다. 그들의 보살핌을 알아주고 안락한 지대를 벗어나게 도와줄 파트너가 필요합니다.',
                dating: '매우 헌신적이고 따뜻한 연인입니다. 장기적인 안정을 중시하며 세심한 배려와 봉사를 통해 사랑을 확인합니다.',
                communication: '부드럽고 친절하며 세부 사항에 집중합니다. 말하기보다 듣는 편이며 타인의 안녕에 초점을 맞춥니다.',
                caution: '그들의 조용한 헌신을 당연하게 여기지 마세요. 진심 어린 감사를 표현하고 거칠거나 무례한 태도는 삼가야 합니다.'
            },
            'ESTJ': {
                name: '엄격한 관리자',
                summary: '사물과 사람을 관리하는 데 타의 추종을 불허하는 우수한 행정가입니다. 전통, 질서, 명확한 규칙을 중시하며 공통의 목적을 위해 사람들을 결집시키는 역할을 합니다.',
                strengths: '• 헌신적: 업무가 끝날 때까지 책임지고 완수합니다.\n• 직설적이고 정직: 자신의 입장을 명확히 밝히며 거짓이 없습니다.\n• 충성심: 믿음직한 파트너이자 친구가 되어줍니다.\n• 뛰어난 조직 운영: 자원과 인력을 관리하는 데 전문가입니다.',
                weaknesses: '• 유연성 부족: 변화나 관습을 벗어난 아이디어를 수용하는 데 어려움을 겪습니다.\n• 새로움에 대한 불편함: 혁신보다는 검증된 방식(tried-and-true)을 선호합니다.\n• 판단적: 자신의 기준에 미치지 못하는 사람들에게 가혹할 수 있습니다.\n• 감정 다루기 미숙: 감정을 약함의 신호로 여기기도 합니다.',
                careers: '프로젝트 매니저, 총무, 재무관, 공무원',
                famous: '존 D. 록펠러, 프랭크 시나트라, 마사 스튜어트, 힐러리 클린턴',
                compatibility: 'INFP, ISFP와 잘 맞습니다. 정서적인 깊이와 유연성을 제공할 수 있는 파트너를 선호합니다.',
                dating: '안정적이고 헌신적입니다. 관계에서의 명확성과 구조를 중시하며 상대방도 자신처럼 성실하기를 기대합니다.',
                communication: '명확하고 권위 있으며 사실에 근거합니다. 효율성을 중시하며 상대방도 직설적이고 체계적이길 바랍니다.',
                caution: '체계적이고 믿음직한 모습을 보이세요. 이견이 있을 때는 감정에 호소하기보다 논리적으로 설명하는 것이 효과적입니다.'
            },
            'ESFJ': {
                name: '사교적인 외교관',
                summary: '타인을 돕는 데 열성적이며, 공동체 의식이 강하고 사교적인 개인입니다. 조화를 추구하며 주변 사람들이 존중받고 가치 있게 느껴지도록 만드는 분위기 메이커입니다.',
                strengths: '• 강한 실용적 기술: 일상적인 과업이나 이벤트를 관리하는 데 탁월합니다.\n• 강한 의무감: 타인을 돕는 것을 개인적인 사명으로 느낍니다.\n• 충성심: 가족과 사회적 관계에 깊이 헌신합니다.\n• 사회적 교감: 사회적 신호를 읽고 유대감을 형성하는 데 능숙합니다.',
                weaknesses: '• 지위에 대한 걱정: 타인의 시선을 지나치게 의식할 때가 있습니다.\n• 융통성 부족: 비전통적인 라이프스타일을 받아들이는 데 서툴 수 있습니다.\n• 비판에 취약: 부정적인 피드백을 매우 개인적인 공격으로 받아들입니다.\n• 과도한 인정 욕구: 끊임없는 확인과 승인을 필요로 할 수 있습니다.',
                careers: '의료 종사자, 이벤트 플래너, 교사, 특수 교육, 인사 매니저',
                famous: '테일러 스위프트, 빌 클린턴, 제니퍼 가너, 스티브 하비',
                compatibility: 'ISFP, INFP와 궁합이 좋습니다. 자신의 사교적인 에너지를 이해하고 따뜻함을 돌려줄 파트너가 필요합니다.',
                dating: '매우 전통적이고 지지적인 연인입니다. 사교적인 활동을 즐기며 화목하고 잘 정돈된 가정 생활을 위해 노력합니다.',
                communication: '따뜻하고 사교적이며 포용적입니다. 잡담에 능하며 긍정적인 반응을 통해 관계를 돈독하게 만듭니다.',
                caution: '그들의 노력에 대해 적극적으로 감사를 표현하세요. 그들이 중요하게 생각하는 사회적 관습을 무시하거나 냉담하게 대하지 마세요.'
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
        <div class="detail-section">
            <span class="detail-header">${t.headers.famous}</span>
            <p class="detail-content">${data.famous}</p>
        </div>
        <div class="detail-section">
            <span class="detail-header">${t.headers.compatibility}</span>
            <p class="detail-content">${data.compatibility}</p>
        </div>
        <div class="detail-section">
            <span class="detail-header">${t.headers.dating}</span>
            <p class="detail-content">${data.dating}</p>
        </div>
        <div class="detail-section">
            <span class="detail-header">${t.headers.communication}</span>
            <p class="detail-content">${data.communication}</p>
        </div>
        <div class="detail-section">
            <span class="detail-header">${t.headers.caution}</span>
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

langBtn.addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'ko' : 'en';
    localStorage.setItem('lang', currentLang);
    updateUI();
});

// Initial Render
renderGrid();
updateUI();
