// Manipulate document.title
var setTitle = document.getElementsByClassName("search-results-wrapper")[0]
  .children[0].innerText;

document.title =
  "Search - " +
  setTitle.slice(setTitle.lastIndexOf(":") + 1).replace(/['"]+/g, "");


/*apologise when the item propmt by users is unavailable*/
function noProduct() {
  let productItem = document.getElementsByClassName("productItem");
  var x = 0;

  /*get number of product is display="none"*/
  for (let i = 0; i < productItem.length; i++) {
    let displayStyle = window
      .getComputedStyle(productItem[i], null)
      .getPropertyValue("display");
    if (displayStyle == "none") {
      x++;
    }
  }

  /*when class= 'unavailableProduct' is null*/
  if (document.getElementsByClassName("unavailableProduct")[0] == null) {
    /*create div with class = 'unavailableProduct' when no product available*/
    if (productItem.length == 0 || x == productItem.length) {
      let resultsWrapper = document.getElementsByClassName(
        "search-results-wrapper"
      )[0];
      let div = document.createElement("div");
      div.classList.add("unavailableProduct");
      resultsWrapper.appendChild(div);

      /*inner html with apologise*/
      document.getElementsByClassName("unavailableProduct")[0].innerHTML =
        "\"Sorry, we do not have this product yet <i class='far fa-frown'></i>\" <br>" +
        '"Contact Us to make us better!"';
    }
  } else {
    /*remove the div with class = 'unavailableProduct' when has product available*/
    if (!(productItem.length == 0 || x == productItem.length)) {
      document.getElementsByClassName("unavailableProduct")[0].remove();
    }
  }
}

/*function for searchbar*/
function SearchFunction() {
  if (document.getElementsByClassName("search-results-wrapper")[0]) {
    /*display what the user searched*/
    let searchResults = document.getElementsByClassName(
      "search-results-wrapper"
    )[0].children[0];

    /*replace all the '+' in the txt with a space*/
    searchResults.innerHTML =
      'Search results for : <b><i>"' +
      window.location.search.slice(8).replaceAll("+", " ") +
      '"</i></b>';

    /*show the produt that user search*/
    var input, filter, product, i;

    input = window.location.search.slice(8).replaceAll("+", " ");
    filter = input.toUpperCase();
    product = document.getElementsByClassName("productItem");

    /*remove the product from list when not match with the user's prompt*/
    for (i = product.length - 1; i >= 0; i--) {
      let productName = product[i].children[2].children[0].innerText;

      if (productName.toUpperCase().indexOf(filter) <= -1) {
        product[i].remove();
      }
    }
  }
}
