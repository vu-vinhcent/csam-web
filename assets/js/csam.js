$(document).ready(function () {
    $.ajax({
        url: 'http://d2hqmzmqawf6yu.cloudfront.net/assets/files/' + 'basicDictionary.txt'
        , async: true
        , cache: true
        , dataType: 'text'
        , success: function (data) {
            dict = data;

            dictionary = dict.split('\n');
        }
    });

    $(".email-hover").click(function () {
        $(this).toggleClass('email-selected');
    });
    
    $('#clickClick').click(function () {
        $('[data-toggle="popover"]').popover('show').toggleClass('email-selected');
    });
});
