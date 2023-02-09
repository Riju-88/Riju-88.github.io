//Loading bar JS
const loadCont= document.querySelector("#load-cont");
const cont= document.querySelector("#cont");
const load=document.querySelector("#load");
window.addEventListener("load",()=>{
  load.classList.add("hide");
  setTimeout(() => {
      loadCont.removeChild(load)
      cont.removeAttribute("class");
  }, 1000);
});
// document.addEventListener("transitionend",()=>{
  
// });
// Loading bar JS