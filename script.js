// Responsive menu bar
function openNav() {
    let wi = window.innerWidth;
    if (wi <= 800) {
        document.getElementById("mySidenav").style.width = "250px";
    } else {
        document.getElementById("mySidenav").style.width = "250px";
        document.getElementById("main").style.marginLeft = "270px";
    }
    setTimeout(function () { document.getElementById("menu-title").style.display = "block"; }, 300);
    document.getElementById("menu-items").style.display = "block";
    document.getElementById("closebtn").onclick = function () { closeNav(); }
    $('#menuButton').css("transform", "rotate(360deg)");
}
function closeNav() {
    let wi = window.innerWidth;
    document.getElementById("closebtn").onclick = function () { openNav(); }
    document.getElementById("menu-items").style.display = "none";
    document.getElementById("menu-title").style.display = "none";
    if (wi <= 800) {
        document.getElementById("mySidenav").style.width = "20px";
    } else {
        document.getElementById("mySidenav").style.width = "20px";
        document.getElementById("main").style.marginLeft = "0px";
    }
    $('#menuButton').css("transform", "rotate(180deg)");
}
// Navbar link selection
function menuClick(menuItem) {
    const navArray = ["HTML","JS","CSS","PHP"];
    document.getElementById(menuItem).innerHTML = "<div class='navbr col'></div>";
    for (const i in navArray) {
        if (navArray[i] != menuItem) {
            document.getElementById(navArray[i]).innerHTML = "";
        }
    }
    var select = $("a#navLinks");
    for (var i = 0; i < select.length; i++) {
        if (select[i].textContent == menuItem) {
            select[i].style.color="red";
        }else{
            select[i].style.color = "black";
        }
    }
}
//button grp 3*3
function buttonGroup(buttonId,buttonClass) {
    $('.' + buttonClass).each(function (i, obj) {
        obj.classList.remove("selected-button");
    });
    buttonId.classList.add("selected-button");
}
// select all
function selectAllCheck(buttonCheck) {
    if (buttonCheck.checked) {
        $('.question-checkbox').each(function (i, obj) {
            obj.checked = true;
        });
    }else{
        $('.question-checkbox').each(function (i, obj) {
            obj.checked = false;
        });
    }
    
}