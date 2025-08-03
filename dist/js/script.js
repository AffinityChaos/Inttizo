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

document.addEventListener('DOMContentLoaded',()=>{
    const popupContainer = document.getElementById('popupContainer');
    const closeBtn  = document.getElementById('closeBtn');
    const openBtn = document.getElementById('openBtn');
    setTimeout(()=>{
        popupContainer.classList.remove('hidden');
        setTimeout(()=>{
            document.addEventListener("click", function (e) {
                if (!e.target.closest('#form-area')) {
                    popupContainer.classList.add('hidden');
                }
            });
        },2000)
    }, 3000)

    closeBtn.addEventListener('click',()=>{
        popupContainer.classList.add('hidden');
    })
    openBtn.addEventListener('click',()=>{
        popupContainer.classList.remove('hidden');
    })
    
})

function toggleSubmenu(){
    const submenu = document.getElementById('categorySubmenu');
    submenu.classList.toggle('hidden');
    document.addEventListener("click", function (e) {
        if (!e.target.closest('.nav-list')) {
            submenu.classList.add('hidden');
        }
    });
}

$('[data-fancybox="gallery"]').fancybox({
        buttons: [
            "slideShow",
            "thumbs",
            "zoom",
            "fullScreen",
            "share",
            "close"
        ],
        loop: false,
        protect: true
    });