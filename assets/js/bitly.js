$(document).ready(function() {
  var $out = $('#urlout');
  $out.val('');

  $('#mkurl').bind('click', function(e) {
    $.getJSON("https://api-ssl.bitly.com/v3/shorten?", { 
        format: "json",
        access_token: "b3939439e77a7e13c8b0799c0eec70a276deee99",
        longUrl: "http://127.0.0.1:1025/" + location.search + location.hash
      },
      function(response) {
        $out.val(response.data.url);
        $out.select();
      }).fail(function() { console.log(arguments); });
  });
});
