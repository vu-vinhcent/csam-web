function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function convert(timeToCrack, units) {
    if (timeToCrack >= 31104000) {
        timeToCrack = timeToCrack / 31104000;
        units = 'year(s)';
    } else if (timeToCrack >= 2592000) {
        timeToCrack = timeToCrack / 2592000;
        units = 'month(s)';
    } else if (timeToCrack >= 86400) {
        timeToCrack = timeToCrack / 86400;
        units = 'day(s)';
    } else if (timeToCrack >= 360) {
        timeToCrack = timeToCrack / 360;
        units = 'hour(s)';
    } else if (timeToCrack >= 60) {
        timeToCrack = timeToCrack / 60;
        units = 'minute(s)';
    }

    if (timeToCrack < 1) {
        timeToCrack = timeToCrack.toFixed(7);
    } else {
        timeToCrack = numberWithCommas(Math.round(timeToCrack));
    }

    timeToCrack = timeToCrack + ' ' + units;

    return timeToCrack;
}

function guessPassword() {
    var password = document.getElementById('passwordTxt').value
        , i = 0
        , searchSpace = 0
        , hasSymbol = false
        , hasNumber = false
        , hasUpper = false
        , hasLower = false
        , character = ''
        , allCombinations = 0
        , timeToCrackOnline = 0
        , timeToCrackOffline = 0
        , timeToCrackCloud = 0
        , units = 'second(s)'
        , rateOnline = 1000
        , rateOffline = 100000000000
        , rateCloud = 100000000000000;

    allCombinations = 0;

    // If there's no password, set everything to 0.
    // Password isn't null, but an empty string?
    if (password == '') {

        // Really need to just make a list for this...
        // Or maybe add a class to all of these?

        document.getElementById('possibleCharacters').innerHTML = '';
        document.getElementById('searchSpace').innerHTML = '';

        document.getElementById('has-symbol').innerHTML = '';
        document.getElementById('has-digit').innerHTML = '';
        document.getElementById('has-lower').innerHTML = '';
        document.getElementById('has-upper').innerHTML = '';
        document.getElementById('has-upper').innerHTML = '';

        document.getElementsByClassName('online').innerHTML = '';
        document.getElementsByClassName('offline').innerHTML = '';
        document.getElementsByClassName('cloud').innerHTML = '';

        document.getElementById('printDictSize').innerHTML = '';
        document.getElementById('result').innerHTML = '';

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

        // Definitely need to do something about below...

        var temp = document.getElementById('has-symbol');
        if (hasSymbol == true) {
            searchSpace += 33;
            temp.innerHTML = '&#10004;';
            temp.className = 'text-xs-center green';
        } else {
            temp.innerHTML = '&#10008;';
            temp.className = 'text-xs-center red';
        }

        temp = document.getElementById('has-lower');
        if (hasLower == true) {
            searchSpace += 26;
            temp.innerHTML = '&#10004;';
            temp.className = 'text-xs-center green';
        } else {
            temp.innerHTML = '&#10008;';
            temp.className = 'text-xs-center red';
        }

        temp = document.getElementById('has-upper');
        if (hasUpper == true) {
            searchSpace += 26;
            temp.innerHTML = '&#10004;';
            temp.className = 'text-xs-center green';
        } else {
            temp.innerHTML = '&#10008;';
            temp.className = 'text-xs-center red';
        }

        temp = document.getElementById('has-digit');
        if (hasNumber == true) {
            searchSpace += 10;
            temp.innerHTML = '&#10004;';
            temp.className = 'text-xs-center green';
        } else {
            temp.innerHTML = '&#10008;';
            temp.className = 'text-xs-center red';
        }

        temp = document.getElementById('has-eight');
        if (password.length >= 8) {
            temp.innerHTML = '&#10004;';
            temp.className = 'text-xs-center green';
        } else {
            temp.innerHTML = '&#10008;';
            temp.className = 'text-xs-center red';
        }

        allCombinations = Math.pow(searchSpace, password.length);

        // This is in seconds already.
        // Also assumes worst case.
        timeToCrackOnline = Math.pow(searchSpace, password.length) / rateOnline;
        timeToCrackOffline = Math.pow(searchSpace, password.length) / rateOffline;
        timeToCrackCloud = Math.pow(searchSpace, password.length) / rateCloud;

        document.getElementById('possibleCharacters').innerHTML = searchSpace;
        document.getElementById('searchSpace').innerHTML = numberWithCommas(allCombinations);

        document.getElementById('online').innerHTML = convert(timeToCrackOnline, units);
        document.getElementById('offline').innerHTML = convert(timeToCrackOffline, units);
        document.getElementById('cloud').innerHTML = convert(timeToCrackCloud, units);
    }
}