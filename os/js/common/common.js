var demo = {};

// simple wrapper for logging
demo.log = function( message ) {
	var $log = $( ".log" );

	if ( ! $log.length ) {
		$.error( "div.log is required for demo logging to work." );

		return;
	}

	var d = new Date();
	var h = d.getHours();
	var m = d.getMinutes();
	var s = d.getSeconds();
	h = h > 9 ? h : "0" + h;
	m = m > 9 ? m : "0" + m;
	s = s > 9 ? s : "0" + s;

	var date = "" + h + ":" + m + ":" + s;
	$log.append( "<p>" + date + ": " + message + "</p>" );

	// scroll to bottom
	$log.scrollTop( $log[ 0 ].scrollHeight );
};

function beforeDemosCommon() {
	// catch the initial html before it would be turned into widgets
	window.demoBodyHTML = document.querySelector( ".demo-html" ).innerHTML;

	$.simone.taskbarSetup({
		// this is a fix for foundation topbar - don't use it in production sites,
		// it's only for the demos; "correct" alongside "no-top-bar" class
		// will set windows containment to start at the top of the window,
		// for those demos where top taskbar is required

		localization: {
			en: {
				// add translation for group meta so no debug warning will be generated
				// when first taskbar is created
				"group:meta": "Meta"
			}
		},
		icons: {
			// set icon for meta window group
			"group:meta": "ui-icon-info"
		}
	});

	$.simone.windowSetup({
		close: function ( event, ui ) {
			// try to destroy tabs first
			try {
				ui.$window.tabs( "destroy" );
			} catch( e ) {}

			// remove window contents on close
			ui.$window.empty();
		}
	});

	if ( $( "body").hasClass( "no-top-bar") ) {
		$( ".demo .description" ).append(
			  "<br><br><strong>Note:</strong> This demo required that the top bar be not present. "
			+ "You can <a tabindex=\"-1\" href=\"../../docs/demos.html\">go to demos index</a> and navigate from there instead."
		);

		$.simone.taskbarSetup({
			// no top bar - no top viewport margin
			viewportMargins: {
				top: [ 0, "correct" ]
			},
		});
	}
}

// we load this after demo, because taskbar is already there,
// and taskbar is always part of the demo
function loadDemosCommon() {
	"use strict";
	
var arrTitles = ["#fff000","#000fff"];
	var $windowControls = $( "<div style='padding:30px;'></div>" );
	var $body           = $( "body" );

	$windowControls
		.prependTo( $body )
		.append(
			$( "<div id='premium'></div>" )
				.attr( "id", "theme-switch" )
		)
		.append(
			$( "<div></div>" )
				.addClass( "theme-switch-notice notice" )
				.text(
					! window.navigator.onLine
						? "Notice: theme switching will not work if you're offline."
						: undefined
				)
		)
		.append(
			"<hr>"
		)
		.append(
			$( "<label></label>" )
				.text( "Font Size: " )
		)
		.append(
			$( "<div></div>" )
				.addClass( "font-size-slider" )
		)


		
		.append(
		"<br><div>Layout: <select id='type'><option value='windows'>Windows</option><option value='linux'>Linux</option><option value='mac'>Mac OS</option></select></div><br>",

			
		)
		
	
		
		
		.append(
		"<div>Font Color:</div><br>",
			"<div class='squareBig fontColor' style='background:#000;'></div>",
				"<div class='squareBig fontColor' style='background:white;'></div>",
				"<div class='squareBig fontColor' style='background:red;'></div>",
				"<div class='squareBig fontColor' style='background:green;'></div>",
				"<div class='squareBig fontColor' style='background:orange;'></div>",
				"<div class='squareBig fontColor' style='background:grey'></div>",
				"<div class='squareBig fontColor' style='background:#ccc'></div>",
								"<input id='colorText' class='inputColor' type='color'></input><br><br>"
			
		)
		
		.append(
			"<br>"
		)
		
		
		
		
		
		.append(
		"<br><div>Background Color</div><br>",
			"<div class='squareBig bgColor' style='background:#000;'></div>",
				"<div class='squareBig bgColor' style='background:#364559;'></div>",
				"<div class='squareBig bgColor' style='background:#767676;'></div>",
				"<div class='squareBig bgColor' style='background:#5786ce;'></div>",
				"<div class='squareBig bgColor' style='background:rgb(91, 129, 129);'></div>",
				"<div class='squareBig bgColor' style='background:#de4c4c;'></div>",
				"<div class='squareBig bgColor' style='background:#222;'></div>",
				"<input id='colorBG' class='inputColor' type='color'></input><br><br>"
				
			
//		)
//			.append(
//			"<hr>"
//		)
//				.append(
//		"<div>Background Image <span id='unlocks'> - Unlocks at Level <div title='E' class='rank r6'></div></span><br>",
//			"<img class='colorizewallpapers' id='0' src='assets/textures/0_t.png'>",
//				"<img class='colorizewallpapers' id='4' src='assets/textures/4_t.png' />",
//				"<img class='colorizewallpapers' id='1' src='assets/textures/1_t.png' />",
//				"<img class='colorizewallpapers' id='2' src='assets/textures/2_t.png' />",
//				"<img class='colorizewallpapers' id='3' src='assets/textures/3_t.png' />"
//
//			
//		)
//		
//			.append(
//			"<hr>"
//		)
//				.append(
//		"<div>Logo</div><br>",
//			"<img class='logosection' id='blank'></div>",
//				"<img class='logosection' id='tegnio'></div>",
//				"<img class='logosection' id='bio'></div>"
//			
		);
		


var score = parseInt(localStorage.getItem('highScore'));

if (score > 15500) {

$( "#type" ).prop( "disabled", true );


$( ".colorizewallpapers" ).css( "opacity", "0.3" );
$('.colorizewallpapers').removeAttr('id');


	}
	
	else {
		
	}


$( "#colorBG" ).change(function() {


	var bodyColor = this.value;
	console.log("this" + bodyColor);
	$("body").css({"background-color":bodyColor});
	
	
	localStorage.setItem("windowcolor", bodyColor);
	
	
});


$( "#colorText" ).change(function() {

var bodyColor = this.value;
	console.log("this" + bodyColor);
	$("body").css({"color":bodyColor});
	$(".folderE").css({"background-color":bodyColor});
	  $("#logintopbar").css({"border-color":bodyColor});
	 
	localStorage.setItem("fontcolor", bodyColor);
	
	
	
	
});

		
	$( ".bgColor" ).on( "click", function () {
	var bodyColor = $(this).css("backgroundColor");
	console.log("this" + bodyColor);
	$("body").css({"background-color":bodyColor});
	localStorage.setItem("windowcolor", bodyColor);
	});
		
		
	$( ".fontColor" ).on( "click", function () {
	var bodyColor = $(this).css("backgroundColor");
	console.log("this" + bodyColor);
	$("body").css({"color":bodyColor});
	$(".folderE").css({"background-color":bodyColor});
	localStorage.setItem("fontcolor", bodyColor);
	});
	
	
	$( ".colorizewallpapers" ).on( "click", function () {
	var bodyImg = $(this).attr('id');
	localStorage.setItem("img", "assets/textures/" + bodyImg + ".png");
	$("body").css("background-image", "url(assets/textures/" + bodyImg + ".png)");
	console.log("this" + bodyImg);
	});	
		
	$( ".logosection" ).on( "click", function () {
	var Logo = $(this).attr('id');
	localStorage.setItem("logotype", "assets/logos/" + Logo + ".png");
	$("#tcm").css("background-image", "url(assets/logos/" + Logo + ".png)");
	console.log("this" + Logo);
	});	
	
$('#type').change(function() {
			
	var e = $( "#type" ).val();
	localStorage.setItem("type", e);
	
	if (e == "linux") { 
	
	
	console.log("linux");
		$("#dockContainer").hide();
		$("#linuxstuff").show();

	$("#desktopicons-mac").hide();
	$( ".taskbar" ).taskbar({horizontalStick: "bottom left"});
	
	var p = JSON.parse(localStorage.getItem('taskbar.position'));
console.log(p["horizontalStick"]);
p["horizontalStick"] = "bottom left"
localStorage.setItem("taskbar.position", JSON.stringify(p)); 
	$("#tcm").hide();
	
	}
	else if (e == "mac") {
		
		
		
		
		
		console.log("mac");
		$("#dockContainer").show();
		$("#linuxstuff").hide();
		$("#desktopicons-mac").show();
		$("#desktopicons-mac").removeClass("floatleft");
$("#desktopicons-mac").addClass("floatright");
			$( ".taskbar" ).taskbar({horizontalStick: "top left"});
			$("#tcm").show();
			var p = JSON.parse(localStorage.getItem('taskbar.position'));
console.log(p["horizontalStick"]);
p["horizontalStick"] = "top left"
localStorage.setItem("taskbar.position", JSON.stringify(p)); 
			
			
	}
	
	else {
		
	console.log("win");
	$("#linuxstuff").hide();
	$("#dockContainer").hide();

		$("#tcm").show();
	$("#desktopicons-mac").show();
		$("#desktopicons-mac").removeClass("floatright");
	$("#desktopicons-mac").addClass("floatleft");
		$( ".taskbar" ).taskbar({horizontalStick: "bottom left"});
		var p = JSON.parse(localStorage.getItem('taskbar.position'));
console.log(p["horizontalStick"]);
p["horizontalStick"] = "bottom left"
localStorage.setItem("taskbar.position", JSON.stringify(p)); 
	}
	
	
	console.log("type " + e);
	});	

	$( "#theme-switch" ).jui_theme_switch({
		stylesheet_link_id: "ui-theme",
		datasource_url    : "js/libs/jui_theme_switch/official.json",
		use_groups        : "no",
		onChangeTheme     : function(event, theme) {
			
				
			$( ".simone-taskbar" ).each(function () {
				var $this = $(this),
				    self = $this.data( "simone-taskbar" ),
				    bgUrl = [];

				    bgUrl[ 0 ] = self._styleIndicator( ".ui-state-default .ui-icon", "backgroundImage" ).backgroundImage,
				    bgUrl[ 1 ] = self._styleIndicator( ".ui-state-hover .ui-icon", "backgroundImage" ).backgroundImage,
				    bgUrl[ 2 ] = self._styleIndicator( ".ui-state-active .ui-icon", "backgroundImage" ).backgroundImage;

				var timeout,
				    counter = 0;

				// checking url of icon background is the best way of determining
				// if new
				function checkBackgroundLoad() {
					var newBgUrl = [];

					    newBgUrl[ 0 ] = self._styleIndicator( ".ui-state-default .ui-icon", "backgroundImage" ).backgroundImage,
					    newBgUrl[ 1 ] = self._styleIndicator( ".ui-state-hover .ui-icon", "backgroundImage" ).backgroundImage,
					    newBgUrl[ 2 ] = self._styleIndicator( ".ui-state-active .ui-icon", "backgroundImage" ).backgroundImage;

					if ( newBgUrl[ 0 ] !== bgUrl[ 0 ] && newBgUrl[ 1 ] !== bgUrl[ 1 ] && newBgUrl[ 2 ] !== bgUrl[ 2 ] ) {
						$this.taskbar( "refresh" );

						// refresh windows position - changing themes changes
						// dimensions of many things, and taskbar( "refresh" ),
						// does not refresh windows position when containment
						// didn't change
						$this.taskbar( "windows" ).window( "refreshPosition" );

						clearTimeout(timeout);

						return;
					}

					counter ++;

					timeout = setTimeout( checkBackgroundLoad, 50 );
				}

				counter = 0;

				checkBackgroundLoad();
			});
		}
	});

	$( "#lbl_theme-switch" ).text( $( "#lbl_theme-switch" ).text() + ":" );

	var $fontSizeSlider = $( ".font-size-slider" );
	var $fontSizeValue  = $( ".font-size-value span" );

	function slide( event, ui ) {
		$body.css( "font-size", ui.value );
		$fontSizeValue.text( ui.value );
		$( ".simone-taskbar" ).taskbar( "refresh" );
		
		localStorage.setItem('fontsize', ui.value);
		console.log("Saving " + ui.value);
		
	}

	$fontSizeSlider.slider({
		min: 10,
		max: 16,
		value: parseInt( $body.css( "font-size" ) ),
		slide: slide,
		stop: slide
	});

	$fontSizeValue.text(
		$fontSizeSlider.slider( "option", "value" )
	);

	$windowControls.window({
		position: {
			my: "middle middle",
			at: "middle middle"
		},
		title: "Controls",
		group: "Settings",
		width: 400,
		height: 400
	});

// var $windowCode = $( "<div></div>" )
// 	.addClass( "code" )
// 	.prependTo( $body )
// 	.prepend(
// 		$( "<label></label>" )
// 			.addClass( "code-main-label" )
// 			.text( "Code required for this demo (excluding meta windows, not excluding demo window HTML):" )
// 	);
// 
// var $codeTabs = $( "<ul></ul>" )
// 	.addClass( "code-tabs" );
// 
// $windowCode
// 	.append( $codeTabs );
// 
	var codeConfig = {
		js: {
			className     : "demo-js",
			id            : "js",
			prismClassName: "language-javascript",
			tabName       : "JavaScript"
		},
		html: {
			className     : "demo-html",
			id            : "html",
			prismClassName: "language-markup",
			tabName       : "HTML",
			// remove content of div.description
			// and replace it with "..."
			beforeCallback: function () {
				var html = window.demoBodyHTML;

				var divMatch = /<div class="description/g.exec( html );

				if ( divMatch && divMatch.index ) {
					var startIndexes = [], endIndexes = [], match;

					var start = /<div/g;
					var end   = /\/div>/g;

					// count opening and closing div tags
					while ( ( match = start.exec( html ) ) != null ) {
						startIndexes.push( match.index );
					}

					while ( ( match = end.exec( html ) ) != null ) {
						endIndexes.push( match.index );
					}

					// find matching closing tag
					var start         = $.inArray( divMatch.index, startIndexes );
					var stopPosition  = endIndexes[ start - 1 ] + 5; // "/div>".length === 5

					// replace everything within matched tag with placeholder;
					// it's non ideal, as it will fail with poorly formatted HTML
					return html.slice( 0, divMatch.index )
						+ "<div class=\"description\">...</div>"
						+ html.slice( stopPosition );

					return html.slice( divMatch.index, stopPosition );
				}

				return html;
			},
		},
		css: {
			className     : "demo-css",
			id            : "css",
			prismClassName: "language-css",
			tabName       : "CSS",
		}
	};

	$.each( codeConfig, function ( languageName, props ) {
		var $elem    = $( "." + props.className );
		var codeBody = $elem.text();

		if ( props.beforeCallback ) {
			codeBody = props.beforeCallback( $elem, codeBody );
		}

		if ( typeof codeBody === "string" && codeBody.length ) {
			if ( props.afterCallback ) {
				codeBody = props.afterCallback( codeBody );
			}

			// remove linebreaks from the begining and the end of string
			codeBody = codeBody.replace( /^[\r\n]+/g, "" );
			codeBody = codeBody.replace( /[\r\n]+$/g, "" );

			// don't append empty strings,
			// event when element was found
			if ( ! codeBody.length ) {
				return true;
			}

			$( "<div></div>" )
				.attr( "id", props.id )
				.prepend(
					$( "<pre></pre>" )
						.prepend(
							$( "<code></code>" )
								.addClass( props.prismClassName )
						)
				)
				.appendTo( $windowCode );

			$( "." + props.prismClassName ).text( codeBody );

			$codeTabs.append(
				$( "<li></li>" ).append(
					$( "<a></a>" )
						.attr( "href", "#" + props.id )
						.text( props.tabName )
					)
				);
		}
	});

	// highlight Prism containers before window auto height is set,
	// otherwise scrollbars would appear
	Prism.highlightAll();

	if ( $codeTabs.children().length ) {
		$windowCode
			// create tabs before window,
			// otherwise height would be to high
			// (all containers visible, one after the other)
			.tabs()
			.window({
				position: {
					my: "right top",
					at: "right top"
				},
				title: "Code required",
				group: "meta",
				width: 680, // line can have around 80 chars
				height: "auto"
			});
	} else {
		$windowCode.detach();
	}

	// clear .demo content on dblclick
	$( ".log" ).on( "dblclick", function () {
		$( this ).empty();
	});

	// no fucus on links, their not that important
	$( ".demo" )
		.find( "a" )
		.attr( "tabindex", "-1" );

	var demoName = $.trim( $( "title" ).text().split( /[\-—–]/ )[ 0 ] );

	$( ".demo" ).window({
		title: "Demo: " + demoName,
		position: {
			my: "center top",
			at: "center top"
		},
		group: "meta",
		width: 400,
		height: "auto"
	});

	// move main demo description to top
	$( ".demo" ).window( "moveToTop" );
	
	
	
	
	
	
	
	
	
	
	
	
	
}


