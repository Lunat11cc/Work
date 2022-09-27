const img1 = document.getElementById('img1');
const img2 = document.getElementById('img2');
const img3 = document.getElementById('img3');

img1.addEventListener('mouseenter', () => {
    img1.style.transform = 'scale(1.7)';
    img1.style.transition = '0.2s';
    
})

img2.addEventListener('mouseenter', () => {
    img2.style.transform = 'scale(1.7)';
    img2.style.transition = '0.2s';
})

img3.addEventListener('mouseenter', () => {
    img3.style.transform = 'scale(1.7)';
    img3.style.transition = '0.2s';
    
})

img1.addEventListener('mouseleave', () => {
    img1.style.transform = 'scale(1)';
    img1.style.transition = '0.2s';
})

img2.addEventListener('mouseleave', () => {
    img2.style.transform = 'scale(1)';
    img2.style.transition = '0.2s';
})

img3.addEventListener('mouseleave', () => {
    img3.style.transform = 'scale(1)';
    img3.style.transition = '0.2s';
})