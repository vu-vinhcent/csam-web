function toString(array) {
    var arrayStr = '';
    for (var i = 0; i < array.length; i++) {
        arrayStr += array[i];
    }
    return arrayStr;
}

$(function () {
    $('#submit-button').click(function () {
        $('#loader').fadeToggle('fast', function () {
            var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
                , combs = Combinatorics.baseN(alphabet, 5)
                , found = false
                , password = document.getElementById('test').value
                , i = 0
                , a = document.getElementById('loader')
                , start = $.now();
            
            for (i = 0; i < combs.length; i++) {
                if (found) {
                    break;
                }
                do {
                    if (password == toString(combs.nth(i))) {
                        var end = $.now();
                        a.style.display = 'none';
                        document.getElementById('result').innerHTML = "Found " + toString(combs.nth(i)) + " in " + (end - start) / 1000 + " seconds!";
                        found = true;
                        break;
                    }
                } while (combs.next());
            }
        });
    });
});