
/*  TEE SHIRT */
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
    document.getElementById('shirtLogo').src = 'Product/teeShirt/black-Tee/unisex-staple-t-shirt-black-heather-front-610c171abfdfb.png';
    document.getElementById('shirtLogo').onmousemove = function () {
        document.getElementById('shirtLogo').src = 'Product/teeShirt/black-Tee/unisex-staple-t-shirt-black-heather-left-front-610c171ac0027.png';
    }
    document.getElementById('shirtLogo').onmouseout = function () {
        document.getElementById('shirtLogo').src = 'Product/teeShirt/black-Tee/unisex-staple-t-shirt-black-heather-front-610c171abfdfb.png';
    }

    document.querySelector('#blackLogo').classList.add('colorChosen')
    document.querySelector('#whiteLogo').classList.remove('colorChosen')
}
function whiteShirtLogo() {
    document.getElementById('shirtLogo').src = 'Product/teeShirt/white-Tee/mens-classic-t-shirt-white-front-6107e5efd18c9.png';
    document.getElementById('shirtLogo').onmousemove = function () {
        document.getElementById('shirtLogo').src = 'Product/teeShirt/white-Tee/mens-classic-t-shirt-white-front-6107e5efd17ce.png';
    }
    document.getElementById('shirtLogo').onmouseout = function () {
        document.getElementById('shirtLogo').src = 'Product/teeShirt/white-Tee/mens-classic-t-shirt-white-front-6107e5efd18c9.png';
    }

    document.querySelector('#whiteLogo').classList.add('colorChosen')
    document.querySelector('#blackLogo').classList.remove('colorChosen')
}

/*shirt with text*/
function whiteShirtTxt() {
    document.getElementById('shirtTxt').src = 'Product/teeShirt/white-Tee/adult-quality-tee-white-front-60e814c22d2f0.png';
    document.getElementById('shirtTxt').onmousemove = function () {
        document.getElementById('shirtTxt').src = 'Product/teeShirt/white-Tee/adult-quality-tee-white-front-60e814c22d568.png';
    }
    document.getElementById('shirtTxt').onmouseout = function () {
        document.getElementById('shirtTxt').src = 'Product/teeShirt/white-Tee/adult-quality-tee-white-front-60e814c22d2f0.png';
    }
    document.querySelector('#whiteTxt').classList.add('colorChosen')
    document.querySelector('#blackTxt').classList.remove('colorChosen')
    document.querySelector('#beigeTxt').classList.remove('colorChosen')
    document.querySelector('#lightGrayTxt').classList.remove('colorChosen')
}
function blackShirtTxt() {
    document.getElementById('shirtTxt').src = 'Product/teeShirt/black-Tee/adult-quality-tee-black-front-2-60e8145b2fc6b.png';
    document.getElementById('shirtTxt').onmousemove = function () {
        document.getElementById('shirtTxt').src = 'Product/teeShirt/black-Tee/adult-quality-tee-black-front-60e8145b2fcdf.png';
    }
    document.getElementById('shirtTxt').onmouseout = function () {
        document.getElementById('shirtTxt').src = 'Product/teeShirt/black-Tee/adult-quality-tee-black-front-2-60e8145b2fc6b.png';
    }

    document.querySelector('#whiteTxt').classList.remove('colorChosen')
    document.querySelector('#blackTxt').classList.add('colorChosen')
    document.querySelector('#beigeTxt').classList.remove('colorChosen')
    document.querySelector('#lightGrayTxt').classList.remove('colorChosen')
}
function beigeShirtTxt() {
    document.getElementById('shirtTxt').src = 'Product/teeShirt/beige-Tee/adult-quality-tee-light-beige-front-60e814c22cfff.png';
    document.getElementById('shirtTxt').onmousemove = function () {
        document.getElementById('shirtTxt').src = 'Product/teeShirt/beige-Tee/adult-quality-tee-light-beige-front-60e814c22ce03.png';
    }
    document.getElementById('shirtTxt').onmouseout = function () {
        document.getElementById('shirtTxt').src = 'Product/teeShirt/beige-Tee/adult-quality-tee-light-beige-front-60e814c22cfff.png';
    }

    document.querySelector('#whiteTxt').classList.remove('colorChosen')
    document.querySelector('#blackTxt').classList.remove('colorChosen')
    document.querySelector('#beigeTxt').classList.add('colorChosen')
    document.querySelector('#lightGrayTxt').classList.remove('colorChosen')
}
function lightGrayShirtTxt() {
    document.getElementById('shirtTxt').src = 'Product/teeShirt/lightGray-Tee/adult-quality-tee-light-grey-front-2-60e8145b312ed.png';
    document.getElementById('shirtTxt').onmousemove = function () {
        document.getElementById('shirtTxt').src = 'Product/teeShirt/lightGray-Tee/adult-quality-tee-light-grey-front-60e8145b3146b.png';
    }
    document.getElementById('shirtTxt').onmouseout = function () {
        document.getElementById('shirtTxt').src = 'Product/teeShirt/lightGray-Tee/adult-quality-tee-light-grey-front-2-60e8145b312ed.png';
    }

    document.querySelector('#whiteTxt').classList.remove('colorChosen')
    document.querySelector('#blackTxt').classList.remove('colorChosen')
    document.querySelector('#beigeTxt').classList.remove('colorChosen')
    document.querySelector('#lightGrayTxt').classList.add('colorChosen')
}
/*shirt with pocket*/
function whiteShirtPocket() {
    document.getElementById('shirtPocket').src = 'Product/teeShirt/white-Tee/unisex-pocket-t-shirt-white-front-610c034560b3f.png';
    document.getElementById('shirtPocket').onmousemove = function () {
        document.getElementById('shirtPocket').src = 'Product/teeShirt/white-Tee/unisex-pocket-t-shirt-white-front-610c034560c0f.png';
    }
    document.getElementById('shirtPocket').onmouseout = function () {
        document.getElementById('shirtPocket').src = 'Product/teeShirt/white-Tee/unisex-pocket-t-shirt-white-front-610c034560b3f.png';
    }

    document.querySelector('#whitePocket').classList.add('colorChosen')
    document.querySelector('#blackPocket').classList.remove('colorChosen')
}
function blackShirtPocket() {
    document.getElementById('shirtPocket').src = 'Product/teeShirt/black-Tee/unisex-pocket-t-shirt-black-front-610d2fbde7d7b.png';
    document.getElementById('shirtPocket').onmousemove = function () {
        document.getElementById('shirtPocket').src = 'Product/teeShirt/black-Tee/unisex-pocket-t-shirt-black-front-610d2fbde7d1d.png';
    }
    document.getElementById('shirtPocket').onmouseout = function () {
        document.getElementById('shirtPocket').src = 'Product/teeShirt/black-Tee/unisex-pocket-t-shirt-black-front-610d2fbde7d7b.png';
    }

    document.querySelector('#whitePocket').classList.remove('colorChosen')
    document.querySelector('#blackPocket').classList.add('colorChosen')
}
/*shirt with bigger txt(modern shirt)*/
function blackShirtModern() {
    document.getElementById('shirtModern').src = 'Product/teeShirt/black-Tee/unisex-basic-softstyle-t-shirt-black-front-6107e99e99083.png';
    document.getElementById('shirtModern').onmousemove = function () {
        document.getElementById('shirtModern').src = 'Product/teeShirt/black-Tee/unisex-basic-softstyle-t-shirt-black-left-front-6107e99e98f17.png';
    }
    document.getElementById('shirtModern').onmouseout = function () {
        document.getElementById('shirtModern').src = 'Product/teeShirt/black-Tee/unisex-basic-softstyle-t-shirt-black-front-6107e99e99083.png';
    }

    document.querySelector('#whiteModern').classList.remove('colorChosen')
    document.querySelector('#blackModern').classList.add('colorChosen')
}

function whiteShirtModern() {
    document.getElementById('shirtModern').src = 'Product/teeShirt/white-Tee/unisex-staple-t-shirt-white-front-610d3a2c58937.png';
    document.getElementById('shirtModern').onmousemove = function () {
        document.getElementById('shirtModern').src = 'Product/teeShirt/white-Tee/unisex-staple-t-shirt-white-front-610d3a2c586a1.png';
    }
    document.getElementById('shirtModern').onmouseout = function () {
        document.getElementById('shirtModern').src = 'Product/teeShirt/white-Tee/unisex-staple-t-shirt-white-front-610d3a2c58937.png';
    }

    document.querySelector('#whiteModern').classList.add('colorChosen')
    document.querySelector('#blackModern').classList.remove('colorChosen')
}
/*Family Shirt */
function whiteShirtFamily1() {
    document.getElementById('shirtFamily1').src = 'Product/teeShirt/white-Tee/mens-classic-t-shirt-white-front-610d449edb1ab.png';
    document.getElementById('shirtFamily1').onmousemove = function () {
        document.getElementById('shirtFamily1').src = 'Product/teeShirt/white-Tee/unisex-staple-t-shirt-white-front-610d46213ad3f.png';
    }
    document.getElementById('shirtFamily1').onmouseout = function () {
        document.getElementById('shirtFamily1').src = 'Product/teeShirt/white-Tee/mens-classic-t-shirt-white-front-610d449edb1ab.png';
    }

    document.querySelector('#whiteFamily').classList.add('colorChosen')
    document.querySelector('#blackFamily').classList.remove('colorChosen')
}
function blackShirtFamily1() {
    document.getElementById('shirtFamily1').src = 'Product/teeShirt/black-Tee/mens-classic-t-shirt-black-front-610d449edb4e8.png';
    document.getElementById('shirtFamily1').onmousemove = function () {
        document.getElementById('shirtFamily1').src = 'Product/teeShirt/black-Tee/unisex-staple-t-shirt-black-heather-right-front-610d46213abd8.png';
    }
    document.getElementById('shirtFamily1').onmouseout = function () {
        document.getElementById('shirtFamily1').src = 'Product/teeShirt/black-Tee/mens-classic-t-shirt-black-front-610d449edb4e8.png';
    }

    document.querySelector('#whiteFamily').classList.remove('colorChosen')
    document.querySelector('#blackFamily').classList.add('colorChosen')
}


/*  HOOODIES */
/*change the product depends on the color selected*/

/*outline color select for default*/
if (document.querySelector("#lightGrayHoodiesZip")) {
    document.querySelector("#lightGrayHoodiesZip").classList.add('colorChosen')
}
if (document.querySelector("#whiteHoodiesLogo")) {
    document.querySelector("#whiteHoodiesLogo").classList.add('colorChosen')
}
if (document.querySelector("#whiteHoodiesTxt")) {
    document.querySelector("#whiteHoodiesTxt").classList.add('colorChosen')
}
if (document.querySelector("#blackHoodiesChamp")) {
    document.querySelector("#blackHoodiesChamp").classList.add('colorChosen')
}
if (document.querySelector("#whiteHoodiesSpecial")) {
    document.querySelector("#whiteHoodiesSpecial").classList.add('colorChosen')
}
if (document.querySelector("#beigeHoodiesPremium")) {
    document.querySelector("#beigeHoodiesPremium").classList.add('colorChosen')
}

/*Hoodies with Logo*/
function blackHoodiesLogo() {
    document.getElementById("HoodiesLogo").src =
        "Product/hoodies/black-Hoodie/unisex-heavy-blend-hoodie-black-front-60e815eedbe26.png";
    document.getElementById("HoodiesLogo").onmousemove = function () {
        document.getElementById("HoodiesLogo").src =
            "Product/hoodies/black-Hoodie/unisex-heavy-blend-hoodie-black-front-60e815eedbffd.png";
    };
    document.getElementById("HoodiesLogo").onmouseout = function () {
        document.getElementById("HoodiesLogo").src =
            "Product/hoodies/black-Hoodie/unisex-heavy-blend-hoodie-black-front-60e815eedbe26.png";
    };

    document.querySelector("#blackHoodiesLogo").classList.add('colorChosen')
    document.querySelector("#whiteHoodiesLogo").classList.remove('colorChosen')
}
function whiteHoodiesLogo() {
    document.getElementById("HoodiesLogo").src =
        "Product/hoodies/white-Hoodie/unisex-essential-eco-hoodie-white-front-2-60e7150a8377c.png";
    document.getElementById("HoodiesLogo").onmousemove = function () {
        document.getElementById("HoodiesLogo").src =
            "Product/hoodies/white-Hoodie/unisex-essential-eco-hoodie-white-front-60e7150a8364f.png";
    };
    document.getElementById("HoodiesLogo").onmouseout = function () {
        document.getElementById("HoodiesLogo").src =
            "Product/hoodies/white-Hoodie/unisex-essential-eco-hoodie-white-front-2-60e7150a8377c.png";
    };

    document.querySelector("#whiteHoodiesLogo").classList.add('colorChosen')
    document.querySelector("#blackHoodiesLogo").classList.remove('colorChosen')
}

/*Hoodies with big Text*/
function blackHoodiesTxt() {
    document.getElementById("HoodiesTxt").src =
        "Product/hoodies/black-Hoodie/unisex-premium-hoodie-black-front-61167f87b65ea.png";
    document.getElementById("HoodiesTxt").onmousemove = function () {
        document.getElementById("HoodiesTxt").src =
            "Product/hoodies/black-Hoodie/unisex-premium-hoodie-black-front-61167f87b64ad.png";
    };
    document.getElementById("HoodiesTxt").onmouseout = function () {
        document.getElementById("HoodiesTxt").src =
            "Product/hoodies/black-Hoodie/unisex-premium-hoodie-black-front-61167f87b65ea.png";
    };

    document.querySelector("#blackHoodiesTxt").classList.add('colorChosen')
    document.querySelector("#whiteHoodiesTxt").classList.remove('colorChosen')
    document.querySelector("#lightGrayHoodiesTxt").classList.remove('colorChosen')
}
function whiteHoodiesTxt() {
    document.getElementById("HoodiesTxt").src =
        "Product/hoodies/white-Hoodie/unisex-premium-hoodie-white-front-61167fab1babf.png";
    document.getElementById("HoodiesTxt").onmousemove = function () {
        document.getElementById("HoodiesTxt").src =
            "Product/hoodies/white-Hoodie/unisex-premium-hoodie-white-front-61167fab1b96e.png";
    };
    document.getElementById("HoodiesTxt").onmouseout = function () {
        document.getElementById("HoodiesTxt").src =
            "Product/hoodies/white-Hoodie/unisex-premium-hoodie-white-front-61167fab1babf.png";
    };

    document.querySelector("#whiteHoodiesTxt").classList.add('colorChosen')
    document.querySelector("#blackHoodiesTxt").classList.remove('colorChosen')
    document.querySelector("#lightGrayHoodiesTxt").classList.remove('colorChosen')
}
function lightGrayHoodiesTxt() {
    document.getElementById("HoodiesTxt").src =
        "Product/hoodies/lightGray-Hoodie/unisex-premium-hoodie-carbon-grey-front-61167fab1b8ad.png";
    document.getElementById("HoodiesTxt").onmousemove = function () {
        document.getElementById("HoodiesTxt").src =
            "Product/hoodies/lightGray-Hoodie/unisex-premium-hoodie-carbon-grey-front-61167fab1b5c3.png";
    };
    document.getElementById("HoodiesTxt").onmouseout = function () {
        document.getElementById("HoodiesTxt").src =
            "Product/hoodies/lightGray-Hoodie/unisex-premium-hoodie-carbon-grey-front-61167fab1b8ad.png";
    };

    document.querySelector("#whiteHoodiesTxt").classList.remove('colorChosen')
    document.querySelector("#blackHoodiesTxt").classList.remove('colorChosen')
    document.querySelector("#lightGrayHoodiesTxt").classList.add('colorChosen')
}

/*Hoodies with zip*/
function blackHoodiesZip() {
    document.getElementById("HoodiesZip").src =
        "Product/hoodies/black-Hoodie/unisex-lightweight-zip-hoodie-solid-black-triblend-front-611680cef32df.png";
    document.getElementById("HoodiesZip").onmousemove = function () {
        document.getElementById("HoodiesZip").src =
            "Product/hoodies/black-Hoodie/unisex-lightweight-zip-hoodie-solid-black-triblend-front-611680cef3410.png";
    };
    document.getElementById("HoodiesZip").onmouseout = function () {
        document.getElementById("HoodiesZip").src =
            "Product/hoodies/black-Hoodie/unisex-lightweight-zip-hoodie-solid-black-triblend-front-611680cef32df.png";
    };

    document.querySelector("#blackHoodiesZip").classList.add('colorChosen')
    document.querySelector("#lightGrayHoodiesZip").classList.remove('colorChosen')
}
function lightGrayHoodiesZip() {
    document.getElementById("HoodiesZip").src =
        "Product/hoodies/lightGray-Hoodie/unisex-lightweight-zip-hoodie-grey-triblend-front-611680ccb23ba.png";
    document.getElementById("HoodiesZip").onmousemove = function () {
        document.getElementById("HoodiesZip").src =
            "Product/hoodies/lightGray-Hoodie/unisex-lightweight-zip-hoodie-grey-triblend-front-611680ccb2299.png";
    };
    document.getElementById("HoodiesZip").onmouseout = function () {
        document.getElementById("HoodiesZip").src =
            "Product/hoodies/lightGray-Hoodie/unisex-lightweight-zip-hoodie-grey-triblend-front-611680ccb23ba.png";
    };

    document.querySelector("#blackHoodiesZip").classList.remove('colorChosen')
    document.querySelector("#lightGrayHoodiesZip").classList.add('colorChosen')
}

/*Hoodies Premium*/
function blackHoodiesPremium() {
    document.getElementById("HoodiesPremium").src =
        "Product/hoodies/black-Hoodie/unisex-sueded-fleece-hoodie-black-heather-front-61167da80db23.png";
    document.getElementById("HoodiesPremium").onmousemove = function () {
        document.getElementById("HoodiesPremium").src =
            "Product/hoodies/black-Hoodie/unisex-sueded-fleece-hoodie-black-heather-front-61167da80dd0a.png";
    };
    document.getElementById("HoodiesPremium").onmouseout = function () {
        document.getElementById("HoodiesPremium").src =
            "Product/hoodies/black-Hoodie/unisex-sueded-fleece-hoodie-black-heather-front-61167da80db23.png";
    };

    document.querySelector("#blackHoodiesPremium").classList.add('colorChosen')
    document.querySelector("#beigeHoodiesPremium").classList.remove('colorChosen')
    document.querySelector("#lightGrayHoodiesPremium").classList.remove('colorChosen')
}
function beigeHoodiesPremium() {
    document.getElementById("HoodiesPremium").src =
        "Product/hoodies/beige-Hoodie/unisex-sueded-fleece-hoodie-heather-oat-front-61167de6441b1.png";
    document.getElementById("HoodiesPremium").onmousemove = function () {
        document.getElementById("HoodiesPremium").src =
            "Product/hoodies/beige-Hoodie/unisex-sueded-fleece-hoodie-heather-oat-front-61167de644282.png";
    };
    document.getElementById("HoodiesPremium").onmouseout = function () {
        document.getElementById("HoodiesPremium").src =
            "Product/hoodies/beige-Hoodie/unisex-sueded-fleece-hoodie-heather-oat-front-61167de6441b1.png";
    };

    document.querySelector("#beigeHoodiesPremium").classList.add('colorChosen')
    document.querySelector("#blackHoodiesPremium").classList.remove('colorChosen')
    document.querySelector("#lightGrayHoodiesPremium").classList.remove('colorChosen')
}
function lightGrayHoodiesPremium() {
    document.getElementById("HoodiesPremium").src =
        "Product/hoodies/lightGray-Hoodie/unisex-sueded-fleece-hoodie-athletic-heather-front-61167de643d1e.png";
    document.getElementById("HoodiesPremium").onmousemove = function () {
        document.getElementById("HoodiesPremium").src =
            "Product/hoodies/lightGray-Hoodie/unisex-sueded-fleece-hoodie-athletic-heather-front-61167de643f36.png";
    };
    document.getElementById("HoodiesPremium").onmouseout = function () {
        document.getElementById("HoodiesPremium").src =
            "Product/hoodies/lightGray-Hoodie/unisex-sueded-fleece-hoodie-athletic-heather-front-61167de643d1e.png";
    };

    document.querySelector("#beigeHoodiesPremium").classList.remove('colorChosen')
    document.querySelector("#blackHoodiesPremium").classList.remove('colorChosen')
    document.querySelector("#lightGrayHoodiesPremium").classList.add('colorChosen')
}

/*Hoodies Special*/
function blackHoodiesSpecial() {
    document.getElementById("HoodiesSpecial").src =
        "Product/hoodies/black-Hoodie/all-over-print-unisex-hoodie-white-left-611679bab84f3.png";
    document.getElementById("HoodiesSpecial").onmousemove = function () {
        document.getElementById("HoodiesSpecial").src =
            "Product/hoodies/black-Hoodie/all-over-print-unisex-hoodie-white-front-611679bab7dfd.png";
    };
    document.getElementById("HoodiesSpecial").onmouseout = function () {
        document.getElementById("HoodiesSpecial").src =
            "Product/hoodies/black-Hoodie/all-over-print-unisex-hoodie-white-left-611679bab84f3.png";
    };

    document.querySelector("#blackHoodiesSpecial").classList.add('colorChosen')
    document.querySelector("#whiteHoodiesSpecial").classList.remove('colorChosen')
}
function whiteHoodiesSpecial() {
    document.getElementById("HoodiesSpecial").src =
        "Product/hoodies/white-Hoodie/all-over-print-unisex-hoodie-white-left-61167c6b9a97e.png";
    document.getElementById("HoodiesSpecial").onmousemove = function () {
        document.getElementById("HoodiesSpecial").src =
            "Product/hoodies/white-Hoodie/all-over-print-unisex-hoodie-white-left-61167c6b9aa8a.png";
    };
    document.getElementById("HoodiesSpecial").onmouseout = function () {
        document.getElementById("HoodiesSpecial").src =
            "Product/hoodies/white-Hoodie/all-over-print-unisex-hoodie-white-left-61167c6b9a97e.png";
    };

    document.querySelector("#blackHoodiesSpecial").classList.remove('colorChosen')
    document.querySelector("#whiteHoodiesSpecial").classList.add('colorChosen')
}


/*  TROUSERS */
/*change the product depends on the color selected*/

/*outline color select for default*/
if (document.querySelector('#whiteSweatpants')) {
    document.querySelector('#whiteSweatpants').classList.add('colorChosen')
}
if (document.querySelector('#whiteLegging')) {
    document.querySelector('#whiteLegging').classList.add('colorChosen')
}
if (document.querySelector('#blackJoggers')) {
    document.querySelector('#blackJoggers').classList.add('colorChosen')
}
if (document.querySelector('#whiteSpecial1')) {
    document.querySelector('#whiteSpecial1').classList.add('colorChosen')
}
if (document.querySelector('#whiteSweatpantsPremium')) {
    document.querySelector('#whiteSweatpantsPremium').classList.add('colorChosen')
}

/*sweatpants*/
function blackSweatpants() {
    document.getElementById('trousersSweatpants').src = 'Product/trousers/black-Trousers/unisex-fleece-sweatpants-black-front-61192bc970724.png';
    document.getElementById('trousersSweatpants').onmousemove = function () {
        document.getElementById('trousersSweatpants').src = 'Product/trousers/black-Trousers/unisex-fleece-sweatpants-black-front-61192bc970963.png';
    }
    document.getElementById('trousersSweatpants').onmouseout = function () {
        document.getElementById('trousersSweatpants').src = 'Product/trousers/black-Trousers/unisex-fleece-sweatpants-black-front-61192bc970724.png';
    }

    document.querySelector('#blackSweatpants').classList.add('colorChosen')
    document.querySelector('#whiteSweatpants').classList.remove('colorChosen')
    document.querySelector('#lightGraySweatpants').classList.remove('colorChosen')
}
function whiteSweatpants() {
    document.getElementById('trousersSweatpants').src = 'Product/trousers/white-Trousers/unisex-fleece-sweatpants-white-left-front-61192bd480654.png';
    document.getElementById('trousersSweatpants').onmousemove = function () {
        document.getElementById('trousersSweatpants').src = 'Product/trousers/white-Trousers/unisex-fleece-sweatpants-white-left-front-61192bd480361.png';
    }
    document.getElementById('trousersSweatpants').onmouseout = function () {
        document.getElementById('trousersSweatpants').src = 'Product/trousers/white-Trousers/unisex-fleece-sweatpants-white-left-front-61192bd480654.png';
    }

    document.querySelector('#whiteSweatpants').classList.add('colorChosen')
    document.querySelector('#blackSweatpants').classList.remove('colorChosen')
    document.querySelector('#lightGraySweatpants').classList.remove('colorChosen')
}
function lightGraySweatpants() {
    document.getElementById('trousersSweatpants').src = 'Product/trousers/lightGray-Trousers/unisex-fleece-sweatpants-carbon-grey-front-61192bd480050.png';
    document.getElementById('trousersSweatpants').onmousemove = function () {
        document.getElementById('trousersSweatpants').src = 'Product/trousers/lightGray-Trousers/unisex-fleece-sweatpants-carbon-grey-front-61192bd47fe37.png';
    }
    document.getElementById('trousersSweatpants').onmouseout = function () {
        document.getElementById('trousersSweatpants').src = 'Product/trousers/lightGray-Trousers/unisex-fleece-sweatpants-carbon-grey-front-61192bd480050.png';
    }

    document.querySelector('#lightGraySweatpants').classList.add('colorChosen')
    document.querySelector('#blackSweatpants').classList.remove('colorChosen')
    document.querySelector('#whiteSweatpants').classList.remove('colorChosen')
}

/*premium sweatPants*/
function whiteSweatpantsPremium() {
    document.getElementById('trousersSweatpantsPremium').src = 'Product/trousers/white-Trousers/all-over-print-mens-joggers-white-front-611e7ab3dd373.png';
    document.getElementById('trousersSweatpantsPremium').onmousemove = function () {
        document.getElementById('trousersSweatpantsPremium').src = 'Product/trousers/white-Trousers/all-over-print-mens-joggers-white-right-611e7ab3dd480.png';
    }
    document.getElementById('trousersSweatpantsPremium').onmouseout = function () {
        document.getElementById('trousersSweatpantsPremium').src = 'Product/trousers/white-Trousers/all-over-print-mens-joggers-white-front-611e7ab3dd373.png';
    }

    document.querySelector('#whiteSweatpantsPremium').classList.add('colorChosen')
    document.querySelector('#blackSweatpantsPremium').classList.remove('colorChosen')

}
function blackSweatpantsPremium() {
    document.getElementById('trousersSweatpantsPremium').src = 'Product/trousers/black-Trousers/all-over-print-mens-joggers-white-right-611e7b4cb3c43.png';
    document.getElementById('trousersSweatpantsPremium').onmousemove = function () {
        document.getElementById('trousersSweatpantsPremium').src = 'Product/trousers/black-Trousers/all-over-print-mens-joggers-white-left-611e7b4cb3d8e.png';
    }
    document.getElementById('trousersSweatpantsPremium').onmouseout = function () {
        document.getElementById('trousersSweatpantsPremium').src = 'Product/trousers/black-Trousers/all-over-print-mens-joggers-white-right-611e7b4cb3c43.png';
    }

    document.querySelector('#whiteSweatpantsPremium').classList.remove('colorChosen')
    document.querySelector('#blackSweatpantsPremium').classList.add('colorChosen')
}


/*  SWEATERS */
/*change the product depends on the color selected*/

/*outline color select for default*/
if (document.getElementById("whiteClassicSweater")) {
    document.getElementById("whiteClassicSweater").classList.add('colorChosen')
}
if (document.getElementById("whiteLogoSweater")) {
    document.getElementById("whiteLogoSweater").classList.add('colorChosen')
}
if (document.getElementById("whiteFamily1Sweater")) {
    document.getElementById("whiteFamily1Sweater").classList.add('colorChosen')
}
if (document.getElementById("navySpecial1Sweater")) {
    document.getElementById("navySpecial1Sweater").classList.add('colorChosen')
}
if (document.getElementById("whiteSpecial2Sweater")) {
    document.getElementById("whiteSpecial2Sweater").classList.add('colorChosen')
}
if (document.getElementById("whiteSpecial3Sweater")) {
    document.getElementById("whiteSpecial3Sweater").classList.add('colorChosen')
}

/*sweater Classic*/

const classicSweater = document.getElementsByClassName("classicSweater");

function blackClassicSweater() {
    document.getElementById("ClassicSweater").src =
        "Product/sweater/black-Sweater/mens-long-sleeve-shirt-black-front-60e80ed32c055.png";
    document.getElementById("ClassicSweater").onmousemove = function () {
        document.getElementById("ClassicSweater").src =
            "Product/sweater/black-Sweater/mens-long-sleeve-shirt-black-left-front-60e80ed32c3e0.png";
    };
    document.getElementById("ClassicSweater").onmouseout = function () {
        document.getElementById("ClassicSweater").src =
            "Product/sweater/black-Sweater/mens-long-sleeve-shirt-black-front-60e80ed32c055.png";
    };

    for (let i = 0; i < classicSweater.length; i++) {
        classicSweater[i].classList.remove('colorChosen')
    }

    document.querySelector("#blackClassicSweater").classList.add('colorChosen')
}
function whiteClassicSweater() {
    document.getElementById("ClassicSweater").src =
        "Product/sweater/white-sweater/mens-long-sleeve-shirt-white-front-60e812b79dd0f.png";
    document.getElementById("ClassicSweater").onmousemove = function () {
        document.getElementById("ClassicSweater").src =
            "Product/sweater/white-sweater/mens-long-sleeve-shirt-white-front-60e812b79e02c.png";
    };
    document.getElementById("ClassicSweater").onmouseout = function () {
        document.getElementById("ClassicSweater").src =
            "Product/sweater/white-sweater/mens-long-sleeve-shirt-white-front-60e812b79dd0f.png";
    };

    for (let i = 0; i < classicSweater.length; i++) {
        classicSweater[i].classList.remove('colorChosen')
    }

    document.querySelector("#whiteClassicSweater").classList.add('colorChosen')
}
function beigeClassicSweater() {
    document.getElementById("ClassicSweater").src =
        "Product/sweater/beige-Sweater/mens-long-sleeve-shirt-sand-front-60e812b79d219.png";
    document.getElementById("ClassicSweater").onmousemove = function () {
        document.getElementById("ClassicSweater").src =
            "Product/sweater/beige-Sweater/mens-long-sleeve-shirt-sand-left-front-60e812b79d746.png";
    };
    document.getElementById("ClassicSweater").onmouseout = function () {
        document.getElementById("ClassicSweater").src =
            "Product/sweater/beige-Sweater/mens-long-sleeve-shirt-sand-front-60e812b79d219.png";
    };

    for (let i = 0; i < classicSweater.length; i++) {
        classicSweater[i].classList.remove('colorChosen')
    }

    document.querySelector("#beigeClassicSweater").classList.add('colorChosen')
}
function redClassicSweater() {
    document.getElementById("ClassicSweater").src =
        "Product/sweater/red-Sweater/mens-long-sleeve-shirt-red-front-60e812b79cc39.png";
    document.getElementById("ClassicSweater").onmousemove = function () {
        document.getElementById("ClassicSweater").src =
            "Product/sweater/red-Sweater/mens-long-sleeve-shirt-red-front-60e812b79caef.png";
    };
    document.getElementById("ClassicSweater").onmouseout = function () {
        document.getElementById("ClassicSweater").src =
            "Product/sweater/red-Sweater/mens-long-sleeve-shirt-red-front-60e812b79cc39.png";
    };

    for (let i = 0; i < classicSweater.length; i++) {
        classicSweater[i].classList.remove('colorChosen')
    }

    document.querySelector("#redClassicSweater").classList.add('colorChosen')
}
function blueClassicSweater() {
    document.getElementById("ClassicSweater").src =
        "Product/sweater/blue-Sweater/mens-long-sleeve-shirt-indigo-blue-left-front-60e80ed33176c.png";
    document.getElementById("ClassicSweater").onmousemove = function () {
        document.getElementById("ClassicSweater").src =
            "Product/sweater/blue-Sweater/mens-long-sleeve-shirt-indigo-blue-front-60e80ed3304df.png";
    };
    document.getElementById("ClassicSweater").onmouseout = function () {
        document.getElementById("ClassicSweater").src =
            "Product/sweater/blue-Sweater/mens-long-sleeve-shirt-indigo-blue-left-front-60e80ed33176c.png";
    };

    for (let i = 0; i < classicSweater.length; i++) {
        classicSweater[i].classList.remove('colorChosen')
    }

    document.querySelector("#blueClassicSweater").classList.add('colorChosen')
}
function lightBlueClassicSweater() {
    document.getElementById("ClassicSweater").src =
        "Product/sweater/lightBlue-Sweater/mens-long-sleeve-shirt-light-blue-front-60e80ed332ab0.png";
    document.getElementById("ClassicSweater").onmousemove = function () {
        document.getElementById("ClassicSweater").src =
            "Product/sweater/lightBlue-Sweater/mens-long-sleeve-shirt-light-blue-front-60e80ed333a1a.png";
    };
    document.getElementById("ClassicSweater").onmouseout = function () {
        document.getElementById("ClassicSweater").src =
            "Product/sweater/lightBlue-Sweater/mens-long-sleeve-shirt-light-blue-front-60e80ed332ab0.png";
    };

    for (let i = 0; i < classicSweater.length; i++) {
        classicSweater[i].classList.remove('colorChosen')
    }

    document.querySelector("#lightBlueClassicSweater").classList.add('colorChosen')
}
function darkBlueClassicSweater() {
    document.getElementById("ClassicSweater").src =
        "Product/sweater/darkBlue-Sweater/mens-long-sleeve-shirt-royal-front-60e80ed32e698.png";
    document.getElementById("ClassicSweater").onmousemove = function () {
        document.getElementById("ClassicSweater").src =
            "Product/sweater/darkBlue-Sweater/mens-long-sleeve-shirt-royal-front-60e80ed32ddeb.png";
    };
    document.getElementById("ClassicSweater").onmouseout = function () {
        document.getElementById("ClassicSweater").src =
            "Product/sweater/darkBlue-Sweater/mens-long-sleeve-shirt-royal-front-60e80ed32e698.png";
    };

    for (let i = 0; i < classicSweater.length; i++) {
        classicSweater[i].classList.remove('colorChosen')
    }

    document.querySelector("#darkBlueClassicSweater").classList.add('colorChosen')
}
function militaryGreenClassicSweater() {
    document.getElementById("ClassicSweater").src =
        "Product/sweater/militaryGreen-Sweater/mens-long-sleeve-shirt-military-green-front-60e80ed32ef92.png";
    document.getElementById("ClassicSweater").onmousemove = function () {
        document.getElementById("ClassicSweater").src =
            "Product/sweater/militaryGreen-Sweater/mens-long-sleeve-shirt-military-green-front-60e80ed32f68d.png";
    };
    document.getElementById("ClassicSweater").onmouseout = function () {
        document.getElementById("ClassicSweater").src =
            "Product/sweater/militaryGreen-Sweater/mens-long-sleeve-shirt-military-green-front-60e80ed32ef92.png";
    };

    for (let i = 0; i < classicSweater.length; i++) {
        classicSweater[i].classList.remove('colorChosen')
    }

    document.querySelector("#militaryGreenClassicSweater").classList.add('colorChosen')
}
function lightGrayClassicSweater() {
    document.getElementById("ClassicSweater").src =
        "Product/sweater/lightGray-Sweater/mens-long-sleeve-shirt-sport-grey-left-front-60e812b79d044.png";
    document.getElementById("ClassicSweater").onmousemove = function () {
        document.getElementById("ClassicSweater").src =
            "Product/sweater/lightGray-Sweater/mens-long-sleeve-shirt-sport-grey-front-60e812b79d12a.png";
    };
    document.getElementById("ClassicSweater").onmouseout = function () {
        document.getElementById("ClassicSweater").src =
            "Product/sweater/lightGray-Sweater/mens-long-sleeve-shirt-sport-grey-left-front-60e812b79d044.png";
    };

    for (let i = 0; i < classicSweater.length; i++) {
        classicSweater[i].classList.remove('colorChosen')
    }

    document.querySelector("#lightGrayClassicSweater").classList.add('colorChosen')
}
function navyClassicSweater() {
    document.getElementById("ClassicSweater").src =
        "Product/sweater/navy-Sweater/mens-long-sleeve-shirt-navy-front-60e80ed32ce18.png";
    document.getElementById("ClassicSweater").onmousemove = function () {
        document.getElementById("ClassicSweater").src =
            "Product/sweater/navy-Sweater/mens-long-sleeve-shirt-navy-front-60e80ed32c8e9.png";
    };
    document.getElementById("ClassicSweater").onmouseout = function () {
        document.getElementById("ClassicSweater").src =
            "Product/sweater/navy-Sweater/mens-long-sleeve-shirt-navy-front-60e80ed32ce18.png";
    };

    for (let i = 0; i < classicSweater.length; i++) {
        classicSweater[i].classList.remove('colorChosen')
    }

    document.querySelector("#navyClassicSweater").classList.add('colorChosen')
}

/*Sweater with logo*/
function whiteLogoSweater() {
    document.getElementById("LogoSweater").src =
        "Product/sweater/white-sweater/unisex-crew-neck-sweatshirt-white-front-60e80cba6ef27.png";
    document.getElementById("LogoSweater").onmousemove = function () {
        document.getElementById("LogoSweater").src =
            "Product/sweater/white-sweater/unisex-crew-neck-sweatshirt-white-front-60e80cba6f73c.png";
    };
    document.getElementById("LogoSweater").onmouseout = function () {
        document.getElementById("LogoSweater").src =
            "Product/sweater/white-sweater/unisex-crew-neck-sweatshirt-white-front-60e80cba6ef27.png";
    };

    document.querySelector("#whiteLogoSweater").classList.add('colorChosen')
    document.querySelector("#blackLogoSweater").classList.remove('colorChosen')
}
function blackLogoSweater() {
    document.getElementById("LogoSweater").src =
        "Product/sweater/black-Sweater/unisex-crew-neck-sweatshirt-black-front-60e80d4dcb3bd.png";
    document.getElementById("LogoSweater").onmousemove = function () {
        document.getElementById("LogoSweater").src =
            "Product/sweater/black-Sweater/unisex-crew-neck-sweatshirt-black-front-60e80d4dcd31f.png";
    };
    document.getElementById("LogoSweater").onmouseout = function () {
        document.getElementById("LogoSweater").src =
            "Product/sweater/black-Sweater/unisex-crew-neck-sweatshirt-black-front-60e80d4dcb3bd.png";
    };

    document.querySelector("#whiteLogoSweater").classList.remove('colorChosen')
    document.querySelector("#blackLogoSweater").classList.add('colorChosen')
}

/*Sweater Family1*/
function whiteFamily1Sweater() {
    document.getElementById("Family1Sweater").src =
        "Product/sweater/white-sweater/unisex-fleece-sweatshirt-white-front-2-6117dbba913f6.png";
    document.getElementById("Family1Sweater").onmousemove = function () {
        document.getElementById("Family1Sweater").src =
            "Product/sweater/white-sweater/unisex-fleece-sweatshirt-white-front-2-6117dbba912b4.png";
    };
    document.getElementById("Family1Sweater").onmouseout = function () {
        document.getElementById("Family1Sweater").src =
            "Product/sweater/white-sweater/unisex-fleece-sweatshirt-white-front-2-6117dbba913f6.png";
    };

    document.querySelector("#whiteFamily1Sweater").classList.add('colorChosen')
    document.querySelector("#blackFamily1Sweater").classList.remove('colorChosen')
}
function blackFamily1Sweater() {
    document.getElementById("Family1Sweater").src =
        "Product/sweater/black-Sweater/unisex-fleece-sweatshirt-black-front-6117dbba90cc8.png";
    document.getElementById("Family1Sweater").onmousemove = function () {
        document.getElementById("Family1Sweater").src =
            "Product/sweater/black-Sweater/unisex-fleece-sweatshirt-black-front-6117dbba90b5f.png";
    };
    document.getElementById("Family1Sweater").onmouseout = function () {
        document.getElementById("Family1Sweater").src =
            "Product/sweater/black-Sweater/unisex-fleece-sweatshirt-black-front-6117dbba90cc8.png";
    };

    document.querySelector("#whiteFamily1Sweater").classList.remove('colorChosen')
    document.querySelector("#blackFamily1Sweater").classList.add('colorChosen')
}

/*Sweater Special 3*/
function whiteSpecial3Sweater() {
    document.getElementById("Special3Sweater").src =
        "Product/sweater/white-sweater/unisex-crew-neck-sweatshirt-white-front-6117dcd64a513.png";
    document.getElementById("Special3Sweater").onmousemove = function () {
        document.getElementById("Special3Sweater").src =
            "Product/sweater/white-sweater/unisex-crew-neck-sweatshirt-white-front-6117dcd64a8a9.png";
    };
    document.getElementById("Special3Sweater").onmouseout = function () {
        document.getElementById("Special3Sweater").src =
            "Product/sweater/white-sweater/unisex-crew-neck-sweatshirt-white-front-6117dcd64a513.png";
    };

    document.querySelector("#whiteSpecial3Sweater").classList.add('colorChosen')
    document.querySelector("#blackSpecial3Sweater").classList.remove('colorChosen')
}
function blackSpecial3Sweater() {
    document.getElementById("Special3Sweater").src =
        "Product/sweater/black-Sweater/unisex-crew-neck-sweatshirt-black-front-6117dcd64a289.png";
    document.getElementById("Special3Sweater").onmousemove = function () {
        document.getElementById("Special3Sweater").src =
            "Product/sweater/black-Sweater/unisex-crew-neck-sweatshirt-black-front-6117dcd64a03a.png";
    };
    document.getElementById("Special3Sweater").onmouseout = function () {
        document.getElementById("Special3Sweater").src =
            "Product/sweater/black-Sweater/unisex-crew-neck-sweatshirt-black-front-6117dcd64a289.png";
    };
    document.querySelector("#whiteSpecial3Sweater").classList.remove('colorChosen')
    document.querySelector("#blackSpecial3Sweater").classList.add('colorChosen')
}


/*  SHORTS AND PANTS */
/*change the product depends on the color selected*/

/*border color select for default*/
if (document.getElementById("whiteClassicShorts"))
    document.getElementById("whiteClassicShorts").classList.add('colorChosen')

if (document.getElementById("whiteBikerShorts"))
    document.getElementById("whiteBikerShorts").classList.add('colorChosen')

if (document.getElementById("whiteYogaShorts"))
    document.getElementById("whiteYogaShorts").classList.add('colorChosen')

if (document.getElementById("whiteLogoShorts"))
    document.getElementById("whiteLogoShorts").classList.add('colorChosen')

if (document.getElementById("navySpecial1Shorts"))
    document.getElementById("navySpecial1Shorts").classList.add('colorChosen')

if (document.getElementById("whiteSpecial2Shorts"))
    document.getElementById("whiteSpecial2Shorts").classList.add('colorChosen')

/*shorts Classic*/
function blackClassicShorts() {
    document.getElementById("ClassicShorts").src =
        "Product/shorts/black-Short/mens-fleece-shorts-black-front-611920673f39b.png";
    document.getElementById("ClassicShorts").onmousemove = function () {
        document.getElementById("ClassicShorts").src =
            "Product/shorts/black-Short/mens-fleece-shorts-black-front-611920673f190.png";
    };
    document.getElementById("ClassicShorts").onmouseout = function () {
        document.getElementById("ClassicShorts").src =
            "Product/shorts/black-Short/mens-fleece-shorts-black-front-611920673f39b.png";
    };

    document.querySelector("#whiteClassicShorts").classList.remove('colorChosen')
    document.querySelector("#blackClassicShorts").classList.add('colorChosen')
}
function whiteClassicShorts() {
    document.getElementById("ClassicShorts").src =
        "Product/shorts/white-Short/all-over-print-mens-athletic-long-shorts-white-front-611911368fc76.png";
    document.getElementById("ClassicShorts").onmousemove = function () {
        document.getElementById("ClassicShorts").src =
            "Product/shorts/white-Short/all-over-print-mens-athletic-long-shorts-white-left-611910b9e56fc.png";
    };
    document.getElementById("ClassicShorts").onmouseout = function () {
        document.getElementById("ClassicShorts").src =
            "Product/shorts/white-Short/all-over-print-mens-athletic-long-shorts-white-front-611911368fc76.png";
    };

    document.querySelector("#whiteClassicShorts").classList.add('colorChosen')
    document.querySelector("#blackClassicShorts").classList.remove('colorChosen')
}

/*Shorts with Logo */
function lightGrayLogoShorts() {
    document.getElementById("LogoShorts").src =
        "Product/shorts/lightGray-Short/mens-fleece-shorts-heather-grey-front-611912e5e26c6.png";
    document.getElementById("LogoShorts").onmousemove = function () {
        document.getElementById("LogoShorts").src =
            "Product/shorts/lightGray-Short/mens-fleece-shorts-heather-grey-left-front-611912e5e2543.png";
    };
    document.getElementById("LogoShorts").onmouseout = function () {
        document.getElementById("LogoShorts").src =
            "Product/shorts/lightGray-Short/mens-fleece-shorts-heather-grey-front-611912e5e26c6.png";
    };

    document.querySelector("#whiteLogoShorts").classList.remove('colorChosen')
    document.querySelector("#lightGrayLogoShorts").classList.add('colorChosen')
}
function whiteLogoShorts() {
    document.getElementById("LogoShorts").src =
        "Product/shorts/white-Short/mens-fleece-shorts-white-front-611912e5e292e.png";
    document.getElementById("LogoShorts").onmousemove = function () {
        document.getElementById("LogoShorts").src =
            "Product/shorts/white-Short/mens-fleece-shorts-white-left-front-611912e5e2796.png";
    };
    document.getElementById("LogoShorts").onmouseout = function () {
        document.getElementById("LogoShorts").src =
            "Product/shorts/white-Short/mens-fleece-shorts-white-front-611912e5e292e.png";
    };

    document.querySelector("#whiteLogoShorts").classList.add('colorChosen')
    document.querySelector("#lightGrayLogoShorts").classList.remove('colorChosen')

}

/*  ACCESSORIES */
/*change the product depends on the color selected*/

/*outline color select for default if occur*/
let blackMask1 = document.querySelector("#blackMask")
if (blackMask1) {
    blackMask.classList.add('colorChosen');
}

let whiteTote1 = document.querySelector("#whiteTote")
if (whiteTote1) {
    whiteTote1.classList.add('colorChosen');
}

let blackLogoHat1 = document.querySelector("#blackLogoHat")
if (blackLogoHat1) {
    blackLogoHat1.classList.add('colorChosen');
}

let blackHat1 = document.querySelector("#blackHat")
if (blackHat1) {
    blackHat1.classList.add('colorChosen');
}

let lightGrayBackpack1 = document.querySelector("#lightGrayBackpack")
if (lightGrayBackpack1) {
    lightGrayBackpack1.classList.add('colorChosen');
}

let roseBarChain1 = document.querySelector("#roseBarChain")
if (roseBarChain1) {
    roseBarChain1.classList.add('colorChosen');
}

let roseHexagonChain1 = document.querySelector("#roseHexagonChain")
if (roseHexagonChain1) {
    roseHexagonChain1.classList.add('colorChosen');
}

/*Tote Bag*/
function whiteTote() {
    document.getElementById("tote").src =
        "Product/accessories/all-over-print-tote-black-15x15-mockup-610f582cde695.png";
    document.getElementById("tote").onmousemove = function () {
        document.getElementById("tote").src =
            "Product/accessories/all-over-print-tote-black-15x15-mockup-610f582cde72f.png";
    };
    document.getElementById("tote").onmouseout = function () {
        document.getElementById("tote").src =
            "Product/accessories/all-over-print-tote-black-15x15-mockup-610f582cde695.png";
    };

    document.querySelector("#whiteTote").classList.add('colorChosen');
    document.querySelector("#blackTote").classList.remove('colorChosen');
}
function blackTote() {
    document.getElementById("tote").src =
        "Product/accessories/all-over-print-tote-black-15x15-mockup-610f574e11d24.png";
    document.getElementById("tote").onmousemove = function () {
        document.getElementById("tote").src =
            "Product/accessories/all-over-print-tote-black-15x15-mockup-610f574e11f58.png";
    };
    document.getElementById("tote").onmouseout = function () {
        document.getElementById("tote").src =
            "Product/accessories/all-over-print-tote-black-15x15-mockup-610f574e11d24.png";
    };

    document.querySelector("#blackTote").classList.add('colorChosen');
    document.querySelector("#whiteTote").classList.remove('colorChosen');
}

/*backpack*/
function lightGrayBackpack() {
    document.getElementById("backpack").src =
        "Product/accessories/embroidered-simple-backpack-i-bagbase-bg126-grey-marl-front-610bfcc3352d5.png";
    document.getElementById("backpack").onmousemove = function () {
        document.getElementById("backpack").src =
            "Product/accessories/embroidered-simple-backpack-i-bagbase-bg126-grey-marl-back-610bfcc33553b.png";
    };
    document.getElementById("backpack").onmouseout = function () {
        document.getElementById("backpack").src =
            "Product/accessories/embroidered-simple-backpack-i-bagbase-bg126-grey-marl-front-610bfcc3352d5.png";
    };

    document.querySelector("#lightGrayBackpack").style.outline =
        "2px solid black";
    document.querySelector("#blackBackpack").classList.remove('colorChosen');
}
function blackBackpack() {
    document.getElementById("backpack").src =
        "Product/accessories/embroidered-simple-backpack-i-bagbase-bg126-anthracite-front-610bfcc3353b4.png";
    document.getElementById("backpack").onmousemove = function () {
        document.getElementById("backpack").src =
            "Product/accessories/embroidered-simple-backpack-i-bagbase-bg126-anthracite-back-610bfcc335420.png";
    };
    document.getElementById("backpack").onmouseout = function () {
        document.getElementById("backpack").src =
            "Product/accessories/embroidered-simple-backpack-i-bagbase-bg126-anthracite-front-610bfcc3353b4.png";
    };

    document.querySelector("#lightGrayBackpack").classList.remove('colorChosen');
    document.querySelector("#blackBackpack").classList.add('colorChosen');
}

/* bar chain*/
function roseBarChain() {
    document.getElementById("barChain").src =
        "Product/accessories/engraved-silver-bar-chain-necklace-18k-rose-gold-coating-flat-610f5aba51f38.png";
    document.getElementById("barChain").onmousemove = function () {
        document.getElementById("barChain").src =
            "Product/accessories/engraved-silver-bar-chain-necklace-18k-rose-gold-coating-women-610f5aba52014.png";
    };
    document.getElementById("barChain").onmouseout = function () {
        document.getElementById("barChain").src =
            "Product/accessories/engraved-silver-bar-chain-necklace-18k-rose-gold-coating-flat-610f5aba51f38.png";
    };

    document.querySelector("#roseBarChain").classList.add('colorChosen');
    document.querySelector("#goldBarChain").classList.remove('colorChosen');
}
function goldBarChain() {
    document.getElementById("barChain").src =
        "Product/accessories/engraved-silver-bar-chain-necklace-24k-gold-coating-flat-610f5b6bb66bf.png";
    document.getElementById("barChain").onmousemove = function () {
        document.getElementById("barChain").src =
            "Product/accessories/engraved-silver-bar-chain-necklace-24k-gold-coating-women-610f5b6bb6900.png";
    };
    document.getElementById("barChain").onmouseout = function () {
        document.getElementById("barChain").src =
            "Product/accessories/engraved-silver-bar-chain-necklace-24k-gold-coating-flat-610f5b6bb66bf.png";
    };

    document.querySelector("#goldBarChain").classList.add('colorChosen');
    document.querySelector("#roseBarChain").classList.remove('colorChosen');
}

/* hexagon chain*/
function roseHexagonChain() {
    document.getElementById("HexagonChain").src =
        "Product/accessories/engraved-silver-hexagon-chain-necklace-18k-rose-gold-coating-flat-610f5f8ab2483.png";
    document.getElementById("HexagonChain").onmousemove = function () {
        document.getElementById("HexagonChain").src =
            "Product/accessories/engraved-silver-hexagon-chain-necklace-18k-rose-gold-coating-womens-2-610f5f8ab2533.png";
    };
    document.getElementById("HexagonChain").onmouseout = function () {
        document.getElementById("HexagonChain").src =
            "Product/accessories/engraved-silver-hexagon-chain-necklace-18k-rose-gold-coating-flat-610f5f8ab2483.png";
    };

    document.querySelector("#roseHexagonChain").classList.add('colorChosen');
    document.querySelector("#goldHexagonChain").classList.remove('colorChosen');
}
function goldHexagonChain() {
    document.getElementById("HexagonChain").src =
        "Product/accessories/engraved-silver-hexagon-chain-necklace-24k-gold-coating-flat-610f5f2835bb1.png";
    document.getElementById("HexagonChain").onmousemove = function () {
        document.getElementById("HexagonChain").src =
            "Product/accessories/engraved-silver-hexagon-chain-necklace-18k-rose-gold-coating-womens-2-610f5f8ab2533.png";
    };
    document.getElementById("HexagonChain").onmouseout = function () {
        document.getElementById("HexagonChain").src =
            "Product/accessories/engraved-silver-hexagon-chain-necklace-24k-gold-coating-flat-610f5f2835bb1.png";
    };

    document.querySelector("#goldHexagonChain").classList.add('colorChosen');
    document.querySelector("#roseHexagonChain").classList.remove('colorChosen');
}

/*  PRELOAD  */

//preloader
var images = [];
function preload() {
    for (var i = 0; i < arguments.length; i++) {
        images[i] = new Image();
        images[i].src = preload.arguments[i];
    }
}

//preload img src
preload(
    "Product/accessories/all-over-print-premium-face-mask-white-front-610f63226dc50.png",
    "Product/accessories/all-over-print-premium-face-mask-white-front-610f63226db7f.png",

    "Product/accessories/all-over-print-tote-black-15x15-mockup-610f574e11d24.png",
    "Product/accessories/all-over-print-tote-black-15x15-mockup-610f574e11f58.png",
    "Product/accessories/all-over-print-tote-black-15x15-mockup-610f582cde695.png",
    "Product/accessories/all-over-print-tote-black-15x15-mockup-610f582cde72f.png",

    "Product/accessories/bucket-hat-i-big-accessories-bx003-black-front-60e71fa93e72b.png",
    "Product/accessories/bucket-hat-i-big-accessories-bx003-black-front-60e71fa93e9cf.png",

    "Product/accessories/bucket-hat-i-big-accessories-bx003-black-front-60f6dba948d54.png",
    "Product/accessories/bucket-hat-i-big-accessories-bx003-black-front-60f6dba948e78.png",

    "Product/accessories/embroidered-simple-backpack-i-bagbase-bg126-grey-marl-front-610bfcc3352d5.png",

    "Product/accessories/embroidered-simple-backpack-i-bagbase-bg126-grey-marl-back-610bfcc33553b.png",

    "Product/accessories/embroidered-simple-backpack-i-bagbase-bg126-anthracite-front-610bfcc3353b4.png",

    "Product/accessories/embroidered-simple-backpack-i-bagbase-bg126-anthracite-back-610bfcc335420.png",

    "Product/accessories/engraved-silver-bar-chain-necklace-24k-gold-coating-flat-610f5b6bb66bf.png",

    "Product/accessories/engraved-silver-bar-chain-necklace-24k-gold-coating-women-610f5b6bb6900.png",

    "Product/accessories/engraved-silver-bar-chain-necklace-18k-rose-gold-coating-women-610f5aba52014.png",

    "Product/accessories/engraved-silver-bar-chain-necklace-18k-rose-gold-coating-flat-610f5aba51f38.png",

    "Product/accessories/engraved-silver-hexagon-chain-necklace-18k-rose-gold-coating-flat-610f5f8ab2483.png",

    "Product/accessories/engraved-silver-hexagon-chain-necklace-18k-rose-gold-coating-womens-2-610f5f8ab2533.png",

    "Product/accessories/engraved-silver-hexagon-chain-necklace-24k-gold-coating-flat-610f5f2835bb1.png",

    "Product/accessories/engraved-silver-hexagon-chain-necklace-18k-rose-gold-coating-womens-2-610f5f8ab2533.png",

    "Product/hoodies/white-Hoodie/unisex-essential-eco-hoodie-white-front-2-60e7150a8377c.png",

    "Product/hoodies/white-Hoodie/unisex-essential-eco-hoodie-white-front-60e7150a8364f.png",

    "Product/hoodies/black-Hoodie/unisex-heavy-blend-hoodie-black-front-60e815eedbe26.png",
    "Product/hoodies/black-Hoodie/unisex-heavy-blend-hoodie-black-front-60e815eedbffd.png",

    "Product/hoodies/white-Hoodie/unisex-premium-hoodie-white-front-61167fab1babf.png",
    "Product/hoodies/white-Hoodie/unisex-premium-hoodie-white-front-61167fab1b96e.png",
    "Product/hoodies/black-Hoodie/unisex-premium-hoodie-black-front-61167f87b64ad.png",
    "Product/hoodies/black-Hoodie/unisex-premium-hoodie-black-front-61167f87b65ea.png",
    "Product/hoodies/lightGray-Hoodie/unisex-premium-hoodie-carbon-grey-front-61167fab1b8ad.png",

    "Product/hoodies/lightGray-Hoodie/unisex-premium-hoodie-carbon-grey-front-61167fab1b5c3.png",

    "Product/hoodies/black-Hoodie/unisex-lightweight-zip-hoodie-solid-black-triblend-front-611680cef32df.png",

    "Product/hoodies/black-Hoodie/unisex-lightweight-zip-hoodie-solid-black-triblend-front-611680cef3410.png",

    "Product/hoodies/lightGray-Hoodie/unisex-lightweight-zip-hoodie-grey-triblend-front-611680ccb23ba.png",

    "Product/hoodies/lightGray-Hoodie/unisex-lightweight-zip-hoodie-grey-triblend-front-611680ccb2299.png",

    "Product/hoodies/beige-Hoodie/unisex-sueded-fleece-hoodie-heather-oat-front-61167de6441b1.png",

    "Product/hoodies/beige-Hoodie/unisex-sueded-fleece-hoodie-heather-oat-front-61167de644282.png",

    "Product/hoodies/lightGray-Hoodie/unisex-sueded-fleece-hoodie-athletic-heather-front-61167de643f36.png",

    "Product/hoodies/lightGray-Hoodie/unisex-sueded-fleece-hoodie-athletic-heather-front-61167de643d1e.png",

    "Product/hoodies/black-Hoodie/unisex-sueded-fleece-hoodie-black-heather-front-61167da80dd0a.png",

    "Product/hoodies/black-Hoodie/unisex-sueded-fleece-hoodie-black-heather-front-61167da80db23.png",

    "Product/hoodies/black-Hoodie/unisex-champion-tie-dye-hoodie-black-front-2-6116819deddd3.png",

    "Product/hoodies/black-Hoodie/unisex-champion-tie-dye-hoodie-black-front-2-6116819dedefa.png",

    "Product/hoodies/white-Hoodie/all-over-print-unisex-hoodie-white-left-61167c6b9a97e.png",

    "Product/hoodies/white-Hoodie/all-over-print-unisex-hoodie-white-left-61167c6b9aa8a.png",

    "Product/hoodies/black-Hoodie/all-over-print-unisex-hoodie-white-left-611679bab84f3.png",

    "Product/hoodies/black-Hoodie/all-over-print-unisex-hoodie-white-front-611679bab7dfd.png",

    "Product/shorts/white-Short/all-over-print-mens-athletic-long-shorts-white-front-611911368fc76.png",

    "Product/shorts/white-Short/all-over-print-mens-athletic-long-shorts-white-left-611910b9e56fc.png",

    "Product/shorts/black-Short/mens-fleece-shorts-black-front-611920673f39b.png",
    "Product/shorts/black-Short/mens-fleece-shorts-black-front-611920673f190.png",

    "Product/shorts/white-Short/all-over-print-biker-shorts-white-front-61191174a4d1a.png",
    "Product/shorts/white-Short/all-over-print-biker-shorts-white-left-front-61191174a5001.png",

    "Product/shorts/white-Short/all-over-print-yoga-shorts-white-front-6119138a5cb03.png",
    "Product/shorts/white-Short/all-over-print-yoga-shorts-white-front-6119138a5cb03.png",

    "Product/shorts/lightGray-Short/mens-fleece-shorts-heather-grey-front-611912e5e26c6.png",

    "Product/shorts/lightGray-Short/mens-fleece-shorts-heather-grey-left-front-611912e5e2543.png",

    "Product/shorts/white-Short/mens-fleece-shorts-white-front-611912e5e292e.png",
    "Product/shorts/white-Short/mens-fleece-shorts-white-left-front-611912e5e2796.png",

    "Product/shorts/navy-Short/all-over-print-mens-athletic-long-shorts-white-front-611916641c675.png",

    "Product/shorts/navy-Short/all-over-print-mens-athletic-long-shorts-white-left-611916641c2ff.png",

    "Product/shorts/white-Short/all-over-print-mens-athletic-long-shorts-white-front-611914ca43482.png",

    "Product/shorts/white-Short/all-over-print-mens-athletic-long-shorts-white-front-611914ca431fa.png",

    "Product/sweater/black-Sweater/unisex-crew-neck-sweatshirt-black-front-2-60e80d4dcdba2.png",

    "Product/sweater/black-Sweater/mens-long-sleeve-shirt-black-left-front-60e80ed32c3e0.png",

    "Product/sweater/white-sweater/mens-long-sleeve-shirt-white-front-60e812b79dd0f.png",
    "Product/sweater/white-sweater/mens-long-sleeve-shirt-white-front-60e812b79e02c.png",
    "Product/sweater/beige-Sweater/mens-long-sleeve-shirt-sand-front-60e812b79d219.png",
    "Product/sweater/beige-Sweater/mens-long-sleeve-shirt-sand-left-front-60e812b79d746.png",

    "Product/sweater/red-Sweater/mens-long-sleeve-shirt-red-front-60e812b79cc39.png",
    "Product/sweater/red-Sweater/mens-long-sleeve-shirt-red-front-60e812b79caef.png",
    "Product/sweater/blue-Sweater/mens-long-sleeve-shirt-indigo-blue-left-front-60e80ed33176c.png",

    "Product/sweater/blue-Sweater/mens-long-sleeve-shirt-indigo-blue-front-60e80ed3304df.png",

    "Product/sweater/lightBlue-Sweater/mens-long-sleeve-shirt-light-blue-front-60e80ed332ab0.png",

    "Product/sweater/lightBlue-Sweater/mens-long-sleeve-shirt-light-blue-front-60e80ed333a1a.png",

    "Product/sweater/darkBlue-Sweater/mens-long-sleeve-shirt-royal-front-60e80ed32e698.png",

    "Product/sweater/darkBlue-Sweater/mens-long-sleeve-shirt-royal-front-60e80ed32ddeb.png",

    "Product/sweater/militaryGreen-Sweater/mens-long-sleeve-shirt-military-green-front-60e80ed32ef92.png",

    "Product/sweater/militaryGreen-Sweater/mens-long-sleeve-shirt-military-green-front-60e80ed32f68d.png",

    "Product/sweater/lightGray-Sweater/mens-long-sleeve-shirt-sport-grey-left-front-60e812b79d044.png",

    "Product/sweater/lightGray-Sweater/mens-long-sleeve-shirt-sport-grey-front-60e812b79d12a.png",

    "Product/sweater/navy-Sweater/mens-long-sleeve-shirt-navy-front-60e80ed32ce18.png",
    "Product/sweater/navy-Sweater/mens-long-sleeve-shirt-navy-front-60e80ed32ce18.png",

    "Product/sweater/white-sweater/unisex-crew-neck-sweatshirt-white-front-60e80cba6ef27.png",

    "Product/sweater/white-sweater/unisex-crew-neck-sweatshirt-white-front-60e80cba6f73c.png",

    "Product/sweater/black-Sweater/unisex-crew-neck-sweatshirt-black-front-60e80d4dcb3bd.png",

    "Product/sweater/black-Sweater/unisex-crew-neck-sweatshirt-black-front-60e80d4dcd31f.png",

    "Product/sweater/white-sweater/unisex-fleece-sweatshirt-white-front-2-6117dbba913f6.png",

    "Product/sweater/white-sweater/unisex-fleece-sweatshirt-white-front-2-6117dbba912b4.png",

    "Product/sweater/black-Sweater/unisex-fleece-sweatshirt-black-front-6117dbba90cc8.png",
    "Product/sweater/black-Sweater/unisex-fleece-sweatshirt-black-front-6117dbba90b5f.png",

    "Product/sweater/navy-Sweater/all-over-print-unisex-sweatshirt-white-left-front-6117db31d3cb6.png",

    "Product/sweater/navy-Sweater/all-over-print-unisex-sweatshirt-white-front-6117db31d382e.png",

    "Product/sweater/white-sweater/all-over-print-unisex-sweatshirt-white-right-front-6117db4ccd002.png",

    "Product/sweater/white-sweater/all-over-print-unisex-sweatshirt-white-right-front-6117db4cccf2d.png",

    "Product/sweater/white-sweater/unisex-crew-neck-sweatshirt-white-front-6117dcd64a513.png",

    "Product/sweater/white-sweater/unisex-crew-neck-sweatshirt-white-front-60e80cba6f73c.png",

    "Product/sweater/black-Sweater/unisex-crew-neck-sweatshirt-black-front-6117dcd64a289.png",

    "Product/sweater/black-Sweater/unisex-crew-neck-sweatshirt-black-front-6117dcd64a03a.png",

    "Product/teeShirt/black-Tee/unisex-staple-t-shirt-black-heather-front-610c171abfdfb.png",

    "Product/teeShirt/black-Tee/unisex-staple-t-shirt-black-heather-left-front-610c171ac0027.png",
    "Product/teeShirt/white-Tee/unisex-pocket-t-shirt-white-front-610c034560b3f.png",
    "Product/teeShirt/white-Tee/unisex-pocket-t-shirt-white-front-610c034560c0f.png",
    "Product/teeShirt/white-Tee/adult-quality-tee-white-front-60e814c22d2f0.png",
    "Product/teeShirt/white-Tee/adult-quality-tee-white-front-60e814c22d568.png",
    "Product/teeShirt/black-Tee/adult-quality-tee-black-front-2-60e8145b2fc6b.png",
    "Product/teeShirt/black-Tee/adult-quality-tee-black-front-60e8145b2fcdf.png",
    "Product/teeShirt/beige-Tee/adult-quality-tee-light-beige-front-60e814c22cfff.png",
    "Product/teeShirt/beige-Tee/adult-quality-tee-light-beige-front-60e814c22ce03.png",
    "Product/teeShirt/lightGray-Tee/adult-quality-tee-light-grey-front-2-60e8145b312ed.png",
    "Product/teeShirt/lightGray-Tee/adult-quality-tee-light-grey-front-60e8145b3146b.png",
    "Product/teeShirt/white-Tee/unisex-pocket-t-shirt-white-front-610c034560b3f.png",
    "Product/teeShirt/white-Tee/unisex-pocket-t-shirt-white-zoomed-in-610c034560a74.png",
    "Product/teeShirt/black-Tee/unisex-pocket-t-shirt-black-front-610d2fbde7d7b.png",
    "Product/teeShirt/black-Tee/unisex-pocket-t-shirt-black-zoomed-in-610d2fbde7c02.png",
    "Product/teeShirt/black-Tee/unisex-basic-softstyle-t-shirt-black-front-6107e99e99083.png",
    "Product/teeShirt/black-Tee/unisex-basic-softstyle-t-shirt-black-left-front-6107e99e98f17.png",

    "Product/teeShirt/white-Tee/unisex-staple-t-shirt-white-front-610d3a2c58937.png",
    "Product/teeShirt/white-Tee/unisex-staple-t-shirt-white-front-610d3a2c586a1.png",
    "Product/teeShirt/white-Tee/mens-classic-t-shirt-white-front-610d449edb1ab.png",
    "Product/teeShirt/white-Tee/unisex-staple-t-shirt-white-front-610d46213ad3f.png",
    "Product/teeShirt/black-Tee/mens-classic-t-shirt-black-front-610d449edb4e8.png",
    "Product/teeShirt/black-Tee/unisex-staple-t-shirt-black-heather-right-front-610d46213abd8.png",

    "Product/teeShirt/white-Tee/all-over-print-mens-crew-neck-t-shirt-white-back-610d40e2a3b07.png",

    "Product/teeShirt/white-Tee/mens-classic-t-shirt-white-front-6107e5efd17ce.png",
    "Product/teeShirt/white-Tee/unisex-pocket-t-shirt-white-front-610c034560c0f.png",
    "Product/teeShirt/black-Tee/unisex-pocket-t-shirt-black-front-610d2fbde7d1d.png",

    "Product/trousers/white-Trousers/unisex-fleece-sweatpants-white-left-front-61192bd480654.png",

    "Product/trousers/white-Trousers/unisex-fleece-sweatpants-white-left-front-61192bd480361.png",
    "Product/trousers/black-Trousers/unisex-fleece-sweatpants-black-front-61192bc970724.png",

    "Product/trousers/black-Trousers/unisex-fleece-sweatpants-black-front-61192bc970963.png",

    "Product/trousers/lightGray-Trousers/unisex-fleece-sweatpants-carbon-grey-front-61192bd480050.png",

    "Product/trousers/lightGray-Trousers/unisex-fleece-sweatpants-carbon-grey-front-61192bd47fe37.png",

    "Product/trousers/white-Trousers/all-over-print-mens-leggings-white-right-61192da649e4e.png",

    "Product/trousers/white-Trousers/all-over-print-mens-leggings-white-front-61192da649d19.png",

    "Product/trousers/black-Trousers/unisex-slim-fit-joggers-black-front-61192ce66cf0f.png",

    "Product/trousers/black-Trousers/unisex-slim-fit-joggers-black-front-61192ce66d147.png",

    "Product/trousers/white-Trousers/all-over-print-mens-joggers-white-front-611e7a5e3a44a.png",

    "Product/trousers/white-Trousers/all-over-print-mens-joggers-white-front-611e7a5e3a2ce.png"
);
