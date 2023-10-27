/*window.onscroll = function(){
    var footHeight = document.getElementsByTagName('body')[0].offsetHeight + document;
    var scrollBottom =$(document).height() - $(window).height() - $(window).scrollTop();

    console.log(footHeight)
    console.log(scrollBottom)
    let filter = document.getElementsByClassName('leftFilter')[0];

    if(scrollBottom <= footHeight){
        filter.style.position = 'relative';
        filter.style.top = '0px';
    }else{
        filter.style.position = 'absolute';
        filter.style.top = '180px';
    }
}*/

/*if (x == productItem.length - 1) {
    let resultsWrapper = document.getElementsByClassName('search-results-wrapper')[0];
    let div = document.createElement('div');
    div.classList.add("unavailableProduct");
    resultsWrapper.appendChild(div);

    document.getElementsByClassName('unavailableProduct')[0].innerHTML = 'Sorry';

}*/

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
            "../Product/accessories/all-over-print-premium-face-mask-white-front-610f63226dc50.png", 
            "../Product/accessories/all-over-print-premium-face-mask-white-front-610f63226db7f.png", 

            "../Product/accessories/all-over-print-tote-black-15x15-mockup-610f574e11d24.png", 
            "../Product/accessories/all-over-print-tote-black-15x15-mockup-610f574e11f58.png", 
            "../Product/accessories/all-over-print-tote-black-15x15-mockup-610f582cde695.png", 
            "../Product/accessories/all-over-print-tote-black-15x15-mockup-610f582cde72f.png", 

            "../Product/accessories/bucket-hat-i-big-accessories-bx003-black-front-60e71fa93e72b.png", 
            "../Product/accessories/bucket-hat-i-big-accessories-bx003-black-front-60e71fa93e9cf.png", 

            "../Product/accessories/bucket-hat-i-big-accessories-bx003-black-front-60f6dba948d54.png", 
            "../Product/accessories/bucket-hat-i-big-accessories-bx003-black-front-60f6dba948e78.png", 

            "../Product/accessories/embroidered-simple-backpack-i-bagbase-bg126-grey-marl-front-610bfcc3352d5.png",
                
            "../Product/accessories/embroidered-simple-backpack-i-bagbase-bg126-grey-marl-back-610bfcc33553b.png",
                
            "../Product/accessories/embroidered-simple-backpack-i-bagbase-bg126-anthracite-front-610bfcc3353b4.png",
                
            "../Product/accessories/embroidered-simple-backpack-i-bagbase-bg126-anthracite-back-610bfcc335420.png",
                

            "../Product/accessories/engraved-silver-bar-chain-necklace-24k-gold-coating-flat-610f5b6bb66bf.png",
                
            "../Product/accessories/engraved-silver-bar-chain-necklace-24k-gold-coating-women-610f5b6bb6900.png",
                
            "../Product/accessories/engraved-silver-bar-chain-necklace-18k-rose-gold-coating-women-610f5aba52014.png",
                
            "../Product/accessories/engraved-silver-bar-chain-necklace-18k-rose-gold-coating-flat-610f5aba51f38.png",
                

            "../Product/accessories/engraved-silver-hexagon-chain-necklace-18k-rose-gold-coating-flat-610f5f8ab2483.png",
                
            "../Product/accessories/engraved-silver-hexagon-chain-necklace-18k-rose-gold-coating-womens-2-610f5f8ab2533.png",
                
            "../Product/accessories/engraved-silver-hexagon-chain-necklace-24k-gold-coating-flat-610f5f2835bb1.png",
                
            "../Product/accessories/engraved-silver-hexagon-chain-necklace-18k-rose-gold-coating-womens-2-610f5f8ab2533.png",
                

            "../Product/hoodies/white-Hoodie/unisex-essential-eco-hoodie-white-front-2-60e7150a8377c.png",
                
            "../Product/hoodies/white-Hoodie/unisex-essential-eco-hoodie-white-front-60e7150a8364f.png",
                
            "../Product/hoodies/black-Hoodie/unisex-heavy-blend-hoodie-black-front-60e815eedbe26.png", 
            "../Product/hoodies/black-Hoodie/unisex-heavy-blend-hoodie-black-front-60e815eedbffd.png", 

            "../Product/hoodies/white-Hoodie/unisex-premium-hoodie-white-front-61167fab1babf.png", 
            "../Product/hoodies/white-Hoodie/unisex-premium-hoodie-white-front-61167fab1b96e.png", 
            "../Product/hoodies/black-Hoodie/unisex-premium-hoodie-black-front-61167f87b64ad.png", 
            "../Product/hoodies/black-Hoodie/unisex-premium-hoodie-black-front-61167f87b65ea.png", 
            "../Product/hoodies/lightGray-Hoodie/unisex-premium-hoodie-carbon-grey-front-61167fab1b8ad.png",
                
            "../Product/hoodies/lightGray-Hoodie/unisex-premium-hoodie-carbon-grey-front-61167fab1b5c3.png",
                

            "../Product/hoodies/black-Hoodie/unisex-lightweight-zip-hoodie-solid-black-triblend-front-611680cef32df.png",
                
            "../Product/hoodies/black-Hoodie/unisex-lightweight-zip-hoodie-solid-black-triblend-front-611680cef3410.png",
                
            "../Product/hoodies/lightGray-Hoodie/unisex-lightweight-zip-hoodie-grey-triblend-front-611680ccb23ba.png",
                
            "../Product/hoodies/lightGray-Hoodie/unisex-lightweight-zip-hoodie-grey-triblend-front-611680ccb2299.png",
                

            "../Product/hoodies/beige-Hoodie/unisex-sueded-fleece-hoodie-heather-oat-front-61167de6441b1.png",
                
            "../Product/hoodies/beige-Hoodie/unisex-sueded-fleece-hoodie-heather-oat-front-61167de644282.png",
                
            "../Product/hoodies/lightGray-Hoodie/unisex-sueded-fleece-hoodie-athletic-heather-front-61167de643f36.png",
                
            "../Product/hoodies/lightGray-Hoodie/unisex-sueded-fleece-hoodie-athletic-heather-front-61167de643d1e.png",
                
            "../Product/hoodies/black-Hoodie/unisex-sueded-fleece-hoodie-black-heather-front-61167da80dd0a.png",
                
            "../Product/hoodies/black-Hoodie/unisex-sueded-fleece-hoodie-black-heather-front-61167da80db23.png",
                

            "../Product/hoodies/black-Hoodie/unisex-champion-tie-dye-hoodie-black-front-2-6116819deddd3.png",
                
            "../Product/hoodies/black-Hoodie/unisex-champion-tie-dye-hoodie-black-front-2-6116819dedefa.png",
                

            "../Product/hoodies/white-Hoodie/all-over-print-unisex-hoodie-white-left-61167c6b9a97e.png",
                
            "../Product/hoodies/white-Hoodie/all-over-print-unisex-hoodie-white-left-61167c6b9aa8a.png",
                
            "../Product/hoodies/black-Hoodie/all-over-print-unisex-hoodie-white-left-611679bab84f3.png",
                
            "../Product/hoodies/black-Hoodie/all-over-print-unisex-hoodie-white-front-611679bab7dfd.png",
                

            "../Product/shorts/white-Short/all-over-print-mens-athletic-long-shorts-white-front-611911368fc76.png",
                
            "../Product/shorts/white-Short/all-over-print-mens-athletic-long-shorts-white-left-611910b9e56fc.png",
                
            "../Product/shorts/black-Short/mens-fleece-shorts-black-front-611920673f39b.png", 
            "../Product/shorts/black-Short/mens-fleece-shorts-black-front-611920673f190.png", 

            "../Product/shorts/white-Short/all-over-print-biker-shorts-white-front-61191174a4d1a.png", 
            "../Product/shorts/white-Short/all-over-print-biker-shorts-white-left-front-61191174a5001.png",
                

            "../Product/shorts/white-Short/all-over-print-yoga-shorts-white-front-6119138a5cb03.png", 
            "../Product/shorts/white-Short/all-over-print-yoga-shorts-white-front-6119138a5cb03.png", 

            "../Product/shorts/lightGray-Short/mens-fleece-shorts-heather-grey-front-611912e5e26c6.png",
                
            "../Product/shorts/lightGray-Short/mens-fleece-shorts-heather-grey-left-front-611912e5e2543.png",
                
            "../Product/shorts/white-Short/mens-fleece-shorts-white-front-611912e5e292e.png", 
            "../Product/shorts/white-Short/mens-fleece-shorts-white-left-front-611912e5e2796.png", 

            "../Product/shorts/navy-Short/all-over-print-mens-athletic-long-shorts-white-front-611916641c675.png",
                
            "../Product/shorts/navy-Short/all-over-print-mens-athletic-long-shorts-white-left-611916641c2ff.png",
                

            "../Product/shorts/white-Short/all-over-print-mens-athletic-long-shorts-white-front-611914ca43482.png",
                
            "../Product/shorts/white-Short/all-over-print-mens-athletic-long-shorts-white-front-611914ca431fa.png",
                

            "../Product/sweater/black-Sweater/unisex-crew-neck-sweatshirt-black-front-2-60e80d4dcdba2.png",
                
            "../Product/sweater/black-Sweater/mens-long-sleeve-shirt-black-left-front-60e80ed32c3e0.png",
                
            "../Product/sweater/white-sweater/mens-long-sleeve-shirt-white-front-60e812b79dd0f.png", 
            "../Product/sweater/white-sweater/mens-long-sleeve-shirt-white-front-60e812b79e02c.png", 
            "../Product/sweater/beige-Sweater/mens-long-sleeve-shirt-sand-front-60e812b79d219.png", 
            "../Product/sweater/beige-Sweater/mens-long-sleeve-shirt-sand-left-front-60e812b79d746.png",
                
            "../Product/sweater/red-Sweater/mens-long-sleeve-shirt-red-front-60e812b79cc39.png", 
            "../Product/sweater/red-Sweater/mens-long-sleeve-shirt-red-front-60e812b79caef.png", 
            "../Product/sweater/blue-Sweater/mens-long-sleeve-shirt-indigo-blue-left-front-60e80ed33176c.png",
                
            "../Product/sweater/blue-Sweater/mens-long-sleeve-shirt-indigo-blue-front-60e80ed3304df.png",
                
            "../Product/sweater/lightBlue-Sweater/mens-long-sleeve-shirt-light-blue-front-60e80ed332ab0.png",
                
            "../Product/sweater/lightBlue-Sweater/mens-long-sleeve-shirt-light-blue-front-60e80ed333a1a.png",
                
            "../Product/sweater/darkBlue-Sweater/mens-long-sleeve-shirt-royal-front-60e80ed32e698.png",
                
            "../Product/sweater/darkBlue-Sweater/mens-long-sleeve-shirt-royal-front-60e80ed32ddeb.png",
                
            "../Product/sweater/militaryGreen-Sweater/mens-long-sleeve-shirt-military-green-front-60e80ed32ef92.png",
                
            "../Product/sweater/militaryGreen-Sweater/mens-long-sleeve-shirt-military-green-front-60e80ed32f68d.png",
                
            "../Product/sweater/lightGray-Sweater/mens-long-sleeve-shirt-sport-grey-left-front-60e812b79d044.png",
                
            "../Product/sweater/lightGray-Sweater/mens-long-sleeve-shirt-sport-grey-front-60e812b79d12a.png",
                
            "../Product/sweater/navy-Sweater/mens-long-sleeve-shirt-navy-front-60e80ed32ce18.png", 
            "../Product/sweater/navy-Sweater/mens-long-sleeve-shirt-navy-front-60e80ed32ce18.png", 

            "../Product/sweater/white-sweater/unisex-crew-neck-sweatshirt-white-front-60e80cba6ef27.png",
                
            "../Product/sweater/white-sweater/unisex-crew-neck-sweatshirt-white-front-60e80cba6f73c.png",
                
            "../Product/sweater/black-Sweater/unisex-crew-neck-sweatshirt-black-front-60e80d4dcb3bd.png",
                
            "../Product/sweater/black-Sweater/unisex-crew-neck-sweatshirt-black-front-60e80d4dcd31f.png",
                

            "../Product/sweater/white-sweater/unisex-fleece-sweatshirt-white-front-2-6117dbba913f6.png",
                
            "../Product/sweater/white-sweater/unisex-fleece-sweatshirt-white-front-2-6117dbba912b4.png",
                
            "../Product/sweater/black-Sweater/unisex-fleece-sweatshirt-black-front-6117dbba90cc8.png", 
            "../Product/sweater/black-Sweater/unisex-fleece-sweatshirt-black-front-6117dbba90b5f.png", 

            "../Product/sweater/navy-Sweater/all-over-print-unisex-sweatshirt-white-left-front-6117db31d3cb6.png",
                
            "../Product/sweater/navy-Sweater/all-over-print-unisex-sweatshirt-white-front-6117db31d382e.png",
                

            "../Product/sweater/white-sweater/all-over-print-unisex-sweatshirt-white-right-front-6117db4ccd002.png",
                
            "../Product/sweater/white-sweater/all-over-print-unisex-sweatshirt-white-right-front-6117db4cccf2d.png",
                

            "../Product/sweater/white-sweater/unisex-crew-neck-sweatshirt-white-front-6117dcd64a513.png",
                
            "../Product/sweater/white-sweater/unisex-crew-neck-sweatshirt-white-front-60e80cba6f73c.png",
                
            "../Product/sweater/black-Sweater/unisex-crew-neck-sweatshirt-black-front-6117dcd64a289.png",
                
            "../Product/sweater/black-Sweater/unisex-crew-neck-sweatshirt-black-front-6117dcd64a03a.png",
                

            "../Product/teeShirt/black-Tee/unisex-staple-t-shirt-black-heather-front-610c171abfdfb.png",
                
            "../Product/teeShirt/black-Tee/unisex-staple-t-shirt-black-heather-left-front-610c171ac0027.png",
            "../Product/teeShirt/white-Tee/unisex-pocket-t-shirt-white-front-610c034560b3f.png", 
            "../Product/teeShirt/white-Tee/unisex-pocket-t-shirt-white-front-610c034560c0f.png", 
            "../Product/teeShirt/white-Tee/adult-quality-tee-white-front-60e814c22d2f0.png", 
            "../Product/teeShirt/white-Tee/adult-quality-tee-white-front-60e814c22d568.png", 
            "../Product/teeShirt/black-Tee/adult-quality-tee-black-front-2-60e8145b2fc6b.png", 
            "../Product/teeShirt/black-Tee/adult-quality-tee-black-front-60e8145b2fcdf.png", 
            "../Product/teeShirt/beige-Tee/adult-quality-tee-light-beige-front-60e814c22cfff.png", 
            "../Product/teeShirt/beige-Tee/adult-quality-tee-light-beige-front-60e814c22ce03.png", 
            "../Product/teeShirt/lightGray-Tee/adult-quality-tee-light-grey-front-2-60e8145b312ed.png",
            "../Product/teeShirt/lightGray-Tee/adult-quality-tee-light-grey-front-60e8145b3146b.png", 
            "../Product/teeShirt/white-Tee/unisex-pocket-t-shirt-white-front-610c034560b3f.png", 
            "../Product/teeShirt/white-Tee/unisex-pocket-t-shirt-white-zoomed-in-610c034560a74.png", 
            "../Product/teeShirt/black-Tee/unisex-pocket-t-shirt-black-front-610d2fbde7d7b.png", 
            "../Product/teeShirt/black-Tee/unisex-pocket-t-shirt-black-zoomed-in-610d2fbde7c02.png", 
            "../Product/teeShirt/black-Tee/unisex-basic-softstyle-t-shirt-black-front-6107e99e99083.png",
            "../Product/teeShirt/black-Tee/unisex-basic-softstyle-t-shirt-black-left-front-6107e99e98f17.png",
                
            "../Product/teeShirt/white-Tee/unisex-staple-t-shirt-white-front-610d3a2c58937.png", 
            "../Product/teeShirt/white-Tee/unisex-staple-t-shirt-white-front-610d3a2c586a1.png", 
            "../Product/teeShirt/white-Tee/mens-classic-t-shirt-white-front-610d449edb1ab.png", 
            "../Product/teeShirt/white-Tee/unisex-staple-t-shirt-white-front-610d46213ad3f.png", 
            "../Product/teeShirt/black-Tee/mens-classic-t-shirt-black-front-610d449edb4e8.png", 
            "../Product/teeShirt/black-Tee/unisex-staple-t-shirt-black-heather-right-front-610d46213abd8.png",
                
            "../Product/teeShirt/white-Tee/all-over-print-mens-crew-neck-t-shirt-white-back-610d40e2a3b07.png",
                
            "../Product/teeShirt/white-Tee/mens-classic-t-shirt-white-front-6107e5efd17ce.png", 
            "../Product/teeShirt/white-Tee/unisex-pocket-t-shirt-white-front-610c034560c0f.png", 
            "../Product/teeShirt/black-Tee/unisex-pocket-t-shirt-black-front-610d2fbde7d1d.png", 

            "../Product/trousers/white-Trousers/unisex-fleece-sweatpants-white-left-front-61192bd480654.png",
                
            "../Product/trousers/white-Trousers/unisex-fleece-sweatpants-white-left-front-61192bd480361.png",
            "../Product/trousers/black-Trousers/unisex-fleece-sweatpants-black-front-61192bc970724.png",
                
            "../Product/trousers/black-Trousers/unisex-fleece-sweatpants-black-front-61192bc970963.png",
                
            "../Product/trousers/lightGray-Trousers/unisex-fleece-sweatpants-carbon-grey-front-61192bd480050.png",
                
            "../Product/trousers/lightGray-Trousers/unisex-fleece-sweatpants-carbon-grey-front-61192bd47fe37.png",
                

            "../Product/trousers/white-Trousers/all-over-print-mens-leggings-white-right-61192da649e4e.png",
                
            "../Product/trousers/white-Trousers/all-over-print-mens-leggings-white-front-61192da649d19.png",
                

            "../Product/trousers/black-Trousers/unisex-slim-fit-joggers-black-front-61192ce66cf0f.png",
                
            "../Product/trousers/black-Trousers/unisex-slim-fit-joggers-black-front-61192ce66d147.png",
                

            "../Product/trousers/white-Trousers/all-over-print-mens-joggers-white-front-611e7a5e3a44a.png",
                
            "../Product/trousers/white-Trousers/all-over-print-mens-joggers-white-front-611e7a5e3a2ce.png"
)



