const boxes = document.querySelectorAll('.color-box');

// Loop through each box and add a click event listener
boxes.forEach(box => {
    box.addEventListener('click', () => {
        // Get the color value stored in data-color attribute
        const selectedColor = box.getAttribute('data-color');
        
        // Set the background color of the entire page
        document.body.style.backgroundColor = selectedColor;
    });
});
