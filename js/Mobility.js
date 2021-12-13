
// When the user scrolls down 20px from the top of the document, slide down the navbar
window.onscroll = () => {
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
        document.getElementById("header-bar").style.padding = "0.5rem 5.5rem 0.5rem 5.5rem";
        document.getElementById("header-bar").style.background = "#29292b";
        document.getElementById("nav-bar-logo").style.fontSize = "2rem";
    } else {
        document.getElementById("header-bar").style.padding = "1.4rem 7rem 1.4rem 7rem";
        document.getElementById("header-bar").style.background = "transparent";
        document.getElementById("nav-bar-logo").style.fontSize = "2.5rem";
    }
    if (document.body.scrollTop < 710 || document.documentElement.scrollTop < 710) {
        document.getElementById("header-bar-li1").style.color = "rgba(240, 248, 255, 0.85)";
        document.getElementById("header-bar-li2").style.color = "rgba(240, 248, 255, 0.85)";
    }
    if (document.body.scrollTop > 710 || document.documentElement.scrollTop > 710) {
        document.getElementById("header-bar-li1").style.color = "rgba(244, 252, 4, 0.85)";
    }
    if (document.body.scrollTop > 1360 || document.documentElement.scrollTop > 1360) {
        document.getElementById("header-bar-li1").style.color = "rgba(240, 248, 255, 0.85)";
        document.getElementById("header-bar-li2").style.color = "rgba(244, 252, 4, 0.85)";
    }
};


