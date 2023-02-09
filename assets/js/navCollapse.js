
window.addEventListener('load', () => {

    const navLink = document.querySelectorAll('.navbar');
    // functions
   navLink.forEach((link)=>{
    link.addEventListener('click', ()=>{
        document.querySelector("#navbarSupportedContent").classList.remove("show");
   })
  })
});