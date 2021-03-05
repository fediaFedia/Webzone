
  function handleFileSelect(evt) {
    var files = evt.target.files; // FileList object

    // Loop through the FileList and render image files as thumbnails.
    for (var i = 0, f; f = files[i]; i++) {

      // Only process image files.
      if (!f.type.match('image.*')) {
        continue;
      }

      var reader = new FileReader();

      // Closure to capture the file information.
      reader.onload = (function(theFile) {
        return function(e) {
          // Render thumbnail.
		  
		  $('body').css({ 'background-image': "url(" + e.target.result + ")" });
          var span = document.createElement('span');
          span.innerHTML = ['<img style="width:70px;height:40px;" class="thumb" src="', e.target.result,
                            '" title="', escape(theFile.name), '"/>'].join('');
            
          document.getElementById('list').insertBefore(span, null);
          localStorage.setItem('textureZ', e.target.result);
        };
      })(f);

      // Read in the image file as a data URL.
      reader.readAsDataURL(f);
    }
  }

  document.getElementById('files').addEventListener('change', handleFileSelect, false);


  if(localStorage.img) { 

         var span = document.createElement('span');
          span.innerHTML += ['<img style="width:70px;height:40px;" class="thumb" src="', localStorage.img,
                            '" title="test"/>'].join('');

          document.getElementById('list').insertBefore(span, null);
    
    }




/// SECOND

  function handleFileSelect2(evt) {
    var files2 = evt.target.files; // FileList object

    // Loop through the FileList and render image files as thumbnails.
    for (var i = 0, f; f = files2[i]; i++) {

      // Only process image files.
      if (!f.type.match('image.*')) {
        continue;
      }

      var reader = new FileReader();

      // Closure to capture the file information.
      reader.onload = (function(theFile) {
        return function(e) {
          // Render thumbnail.
		  
		  $('#center').css({ 'background-image': "url(" + e.target.result + ")" });
          var span = document.createElement('span');
          span.innerHTML = ['<img style="width:70px;height:40px;" class="thumb" src="', e.target.result,
                            '" title="', escape(theFile.name), '"/>'].join('');
            
          document.getElementById('list').insertBefore(span, null);
          localStorage.setItem('logotype', e.target.result);
        };
      })(f);

      // Read in the image file as a data URL.
      reader.readAsDataURL(f);
    }
  }

  document.getElementById('files2').addEventListener('change', handleFileSelect2, false);


  if(localStorage.img) { 

         var span = document.createElement('span');
          span.innerHTML += ['<img style="width:70px;height:40px;" class="thumb" src="', localStorage.img,
                            '" title="test"/>'].join('');

          document.getElementById('list2').insertBefore(span, null);
    
    }
	
	
	
	
/// THIRD

  function handleFileSelect3(evt) {
    var files3 = evt.target.files; // FileList object

    // Loop through the FileList and render image files as thumbnails.
    for (var i = 0, f; f = files3[i]; i++) {

      // Only process image files.
      if (!f.type.match('text.*')) {
        continue;
      }

      var reader = new FileReader();

      // Closure to capture the file information.
      reader.onload = (function(theFile) {
        return function(e) {
          // Render thumbnail.
		  

          
		  var span = document.createElement('span');
          span.innerHTML = ['<img style="width:70px;height:40px;" class="thumb" src="', e.target.result,
                            '" title="', escape(theFile.name), '"/>'].join('');
            
          document.getElementById('list').insertBefore(span, null);

		  localStorage.setItem('kernelZ', e.target.result);
		  location.reload();
        };
      })(f);

      // Read in the image file as a data URL.
      reader.readAsDataURL(f);
    }
  }

  document.getElementById('files3').addEventListener('change', handleFileSelect3, false);


  if(localStorage.img) { 

         var span = document.createElement('span');
          span.innerHTML += ['<img style="width:70px;height:40px;" class="thumb" src="', localStorage.img,
                            '" title="test"/>'].join('');

          document.getElementById('list2').insertBefore(span, null);
    
    }

