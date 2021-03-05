
		$( document ).ready( function () {
			
		$('.admin2').on('click', function() { console.log("admin");	$( "<div></div>" ).window({title: "Admin"});});
	
				
				

				
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
			$( '<div><iframe style="border:0;overflow:hidden;"  height="' + (height - 60) + '" width="100%" id="' + app + '-window" src="apps/i/' + app + '/index.html"></iframe></div>' ).window({title: app,width:width,height:height});

		});
	
	
	
		$('#searchBlock').on('click', function() { 	$('#searchBlock').hide(); });
			
			
			$('#DivContent').load('http://fiddle.jshell.net/webdevem/JfcJp/show/ #specialContent');
			
			
			$('.decoder').on('click', function() { console.log("decoder");	$( '<div><iframe src="apps/decoder.html" id="iframe"></iframe></div>' ).window({title: "Decoder",width:600,height:400});});
	
	
	
	
	
		$('.control').on('click', function() { console.log("control");	$( '<div><iframe src="apps/control.html" id="iframe"></iframe></div>' ).window({title: "Control Panel",width:600,height:400});});
	
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		$('.ugh').on('click', function() { persistentWindow('ugh', "close");});
		$('div.folder.explorer').on('click', function() { persistentWindow('explorer', "close");});
		$('.breach').on('click', function() { persistentWindow('breach', "close");});
		$('.interpol').on('click', function() { persistentWindow('interpol', "close");});
		$('.rat').on('click', function() { persistentWindow('rat', "close");});
		$('.radar').on('click', function() { persistentWindow('radar', "close");});
		$('.irc').on('click', function() { persistentWindow('irc', "close");});
		$('.downloading').on('click', function() { persistentWindow('downloading', "close");});
		$('.initializing').on('click', function() { persistentWindow('initializing', "close");});
		$('.scan').on('click', function() { persistentWindow('scan', "close");});
		$('.stocks').on('click', function() { persistentWindow('stocks', "close");});
		$('.tracing').on('click', function() { persistentWindow('tracing', "close");});
		$('.pairs').on('click', function() { persistentWindow('pairs');});
		$('.docksettings').on('click', function() { persistentWindow('docksettings');});
		$('.enhance').on('click', function() { persistentWindow('enhance', "close");});
		$('.browser').on('click', function() { persistentWindow('browser', "close");});
		$('.hackertyper').on('click', function() { persistentWindow('hackertyper', "close");});
		$('.browser2').on('click', function() { persistentWindow('browser2', "close");});
		$('div.folder.wallpaper, li.ui-menu-item.wallpaper').on('click', function() { persistentWindow('wallpaper', "close");});
		$('li.ui-menu-item.theme').on('click', function() { persistentWindow('theme', "close");});
		$('li.ui-menu-item.logo').on('click', function() { persistentWindow('logo', "close");});
		$('.2048').on('click', function() { persistentWindow('2048', "close");});
		$('.freecell').on('click', function() { persistentWindow('freecell');});
		$('.help').on('click', function() { persistentWindow('help');});
		$('.notepad').on('click', function() { persistentWindow('notepad');});
		$('.paint').on('click', function() { persistentWindow('paint');});
		$('.calculator').on('click', function() { persistentWindow('calculator');});
		$('.admin').on('click', function() { persistentWindow('admin');});
		$('.osk').on('click', function() { persistentWindow('osk');});
		$('.cmd').on('click', function() { persistentWindow('cmd');});
		$('.mlg').on('click', function() { persistentWindow('mlg', "close");});
		$('li.ui-menu-item.settings').on('click', function() { persistentWindow('settings', "close");});	
		$('.neurotoxin').on('click', function() { persistentWindow('neurotoxin', "close");});
		$('.hash').on('click', function() { persistentWindow('hash', "close");});
		$('.hawk').on('click', function() { persistentWindow('hawk', "close");});
		$('.rss').on('click', function() { persistentWindow('rss');});
		$('.computer').on('click', function() { persistentWindow('computer');});
		$('.datcoldwar').on('click', function() { persistentWindow('datcoldwar', "close");});
		$('.systemfailure').on('click', function() { persistentWindow('systemfailure', "close");});
		$('.purge').on('click', function() { persistentWindow('purge', "close");});
		$('.uplink').on('click', function() { persistentWindow('uplink', "close");});
		$('.decryptor').on('click', function() { persistentWindow('decryptor', "close");});
		$('.webcam').on('click', function() { persistentWindow('webcam', "close");});
		$('.welcome').on('click', function() { persistentWindow('welcome', "close");});
		$('.whatsmyip').on('click', function() { persistentWindow('whatsmyip', "close");});
		$('.ui-menu-item.doc1').on('click', function() { persistentWindow('doc1', "close");});
		$('.ui-menu-item.doc2').on('click', function() { persistentWindow('doc2', "close");});
		$('.ui-menu-item.doc3').on('click', function() { persistentWindow('doc3', "close");});
		$('.ui-menu-item.doc4').on('click', function() { persistentWindow('doc4', "close");});
		$('.ui-menu-item.doc5').on('click', function() { persistentWindow('doc5', "close");});
		$('.ui-menu-item.doc6').on('click', function() { persistentWindow('doc6', "close");});
		$('.ui-menu-item.doc7').on('click', function() { persistentWindow('doc7', "close");});
		$('.ui-menu-item.doc8').on('click', function() { persistentWindow('doc8', "close");});
		$('.ui-menu-item.doc9').on('click', function() { persistentWindow('doc9', "close");});
		$('.ui-menu-item.doc10').on('click', function() { persistentWindow('doc10', "close");});
		$('.ui-menu-item.about').on('click', function() { persistentWindow('about', "close");});
		
		});