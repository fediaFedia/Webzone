/*
*(c) Copyright 2011 Simone Masiero. Some Rights Reserved. 
*This work is licensed under a Creative Commons Attribution-Noncommercial-Share Alike 3.0 License
*/

$(
	function(){
		$( document ).keydown(
			function ( event ) { 
				Typer.addText( event ); //Capture the keydown event and call the addText, this is executed on page load
			}
		);
	}
);

var Typer={
	text: null,
	accessCountimer:null,
	index:0, // current cursor position
	speed:2, // speed of the Typer
	file:"", //file, must be setted
	accessCount:0, //times alt is pressed for Access Granted
	deniedCount:0, //times caps is pressed for Access Denied
	secCount:0, //times caps is pressed for Access Denied
		coldCount:0, //times caps is pressed for Access Denied
	secCount:0, //times caps is pressed for Access Denied
	radarCount:0, 
		windowCount:0, 
			ponyCount:0, 
	tagList:[],
	typeIntervalCounter:0,
	typeInterval:false,
	init: function(){// inizialize Hacker Typer
		accessCountimer=setInterval(function(){Typer.updLstChr();},500); // inizialize timer for blinking cursor
		$.get(Typer.file,function(data){// get the text file
			Typer.text=data;// save the textfile in Typer.text
		});
	},
	
	content:function(){
		return $("#console").html();// get console content
	},
	
	write:function(str){// append to console content
		$("#console").append(str);
		return false;
	},
	
	makeAccess:function(){//create Access Granted popUp      FIXME: popup is on top of the page and doesn't show is the page is scrolled
		Typer.hidepop(); // hide all popups
		Typer.accessCount=0; //reset count
		var ddiv=$("<div id='gran'>").html(""); // create new blank div and id "gran"
		ddiv.addClass("accessGranted"); // add class to the div
		ddiv.html("<h1>الوصول الممنوح</h1>"); // set content of div
		$(document.body).prepend(ddiv); // prepend div to body
		return false;
	},
	makeDenied:function(){//create Access Denied popUp      FIXME: popup is on top of the page and doesn't show is the page is scrolled
		Typer.hidepop(); // hide all popups
		Typer.deniedCount=0; //reset count
		var ddiv=$("<div id='deni'>").html(""); // create new blank div and id "deni"
		ddiv.addClass("accessDenied");// add class to the div
		ddiv.html("<h1>رفض الوصول</h1>");// set content of div
		$(document.body).prepend(ddiv);// prepend div to body
		return false;
		},
	makeSecurity:function(){//create Access Denied popUp      FIXME: popup is on top of the page and doesn't show is the page is scrolled
		Typer.hidepop(); // hide all popups
		Typer.deniedCount=0; //reset count
		var ddiv=$("<div id='secu'>").html(""); // create new blank div and id "deni"
		ddiv.addClass("securityBreach");// add class to the div
		ddiv.html("<h1>خرق أمني</h1><h2>LEVEL 3 الوصول المطلوبة</h2>");// set content of div
		$(document.body).prepend(ddiv);// prepend div to body
		return false;
		},
		
	makeColdWar:function(){//create Access Denied popUp      FIXME: popup is on top of the page and doesn't show is the page is scrolled
		Typer.hidepop(); // hide all popups
		Typer.deniedCount=0; //reset count
		var ddiv=$("<div id='cold'>").html(""); // create new blank div and id "deni"
		ddiv.addClass("coldwar");// add class to the div
		ddiv.html("<img src='assets/img/datcoldwar.gif'>");// set content of div
		$(document.body).prepend(ddiv);// prepend div to body
		return false;
	},
	makeRadar:function(){//create Access Denied popUp      FIXME: popup is on top of the page and doesn't show is the page is scrolled
		Typer.hidepop(); // hide all popups
		Typer.radarCount=0; //reset count
		var ddiv=$("<div id='radar'>").html(""); // create new blank div and id "deni"
		ddiv.addClass("radar");// add class to the div
		ddiv.html("<img src='assets/img/mob.gif'><br /><img src='assets/img/radar.gif'>");// set content of div
		$(document.body).prepend(ddiv);// prepend div to body
		return false;
	},
	makePony:function(){//create Access Denied popUp      FIXME: popup is on top of the page and doesn't show is the page is scrolled
		Typer.hidepop(); // hide all popups
		Typer.ponyCount=0; //reset count
		var ddiv=$("<div id='pony'>").html(""); // create new blank div and id "deni"
		ddiv.addClass("pony");// add class to the div
		ddiv.html("<img src='http://rnbpull.99streets.netdna-cdn.com/graphics/muhammad_cartoon.jpg'>");// set content of div
		$(document.body).prepend(ddiv);// prepend div to body
		return false;
	},
	makeWindow:function(){//create Access Denied popUp      FIXME: popup is on top of the page and doesn't show is the page is scrolled
		Typer.hidepop(); // hide all popups
		Typer.windowCount=0; //reset count
		var ddiv=$("<div id='window'>").html(""); // create new blank div and id "deni"
		ddiv.addClass("window");// add class to the div
		ddiv.html("<iframe src='http://reddit.com/' width='640px' height='480px' ></iframe>");// set content of div
		$(document.body).prepend(ddiv);// prepend div to body
		return false;
	},
	
	hidepop:function(){// remove all existing popups
		$("#deni").remove();
		$("#gran").remove();
		$("#secu").remove();
		$("#cold").remove();
		$("#pony").remove();
		$("#window").remove();
	},
	
	addText:function(key){//Main function to add the code
		if(key.keyCode==109){// key 18 = alt key
			Typer.accessCount++; //increase counter 
			if(Typer.accessCount>=1){// if it's presed 3 times
				Typer.makeAccess(); // make access popup
			}
		}else if(key.keyCode==107){// key 20 = caps lock
			Typer.deniedCount++; // increase counter
			if(Typer.deniedCount>=1){ // if it's pressed 3 times
				Typer.makeDenied(); // make denied popup
						}
		}else if(key.keyCode==106){// key 20 = caps lock
			Typer.coldCount++; // increase counter
			if(Typer.coldCount>=1){ // if it's pressed 3 times
				Typer.makeColdWar(); // make denied popup
			}
		}else if(key.keyCode==104){// key 20 = caps lock
			Typer.radarCount++; // increase counter
			if(Typer.radarCount>=1){ // if it's pressed 3 times
				Typer.makeRadar(); // make denied popup
			}
		}else if(key.keyCode==98){// key 20 = caps lock
			Typer.ponyCount++; // increase counter
			if(Typer.ponyCount>=1){ // if it's pressed 3 times
				Typer.makePony(); // make denied popup
			}
		}else if(key.keyCode==96){// key 20 = caps lock
			Typer.windowCount++; // increase counter
			if(Typer.windowCount>=1){ // if it's pressed 3 times
				Typer.makeWindow(); // make denied popup
			}
			
		}else if(key.keyCode==111){// key 20 = caps lock
			Typer.secCount++; // increase counter
			if(Typer.secCount>=1){ // if it's pressed 3 times
				Typer.makeSecurity(); // make denied popup
			}
		}else if(key.keyCode==27){ // key 27 = esc key
			Typer.hidepop(); // hide all popups
		}else if(Typer.text){ // otherway if text is loaded
			
			var usedTags= new RegExp("<img.*?>", "g");
			var foundTag = usedTags.exec(Typer.text.substring(Typer.index));
			
			if(foundTag instanceof Array && foundTag.index <= Typer.speed) {
				Typer.index += foundTag.index+foundTag[0].length;
			} else Typer.index += Typer.speed;
			
			var cont=Typer.content(); // get the console content
			if(cont.substring(cont.length-1,cont.length)=="|") // if the last char is the blinking cursor
				$("#console").html($("#console").html().substring(0,cont.length-1)); // remove it before adding the text
			/*
			if(key.keyCode!=8){ // if key is not backspace
				Typer.index+=Typer.speed;	// add to the index the speed
			}else{
				if(Typer.index>0) // else if index is not less than 0 
					Typer.index-=Typer.speed;//	remove speed for deleting text
			}
			*/
			var text=Typer.text.substring(0,Typer.index-(Typer.speed-Typer.typeIntervalCounter));// parse the text for stripping html enities
			var rtn= new RegExp("\n", "g"); // newline regex
			//var rts= new RegExp("\\s", "g"); // whitespace regex
			var rtt= new RegExp("\\t", "g"); // tab regex
			text = text.replace(rtn,"<br/>").replace(rtt,"&nbsp;&nbsp;&nbsp;&nbsp;");//.replace(rts,"&nbsp;");// replace newline chars with br, tabs with 4 space and blanks with an html blank
			//console.log(text);
			$("#console").html(text);
			$('body').scrollTop($("#console").height()); 
			window.scrollBy(0,50); // scroll to make sure bottom is always visible 
			
			// scroll to make sure bottom is always visible
			/*
			if(Typer.typeInterval) {
				clearInterval(Typer.typeInterval);
				Typer.typeIntervalCounter = 0;
			}
			Typer.typeInterval = setInterval(function() {
			console.log(Typer.typeIntervalCounter);
			//console.log(Typer.speed);
			var text=Typer.text.substring(0,Typer.index-(Typer.speed-Typer.typeIntervalCounter));// parse the text for stripping html enities
			var rtn= new RegExp("\n", "g"); // newline regex
			//var rts= new RegExp("\\s", "g"); // whitespace regex
			var rtt= new RegExp("\\t", "g"); // tab regex
			text = text.replace(rtn,"<br/>").replace(rtt,"&nbsp;&nbsp;&nbsp;&nbsp;");//.replace(rts,"&nbsp;");// replace newline chars with br, tabs with 4 space and blanks with an html blank
			//console.log(text);
			$("#console").html(text);
			$('body').scrollTop($("#console").height()); // scroll to make sure bottom is always visible
			if(Typer.typeIntervalCounter>Typer.speed) {
				clearInterval(Typer.typeInterval);
				Typer.typeIntervalCounter = 0;
			}
			Typer.typeIntervalCounter++;
			},10);
			*/
		}
		if ( key.preventDefault && key.keyCode != 122 ) { // prevent F11(fullscreen) from being blocked
			key.preventDefault()
		};  
		if(key.keyCode != 122){ // otherway prevent keys default behavior
			key.returnValue = false;
		}
	},
	
	updLstChr:function(){ // blinking cursor
		var cont=this.content(); // get console 
		if(cont.substring(cont.length-1,cont.length)=="|") // if last char is the cursor
			$("#console").html($("#console").html().substring(0,cont.length-1)); // remove it
		else
			this.write("|"); // else write it
	}
}

function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout(function(){startTime()},500);
}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}