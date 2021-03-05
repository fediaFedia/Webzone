
		
		
		
		
		
		
		$( document ).ready( function () {
			
		$('.admin2').on('click', function() { console.log("admin");	$( "<div></div>" ).window({title: "Admin"});});
	
				
				
		$('.fake').on('click', function() {
			
			var width = $(this).attr("width") || 600;
			var height = $(this).attr("height") || 400;
			var app = this.id;
			console.log(app);
			$( '<div id="' + app + '-window"><img class="fullwidth" src="assets/img/fake/' + app + '.gif" /></div>' ).window({title: app,width:width,height:height});

		});
			


			
		$('.doc').on('click', function() {
			
			var width = $(this).attr("width") || 430;
			var height = $(this).attr("height") || 600;
			var app = this.id;
			console.log(app);
			$( '<div id="' + app + '-window"><img class="fullwidth"  src="assets/img/docs/' + app + '.png" /></div>' ).window({title: app,width:width,height:height});

		});

				
		$('.app').on('click', function() {
			
			var width = $(this).attr("width") || 600;
			var height = $(this).attr("height") || 400;
			var app = this.id;
			console.log(app);
			$( '<div id="' + app + '-window"></div>' ).window({title: app,width:width,height:height});
			$('#' + app + '-window').load('apps/' + app + '.html');
		});
	
		$('.iframe').on('click', function() {
			
			var width = $(this).attr("width") || 600;
			var height = $(this).attr("height") || 400;
			var app = this.id;
			console.log(app);
			$( '<div><iframe style="border:0;overflow:hidden;"  height="' + (height - 40) + '" width="100%" id="' + app + '-window" src="apps/i/' + app + '/index.html"></iframe></div>' ).window({title: app,width:width,height:height});

		});
	
	
	
		$('#searchBlock').on('click', function() { 	$('#searchBlock').hide(); });
			
			
			$('#DivContent').load('http://fiddle.jshell.net/webdevem/JfcJp/show/ #specialContent');
			
			
			$('.decoder').on('click', function() { console.log("decoder");	$( '<div><iframe src="apps/decoder.html" id="iframe"></iframe></div>' ).window({title: "Decoder",width:600,height:400});});
	
	
	
	
	
		$('.control').on('click', function() { console.log("control");	$( '<div><iframe src="apps/control.html" id="iframe"></iframe></div>' ).window({title: "Control Panel",width:600,height:400});});
	
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		});