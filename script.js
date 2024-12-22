var tabLinks = document.getElementsByClassName("tab-links");
var tabContents = document.getElementsByClassName("tap-contants");

function opentab(tabName) {

    for (var tabLink of tabLinks) {
        tabLink.classList.remove("active-link");
    }

    for (var tabContent of tabContents) {
        tabContent.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link");

    document.getElementById(tabName).classList.add("active-tab");
}


// side menu function open / close

let sideMenu = document.getElementById("sideMenu");

function openmenu(){
    sideMenu.style.right = "0";

}

function closemenu(){
    sideMenu.style.right = "-200px";    
}
