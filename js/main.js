// create element
var $overlay = $('<div class="overlay"></div>');
var $lightbox = $('<div class="lightbox"></div>');
var $image = $('<div class="image"></div>');
var $img = $('<img>');
var $col = $('<div class="col"></div>')
var $close = $('<a href="#" class="close">×</a>');
var $caption = $('<div class="caption"></div>');
var $title = $('<h3></h3>');
var $subtitle = $('<p></p>');

// append method
$overlay.append(lightbox);
$lightbox.append($image);
$image.append($img);
$lightbox.append($col);
$col.append($close);
$col.append($caption);
$caption.append($title);
$caption.append($subtitle);
$('body').append($overlay);

// click on each images
$('.grid').on('click', 'a', function (event) {
    event.preventDefault();

    var imageSrc = $(this).attr('href');
    $image.attr('src', imageSrc);

    var captionText = $(this).children().attr('alt');
    $caption.text(captionText);

    $overlay.show();
});

// click on close icon
$close.click(function () {
    $overlay.hide();
    return false;
});
