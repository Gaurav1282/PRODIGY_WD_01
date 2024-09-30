
window.onload = function () {
    const navbar = document.querySelector('nav'); 

    
    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            
            navbar.style.backgroundColor = "#87A2FF";
            navbar.style.boxShadow = "0px 4px 15px rgba(0, 0, 0, 0.2)";
        } else {
            
            navbar.style.backgroundColor = "transparent";
            navbar.style.boxShadow = "none";
        }
    });
};
