<!DOCTYPE html> 
<html> 
<head>
<title>Watching Stuff with Horse</title>
<META HTTP-EQUIV="CACHE-CONTROL" CONTENT="NO-CACHE">
<META NAME="ROBOTS" CONTENT="NONE">
<style type="text/css">
body {color:black;overflow:hidden;background-color:#b8b7b8;font-family:Arial;padding:0;margin:0;}


#video_main {
  position: fixed;

  left: 0;
  bottom: -100px;
background-color:#000;
  width:100vw;
  z-index: -1;
  
}

#comment-block {right:0;text-align:left;bottom:10vw;position:fixed;width:50vw;opacity:0.3;}

#trailer {border-radius: 3px; width:40vw;height:22.5vw;border:10px solid black; padding:5px 5px 15px 5px; background:black;

right:8vw;top:8vw;

position:fixed;z-index:999;

}

#textstuff {width:35vw;margin-left:8vw;margin-top:10vw;z-index:999;}
button {padding:15px; font-size:20px; border:0;color:#fff;background:#444;}

button:hover {background:#111;}

@namespace url(http://www.w3.org/1999/xhtml);
@-moz-document url-prefix("http") {

h1 {
  font-family: "Segoe UI" !important;
  font-weight: 300 !important;
}

}


h1 { font-weight: lighter;color:black;font-weight:normal;font-family:Segoe UI Light, Segoe UI, Arial, Sans-serif;font-size:3vw;}



@media screen and (max-width: 1184px){

#textstuff {display:none;}
}


</style>

<script>
window.onload = function() {
	
	
	if (window.location.search.indexOf('?') > -1) {
    
    var url = location.search.split('?')[1];
$("#trailer").attr("src", "https://www.youtube.com/embed/" + url + "?autoplay=1&showinfo=0&controls=0");
	
} else {
  
}


	
	}


</script>

</head>
<body> 



  <video id="video_main" autoplay loop>
    <source src="mainhorse.mp4" type="video/mp4">
    <source src="hey.ogg" type="video/ogg">
<a>Browser is so suck</a>
  </video>




<iframe style="" id="trailer"   src="https://www.youtube.com/embed/5sGsBoX6vUo?autoplay=0&showinfo=0&controls=0" frameborder="0" allowfullscreen></iframe>

<div id="comment-block"><span>- </span><span id="comment" style="display:none;" ></span></div>

<div id="textstuff" style="">
<h1 id="regTitle" style=" ">
Watching TV <b>with Horse</b></h1>
<h2>Recommend me a...</h2>
<button class="movies">Movie</button>
<button class="tvshows">TV Show</button>
<button style="display:none;" class="cartoons">Cartoon</button>
<button style="opacity:0.5;" class="youtube">YouTube</button>

<br><br>
<b style="font-size:18px;"><span id="title"></span></b><br>
<span id="description" style="opacity:0.8"></span><br>
<a id="imdb" style="display:none;" target="_blank" href="#" /><img style="width:50px;" src="imdb.png" /></a>


</div>



<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>

<script>
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
</script>

</body> 
</html>