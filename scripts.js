


//Gir knappene mulighet til å gjemme og vise korrekte bokser, dette er en rotete måte å gjøre det på og det vil definitivt være mulighet for å minske koden på et eller annet vis.

function htmlButton(){
    document.getElementById("HTMLArt").hidden = false;
    document.getElementById("CSSArt").hidden = true;
    document.getElementById("JSArt").hidden = true;
    document.getElementById("ReactArt").hidden = true;
    document.getElementById("CMSArt").hidden = true;
    console.log("Changed to HTML tab")
}

function cssButton(){
    document.getElementById("HTMLArt").hidden = true;
    document.getElementById("CSSArt").hidden = false;
    document.getElementById("JSArt").hidden = true;
    document.getElementById("ReactArt").hidden = true;
    document.getElementById("CMSArt").hidden = true;
    console.log("Changed to CSS tab")
}

function jsButton(){
    document.getElementById("HTMLArt").hidden = true;
    document.getElementById("CSSArt").hidden = true;
    document.getElementById("JSArt").hidden = false;
    document.getElementById("ReactArt").hidden = true;
    document.getElementById("CMSArt").hidden = true;
    console.log("Changed to JavaScript tab")
}

function reactButton(){
    document.getElementById("HTMLArt").hidden = true;
    document.getElementById("CSSArt").hidden = true;
    document.getElementById("JSArt").hidden = true;
    document.getElementById("ReactArt").hidden = false;
    document.getElementById("CMSArt").hidden = true;
    console.log("Changed to React tab")
}

function cmsButton(){
    document.getElementById("HTMLArt").hidden = true;
    document.getElementById("CSSArt").hidden = true;
    document.getElementById("JSArt").hidden = true;
    document.getElementById("ReactArt").hidden = true;
    document.getElementById("CMSArt").hidden = false;
    console.log("Changed to CMS tab")
}


//starter siden med HTML knapp klikket slik at siden ikke blir tom.
window.onload = function(){
    document.getElementById('BTN').click();
    document.getElementById('BTN').focus()
}