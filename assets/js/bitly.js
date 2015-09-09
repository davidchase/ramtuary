$(document).ready(function() {
  var $out = $('#urlout');
  $out.val('');

  $('#mkurl').bind('click', function(e) {
    $.getJSON("https://api-ssl.bitly.com/v3/shorten?", { 
        format: "json",
        access_token: "1cb9ba5d3ab7a6c0769617fb796f0be4bdd65b53",
        longUrl: "http://davidchase.github.io/ramtuary/" + location.search + location.hash
      },
      function(response) {
        $out.val(response.data.url);
        $out.select();
      }).fail(function() { console.log(arguments); });
  });
});
