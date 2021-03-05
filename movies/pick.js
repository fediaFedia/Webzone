$(document).ready(function(){
    $(".tvshows").click(function(){
		$('#regTitle').html('Watching TV <b>with Horse</b>');
        $.getJSON("tvshows.json", function(result){
		var entry = result[Math.floor(Math.random()*result.length)];		
		
		var title = entry.title;
		var trailer = entry.trailer;
		var description = entry.description;
		var imdb = entry.imdb;
		var comment = entry.comment;

		$("#trailer").attr("src", "https://www.youtube.com/embed/" + trailer + "?autoplay=1&showinfo=0&controls=0");
		$('#title').html(title);
		$('#description').html(description);
		$("#imdb").show();
		$("#imdb").attr("href", imdb);
		$("#comment").hide();
		$('#comment').html(comment);
		$("#comment").delay(8000).fadeIn();
		$("#comment").delay(6000).fadeOut();
        });
    });
	$(".movies").click(function(){
		$('#regTitle').html('At the Movies <b>with Horse</b>');
        $.getJSON("movies.json", function(result){
		var entry = result[Math.floor(Math.random()*result.length)];		
		
		var title = entry.title;
		var trailer = entry.trailer;
		var description = entry.description;
		var imdb = entry.imdb;
		var comment = entry.comment;

		$("#trailer").attr("src", "https://www.youtube.com/embed/" + trailer + "?autoplay=1&showinfo=0&controls=0");
		$('#title').html(title);
		$('#description').html(description);
		$("#imdb").show();
		$("#imdb").attr("href", imdb);
		$("#comment").hide();
		$('#comment').html(comment);
		$("#comment").delay(8000).fadeIn();
		$("#comment").delay(6000).fadeOut();
        });
    });
});