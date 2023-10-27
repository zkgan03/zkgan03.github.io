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
    document.getElementById('trousersSweatpants').src = '../Product/trousers/black-Trousers/unisex-fleece-sweatpants-black-front-61192bc970724.png';
    document.getElementById('trousersSweatpants').onmousemove = function () {
        document.getElementById('trousersSweatpants').src = '../Product/trousers/black-Trousers/unisex-fleece-sweatpants-black-front-61192bc970963.png';
    }
    document.getElementById('trousersSweatpants').onmouseout = function () {
        document.getElementById('trousersSweatpants').src = '../Product/trousers/black-Trousers/unisex-fleece-sweatpants-black-front-61192bc970724.png';
    }

    document.querySelector('#blackSweatpants').classList.add('colorChosen')
    document.querySelector('#whiteSweatpants').classList.remove('colorChosen')
    document.querySelector('#lightGraySweatpants').classList.remove('colorChosen')
}
function whiteSweatpants() {
    document.getElementById('trousersSweatpants').src = '../Product/trousers/white-Trousers/unisex-fleece-sweatpants-white-left-front-61192bd480654.png';
    document.getElementById('trousersSweatpants').onmousemove = function () {
        document.getElementById('trousersSweatpants').src = '../Product/trousers/white-Trousers/unisex-fleece-sweatpants-white-left-front-61192bd480361.png';
    }
    document.getElementById('trousersSweatpants').onmouseout = function () {
        document.getElementById('trousersSweatpants').src = '../Product/trousers/white-Trousers/unisex-fleece-sweatpants-white-left-front-61192bd480654.png';
    }

    document.querySelector('#whiteSweatpants').classList.add('colorChosen')
    document.querySelector('#blackSweatpants').classList.remove('colorChosen')
    document.querySelector('#lightGraySweatpants').classList.remove('colorChosen')
}
function lightGraySweatpants() {
    document.getElementById('trousersSweatpants').src = '../Product/trousers/lightGray-Trousers/unisex-fleece-sweatpants-carbon-grey-front-61192bd480050.png';
    document.getElementById('trousersSweatpants').onmousemove = function () {
        document.getElementById('trousersSweatpants').src = '../Product/trousers/lightGray-Trousers/unisex-fleece-sweatpants-carbon-grey-front-61192bd47fe37.png';
    }
    document.getElementById('trousersSweatpants').onmouseout = function () {
        document.getElementById('trousersSweatpants').src = '../Product/trousers/lightGray-Trousers/unisex-fleece-sweatpants-carbon-grey-front-61192bd480050.png';
    }

    document.querySelector('#lightGraySweatpants').classList.add('colorChosen')
    document.querySelector('#blackSweatpants').classList.remove('colorChosen')
    document.querySelector('#whiteSweatpants').classList.remove('colorChosen')
}

/*premium sweatPants*/
function whiteSweatpantsPremium() {
    document.getElementById('trousersSweatpantsPremium').src = '../Product/trousers/white-Trousers/all-over-print-mens-joggers-white-front-611e7ab3dd373.png';
    document.getElementById('trousersSweatpantsPremium').onmousemove = function () {
        document.getElementById('trousersSweatpantsPremium').src = '../Product/trousers/white-Trousers/all-over-print-mens-joggers-white-right-611e7ab3dd480.png';
    }
    document.getElementById('trousersSweatpantsPremium').onmouseout = function () {
        document.getElementById('trousersSweatpantsPremium').src = '../Product/trousers/white-Trousers/all-over-print-mens-joggers-white-front-611e7ab3dd373.png';
    }

    document.querySelector('#whiteSweatpantsPremium').classList.add('colorChosen')
    document.querySelector('#blackSweatpantsPremium').classList.remove('colorChosen')

}
function blackSweatpantsPremium() {
    document.getElementById('trousersSweatpantsPremium').src = '../Product/trousers/black-Trousers/all-over-print-mens-joggers-white-right-611e7b4cb3c43.png';
    document.getElementById('trousersSweatpantsPremium').onmousemove = function () {
        document.getElementById('trousersSweatpantsPremium').src = '../Product/trousers/black-Trousers/all-over-print-mens-joggers-white-left-611e7b4cb3d8e.png';
    }
    document.getElementById('trousersSweatpantsPremium').onmouseout = function () {
        document.getElementById('trousersSweatpantsPremium').src = '../Product/trousers/black-Trousers/all-over-print-mens-joggers-white-right-611e7b4cb3c43.png';
    }

    document.querySelector('#whiteSweatpantsPremium').classList.remove('colorChosen')
    document.querySelector('#blackSweatpantsPremium').classList.add('colorChosen')
}
