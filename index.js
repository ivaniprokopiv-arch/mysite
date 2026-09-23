const btn = document.getElementById('btn');
const statusText = document.getElementById('status');

btn.addEventListener('click', () => {
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = randomColor;
    statusText.textContent = `Поточний колір: ${randomColor}`;
});