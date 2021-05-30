(function name(params) {
    let enlaces = Array.from(document.links);
    
    console.log(enlaces[0].href);
    for (const enlace of enlaces) {
        console.log(enlace.href);
        enlace.href = 'https://github.com/edgarfb?tab=repositories';
        enlace.target = '_blank';
    }

})();