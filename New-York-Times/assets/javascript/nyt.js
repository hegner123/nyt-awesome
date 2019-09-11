$(document).ready(function (){
  
  var searchTerm;
// var searchYear = "";
// var searchEndYear = "";
var numberOfRecords = "";




// var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=red&pud_date:=2019-07-19T07&api-key=AFlvZG0WQAGK0M8a8zXNmxv8ZkCfp7fq";
var results ="";
  
$("#search-btn").on("click", function (){
  $(".articles").empty();
  audioPlay();
  console.log("THIS");

  var searchTerm = $("#search-term").val();
  var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchTerm + "&api-key=AFlvZG0WQAGK0M8a8zXNmxv8ZkCfp7fq";
  $.ajax({
    url: queryURL,
    method: "GET"
  })
      .then(function(response) {
        var results = response.response.docs;
        
        
        for(i= 0 ;i<results.length;i++){
          var br = $("<br>");
          var article = $("<div>").addClass("article" + [i])
          article.text(results[i].snippet);
          article.prependTo(".articles");
          br.prependTo(".articles");

          searchTerm= "";
        }
      
      })
})



function audioPlay (){
  $('audio#story')[0].play();
}


$(".article")


}) 
  

// $("#search-term")
// $("#number-records")
// $("#start-year")
// $("#end-year")
// $("#search-btn")
// $("#clear-btn")


