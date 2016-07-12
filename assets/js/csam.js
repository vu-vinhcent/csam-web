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
});
