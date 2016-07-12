var listSymbols = '`~!@#$%^&*(){}[]:\" \\\';<>?|-_+=,.\/';
var listLetters = 'abcdefghijklmnopqrstuvwxyz';
var listNumbers = '0123456789';

function k_combinations(set, k) {
    var i, j, combs, head, tailcombs;
    // There is no way to take e.g. sets of 5 elements from
    // a set of 4.
    if (k > set.length || k <= 0) {
        return [];
    }
    // K-sized set has only one K-sized subset.
    if (k == set.length) {
        return [set];
    }
    // There is N 1-sized subsets in a N-sized set.
    if (k == 1) {
        combs = [];
        for (i = 0; i < set.length; i++) {
            combs.push([set[i]]);
        }
        return combs;
    }
    combs = [];
    for (i = 0; i < set.length - k + 1; i++) {
        // head is a list that includes only our current element.
        head = set.slice(i, i + 1);
        // We take smaller combinations from the subsequent elements
        tailcombs = k_combinations(set.slice(i + 1), k - 1);
        // For each (k-1)-combination we join it with the current
        // and store it to the set of k-combinations.
        for (j = 0; j < tailcombs.length; j++) {
            combs.push(head.concat(tailcombs[j]));
        }
    }
    return combs;
}

function nextPermutation(array) {
    // Find non-increasing suffix
    var i = array.length - 1;
    while (i > 0 && array[i - 1] >= array[i]) i--;
    if (i <= 0) return false;
    // Find successor to pivot
    var j = array.length - 1;
    while (array[j] <= array[i - 1]) j--;
    var temp = array[i - 1];
    array[i - 1] = array[j];
    array[j] = temp;
    // Reverse suffix
    j = array.length - 1;
    while (i < j) {
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;
        i++;
        j--;
    }
    return true;
}

function toString(array) {
    var arrayStr = '';
    for (var i = 0; i < array.length; i++) {
        arrayStr += array[i];
    }
    return arrayStr;
}

function testing() {
    var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
        , combs = k_combinations(alphabet, 6)
        , found = false
        , password = document.getElementById('test').value
        , i = 0
        , start = performance.now()
        , a = document.getElementById('loader');
    for (i = 0; i < combs.length; i++) {
        if (found) {
            break;
        }
        do {
            if (password == toString(combs[i])) {
                console.log("password: " + password);
                console.log(toString(combs[i]));
                var end = performance.now();
                a.className = '';
                document.getElementById('result').innerHTML = "Found " + toString(combs[i]) + " in " + (end - start) / 1000 + " seconds!";
                found = true;
                break;
            }
        } while (nextPermutation(combs[i]));
    }
}
$(function () {
    $('#submit-button').click(function () {
        $('#loader').fadeToggle('fast', function () {
            var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
                , combs = k_combinations(alphabet, 6)
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
                    if (password == toString(combs[i])) {
                        console.log("password: " + password);
                        console.log(toString(combs[i]));
                        var end = $.now();
                        a.style.display = 'none';
                        document.getElementById('result').innerHTML = "Found " + toString(combs[i]) + " in " + (end - start) / 1000 + " seconds!";
                        found = true;
                        break;
                    }
                } while (nextPermutation(combs[i]));
            }
        });
    });
});
/*function guessPassword() {
    var password = document.getElementById('passwordTxt').value
        , i = 0
        , searchSpace = 0
        , hasSymbol = false
        , hasNumber = false
        , hasUpper = false
        , hasLower = false
        , character = ''
        , passwordGuess = '';

    allCombinations = 0;

    // If there's no password, set everything to 0.
    // Password isn't null, but an empty string?
    if (password == '') {

        document.getElementById('answer').innerHTML = '';
        document.getElementById('printSeconds').innerHTML = '';

    } else {
        // Determines what the password has in it.
        for (i; i < password.length; i++) {

            if (/[@~`!#$%\^&*+=\-\[\]\\';,/{}|\\": <>\?]/.test(password)) {
                hasSymbol = true;
            }

            character = password.charAt(i);

            if (!isNaN(character * 2) && character != ' ') {
                hasNumber = true;
            }

            if (character == character.toUpperCase() && character != ' ') {
                hasUpper = true;
            }

            if (character == character.toLowerCase() && character != ' ') {
                hasLower = true;
            }

        }


        allCombinations = Math.pow(searchSpace, password.length);

        // This is in seconds already.
        // Also assumes worst case.
        timeToCrackOnline = Math.pow(searchSpace, password.length) / rateOnline;
        timeToCrackOffline = Math.pow(searchSpace, password.length) / rateOffline;
        timeToCrackCloud = Math.pow(searchSpace, password.length) / rateCloud;

        document.getElementById('possibleCharacters').innerHTML = searchSpace;
        document.getElementById('searchSpace').innerHTML = numberWithCommas(allCombinations);

        document.getElementById('answer').innerHTML = passwordGuess;
        document.getElementById('printSeconds').innerHTML = convert(timeToCrack, units);
    }
}*/