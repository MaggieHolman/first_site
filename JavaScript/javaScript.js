let prevScrollpos = window.scrollY;
window.onscroll = function() {
     let currentScrollPos = window.scrollY;
     if (prevScrollpos > currentScrollPos) {
         document.getElementById("navbar").style.top = "0";
     } else {
         document.getElementById("navbar").style.top = "-85px";
     }
     prevScrollpos = currentScrollPos;
}

/*let prevScrollpos = window.scrollY;
window.onscroll = function() {
    let currentScrollPos = window.scrollY;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-85px";
    }
    prevScrollpos = currentScrollPos;
}
*/