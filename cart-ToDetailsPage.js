if (!(cartItem == null || cartItem.length == 0)) {

    //get the product row
    let productRow = document.getElementsByClassName('cartItem');

    for (let i = 0; i < productRow.length; ++i) {

        //get product name
        let productName = productRow[i].children[1].children[0].innerText.slice(10);

        //get product name location
        let productText = productRow[i].children[1].children[0];

        //get product image location
        let productImg = productRow[i].children[0].children[0];

        console.log(productName);

        /* HOODIES */
        //Champion Hoodie
        if (productName.search('Champion Hoodie') !== -1) {

            productText.addEventListener('click', function () {

                window.location.href = 'category-hoodie/championH.html'

            })

            productImg.addEventListener('click', function () {

                window.location.href = 'category-hoodie/championH.html'

            })
        }

        //Special Hoodie
        if (productName.search('Special Hoodie') !== -1) {

            productText.addEventListener('click', function () {

                window.location.href = 'category-hoodie/specialH.html'

            })

            productImg.addEventListener('click', function () {

                window.location.href = 'category-hoodie/specialH.html'

            })
        }

        //Premium Hoodie
        if (productName.search('Premium Hoodie') !== -1) {

            productText.addEventListener('click', function () {

                window.location.href = 'category-hoodie/premiumH.html'

            })

            productImg.addEventListener('click', function () {

                window.location.href = 'category-hoodie/premiumH.html'

            })
        }

        //Classic Hoodie
        if (productName.search('Classic Hoodie') !== -1) {

            productText.addEventListener('click', function () {

                window.location.href = 'category-hoodie/classicH.html'

            })

            productImg.addEventListener('click', function () {

                window.location.href = 'category-hoodie/classicH.html'

            })
        }

        //Zip Hoodie
        if (productName.search('Zip Hoodie') !== -1) {

            productText.addEventListener('click', function () {

                window.location.href = 'category-hoodie/zipH.html'

            })

            productImg.addEventListener('click', function () {

                window.location.href = 'category-hoodie/zipH.html'

            })
        }

        //Logo Hoodie
        if (productName.search('Logo Hoodie') !== -1) {

            productText.addEventListener('click', function () {

                window.location.href = 'category-hoodie/logoH.html'

            })

            productImg.addEventListener('click', function () {

                window.location.href = 'category-hoodie/logoH.html'

            })
        }

        /* T-SHIRT */
        //Logo T-Shirt
        if (productName.search('Logo T-Shirt') !== -1) {

            productText.addEventListener('click', function () {

                window.location.href = 'category-tee/logoT.html'

            })

            productImg.addEventListener('click', function () {

                window.location.href = 'category-tee/logoT.html'

            })
        }

        //Classic T-Shirt
        if (productName.search('Classic T-Shirt') !== -1) {

            productText.addEventListener('click', function () {

                window.location.href = 'category-tee/classicT.html'

            })

            productImg.addEventListener('click', function () {

                window.location.href = 'category-tee/classicT.html'

            })
        }

        //Modern T-Shirt
        if (productName.search('Modern T-Shirt') !== -1) {

            productText.addEventListener('click', function () {

                window.location.href = 'category-tee/modernT.html'

            })

            productImg.addEventListener('click', function () {

                window.location.href = 'category-tee/modernT.html'

            })
        }

        //Arrows T-Shirt
        if (productName.search('Arrows T-Shirt') !== -1) {

            productText.addEventListener('click', function () {

                window.location.href = 'category-tee/arrowsT.html'

            })

            productImg.addEventListener('click', function () {

                window.location.href = 'category-tee/arrowsT.html'

            })
        }

        //Family T-Shirt
        if (productName.search('Family T-Shirt') !== -1) {

            productText.addEventListener('click', function () {

                window.location.href = 'category-tee/familyT.html'

            })

            productImg.addEventListener('click', function () {

                window.location.href = 'category-tee/familyT.html'

            })
        }

        //Pocket T-Shirt
        if (productName.search('Pocket T-Shirt') !== -1) {

            productText.addEventListener('click', function () {

                window.location.href = 'category-tee/pocketT.html'

            })

            productImg.addEventListener('click', function () {

                window.location.href = 'category-tee/pocketT.html'

            })
        }

        /* SwEATER */
        //Classic Sweater
        if (productName.search('Classic Sweater') !== -1) {

            productText.addEventListener('click', function () {

                window.location.href = 'category-sweater/classicSw.html'

            })

            productImg.addEventListener('click', function () {

                window.location.href = 'category-sweater/classicSw.html'

            })
        }

        //Logo Sweater
        if (productName.search('Logo Sweater') !== -1) {

            productText.addEventListener('click', function () {

                window.location.href = 'category-sweater/logoSw.html'

            })

            productImg.addEventListener('click', function () {

                window.location.href = 'category-sweater/logoSw.html'

            })
        }

        //Family Sweater
        if (productName.search('Family Sweater') !== -1) {

            productText.addEventListener('click', function () {

                window.location.href = 'category-sweater/FamilySw.html'

            })

            productImg.addEventListener('click', function () {

                window.location.href = 'category-sweater/FamilySw.html'

            })
        }

        //Special Sweater 1
        if (productName.search('Special Sweater 1') !== -1) {

            productText.addEventListener('click', function () {

                window.location.href = 'category-sweater/specialSw1.html'

            })

            productImg.addEventListener('click', function () {

                window.location.href = 'category-sweater/specialSw1.html'

            })
        }

        //Special Sweater 2
        if (productName.search('Special Sweater 2') !== -1) {

            productText.addEventListener('click', function () {

                window.location.href = 'category-sweater/specialSw2.html'

            })

            productImg.addEventListener('click', function () {

                window.location.href = 'category-sweater/specialSw2.html'

            })
        }

        //Special Sweater 3
        if (productName.search('Special Sweater 3') !== -1) {

            productText.addEventListener('click', function () {

                window.location.href = 'category-sweater/specialSw3.html'

            })

            productImg.addEventListener('click', function () {

                window.location.href = 'category-sweater/specialSw3.html'

            })
        }

        /* SHORTS AND PANTS */
        //Classic Shorts
        if (productName.search('Classic Shorts') !== -1) {

            productText.addEventListener('click', function () {

                window.location.href = 'category-short/classicSh.html'

            })

            productImg.addEventListener('click', function () {

                window.location.href = 'category-short/classicSh.html'

            })
        }

        //Biker Shorts
        if (productName.search('Biker Shorts') !== -1) {

            productText.addEventListener('click', function () {

                window.location.href = 'category-short/bikerSh.html'

            })

            productImg.addEventListener('click', function () {

                window.location.href = 'category-short/bikerSh.html'

            })
        }

        //Yoga Shorts
        if (productName.search('Yoga Shorts') !== -1) {

            productText.addEventListener('click', function () {

                window.location.href = 'category-short/yogaSh.html'

            })

            productImg.addEventListener('click', function () {

                window.location.href = 'category-short/yogaSh.html'

            })
        }

        //Logo Shorts
        if (productName.search('Logo Shorts') !== -1) {

            productText.addEventListener('click', function () {

                window.location.href = 'category-short/LogoSh.html'

            })

            productImg.addEventListener('click', function () {

                window.location.href = 'category-short/LogoSh.html'

            })
        }

        //Special Shorts 1
        if (productName.search('Special Shorts 1') !== -1) {

            productText.addEventListener('click', function () {

                window.location.href = 'category-short/specialSh1.html'

            })

            productImg.addEventListener('click', function () {

                window.location.href = 'category-short/specialSh1.html'

            })
        }

        //Special Shorts 2
        if (productName.search('Special Shorts 2') !== -1) {

            productText.addEventListener('click', function () {

                window.location.href = 'category-short/specialSh2.html'

            })

            productImg.addEventListener('click', function () {

                window.location.href = 'category-short/specialSh2.html'

            })
        }

        /* TROUSERS */
        //Sweatpants
        if (productName.search('Sweatpants') !== -1) {

            productText.addEventListener('click', function () {

                window.location.href = 'category-trouser/sweatpants.html'

            })

            productImg.addEventListener('click', function () {

                window.location.href = 'category-trouser/sweatpants.html'

            })
        }

        //Legging
        if (productName.search('Legging') !== -1) {

            productText.addEventListener('click', function () {

                window.location.href = 'category-trouser/legging.html'

            })

            productImg.addEventListener('click', function () {

                window.location.href = 'category-trouser/legging.html'

            })
        }

        //Joggers
        if (productName.search('Joggers') !== -1) {

            productText.addEventListener('click', function () {

                window.location.href = 'category-trouser/joggers.html'

            })

            productImg.addEventListener('click', function () {

                window.location.href = 'category-trouser/joggers.html'

            })
        }

        //Premium Sweatpants
        if (productName.search('Premium Sweatpants') !== -1) {

            productText.addEventListener('click', function () {

                window.location.href = 'category-trouser/premiumSweat.html'

            })

            productImg.addEventListener('click', function () {

                window.location.href = 'category-trouser/premiumSweat.html'

            })
        }

        //Special Sweatpants
        if (productName.search('Special Sweatpants') !== -1) {

            productText.addEventListener('click', function () {

                window.location.href = 'category-trouser/specialSweat.html'

            })

            productImg.addEventListener('click', function () {

                window.location.href = 'category-trouser/specialSweat.html'

            })
        }

        /* ACCESSORIES */
        //Mask
        if (productName.search('Mask') !== -1) {

            productText.addEventListener('click', function () {

                window.location.href = 'category-accessories/mask.html'

            })

            productImg.addEventListener('click', function () {

                window.location.href = 'category-accessories/mask.html'

            })
        }

        //Tote Bag
        if (productName.search('Tote Bag') !== -1) {

            productText.addEventListener('click', function () {

                window.location.href = 'category-accessories/tote.html'

            })

            productImg.addEventListener('click', function () {

                window.location.href = 'category-accessories/tote.html'

            })
        }

        //Hat
        if (productName.search('Hat') !== -1) {

            productText.addEventListener('click', function () {

                window.location.href = 'category-accessories/hat.html'

            })

            productImg.addEventListener('click', function () {

                window.location.href = 'category-accessories/hat.html'

            })
        }

        //Logo Hat
        if (productName.search('Logo Hat') !== -1) {

            productText.addEventListener('click', function () {

                window.location.href = 'category-accessories/logoHat.html'

            })

            productImg.addEventListener('click', function () {

                window.location.href = 'category-accessories/logoHat.html'

            })
        }

        //Backpack
        if (productName.search('Backpack') !== -1) {

            productText.addEventListener('click', function () {

                window.location.href = 'category-accessories/backpack.html'

            })

            productImg.addEventListener('click', function () {

                window.location.href = 'category-accessories/backpack.html'

            })
        }

        //Bar Chain
        if (productName.search('Bar Chain') !== -1) {

            productText.addEventListener('click', function () {

                window.location.href = 'category-accessories/barChain.html'

            })

            productImg.addEventListener('click', function () {

                window.location.href = 'category-accessories/barChain.html'

            })
        }

        //Hexagon Chain
        if (productName.search('Hexagon Chain') !== -1) {

            productText.addEventListener('click', function () {

                window.location.href = 'category-accessories/hexaChain.html'

            })

            productImg.addEventListener('click', function () {

                window.location.href = 'category-accessories/hexaChain.html'

            })
        }
    }
}