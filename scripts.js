document.addEventListener('DOMContentLoaded', function(){
    const banner = document.querySelector('.banner');
    banner.computedStyleMap.opacity = 0;

    setTimeout(() => {
        banner.computedStyleMap.transition = 'opacity 2s';
        banner.computedStyleMap.opacity = 1;
    }, 500);
});

