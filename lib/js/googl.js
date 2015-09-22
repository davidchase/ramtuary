(function() {
    var $out = $('#urlout');
    $out.val('');

    $('#mkurl').bind('click', function() {
        $.ajax({
            url: "https://www.googleapis.com/urlshortener/v1/url?key=AIzaSyDhbAvT5JqkxFPkoeezJp19-S_mAJudxyk",
            type: "POST",
            dataType: "json",
            contentType: 'application/json; charset=utf-8',
            data: JSON.stringify({
                longUrl: "http://davidchase.github.io/ramtuary/" + location.hash
            })
        })
            .then(function(response) {
                $out.val(response.id);
                $out.select();
            })
            .fail(function() {
                console.log(arguments);
            });
    });
}());