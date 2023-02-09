
// window.addEventListener('load', () => {
//     const icon = document.getElementById('toggler');
//     const nav = document.getElementById('navbar');
//     // functions
//     nav.style.display = 'none';

 
//     //events 
//     icon.addEventListener('click',(e)=> {
//         e.target.parentElement.classList.toggle('change-backGround');
//         e.target.classList.toggle('clicked');
//         //setTimeout ==> because when i display:none for elements not animated so i delay it to be smooth
//         e.target.classList.contains('clicked') ? (nav.style.cssText = "display: flex;", setTimeout(() => nav.style.transform = 'translateY(-30%)', 300)) : (nav.style.transform = 'translateY(-130%)', setTimeout(() => nav.style.display = 'none', 700));
//     } );
// });

// window.addEventListener('resize', (e) => {
//     const icon = document.getElementById('toggler');
//     const nav = document.getElementById('navbar');
//     // functions
//     nav.style.display = 'none';
//     e.target.parentElement.classList.toggle('change-backGround');
//     e.target.classList.toggle('clicked');
//     //setTimeout ==> because when i display:none for elements not animated so i delay it to be smooth
//     e.target.classList.contains('clicked') ? (nav.style.cssText = "display: flex;", setTimeout(() => nav.style.transform = 'translateY(-30%)', 300)) : (nav.style.transform = 'translateY(-130%)', setTimeout(() => nav.style.display = 'none', 700));
// });