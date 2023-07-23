window.addEventListener("scroll", function() {
    let footer = document.getElementById("footer");
    let scrollPosition = window.scrollY || document.documentElement.scrollTop;
  
    if (scrollPosition > 0) {
      footer.classList.add ("visible");
    } else {
      footer.classList.remove("visible");
    }
  });