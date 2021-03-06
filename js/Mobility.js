
// When the user scrolls down 20px from the top of the document, slide down the navbar
window.onscroll = () => {
    let header_bar_vars, nav_bar_logo_vars, header_bar_li1_vars, header_bar_li2_vars,
        header_bar_li3_vars, header_bar_li4_vars, header_bar_li5_vars, dbodyScrollTop, ddocescrollTop;
    let yellow_hover_color = "rgb(199, 206, 3)";
    let white_unhover_color = "rgba(240, 248, 255, 0.85)";
    dbodyScrollTop = document.body.scrollTop;
    ddocescrollTop = document.documentElement.scrollTop;
    header_bar_vars = document.getElementById("header-bar");
    nav_bar_logo_vars = document.getElementById("nav-bar-logo");
    header_bar_li1_vars = document.getElementById("header-bar-li1");
    header_bar_li2_vars = document.getElementById("header-bar-li2");
    header_bar_li3_vars = document.getElementById("header-bar-li3");
    header_bar_li4_vars = document.getElementById("header-bar-li4");
    header_bar_li5_vars = document.getElementById("header-bar-li5");

    //reset nav bar components color function
    const resetColors = () => {
        header_bar_li1_vars.style.color = white_unhover_color;
        header_bar_li5_vars.style.color = white_unhover_color;
        header_bar_li4_vars.style.color = white_unhover_color;
        header_bar_li3_vars.style.color = white_unhover_color;
        header_bar_li2_vars.style.color = white_unhover_color;
    }

    //for header nav bar animation
    if (dbodyScrollTop > 10 || ddocescrollTop > 10) {
        header_bar_vars.style.padding = "0.5rem 5.5rem 0.5rem 5.5rem";
        header_bar_vars.style.background = "#29292b";
        nav_bar_logo_vars.style.fontSize = "2rem";
    } else {
        header_bar_vars.style.padding = "1.4rem 7rem 1.4rem 7rem";
        header_bar_vars.style.background = "transparent";
        nav_bar_logo_vars.style.fontSize = "2.5rem";
    }

    //for nav bar  components color when scroll the window
    if (dbodyScrollTop < 719 || ddocescrollTop < 719) {
        resetColors();
    }
    if ((dbodyScrollTop > 720 || ddocescrollTop > 720) && (dbodyScrollTop < 1450 || ddocescrollTop < 1450)) {
        resetColors();
        header_bar_li1_vars.style.color = yellow_hover_color;
    }
    if ((dbodyScrollTop > 1451 || ddocescrollTop > 1451) && (dbodyScrollTop < 2365 || ddocescrollTop < 2365)) {
        resetColors();
        header_bar_li2_vars.style.color = yellow_hover_color;
    }
    if ((dbodyScrollTop > 2566 || ddocescrollTop > 2566) && (dbodyScrollTop < 4620 || ddocescrollTop < 4620)) {
        resetColors();
        header_bar_li3_vars.style.color = yellow_hover_color;
    }
    if ((dbodyScrollTop > 4421 || ddocescrollTop > 4421) && (dbodyScrollTop < 5480 || ddocescrollTop < 5480)) {
        resetColors();
        header_bar_li4_vars.style.color = yellow_hover_color;
    }
    if (dbodyScrollTop > 5370 || ddocescrollTop > 5370) {
        resetColors();
        header_bar_li5_vars.style.color = yellow_hover_color;
    }
};

