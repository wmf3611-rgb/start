const generatorBtn = document.getElementById('generator-btn');
const lottoNumbersDiv = document.getElementById('lotto-numbers');
const themeBtn = document.getElementById('theme-btn');
const htmlElement = document.documentElement;

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

generatorBtn.addEventListener('click', () => {
    lottoNumbersDiv.innerHTML = ''; // Clear previous numbers
    const numbers = new Set();
    while (numbers.size < 6) {
        numbers.add(Math.floor(Math.random() * 45) + 1);
    }

    const sortedNumbers = Array.from(numbers).sort((a, b) => a - b);

    for (const number of sortedNumbers) {
        const numberDiv = document.createElement('div');
        numberDiv.classList.add('lotto-number');
        numberDiv.textContent = number;
        lottoNumbersDiv.appendChild(numberDiv);
    }
});
