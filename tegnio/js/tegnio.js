// Activates the Carousel
$('.carousel').carousel({
  interval: 5000
})

// Activates Tooltips for Social Links
$('.tooltip-social').tooltip({
  selector: "a[data-toggle=tooltip]"
})



	
	var currentX = '';
var movementConstant = .005;
$(document).mousemove(function (e) {
    if (currentX == '') currentX = e.pageX;
    var xdiff = e.pageX - currentX;
    currentX = e.pageX;
    $('.header_big div').each(function (i, el) {
        var movement = (i + 1) * (xdiff * movementConstant);
        var newX = $(el).position().left + movement;
        $(el).css('left', newX + 'px');
    });
});



	
	var currentY = '';
var movementConstant = .005;
$(document).mousemove(function (e) {
    if (currentY == '') currentY = e.pageY;
    var ydiff = e.pageY - currentY;
    currentY = e.pageY;
    $('.header_big div').each(function (i, el) {
        var movement = (i + 1) * (ydiff * movementConstant);
        var newY = $(el).position().top + movement;
        $(el).css('top', newY + 'px');
    });
});

