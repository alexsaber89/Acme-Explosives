"use strict";

$(document).ready(function() {
  console.log("jquery is ready");
  var container = $("#container");
  function getCategories() {
    return new Promise((resolve, reject) => {
      $.ajax({
        url: "../json/categories.json"
      }).done(function(data) {
        resolve(data);
        console.log(data);
      }).fail(function(xhr, status, error) {
        reject(error);
      });
    });
  }
  function getTypes() {
    return new Promise((resolve, reject) => {
      $.ajax({
        url: "../json/types.json"
      }).done(function(data) {
        resolve(data);
        console.log(data);
      }).fail(function(xhr, status, error) {
        reject(error);
      });
    });
  }
  function getProducts() {
    return new Promise((resolve, reject) => {
      $.ajax({
        url: "../json/products.json"
      }).done(function(data) {
        resolve(data);
        console.log(data);
      }).fail(function(xhr, status, error) {
        reject(error);
      });
    });
  }
  $(".dropdown-menu").children().click(function() {
    if (event.currentTarget.id === "fireworks") {
      getCategories().then(getTypes).then(getProducts);
    } else {
      console.log("demolition clicked");
    }
  });
});
