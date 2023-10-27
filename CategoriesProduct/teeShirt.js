/*change the product depends on the color selected*/

/*outline color select for default*/
if (document.querySelector('#whitePocket')) {
    document.querySelector('#whitePocket').classList.add('colorChosen')
}
if (document.querySelector('#whiteLogo')) {
    document.querySelector('#whiteLogo').classList.add('colorChosen')
}
if (document.querySelector('#whiteTxt')) {
    document.querySelector('#whiteTxt').classList.add('colorChosen')
}
if (document.querySelector('#whiteModern')) {
    document.querySelector('#whiteModern').classList.add('colorChosen')
}
if (document.querySelector('#whiteArrows')) {
    document.querySelector('#whiteArrows').classList.add('colorChosen')
}
if (document.querySelector('#whiteFamily')) {
    document.querySelector('#whiteFamily').classList.add('colorChosen')
}

/*shirt with logo*/
function blackShirtLogo() {
    document.getElementById('shirtLogo').src = '../Product/teeShirt/black-Tee/unisex-staple-t-shirt-black-heather-front-610c171abfdfb.png';
    document.getElementById('shirtLogo').onmousemove = function () {
        document.getElementById('shirtLogo').src = '../Product/teeShirt/black-Tee/unisex-staple-t-shirt-black-heather-left-front-610c171ac0027.png';
    }
    document.getElementById('shirtLogo').onmouseout = function () {
        document.getElementById('shirtLogo').src = '../Product/teeShirt/black-Tee/unisex-staple-t-shirt-black-heather-front-610c171abfdfb.png';
    }

    document.querySelector('#blackLogo').classList.add('colorChosen')
    document.querySelector('#whiteLogo').classList.remove('colorChosen')
}
function whiteShirtLogo() {
    document.getElementById('shirtLogo').src = '../Product/teeShirt/white-Tee/mens-classic-t-shirt-white-front-6107e5efd18c9.png';
    document.getElementById('shirtLogo').onmousemove = function () {
        document.getElementById('shirtLogo').src = '../Product/teeShirt/white-Tee/mens-classic-t-shirt-white-front-6107e5efd17ce.png';
    }
    document.getElementById('shirtLogo').onmouseout = function () {
        document.getElementById('shirtLogo').src = '../Product/teeShirt/white-Tee/mens-classic-t-shirt-white-front-6107e5efd18c9.png';
    }

    document.querySelector('#whiteLogo').classList.add('colorChosen')
    document.querySelector('#blackLogo').classList.remove('colorChosen')
}

/*shirt with text*/
function whiteShirtTxt() {
    document.getElementById('shirtTxt').src = '../Product/teeShirt/white-Tee/adult-quality-tee-white-front-60e814c22d2f0.png';
    document.getElementById('shirtTxt').onmousemove = function () {
        document.getElementById('shirtTxt').src = '../Product/teeShirt/white-Tee/adult-quality-tee-white-front-60e814c22d568.png';
    }
    document.getElementById('shirtTxt').onmouseout = function () {
        document.getElementById('shirtTxt').src = '../Product/teeShirt/white-Tee/adult-quality-tee-white-front-60e814c22d2f0.png';
    }
    document.querySelector('#whiteTxt').classList.add('colorChosen')
    document.querySelector('#blackTxt').classList.remove('colorChosen')
    document.querySelector('#beigeTxt').classList.remove('colorChosen')
    document.querySelector('#lightGrayTxt').classList.remove('colorChosen')
}
function blackShirtTxt() {
    document.getElementById('shirtTxt').src = '../Product/teeShirt/black-Tee/adult-quality-tee-black-front-2-60e8145b2fc6b.png';
    document.getElementById('shirtTxt').onmousemove = function () {
        document.getElementById('shirtTxt').src = '../Product/teeShirt/black-Tee/adult-quality-tee-black-front-60e8145b2fcdf.png';
    }
    document.getElementById('shirtTxt').onmouseout = function () {
        document.getElementById('shirtTxt').src = '../Product/teeShirt/black-Tee/adult-quality-tee-black-front-2-60e8145b2fc6b.png';
    }

    document.querySelector('#whiteTxt').classList.remove('colorChosen')
    document.querySelector('#blackTxt').classList.add('colorChosen')
    document.querySelector('#beigeTxt').classList.remove('colorChosen')
    document.querySelector('#lightGrayTxt').classList.remove('colorChosen')
}
function beigeShirtTxt() {
    document.getElementById('shirtTxt').src = '../Product/teeShirt/beige-Tee/adult-quality-tee-light-beige-front-60e814c22cfff.png';
    document.getElementById('shirtTxt').onmousemove = function () {
        document.getElementById('shirtTxt').src = '../Product/teeShirt/beige-Tee/adult-quality-tee-light-beige-front-60e814c22ce03.png';
    }
    document.getElementById('shirtTxt').onmouseout = function () {
        document.getElementById('shirtTxt').src = '../Product/teeShirt/beige-Tee/adult-quality-tee-light-beige-front-60e814c22cfff.png';
    }

    document.querySelector('#whiteTxt').classList.remove('colorChosen')
    document.querySelector('#blackTxt').classList.remove('colorChosen')
    document.querySelector('#beigeTxt').classList.add('colorChosen')
    document.querySelector('#lightGrayTxt').classList.remove('colorChosen')
}
function lightGrayShirtTxt() {
    document.getElementById('shirtTxt').src = '../Product/teeShirt/lightGray-Tee/adult-quality-tee-light-grey-front-2-60e8145b312ed.png';
    document.getElementById('shirtTxt').onmousemove = function () {
        document.getElementById('shirtTxt').src = '../Product/teeShirt/lightGray-Tee/adult-quality-tee-light-grey-front-60e8145b3146b.png';
    }
    document.getElementById('shirtTxt').onmouseout = function () {
        document.getElementById('shirtTxt').src = '../Product/teeShirt/lightGray-Tee/adult-quality-tee-light-grey-front-2-60e8145b312ed.png';
    }

    document.querySelector('#whiteTxt').classList.remove('colorChosen')
    document.querySelector('#blackTxt').classList.remove('colorChosen')
    document.querySelector('#beigeTxt').classList.remove('colorChosen')
    document.querySelector('#lightGrayTxt').classList.add('colorChosen')
}
/*shirt with pocket*/
function whiteShirtPocket() {
    document.getElementById('shirtPocket').src = '../Product/teeShirt/white-Tee/unisex-pocket-t-shirt-white-front-610c034560b3f.png';
    document.getElementById('shirtPocket').onmousemove = function () {
        document.getElementById('shirtPocket').src = '../Product/teeShirt/white-Tee/unisex-pocket-t-shirt-white-front-610c034560c0f.png';
    }
    document.getElementById('shirtPocket').onmouseout = function () {
        document.getElementById('shirtPocket').src = '../Product/teeShirt/white-Tee/unisex-pocket-t-shirt-white-front-610c034560b3f.png';
    }

    document.querySelector('#whitePocket').classList.add('colorChosen')
    document.querySelector('#blackPocket').classList.remove('colorChosen')
}
function blackShirtPocket() {
    document.getElementById('shirtPocket').src = '../Product/teeShirt/black-Tee/unisex-pocket-t-shirt-black-front-610d2fbde7d7b.png';
    document.getElementById('shirtPocket').onmousemove = function () {
        document.getElementById('shirtPocket').src = '../Product/teeShirt/black-Tee/unisex-pocket-t-shirt-black-front-610d2fbde7d1d.png';
    }
    document.getElementById('shirtPocket').onmouseout = function () {
        document.getElementById('shirtPocket').src = '../Product/teeShirt/black-Tee/unisex-pocket-t-shirt-black-front-610d2fbde7d7b.png';
    }

    document.querySelector('#whitePocket').classList.remove('colorChosen')
    document.querySelector('#blackPocket').classList.add('colorChosen')
}
/*shirt with bigger txt(modern shirt)*/
function blackShirtModern() {
    document.getElementById('shirtModern').src = '../Product/teeShirt/black-Tee/unisex-basic-softstyle-t-shirt-black-front-6107e99e99083.png';
    document.getElementById('shirtModern').onmousemove = function () {
        document.getElementById('shirtModern').src = '../Product/teeShirt/black-Tee/unisex-basic-softstyle-t-shirt-black-left-front-6107e99e98f17.png';
    }
    document.getElementById('shirtModern').onmouseout = function () {
        document.getElementById('shirtModern').src = '../Product/teeShirt/black-Tee/unisex-basic-softstyle-t-shirt-black-front-6107e99e99083.png';
    }

    document.querySelector('#whiteModern').classList.remove('colorChosen')
    document.querySelector('#blackModern').classList.add('colorChosen')
}

function whiteShirtModern() {
    document.getElementById('shirtModern').src = '../Product/teeShirt/white-Tee/unisex-staple-t-shirt-white-front-610d3a2c58937.png';
    document.getElementById('shirtModern').onmousemove = function () {
        document.getElementById('shirtModern').src = '../Product/teeShirt/white-Tee/unisex-staple-t-shirt-white-front-610d3a2c586a1.png';
    }
    document.getElementById('shirtModern').onmouseout = function () {
        document.getElementById('shirtModern').src = '../Product/teeShirt/white-Tee/unisex-staple-t-shirt-white-front-610d3a2c58937.png';
    }

    document.querySelector('#whiteModern').classList.add('colorChosen')
    document.querySelector('#blackModern').classList.remove('colorChosen')
}
/*Family Shirt */
function whiteShirtFamily1() {
    document.getElementById('shirtFamily1').src = '../Product/teeShirt/white-Tee/mens-classic-t-shirt-white-front-610d449edb1ab.png';
    document.getElementById('shirtFamily1').onmousemove = function () {
        document.getElementById('shirtFamily1').src = '../Product/teeShirt/white-Tee/unisex-staple-t-shirt-white-front-610d46213ad3f.png';
    }
    document.getElementById('shirtFamily1').onmouseout = function () {
        document.getElementById('shirtFamily1').src = '../Product/teeShirt/white-Tee/mens-classic-t-shirt-white-front-610d449edb1ab.png';
    }

    document.querySelector('#whiteFamily').classList.add('colorChosen')
    document.querySelector('#blackFamily').classList.remove('colorChosen')
}
function blackShirtFamily1() {
    document.getElementById('shirtFamily1').src = '../Product/teeShirt/black-Tee/mens-classic-t-shirt-black-front-610d449edb4e8.png';
    document.getElementById('shirtFamily1').onmousemove = function () {
        document.getElementById('shirtFamily1').src = '../Product/teeShirt/black-Tee/unisex-staple-t-shirt-black-heather-right-front-610d46213abd8.png';
    }
    document.getElementById('shirtFamily1').onmouseout = function () {
        document.getElementById('shirtFamily1').src = '../Product/teeShirt/black-Tee/mens-classic-t-shirt-black-front-610d449edb4e8.png';
    }

    document.querySelector('#whiteFamily').classList.remove('colorChosen')
    document.querySelector('#blackFamily').classList.add('colorChosen')
}
