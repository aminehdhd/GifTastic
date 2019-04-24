$(document).ready(function() {
  $(".sports").click(function(event) {
    event.preventDefault();
    var sportSelector = $(this).text();
    console.log(sportSelector);
    $.ajax({
      url:
        "https://api.giphy.com/v1/gifs/search?q=" +
        sportSelector +
        "&api_key=agCE1OybCEZ4H4RCHDd0EMDshjT6ltQ4&limit=10",
      method: "get"
    }).done(function(response) {
      console.log(response.data);
      $("#imgs").empty()
      for (var i = 0; i < response.data.length; i++) {
        console.log(response.data[i].rating);
        console.log(response.data[i].images.fixed_width_still.url);
        var img = $("<img>");
        img.attr("src", response.data[i].images.fixed_width_still.url);
        $("#imgs").append(img);
      }
    });
  });
});
