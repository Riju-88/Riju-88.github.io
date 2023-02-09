let prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
   
      document.querySelector("nav").style.top = "0";
   

  } else {
  
      document.querySelector("nav").style.top = "-80px";
   
  }
  prevScrollpos = currentScrollPos;
}