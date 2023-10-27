/*Get items from local storage as a javscript object*/
const cartItem = JSON.parse(localStorage.getItem("items"));

/*calculate the latest total cart number (after deleted a item)*/
function cartNumbersUpdate() {
  if (cartItem != null) {
    let cartNum = JSON.parse(localStorage.getItem("cartNumbers"));
    cartNum = 0;
    for (let i = 0; i < cartItem.length; i++) {
      let itemNum = cartItem[i].cartNumbers;
      itemNum = parseInt(itemNum);
      cartNum += itemNum;
      cartNum = parseInt(cartNum);
    }

    localStorage.setItem("cartNumbers", cartNum);
  }
}
cartNumbersUpdate();

/*calculate total price od item in cart fuction*/
function updateCartPrice() {
  if (cartItem != null) {
    let totalPrice = 0;
    let deliveryFee = 10;

    for (let i = 0; i < cartItem.length; i++) {
      let price = cartItem[i].price;
      let itemNum = cartItem[i].cartNumbers;
      totalPrice += price * itemNum;
      totalPrice = Math.round(totalPrice * 100) / 100;
    }

    document.getElementsByClassName("totalPrices")[0].innerText = "";
    document.getElementsByClassName("totalPrices")[0].innerText =
      "RM" + totalPrice;
    document
      .getElementsByClassName("orderValue")[0]
      .getElementsByClassName("summaryPrices")[0].innerText = "";
    document
      .getElementsByClassName("orderValue")[0]
      .getElementsByClassName("summaryPrices")[0].innerText = "RM" + totalPrice;

    if (totalPrice < 100 && totalPrice != 0) {
      let subtotal = deliveryFee + totalPrice;
      subtotal = Math.round(subtotal * 100) / 100;

      document
        .getElementsByClassName("deliveryFee")[0]
        .getElementsByClassName("summaryPrices")[0].innerText = "";
      document
        .getElementsByClassName("deliveryFee")[0]
        .getElementsByClassName("summaryPrices")[0].innerText =
        "RM" + deliveryFee;
      document
        .getElementsByClassName("subtotal")[0]
        .getElementsByClassName("summaryPrices")[0].innerText = "";
      document
        .getElementsByClassName("subtotal")[0]
        .getElementsByClassName("summaryPrices")[0].innerText = "RM" + subtotal;
    } else {
      let subtotal = totalPrice;

      document
        .getElementsByClassName("deliveryFee")[0]
        .getElementsByClassName("summaryPrices")[0].innerText = "";
      document
        .getElementsByClassName("deliveryFee")[0]
        .getElementsByClassName("summaryPrices")[0].innerText = "RM" + 0;
      document
        .getElementsByClassName("subtotal")[0]
        .getElementsByClassName("summaryPrices")[0].innerText = "";
      document
        .getElementsByClassName("subtotal")[0]
        .getElementsByClassName("summaryPrices")[0].innerText = "RM" + subtotal;
    }
  }
}

/*update item quantity and price*/
function updateItemQty() {
  var qty = document.getElementsByClassName("itemQuantity");

  for (let i = 0; i < qty.length; i++) {
    let items = [];

    qty[i].addEventListener("change", function (e) {
      if (e.target.value <= 0 || e.target.value == NaN) {
        cartItem.map((data) => {
          if (data == cartItem[i]) {
            data.cartNumbers = 1;
          }
        });
        items.push(JSON.stringify(cartItem));
      } else {
        cartItem.map((data) => {
          if (data == cartItem[i]) {
            data.cartNumbers = e.target.value;
          }
        });
        items.push(JSON.stringify(cartItem));
      }
      localStorage.setItem("items", items);
      window.location.reload();
    });
  }
}

/*remove function to the remove button*/
let removeItemBtn = document.getElementsByClassName("removeItemBtn");

function removeItem() {
  for (let i = 0; i < removeItemBtn.length; i++) {
    removeItemBtn[i].addEventListener("click", function (e) {
      if (confirm("Are you sure to remove this product?"))
        removeItemInLocalStorage(e);
    });
  }
}

function removeItemInLocalStorage(e) {
  let items = [];

  cartItem.map((data) => {
    let cartItemRow = e.target.parentElement.parentElement;

    if (
      data.imgSrc !== cartItemRow.children[0].children[0].src ||
      data.size !== cartItemRow.children[1].children[1].innerText ||
      data.name + "(" + data.color + ")" !==
        cartItemRow.children[1].children[0].innerText
    ) {
      items.push(data);
    }
  });
  localStorage.setItem("items", JSON.stringify(items));
  window.location.reload();
}

/*display the item selected at product page*/
function displayCart() {
  let productContainer = document.getElementsByClassName("cartItemWrapper")[0];

  if (cartItem == null || cartItem.length == 0) {
    document.getElementsByClassName("cartWrapper")[0].innerHTML = "";

    document.getElementsByClassName("cartWrapper")[0].innerHTML += `
        <span>Shopping Cart</span>
        <div class="emptyCart">
            <div><img src="images/emptyCart.png">Your cart is empty now...</div>
        </div>
        <div class="shopping-btn">
            <a href="index.html">
                <button>Start Shopping now</button>
            </a>
        </div>
        <div class="rmd-product">
            <div>RECOMMENDED</div>
            <div class="slider-container">
                <div class="left-slider-icon" onclick="plusDivs(-4)">
                    <div class="icon fas fa-chevron-left"></div>
                </div>
                <div class="slider-products">
                    <div class="slider-product-transition">
                        <div class="slider-product">
                            <a href="category-accessories/mask.html">
                                <div class="product-img">
                                    <img src="Product/accessories/all-over-print-premium-face-mask-white-front-610f63226dc50.png">
                                </div>
                                <div class="product-info">
                                    <div class="product-name">OutModern Mask</div>
                                    <div class="product-price">RM29.99</div>
                                </div>
                            </a>
                        </div>
                        <div class="slider-product">
                            <a href="category-accessories/tote.html">
                                <div class="product-img">
                                    <img src="Product/accessories/all-over-print-tote-black-15x15-mockup-610f574e11d24.png">
                                </div>
                                <div class="product-info">
                                    <div class="product-name">OutModern Tote Bag</div>
                                    <div class="product-price">RM149.99</div>
                                </div>
                            </a>
                        </div>
                        <div class="slider-product">
                            <a href="category-hoodie/championH.html">
                                <div class="product-img">
                                    <img src="Product/hoodies/black-Hoodie/unisex-champion-tie-dye-hoodie-black-front-2-6116819deddd3.png">
                                </div>
                                <div class="product-info">
                                    <div class="product-name">OutModern Champion Hoodies</div>
                                    <div class="product-price">RM149.99</div>
                                </div>
                            </a>
                        </div>
                        <div class="slider-product">
                            <a href="category-hoodie/specialH.html">
                                <div class="product-img">
                                    <img src="Product/hoodies/white-Hoodie/all-over-print-unisex-hoodie-white-left-61167c6b9a97e.png">
                                </div>
                                <div class="product-info">
                                    <div class="product-name">OutModern Special Hoodies</div>
                                    <div class="product-price">RM119.99</div>
                                </div>
                            </a>
                        </div>
                        <div class="slider-product">
                            <a href="category-short/classicSh.html">
                                <div class="product-img">
                                    <img src="Product/shorts/white-Short/all-over-print-mens-athletic-long-shorts-white-front-611911368fc76.png">
                                </div>
                                <div class="product-info">
                                    <div class="product-name">OutModern Classic Shorts</div>
                                    <div class="product-price">RM49.99</div>
                                </div>
                            </a>
                        </div>
                        <div class="slider-product">
                            <a href="category-short/bikerSh.html">
                                <div class="product-img">
                                    <img src="Product/shorts/white-Short/all-over-print-biker-shorts-white-front-61191174a4d1a.png">
                                </div>
                                <div class="product-info">
                                    <div class="product-name">OutModern Biker Shorts</div>
                                    <div class="product-price">RM69.99</div>
                                </div>
                            </a>
                        </div>
                        <div class="slider-product">
                            <a href="category-sweater/classicSw.html">
                                <div class="product-img">
                                    <img src="Product/sweater/white-sweater/mens-long-sleeve-shirt-white-front-60e812b79dd0f.png">
                                </div>
                                <div class="product-info">
                                    <div class="product-name">OutModern Classic Sweater</div>
                                    <div class="product-price">RM49.99</div>
                                </div>
                            </a>
                        </div>
                        <div class="slider-product">
                            <a href="category-sweater/logoSw.html">
                                <div class="product-img">
                                    <img src="Product/sweater/white-sweater/unisex-crew-neck-sweatshirt-white-front-60e80cba6ef27.png">
                                </div>
                                <div class="product-info">
                                    <div class="product-name">OutModern Logo Sweater</div>
                                    <div class="product-price">RM39.99</div>
                                </div>
                            </a>
                        </div>
                        <div class="slider-product">
                            <a href="category-tee/logoT.html">
                                <div class="product-img">
                                    <img src="Product/teeShirt/white-Tee/mens-classic-t-shirt-white-front-6107e5efd18c9.png">
                                </div>
                                <div class="product-info">
                                    <div class="product-name">OutModern Logo T-Shirt</div>
                                    <div class="product-price">RM49.99</div>
                                </div>
                            </a>
                        </div>
                        <div class="slider-product">
                            <a href="category-tee/classicT.html">
                                <div class="product-img">
                                    <img src="Product/teeShirt/white-Tee/adult-quality-tee-white-front-60e814c22d2f0.png">
                                </div>
                                <div class="product-info">
                                    <div class="product-name">OutModern Classic T-Shirt</div>
                                    <div class="product-price">RM59.99</div>
                                </div>
                            </a>
                        </div>
                        <div class="slider-product">
                            <a href="category-trouser/sweatpants.html">
                                <div class="product-img">
                                    <img src="Product/trousers/white-Trousers/unisex-fleece-sweatpants-white-left-front-61192bd480361.png">
                                </div>
                                <div class="product-info">
                                    <div class="product-name">OutModern Sweatpants</div>
                                    <div class="product-price">RM59.99</div>
                                </div>
                            </a>
                        </div>
                        <div class="slider-product">
                            <a href="category-trouser/legging.html">
                                <div class="product-img">
                                    <img src="Product/trousers/white-Trousers/all-over-print-mens-leggings-white-right-61192da649e4e.png">
                                </div>
                                <div class="product-info">
                                    <div class="product-name">OutModern Legging</div>
                                    <div class="product-price">RM49.99</div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="right-slider-icon" onclick="plusDivs(4)">
                    <div class="icon fas fa-chevron-right"></div>
                </div>
            </div>
        </div>

        `;
  }

  if (cartItem && productContainer) {
    productContainer.innerHTML = " ";

    if (cartItem.length != 0) {
      cartItem.map((item) => {
        productContainer.innerHTML += `<tr class="cartItem">
                                    <td class="imgContainer">
                                        <img class="cartImg" src="${
                                          item.imgSrc
                                        }">
                                    </td>
                                    <td class="informationContainer" style="vertical-align: top;">
                                        <div class="cartName">${
                                          item.name + "(" + item.color + ")"
                                        }</div>
                                        <div class="itemSize">${item.size}</div>
                                    </td>
                                    <td class="cartPrice" data-label="price">RM${
                                      item.price
                                    }</td>
                                    <td class="itemQuantityContainer" data-label="qty">
                                        <input  class="itemQuantity" type="number" value="${
                                          item.cartNumbers
                                        }">         
                                    </td>
                                    <td class="rowTotalPrice" data-label="totalPrice">RM${
                                      Math.round(
                                        item.price * item.cartNumbers * 100
                                      ) / 100
                                    }</td>
                                    <td class="removeBtnContainer" data-label="removeBtn">
                                        <button class="fas fa-trash-alt removeItemBtn"></button>
                                    </td>
                                    </tr>`;
      });
      updateCartPrice();
      updateItemQty();
      removeItem();
    }
  }
}

displayCart();

function toggleGame() {
  let game = document.querySelector(".game-container");
  if (game.style.visibility === "visible") {
    game.style.visibility = "hidden";
  } else {
    game.style.visibility = "visible";
  }
} 

function setWin() {
  document.querySelector(".game-success").style.display = "flex"; 
  document.querySelector(".game-title").style.display = "none";
  document.querySelector(".game").style.display = "none";
  document.querySelector(".close-game").style.top = "-35%";
}

function setLose() {
  document.querySelector(".game-lose").style.opacity = "1";
  setTimeout(function () {
    document.querySelector(".game-lose").style.opacity = "0";
  }, 1000);
}

function copy(n) {
  let promoCodeInputs = document.querySelectorAll(".promo-code-input");
  let copyMsg = document.querySelector("#copy-success");

  promoCodeInputs[n].removeAttribute("disabled");
  promoCodeInputs[n].select();
  promoCodeInputs[n].setSelectionRange(0, 99999);
  document.execCommand("copy");
  promoCodeInputs[n].disabled = "true";
  document.getSelection().removeAllRanges();
  copyMsg.innerText = "Copied '" + promoCodeInputs[n].value + "'";
  copyMsg.style.display = "block";
  copyMsg.style.opacity = "1";
  setTimeout(function () {
    copyMsg.style.opacity = "0";
  }, 1000);
}
