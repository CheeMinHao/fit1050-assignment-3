HEADERS_LENGTH = 4;
NAVBAR_LENGTH = 5;
FOOTER_LENGTH = 17;
BODY_LENGTH = 12;

var headerList = [];
for (i=0 ; i < HEADERS_LENGTH; i++) {
    headerList.push(document.getElementById("header-font" + String(i + 1)));
}

var navbarList = [];
for (i=0 ; i < NAVBAR_LENGTH; i++) {
    navbarList.push(document.getElementById("navbar-font" + String(i + 1)));
}

var bodyList = [];
for (i=0 ; i < BODY_LENGTH; i++) {
    bodyList.push(document.getElementById("body-font" + String(i + 1)));
}

var footerList = [];
for (i=0 ; i < FOOTER_LENGTH; i++) {
    footerList.push(document.getElementById("footer-font" + String(i + 1)));
}

function changeToSmall() {
    for (i=0 ; i < HEADERS_LENGTH; i++) {
        headerList[i].style.fontSize = "x-small";
    }
    for (i=0 ; i < NAVBAR_LENGTH; i++) {
        navbarList[i].style.fontSize = "x-small";
    }
    for (i=0 ; i < BODY_LENGTH; i++) {
        bodyList[i].style.fontSize = "x-small";
    }
    for (i=0 ; i < FOOTER_LENGTH; i++) {
        footerList[i].style.fontSize = "x-small";
    }
}

function changeToDefault() {
    for (i=0 ; i < HEADERS_LENGTH; i++) {
        headerList[i].style.fontSize = "medium";
    }
    for (i=0 ; i < NAVBAR_LENGTH; i++) {
        navbarList[i].style.fontSize = "medium";
    }
    for (i=0 ; i < BODY_LENGTH; i++) {
        bodyList[i].style.fontSize = "medium";
    }
    for (i=0 ; i < FOOTER_LENGTH; i++) {
        footerList[i].style.fontSize = "medium";
    }
}

function changeToLarge() {
    for (i=0 ; i < HEADERS_LENGTH; i++) {
        headerList[i].style.fontSize = "x-large";
    }
    for (i=0 ; i < NAVBAR_LENGTH; i++) {
        navbarList[i].style.fontSize = "x-large";
    }
    for (i=0 ; i < BODY_LENGTH; i++) {
        bodyList[i].style.fontSize = "x-large";
    }
    for (i=0 ; i < FOOTER_LENGTH; i++) {
        footerList[i].style.fontSize = "x-large";
    }
}