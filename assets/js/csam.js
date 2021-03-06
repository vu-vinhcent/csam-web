function checkProgress() {
    console.log(document.cookie);

    var pDone = document.cookie.replace(/(?:(?:^|.*;\s*)p\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    var seDone = document.cookie.replace(/(?:(?:^|.*;\s*)se\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    var bsDone = document.cookie.replace(/(?:(?:^|.*;\s*)bs\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    var msDone = document.cookie.replace(/(?:(?:^|.*;\s*)ms\s*\=\s*([^;]*).*$)|^.*$/, "$1");

    if (pDone == "true") {
        $("#p-card").toggleClass("card-success-outline");
        $("#p-title").append('<span class="green"> &#10004; </span>')
    }

    if (seDone == "true") {
        $("#se-card").toggleClass("card-success-outline");
        $("#se-title").append('<span class="green"> &#10004; </span>')
    }

    if (bsDone == "true") {
        $("#bs-card").toggleClass("card-success-outline");
        $("#bs-title").append('<span class="green"> &#10004; </span>')
    }

    if (msDone == "true") {
        $("#ms-card").toggleClass("card-success-outline");
        $("#ms-title").append('<span class="green"> &#10004; </span>')
    }
}

function checkQuestion1() {
    if ($('input[name=question1]:checked').val() == 'true') {
        $("#q1-check").replaceWith('<span id="q1-check" class="question-space green"> &#10004; </span>');
    } else {
        $("#q1-check").replaceWith('<span id="q1-check" class="question-space red"> &#10008; </span>');
    }
}

function checkQuestion2() {
    if ($('input[name=question2]:checked').val() == 'true') {
        $("#q2-check").replaceWith('<span id="q2-check" class="question-space green"> &#10004; </span>');
    } else {
        $("#q2-check").replaceWith('<span id="q2-check" class="question-space red"> &#10008; </span>');
    }
}

function changeSrc(element) {
    var next = '';
    var imgNum = element.src.split('/');

    if (element.id == 'chrome-extension-img') {
        if (imgNum[6] == 'step1.png') {
            next = 'step2.png';
        } else if (imgNum[6] == 'step2.png') {
            next = 'step3.png';
        } else if (imgNum[6] == 'step3.png') {
            next = 'step1.png';
        }

        imgNum[6]
        element.src = 'assets/images/extensions-chrome/' + next;
    }

    if (element.id == 'firefox-extension-img') {
        if (imgNum[6] == 'step1.png') {
            next = 'step2.png';
        } else if (imgNum[6] == 'step2.png') {
            next = 'step3.png';
        } else if (imgNum[6] == 'step3.png') {
            next = 'step1.png';
        }

        imgNum[6]
        element.src = 'assets/images/extensions-firefox/' + next;
    }

    if (element.id == 'ie-extension-img') {
        if (imgNum[6] == 'step1.png') {
            next = 'step2.png';
        } else if (imgNum[6] == 'step2.png') {
            next = 'step3.png';
        } else if (imgNum[6] == 'step3.png') {
            next = 'step4.png';
        } else if (imgNum[6] == 'step4.png') {
            next = 'step1.png';
        }

        imgNum[6]
        element.src = 'assets/images/extensions-ie/' + next;
    }

    if (element.id == 'chrome-popups-img') {
        if (imgNum[6] == 'step1.png') {
            next = 'step2.png';
        } else if (imgNum[6] == 'step2.png') {
            next = 'step3.png';
        } else if (imgNum[6] == 'step3.png') {
            next = 'step4.png';
        } else if (imgNum[6] == 'step4.png') {
            next = 'step5.png';
        } else if (imgNum[6] == 'step5.png') {
            next = 'step1.png';
        }

        imgNum[6]
        element.src = 'assets/images/popups-chrome/' + next;
    }

    if (element.id == 'firefox-popups-img') {
        if (imgNum[6] == 'step1.png') {
            next = 'step2.png';
        } else if (imgNum[6] == 'step2.png') {
            next = 'step3.png';
        } else if (imgNum[6] == 'step3.png') {
            next = 'step4.png';
        } else if (imgNum[6] == 'step4.png') {
            next = 'step1.png';
        }

        imgNum[6]
        element.src = 'assets/images/popups-firefox/' + next;
    }

    if (element.id == 'ie-popups-img') {
        if (imgNum[6] == 'step1.png') {
            next = 'step2.png';
        } else if (imgNum[6] == 'step2.png') {
            next = 'step3.png';
        } else if (imgNum[6] == 'step3.png') {
            next = 'step4.png';
        } else if (imgNum[6] == 'step4.png') {
            next = 'step1.png';
        }

        imgNum[6]
        element.src = 'assets/images/popups-ie/' + next;
    }
}

function checkQuiz() {
    var numCorrect = 0;

    if ($('input[name=question1]:checked').val() == 'true') {
        $("#q1-check").replaceWith('<span id="q1-check" class="question-space green"> &#10004; </span>');
        numCorrect++;
    } else {
        $("#q1-check").replaceWith('<span id="q1-check" class="question-space red"> &#10008; </span>');
    }

    if ($('input[name=question2]:checked').val() == 'true') {
        $("#q2-check").replaceWith('<span id="q2-check" class="question-space green"> &#10004; </span>');
        numCorrect++;
    } else {
        $("#q2-check").replaceWith('<span id="q2-check" class="question-space red"> &#10008; </span>');
    }

    if (numCorrect == 2) {
        var part1 = '<a id="';
        var part2 = '" class="btn btn-primary btn-lg next" href="index.html" role="button" onclick="checkQuestion(this)"> Start a new module! </a>';

        if ($('title').text().indexOf('Password') >= 0) {
            $('.next').replaceWith(part1 + 'p' + part2);
        }

        if ($('title').text().indexOf('Browser') >= 0) {
            $('.next').replaceWith(part1 + 'bs' + part2);
        }

        if ($('title').text().indexOf('Social') >= 0) {
            $('.next').replaceWith(part1 + 'se' + part2);
        }

        if ($('title').text().indexOf('Mobile') >= 0) {
            $('.next').replaceWith(part1 + 'ms' + part2);
        }
    } else {
        var part3 = '<a class="btn btn-primary btn-lg next" href="';
        var part4 = '" role="button"> Back to the module! </a>';

        if ($('title').text().indexOf('Password') >= 0) {
            console.log(part3 + 'passwords.html' + part4);
            $('.next').replaceWith(part3 + 'passwords.html' + part4);
        }

        if ($('title').text().indexOf('Browser') >= 0) {
            $('.next').replaceWith(part3 + 'browsersec.html' + part4);
        }

        if ($('title').text().indexOf('Social') >= 0) {
            $('.next').replaceWith(part3 + 'socialeng.html' + part4);
        }

        if ($('title').text().indexOf('Mobile') >= 0) {
            $('.next').replaceWith(part3 + 'mobilesec.html' + part4);
        }
    }
}

function checkQuestion(element) {
    document.cookie = element.id + "=true;";
}

function moveSideNav() {
    var $fixedElement = $('#sidebar');
    var $contentContainer = $("#content-container");
    var vTop = $fixedElement.offset().top - parseFloat($fixedElement.css('margin-top').replace(/auto/, 0));
    var y = $(this).scrollTop() * 2;

    if (y >= vTop) {
        $fixedElement.addClass("fixed");
        $fixedElement.css('width', $contentContainer.width() * .15);
    } else {
        $fixedElement.removeClass("fixed");
    }
}

$(document).ready(function () {
    $('#sidebar').css('width', $("#content-container").width() * .15);

    if ($('title').text().indexOf('Quiz') <= 0 && $('title').text().indexOf('Module') <= 0) {
        moveSideNav();
    }

    if ($('title').text().indexOf('Quiz') <= 0 && $('title').text().indexOf('Module') <= 0) {
        $(window).scroll(function () {
            moveSideNav();
        });
    }

    $(window).resize(function () {
        $('#sidebar').css('width', $("#content-container").width() * .15);
    });

    $('#image1').click(function () {
        $(this).fadeToggle();
    });

    $('#image2').click(function () {
        $('#image1').fadeToggle();
    })

    $('#p-button').click(function () {
        document.cookie = "p=true; ";
    });

    $('#se-button').click(function () {
        document.cookie = "se=true; ";
    });

    $('#bs-button').click(function () {
        document.cookie = "bs=true; ";
    });

    $('#ms-button').click(function () {
        document.cookie = "ms=true; ";
    });
});