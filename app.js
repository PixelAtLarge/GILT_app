$(document).ready(function(){
  $("#search-term").submit(function(event){
    event.preventDefault();
    var searchTerm = $("#query").val();
    var store = $(".store").children().filter(":selected").val();
    var color = $(".color").children().filter(":selected").val();
    
    $.getJSON("https://api.gilt.com/v1/products?q=" + searchTerm + "&color=" + color + "&store=" + store + "&apikey=20978ebabf26d09eacb8acdccad480e22f00018e013df0a44a2c1dee298d62a7", function(data){
      var products = data.products;
        products.forEach(function(product){
          if (product.url != undefined) {
            var html = "";
            html += "<li><img src='" + product.image_urls['300x400'][0].url + "'><a href='" + product.url + "''><p class='brand'>" + product.brand + "</p><p class='name'>" + product.name + "</p></a></li>";
            $(".results").prepend(html);
          } 
        });
        $("body").css('background-color', '#ffffff');
        $(".parameters").hide();
        $("#search-results, .new_search").show();
    });
  });
  
  $('#restartButton').click(function(){
    newSearch();
  }); 

  function newSearch() {
    location.reload();
  }

});
