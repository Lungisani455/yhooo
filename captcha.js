// script.js
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.captcha-image');
    const submitButton = document.getElementById('captcha-submit');
    const errorDiv = document.getElementById('captcha-error');
    
    let selectedImages = [];

    // Toggle image selection
    images.forEach(image => {
        image.addEventListener('click', () => {
            image.classList.toggle('selected');
            const isSelected = selectedImages.includes(image.src);
            if (isSelected) {
                selectedImages = selectedImages.filter(src => src !== image.src);
            } else {
                selectedImages.push(image.src);
            }
        });
    });

    // Validate selection
    submitButton.addEventListener('click', () => {
        errorDiv.textContent = ''; // Clear previous errors

        // Check if selected images match the valid ones
        const validImages = Array.from(images).filter(img => img.dataset.valid === 'true').map(img => img.src);
        
        const isValid = selectedImages.length === validImages.length && selectedImages.every(src => validImages.includes(src));

        if (isValid) {
            // Proceed with login (replace this with your actual login function)
            alert('CAPTCHA passed! Proceeding to login...');
            // Redirect to the login page or perform the login action
            // window.location.href = 'login.html'; // Example redirect
        } else {
            errorDiv.textContent = 'Please select all the images of cats.';
        }
    });
});
