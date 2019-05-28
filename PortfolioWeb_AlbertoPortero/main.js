function obtainScroll(){

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

}
// 
// function startSendAnim(){
//     document.getElementById("formulario").style.animation = "bounceX 2s ease"
// }
