// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
/* global $ */

$("#search-button").click(function(){
    var search = "https://api.giphy.com/v1/gifs/search?q=" + $("input").val() + "&rating=pg&api_key=dc6zaTOxFJmzC";
    $.ajax({
        url: search,
        method: "GET",
        success: function(response) {
            console.log(response.data[0].images.original.url);
            $(".gallery").append("<img src='"+response.data[0].images.original.url+"'>");
        }
    }); 
});