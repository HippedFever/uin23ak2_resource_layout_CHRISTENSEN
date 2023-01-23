function changeBlock(){
    if (document.getElementById('HBut')) {

        if (document.getElementById('HTMLArt').style.display == 'none') {
            document.getElementById('HTMLArt').style.display = 'block';
            document.getElementById('CSSArt').style.display = 'none';
        }
        else {
            document.getElementById('Div1').style.display = 'none';
            document.getElementById('Div2').style.display = 'block';
        }
    }
}

