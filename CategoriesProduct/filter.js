/*function for left filter drop down list (to drop down the list)  <pc webpage> */
//open sort by list
function openSortList() {
  var x = document.getElementById("leftFilterSortBy");
  if (x.style.display === "none") {
    x.style.display = "inline-block";
  } else {
    x.style.display = "none";
  }
}
//open price list
function openPriceList() {
  var x = document.getElementById("leftFilterPrice");
  if (x.style.display === "none") {
    x.style.display = "inline-block";
  } else {
    x.style.display = "none";
  }
}

// open & close mobile left filter   <MOBILE>
//open filter
function openFilter() {
  document.getElementById("mob_filter").style.width = "65%";
  document.getElementsByTagName("BODY")[0].style.overflow = "auto";
}
//close filter
function closeFilter() {
  document.getElementById("mob_filter").style.width = "0%";
  document.getElementsByTagName("BODY")[0].style.overflow = "auto";
}

// drop down list for mobile left filter   <MOBILE>
//open sort by list
function openMobSortList() {
  var x = document.getElementById("mob_leftFilterSortBy");
  if (x.style.display === "none") {
    x.style.display = "inline-block";
  } else {
    x.style.display = "none";
  }
}

//open price list
function openMobPriceList() {
  var x = document.getElementById("mob_leftFilterPrice");
  if (x.style.display === "none") {
    x.style.display = "inline-block";
  } else {
    x.style.display = "none";
  }
}

/*invert icon when onclicked*/
function invertIcon(x) {
  x.childNodes[1].classList.toggle("fa-caret-up");
}

$(document).ready(function () {

  //search wrapper
  const searchWrapper = document.getElementsByClassName('search-results-wrapper')[0];

  /*checked both smaller width filder and bigger width filter radio button while onclick
  and sorting function */

  //sort item in ascending order function
  function $sorted_items(selector, attrName) {
    return $(
      $(selector).toArray().sort(function (a, b) {

        var aVal = parseInt(a.getAttribute(attrName)),
          bVal = parseInt(b.getAttribute(attrName));

        return aVal - bVal;
      })

    );
  };

  //sort item in descending order function
  function $sorted_items_des(selector, attrName) {
    return $(
      $(selector).toArray().sort(function (a, b) {

        var aVal = parseInt(a.getAttribute(attrName)),
          bVal = parseInt(b.getAttribute(attrName));

        return bVal - aVal;

      })
    );
  };

  /* SORT BY FILTER */

  //recommended

  $(".rmd").click(function () {
    if ($("#mob_rmd").is(":checked")) {

      //check another radio button in web pc filter
      $("#rmd").prop("checked", true);

      //sort by data order
      $sorted_items(".productListing .productItem", "data-order");

      //append the list that has sorted
      $(".productListing").html($sorted_items(".productListing .productItem", "data-order"));

      closeFilter();

    } else if ($("#rmd").is(":checked")) {

      //check another radio button in mobile filter
      $("#mob_rmd").prop("checked", true);

      //sort by data order
      //append the list that has sorted
      $(".productListing").html($sorted_items(".productListing .productItem", "data-order"));
    }
  });

  //lowest price
  $(".lowestPrice").click(function () {

    if ($("#mob_lowestPrice").is(":checked")) {

      //check another radio button in web pc filter
      $("#lowestPrice").prop("checked", true);

      //sort by price (lower to higher)
      //append the list that has sorted
      $(".productListing").html($sorted_items(".productListing .productItem", "data-price"));

      closeFilter();

    } else if ($("#lowestPrice").is(":checked")) {

      //check another radio button in mobile filter
      $("#mob_lowestPrice").prop("checked", true);

      //sort by price (lower to higher)
      //append the list that has sorted
      $(".productListing").html($sorted_items(".productListing .productItem", "data-price"));

    }
  });

  //highest price
  $(".highestPrice").click(function () {
    if ($("#mob_highestPrice").is(":checked")) {

      //check another radio button in web pc filter
      $("#highestPrice").prop("checked", true);

      //sort by price (higher to lower)
      //append the list that has sorted
      $(".productListing").html($sorted_items_des(".productListing .productItem", "data-price"));

      closeFilter();

    } else if ($("#highestPrice").is(":checked")) {

      //check another radio button in mobile filter
      $("#mob_highestPrice").prop("checked", true);

      //sort by price (higher to lower)
      //append the list that has sorted
      $(".productListing").html($sorted_items_des(".productListing .productItem", "data-price"));
    }
  });

  /*  Price filter  */

  /* BELOW 150 */

  $(".below150").click(function () {

    if ($("#mob_below150").is(":checked")) {

      //check the another filter
      //check the another filter
      $("#below150").prop("checked", true);

      //show the class below rm150
      $(".productBelow150").show();
      $(".productBelow100").show();
      $(".productBelow50").show();

      //for search function
      if (searchWrapper) {
        SearchFunction();
        noProduct();
      }

      //close filter
      closeFilter();

    } else if ($("#below150").is(":checked")) {

      //check the mob filter
      $("#mob_below150").prop("checked", true);

      //show the class below rm150
      $(".productBelow150").show();
      $(".productBelow100").show();
      $(".productBelow50").show();

      //for search function
      if (searchWrapper) {
        SearchFunction();
        noProduct();
      }
    }
  });

  /* BELOW 100*/

  $(".below100").click(function () {

    if ($("#mob_below100").is(":checked")) {

      //check the another filter
      $("#below100").prop("checked", true);

      //show the class price below 100
      $(".productBelow100").show();
      $(".productBelow50").show();

      if (searchWrapper) SearchFunction();

      //hide class above 100
      $(".productBelow150").hide();

      if (searchWrapper) noProduct();

      closeFilter();

    } else if ($("#below100").is(":checked")) {

      //check the another filter
      $("#mob_below100").prop("checked", true);

      //show the class price below 100
      $(".productBelow100").show();
      $(".productBelow50").show();

      //for search function
      if (searchWrapper) SearchFunction();

      //hide class above 100
      $(".productBelow150").hide();

      //for search function
      if (searchWrapper) noProduct();
    }
  });

  /* BELOW 50 */

  $(".below50").click(function () {
    if ($("#mob_below50").is(":checked")) {

      //check the another filter
      $("#below50").prop("checked", true);

      //show the class below 50
      $(".productBelow50").show();

      //for search function
      if (searchWrapper) SearchFunction();

      //hide the class above 50
      $(".productBelow150").hide();
      $(".productBelow100").hide();

      //for search function
      if (searchWrapper) noProduct();

      closeFilter();

    } else if ($("#below50").is(":checked")) {

      //check the another filter
      $("#mob_below50").prop("checked", true);

      //show the class below 50
      $(".productBelow50").show();

      //for search function
      if (searchWrapper) SearchFunction();

      //hide the class above 50
      $(".productBelow150").hide();
      $(".productBelow100").hide();

      //for search function
      if (searchWrapper) noProduct();
    }
  });
});

