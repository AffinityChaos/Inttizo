document.addEventListener('scroll', ()=>{
    const header = document.querySelector('header');
    if (window.scrollY>24){
        header.classList.add('bg-black', 'shadow-md');
        header.classList.remove('lg:bg-transparent');
        header.classList.add('fixed');
        header.classList.remove('absolute');
    }else{
        header.classList.remove('bg-black', 'shadow-md');
        header.classList.add('lg:bg-transparent');
        header.classList.remove('fixed');
        header.classList.add('absolute');
    }
})