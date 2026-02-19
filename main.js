const generatorBtn = document.getElementById('generator-btn');
const lottoNumbersDiv = document.getElementById('lotto-numbers');

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
