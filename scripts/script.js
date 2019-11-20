var headerLogo = document.querySelector('#header-logo').onmouseover = function bannerEvent() {
    document.querySelector('h1').style.color = "#5e2799"
    document.querySelector('h1').style.fontSize = "10em"
    document.querySelector('h1').style.transition = "1s"
}

var headerLogo = document.querySelector('#header-logo').onmouseout = function bannerBack() {
    document.querySelector('h1').style.color = "#ffffff"
    document.querySelector('h1').style.fontSize = "90px"
    document.querySelector('h1').style.transition = "1s"
}

