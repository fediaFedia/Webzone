<!DOCTYPE html> 
<html> 
<head>
<title>Watching TV with Alex</title>
<META HTTP-EQUIV="CACHE-CONTROL" CONTENT="NO-CACHE">
<META NAME="ROBOTS" CONTENT="NONE">
<style type="text/css">
body {color:black;overflow:hidden;background-color:#b9b7b9;font-family:Arial;padding:0;margin:0;}


#video_main {
  position: fixed;

  left: 0;
  bottom: -100px;
background-color:#000;
  width:100vw;
  z-index: -1;
  
}

#iframe {border-radius: 3px; width:40vw;height:22.5vw;border:10px solid black; padding:5px 5px 15px 5px; background:black;

right:8vw;top:8vw;

position:fixed;z-index:999;

}

#textstuff {width:35vw;margin-left:8vw;margin-top:10vw;z-index:999;}
button {padding:15px; font-size:20px; border:0;color:#fff;background:#444;}


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


<script src="http://code.jquery.com/jquery-latest.min.js"></script>
</head>
<body> 



  <video id="video_main" autoplay loop>
    <source src="mainhorse.mp4" type="video/mp4">
    <source src="hey.ogg" type="video/ogg">
<a href="hey.swf">Browser is so suck</a>
  </video>




<iframe style="" id="iframe"   src="https://www.youtube.com/embed/5sGsBoX6vUo?autoplay=0&showinfo=0&controls=0" frameborder="0" allowfullscreen></iframe>

<div id="textstuff" style="">
<h1 id="regTitle" style=" ">
Watching TV <b>with Alex</b></h1>
<h2>Recommend me a...</h2>
<button class="movies">Movie</button>
<button class="tvshows">TV Show</button>
<button style="display:none;" class="cartoons">Cartoon</button>
<button class="youtube">YouTube</button>

<br><br>
<?php
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, "imdb.wemakesites.net/api/tt3398228");
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    $output = curl_exec($ch);
	$jsonS = json_decode($output);
	echo "<b>";
    echo $jsonS->data->title;
	echo "</b>";
	echo "<br>";
	echo $jsonS->data->description;
	echo "<br>";
	echo "<a href='http://www.imdb.com/title/";
	echo $jsonS->data->id;
	echo "'>IMDb Link</a>";
    curl_close($ch);
?>

</div>




<script>

var movies = ['WIASqPZqnhs-', '5PSNL1qE6VY', 'qvsgGtivCgs', 'EJXDMwGWhoA', 'hWnAqFyaQ5s', 'SRoj3jK37Vc', 'h2tY82z3xXU', 'esGn-xKFZdU', '1Fg5iWmQjwk', '66TuSJo4dZM', 'zSWdZVtXT7E', '2LAuzT_x8Ek', 'oO6pCRe3pM', 'm8e-FF8MsqU', 'dMIrlP61Z9s'];
var tvshows = ['5sGsBoX6vUo', 'TntmMY7N8ag', 'xZY43QSx3Fk', 'HhesaQXLuRY', 'GV_QT9wUVwA', 'cUDUowZbiU8', 'oEiJ3QA4kKs', 'pWrioRji60A', 'xRyG8QYV45M', 'V1CV7odViqQ', 'WcRr-Fb5xQo', '3jkyJWY2iYs', 'AL9zLctDJaU', 'gKs8DzjPDMU', 'blV61SAoqGQ'];
var cartoons = ['5PSNL1qE6VY', 'Ue4PCI0NamI', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#'];

var youtube = ['TwwG-YrQ3Zs', 'TwwG-YrQ3Zs', 'TwwG-YrQ3Zs', 'TwwG-YrQ3Zs', 'TwwG-YrQ3Zs', 'TwwG-YrQ3Zs', 'TwwG-YrQ3Zs', 'TwwG-YrQ3Zs', 'TwwG-YrQ3Zs', 'TwwG-YrQ3Zs', 'TwwG-YrQ3Zs', 'TwwG-YrQ3Zs', 'TwwG-YrQ3Zs', 'TwwG-YrQ3Zs', 'TwwG-YrQ3Zs'];

$('.movies').click(function() {
var rd = movies[Math.floor(Math.random()*movies.length)];
$("#iframe").attr("src", "https://www.youtube.com/embed/" + rd + "?autoplay=1&showinfo=0&controls=0");
$('#regTitle').html('At the Movies <b>with Alex</b>');

});


$('.tvshows').click(function() {
var rd = tvshows[Math.floor(Math.random()*tvshows.length)];
$("#iframe").attr("src", "https://www.youtube.com/embed/" + rd + "?autoplay=1&showinfo=0&controls=0");
$('#regTitle').html('Watching TV <b>with Alex</b>');

});


$('.cartoons').click(function() {
var rd = cartoons[Math.floor(Math.random()*cartoons.length)];
$("#iframe").attr("src", "https://www.youtube.com/embed/" + rd + "?autoplay=1&showinfo=0&controls=0");});

$('.youtube').click(function() {
var rd = youtube[Math.floor(Math.random()*youtube.length)];
$("#iframe").attr("src", "https://www.youtube.com/embed/" + rd + "?autoplay=1&showinfo=0&controls=0");
$('#regTitle').html('Watching [[[!!BASS!!]]]<br>Abu Ali <b>with Alex</b>');


});






</script>

</body> 
</html>