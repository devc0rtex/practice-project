document.addEventListener('DOMContentLoaded', function(){
    const desc = document.querySelectorAll('.desc');
    function checkFadeIn() {
        desc.forEach(desc => {
            const rect = desc.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                desc.classList.add('visible');
            } else {
                desc.classList.remove('visible');
            }
        })
    }
    window.addEventListener('scroll', checkFadeIn);
    checkFadeIn();
})