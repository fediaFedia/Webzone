



'use strict';

var camera, scene, renderer;
var card_front, card_shine, card_star, card_stars, card_back, card_geometry, shine_geometry, stars_material, card_front_material, card_back_material;
var controls;
var imageData = "assets/img/big.png";
var imageDataBack = "assets/img/back.png";
var imageStars = "assets/img/holo/stars.png";
init();
//render();

  



function init() {



				var textureLoader = new THREE.TextureLoader();
				
var loader = new THREE.CubeTextureLoader();
loader.setPath( 'textures/cube/Maine/' );

var textureCube = loader.load( [
	'px.jpg', 'nx.jpg',
	'py.jpg', 'ny.jpg',
	'pz.jpg', 'nz.jpg'
] );


var textureEquirec = textureLoader.load( 'assets/img/e.jpg' );
				textureEquirec.mapping = THREE.EquirectangularReflectionMapping;
				textureEquirec.encoding = THREE.sRGBEncoding;
				
				
    scene = new THREE.Scene();
scene.background = new THREE.Color( 0x000000 ); // UPDATED
    // renderer

    renderer = new THREE.WebGLRenderer({
        alpha: true
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // camera

    camera = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 27;

    // controls




    controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.addEventListener('change', render);
    controls.enableZoom = true;

    // mesh - cube

    card_geometry = new THREE.CubeGeometry(8, 11, 0.0001);

    for (var i = 0; i < card_geometry.faces.length; i += 2) {

        var color = Math.random() * 0x000fff;

        card_geometry.faces[i].color.setHex(color);
        card_geometry.faces[i + 1].color.setHex(color);
    }
    shine_geometry = new THREE.CubeGeometry(7, 5, 0.0001);

var shiny_material = new THREE.MeshPhongMaterial( { 
    color: 0x6B6BFF,
    specular: 0xff0005,
    shininess: 500,
	envMap: textureEquirec
//textureCube	
} );
    // Create texture for material
	
	
var card_front = THREE.ImageUtils.loadTexture( imageData, {}, function(){ render();hideload(); } );
var card_back = THREE.ImageUtils.loadTexture( imageDataBack, {}, function(){  } );
	var card_stars = THREE.ImageUtils.loadTexture( imageStars, {}, function(){ } );
	
	
	   stars_material = new THREE.MeshPhongMaterial({map: card_stars,  shininess: 40});
	   stars_material.blending = THREE.MultiplyBlending;
	   
   card_front_material = new THREE.MeshPhongMaterial({map: card_front, transparent: true, opacity: 1,  shininess: 40});
   card_back_material = new THREE.MeshPhongMaterial({map: card_back, transparent: true, opacity: 1,  shininess: 80});



    card_shine = new THREE.Mesh(shine_geometry, shiny_material);
       card_star = new THREE.Mesh(shine_geometry, stars_material);
   


   card_front = new THREE.Mesh(card_geometry, card_front_material);
	
	
	
    card_back = new THREE.Mesh(card_geometry, card_back_material);
	
        
		

// instantiate a texture loader
var loader = new THREE.TextureLoader();
//allow cross origin loading
loader.crossOrigin = '';






// The textures to use
var arr = [
 'assets/img/cards/0.png',
 'assets/img/cards/1.png',
 'assets/img/cards/2.png',
 'assets/img/cards/3.png',
 'assets/img/cards/4.png',
 'assets/img/cards/5.png',
 'assets/img/cards/6.png',
 'assets/img/cards/7.png',
 'assets/img/cards/8.png',
 'assets/img/cards/9.png',
 'assets/img/cards/10.png',
 'assets/img/cards/11.png',
 'assets/img/cards/12.png',
 'assets/img/cards/13.png',
 'assets/img/cards/14.png',
 'assets/img/cards/15.png',
 'assets/img/cards/16.png',
 'assets/img/cards/17.png',
 'assets/img/cards/18.png',
 'assets/img/cards/19.png',
 'assets/img/cards/20.png',
 'assets/img/cards/21.png',
 'assets/img/cards/22.png',
 'assets/img/cards/23.png',
 'assets/img/cards/24.png',
 'assets/img/cards/25.png',
 'assets/img/cards/26.png',
 'assets/img/cards/27.png',
 'assets/img/cards/28.png',
 'assets/img/cards/29.png',
 'assets/img/cards/30.png',
 'assets/img/cards/31.png',
 'assets/img/cards/32.png',
 'assets/img/cards/33.png',
 'assets/img/cards/34.png',
 'assets/img/cards/35.png',
 'assets/img/cards/36.png',
 'assets/img/cards/37.png',
 'assets/img/cards/38.png',
 'assets/img/cards/39.png',
 'assets/img/cards/40.png',
 'assets/img/cards/41.png',
 'assets/img/cards/42.png',
 'assets/img/cards/43.png',
 'assets/img/cards/44.png',
 'assets/img/cards/45.png',
 'assets/img/cards/46.png',
 'assets/img/cards/47.png',
 'assets/img/cards/48.png',
 'assets/img/cards/49.png',
 'assets/img/cards/50.png',
 'assets/img/cards/51.png',
 'assets/img/cards/52.png',
 'assets/img/cards/53.png',
 'assets/img/cards/54.png',
 'assets/img/cards/55.png',
 'assets/img/cards/56.png',
 'assets/img/cards/57.png',
 'assets/img/cards/58.png',
 'assets/img/cards/59.png',
 'assets/img/cards/60.png',
 'assets/img/cards/61.png',
 'assets/img/cards/62.png',
 'assets/img/cards/63.png',
 'assets/img/cards/64.png',
 'assets/img/cards/65.png',
 'assets/img/cards/66.png',
 'assets/img/cards/67.png',
 'assets/img/cards/68.png',
 'assets/img/cards/69.png',
 'assets/img/cards/70.png',
 'assets/img/cards/71.png',
 'assets/img/cards/72.png',
 'assets/img/cards/73.png',
 'assets/img/cards/74.png',
 'assets/img/cards/75.png',
 'assets/img/cards/76.png',
 'assets/img/cards/77.png',
 'assets/img/cards/78.png',
 'assets/img/cards/79.png',
 'assets/img/cards/80.png',
 'assets/img/cards/81.png',
 'assets/img/cards/82.png',
 'assets/img/cards/83.png',
 'assets/img/cards/84.png',
 'assets/img/cards/85.png',
 'assets/img/cards/86.png',
 'assets/img/cards/87.png',
 'assets/img/cards/88.png',
 'assets/img/cards/89.png',
 'assets/img/cards/90.png',
 'assets/img/cards/91.png',
 'assets/img/cards/92.png',
 'assets/img/cards/93.png',
 'assets/img/cards/94.png',
 'assets/img/cards/95.png',
 'assets/img/cards/96.png',
 'assets/img/cards/97.png',
 'assets/img/cards/98.png',
 'assets/img/cards/99.png',
 'assets/img/cards/100.png',
 'assets/img/cards/101.png',
 'assets/img/cards/102.png',
  'assets/img/cards/103.png',
   'assets/img/cards/104.png',
    'assets/img/cards/105.png',
	    'assets/img/cards/106.png'

];
var textureToShow = 0;


var starz = [
 'assets/img/holo/s0.png',
 'assets/img/holo/s1.png',
 'assets/img/holo/s2.png',
 'assets/img/holo/s3.png',
 'assets/img/holo/s4.png',
 'assets/img/holo/s4.png',
 'assets/img/holo/s2.png',
 'assets/img/holo/s4.png',
  'assets/img/holo/s4.png',
   'assets/img/holo/s4.png',
    'assets/img/holo/s4.png',
	 'assets/img/holo/s3.png',
	  'assets/img/holo/s2.png',
	   'assets/img/holo/s1.png',
	    'assets/img/holo/s4.png',
		 'assets/img/holo/s4.png',
		  'assets/img/holo/s16.png',
		  	  'assets/img/holo/s6.png',
			    	  'assets/img/holo/s7.png'
];
var starzToShow = 0;


	
	 var colorz = [
  '0',
  '0',
 '0xe5e5e5',
 '0x1aa2e9',
  '0xff4800',
  '0xff5400',
  '0x73fdff',
  '0xff7800',
'0xff7800',
'0xff7800',
'0xd000f5',
'0xff7800',
'0x4200ff', //12
'0x00c6ff',
'0xff7800',
'0xff7800',
'0xf6cc02'//16zapdos
];

var colorzToShow = 0;












// shirt
const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
 const id = urlParams.get('id')
if (id > 0) {

console.log("Has poarams" + id);
var textureToShow = id;
  card_front_material.map = THREE.ImageUtils.loadTexture( arr[id], {}, function(){ render();hideload(); } );
  
  
 if (id < 17) {
	 
console.log("bigger");
	  	shiny_material.color.setHex(colorz[id]);
		shiny_material.specular.setHex(colorz[id]);
    stars_material.map = THREE.ImageUtils.loadTexture( starz[id], {}, function(){  render(); } ); 
	  
  }
  
  
  else if (id == 105) {
	  console.log("bill");
	    stars_material.map = THREE.ImageUtils.loadTexture( starz[17], {}, function(){  render(); } );

  }
    else if (id == 106) {
	  console.log("leo");
	    stars_material.map = THREE.ImageUtils.loadTexture( starz[18], {}, function(){  render(); } );
 	shiny_material.color.setHex(colorz[4]);
		shiny_material.specular.setHex(colorz[4]);
  }
  
  else {
	  
	  console.log("smaller");
  
  	shiny_material.color.setHex(colorz[2]);
		shiny_material.specular.setHex(colorz[2]);
    stars_material.map = THREE.ImageUtils.loadTexture( starz[2], {}, function(){  render(); } );


  }

}





//contd
		
		
 	scene.add(card_back);
    card_back.position.set(0, 0, 0);
	



	scene.add(card_shine);
	card_shine.position.set(0, 1.8, 0.01);
	
	
		scene.add(card_star);
	card_star.position.set(0, 1.8, 0.02);

    scene.add(card_front);
    card_front.position.set(0, 0, 0.03);










    // Lights
   var light = new THREE.DirectionalLight(0xffffff);
    light.position.set(1, 0, -1);
    scene.add(light);
	
	
    var light = new THREE.DirectionalLight(0xffffff);
    light.position.set(3, 3, 10);
    scene.add(light);




    // events

    window.addEventListener('resize', onWindowResize, false);
	
	var canvas = document.getElementsByTagName("canvas")[0];
canvas.addEventListener("click", function() {

document.getElementById("hint").style.display = "none";

});
	
	// Click interaction


document.getElementById("next").addEventListener("click", function() {
  
document.getElementById("loading").style.display = "block";

console.log("foo" );




 
 
 loader.load(arr[textureToShow], function(tex) {
  // Once the texture has loaded
  // Asign it to the material
  card_front_material.map = tex;

  stars_material.map = THREE.ImageUtils.loadTexture( starz[starzToShow], {}, function(){ render(); } );

  // Update the next texture to show
  textureToShow++;
  colorzToShow++;
 starzToShow++;

    console.log("changzed texture" + colorz[colorzToShow] + " ala " + colorzToShow);
	
	shiny_material.color.setHex(colorz[colorzToShow]);
		shiny_material.specular.setHex(colorz[colorzToShow]);
	

	
render()
  // Have we got to the end of the textures array
  if(textureToShow > arr.length-1) {
   textureToShow = 0;
   colorzToShow = 0;
   starzToShow = 0;
  }

if(colorzToShow > colorz.length-2) {
   colorzToShow = 0;
  }


if(starzToShow > starz.length-1) {
   starzToShow = 0;
  }

 }); 
 
});
	
	
	

}







function hideload() {

	    setTimeout(function () {

document.getElementById("loading").style.display = "none";
    }, 500);
	
	
}


function render() {
	

	



    renderer.render(scene, camera);

}

function onWindowResize(event) {

    renderer.setSize(window.innerWidth, window.innerHeight);

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

}

