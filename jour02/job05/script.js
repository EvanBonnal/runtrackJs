window.addEventListener('scroll', () => {
    // Calculate the scroll percentage [cite: 145]
    const scrollTop = window.scrollY;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;

    const footer = document.getElementById('footer');
    
    // Change footer color based on scrolling percentage [cite: 145]
    // Example: Transition from Red to Green
    if (scrollPercent < 33) {
        footer.style.backgroundColor = 'red';
    } else if (scrollPercent < 66) {
        footer.style.backgroundColor = 'orange';
    } else {
        footer.style.backgroundColor = 'green';
    }
});