$(document).ready(function () {
    $(".buddy").on("swiperight", function () {
        $(this).addClass('rotate-left').delay(700).fadeOut(1);
        $('.buddy').find('.status').remove();

        $(this).append('<div class="status like">Like!</div>');
        if ($(this).is(':last-child')) {
            $('.swiping').delay(700).fadeOut(1);
            $('#form-container').delay(700).fadeIn(1);
        } else {
            $(this).next().removeClass('rotate-left rotate-right').fadeIn(400);
        }
    });

    $(".buddy").on("swipeleft", function () {
        $(this).addClass('rotate-right').delay(700).fadeOut(1);
        $('.buddy').find('.status').remove();
        $(this).append('<div class="status dislike">Dislike!</div>');

        if ($(this).is(':last-child')) {
            $('.swiping').delay(700).fadeOut(1);
            $('#form-container').delay(700).fadeIn(1);
        } else {
            $(this).next().removeClass('rotate-left rotate-right').fadeIn(400);
        }
    });

    var ifr = document.getElementById('form-frame');
    ifr.onload = function () {
        $('#form-frame').contents().find('#wpadminbar').hide();
        $('#form-frame').contents().find('html').first().attr('style', 'margin-top:0;background:#f9f9f9;');
        $('#form-frame').contents().find('#wrapper, #main').attr('style', 'background:#f9f9f9;');

        $('#form-frame').contents().find('.gform_wrapper .top_label input.medium, .gform_wrapper .top_label select.medium').attr('style', 'width:80%;');
    };

    $('#form-frame').contents().find('#wpadminbar').hide();
    $('#form-frame').contents().find('html').first().attr('style', 'margin-top:0;background:#f9f9f9;');
    $('#form-frame').contents().find('#wrapper, #main').attr('style', 'background:#f9f9f9;');

    $('#form-frame').contents().find('.gform_wrapper .top_label input.medium, .gform_wrapper .top_label select.medium').attr('style', 'width:80%;');
});
