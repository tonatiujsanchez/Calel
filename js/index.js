/*=== === Mostrar/Ocultar el menu === ===*/
const menuList = document.getElementById('menu-list');
const btnLogin = document.getElementById('btn-login');

function menuToggle(){
    menuList.classList.toggle('menu-visible');
    btnLogin.classList.toggle('btn-visible');
}

/* === === Cambiar la apariencia del Header al hacer scroll === === */
const scrollHeader = ()=>{
    const nav = document.getElementById('header');
    if( this.scrollY >= 1 ){
        nav.classList.add('scroll-header');
    }else{
        nav.classList.remove('scroll-header');
    }
}
window.addEventListener('scroll', scrollHeader);


/* === === Mostrar/Ocultar boton para volver arriba === === */
const showScrollTop = ()=>{
    const scrollTop = document.getElementById('scroll-top');

    if( scrollY >= 200 ){
        scrollTop.classList.add('show-scrollTop');
    }else{
        scrollTop.classList.remove('show-scrollTop');
    }
}
window.addEventListener('scroll', showScrollTop);