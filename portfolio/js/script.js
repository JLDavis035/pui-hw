//Swapping Adjectives////////////////////////////////////////////

var words = ["Creative", "Environmentalist", "Designer", "Plant-lover", "Artist"];
var adj = document.getElementById("adj");

var timer = 0;

function addWords(){
	var count = 0;
	timer = timer + count;
	adj.innerHTML = words[timer];
	timer++

	timerReset();

	return timer;
}

function timerReset(){
	if (timer>(words.length)-1){
		timer = 0;
	}
	return timer;
}
setInterval(addWords, 2000);



//three.js///////////////////////////////////////////////

//Imports
import * as THREE from 'three';
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';




 //Load 3D Scene
 var scene = new THREE.Scene(); 


 //Load Camera Perspective
var camera = new THREE.PerspectiveCamera( 50, window.innerWidth / window.innerHeight, 1, 20000 );
camera.position.set( 100, 900, 3000 );

//Scene
const forest = document.getElementById("treescene");

//Storing treescene div width & height
let width = forest.offsetWidth;
let height = forest.offsetHeight;


 //Load a Renderer
var renderer = new THREE.WebGLRenderer({ alpha: false });
renderer.setClearColor( 0x000000, 0 );
renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize(width, height);
// renderer.setSize(window.innerWidth, window.innerHeight);
forest.appendChild(renderer.domElement);
	
 // Load the Orbitcontroller
var orbit = new OrbitControls( camera, renderer.domElement ); 
orbit.autoRotate = true;
orbit.enableZoom = false;

orbit.minPolarAngle = ( 1 );
orbit.maxPolarAngle = ( 1.5 );



var lightGreen = new THREE.Color( "rgb(174, 238, 235)" );
var lightBlue = new THREE.Color( "rgb(166, 226, 249)" );
var lightFog = new THREE.Color( "rgb(156, 221, 213)" );


// scene.background = ( transparent )
scene.fog = new THREE.Fog( lightFog, 1, 4500 );

 // Load Light
var ambientLight = new THREE.AmbientLight( lightGreen, 2 );
scene.add( ambientLight );
			
var directionalLight = new THREE.DirectionalLight( lightBlue, 10 );
directionalLight.position.set( 0, 1, 1 ).normalize();
scene.add( directionalLight );				

 // glTf Loader
var loader = new GLTFLoader();				
	loader.load( './assets/models/low_poly_tree_concept/scene.gltf', function ( gltf ) { 
	var object = gltf.scene;				
	object.scale.set( 2, 2, 2 );			   
	object.position.x = 0;		 
    object.position.y = 0;				  
	object.position.z = 0;				   
	
	scene.add( gltf.scene );
	});	 

	loader.load( './assets/models/low_poly_tree_concept/scene.gltf', function ( gltf ) { 
		var object = gltf.scene;				
		object.scale.set( 1.75, 1.5, 1.5 );			   
		object.position.x = 150;		 
		object.position.y = 0;				  
		object.position.z = 50;	
		object.rotation.y = 2;			   
		
		scene.add( gltf.scene );
		});	 

	loader.load( './assets/models/low_poly_tree_concept/scene.gltf', function ( gltf ) { 
		var object = gltf.scene;				
		object.scale.set( 2, 1.75, 2 );			   
		object.position.x = 100;		 
		object.position.y = 0;				  
		object.position.z = 75;	
		object.rotation.y = 20;			   
		
		scene.add( gltf.scene );
		});	 

	loader.load( './assets/models/low_poly_tree_concept/scene.gltf', function ( gltf ) { 
		var object = gltf.scene;				
		object.scale.set( 2, 2, 2 );			   
		object.position.x = 0;		 
		object.position.y = 0;				  
		object.position.z = 0;	
		object.rotation.y = 5;			   
		
		scene.add( gltf.scene );
		});	
	loader.load( './assets/models/low_poly_tree_concept/scene.gltf', function ( gltf ) { 
		var object = gltf.scene;				
		object.scale.set( 2, 2, 2 );			   
		object.position.x = 0;		 
		object.position.y = 0;				  
		object.position.z = 0;	
		object.rotation.y = -40;			   
		
		scene.add( gltf.scene );
		});	
	loader.load( './assets/models/low_poly_tree_concept/scene.gltf', function ( gltf ) { 
		var object = gltf.scene;				
		object.scale.set( 1.5, 1.5, 1.75 );			   
		object.position.x = 300;		 
		object.position.y = 0;				  
		object.position.z = -110;	
		object.rotation.y = 7;			   
		
		scene.add( gltf.scene );
		});	 
	
	loader.load( './assets/models/low_poly_tree_concept/scene.gltf', function ( gltf ) { 
		var object = gltf.scene;				
		object.scale.set( 2, 2, 2.5 );			   
		object.position.x = 0;		 
		object.position.y = 0;				  
		object.position.z = 550;	
		object.rotation.y = 20;			   
		
		scene.add( gltf.scene );
		});	 

	loader.load( './assets/models/low_poly_tree_concept/scene.gltf', function ( gltf ) { 
		var object = gltf.scene;				
		object.scale.set( 2, 2.25, 2 );			   
		object.position.x = 700;		 
		object.position.y = 0;				  
		object.position.z = -300;	
		object.rotation.y = 60;			   
		
		scene.add( gltf.scene );
		});	

	loader.load( './assets/models/low_poly_tree_concept/scene.gltf', function ( gltf ) { 
		var object = gltf.scene;				
		object.scale.set( 1.75, 1.75, 1.75 );			   
		object.position.x = 700;		 
		object.position.y = 0;				  
		object.position.z = -500;	
		object.rotation.y = 60;			   
		
		scene.add( gltf.scene );
		});	

	loader.load( './assets/models/low_poly_tree_concept/scene.gltf', function ( gltf ) { 
		var object = gltf.scene;				
		object.scale.set( 1.5, 1.75, 1.5 );			   
		object.position.x = 500;		 
		object.position.y = 0;				  
		object.position.z = -800;	
		object.rotation.y = 80;			   
		
		scene.add( gltf.scene );
		});
	
	loader.load( './assets/models/low_poly_tree_concept/scene.gltf', function ( gltf ) { 
		var object = gltf.scene;				
		object.scale.set( 1.5, 1.75, 1.5 );			   
		object.position.x = -500;		 
		object.position.y = 0;				  
		object.position.z = 500;	
		object.rotation.y = 100;			   
		
		scene.add( gltf.scene );
		});	
	
	loader.load( './assets/models/low_poly_tree_concept/scene.gltf', function ( gltf ) { 
		var object = gltf.scene;				
		object.scale.set( 2.25, 2, 2.25 );			   
		object.position.x = -500;		 
		object.position.y = 0;				  
		object.position.z = -200;	
		object.rotation.y = 5.5;			   
		
		scene.add( gltf.scene );
		});	

	loader.load( './assets/models/low_poly_tree_concept/scene.gltf', function ( gltf ) { 
		var object = gltf.scene;				
		object.scale.set( 2, 1.75, 1.75 );			   
		object.position.x = 85;		 
		object.position.y = 0;				  
		object.position.z = -200;	
		object.rotation.y = 5.5;			   
		
		scene.add( gltf.scene );
		});	

	loader.load( './assets/models/low_poly_tree_concept/scene.gltf', function ( gltf ) { 
		var object = gltf.scene;				
		object.scale.set( 2, 2.5, 2.2 );			   
		object.position.x = -80;		 
		object.position.y = 0;				  
		object.position.z = 500;	
		object.rotation.y = 7;			   
		
		scene.add( gltf.scene );
		});	

	loader.load( './assets/models/low_poly_tree_concept/scene.gltf', function ( gltf ) { 
		var object = gltf.scene;				
		object.scale.set( 2, 2.5, 2.2 );			   
		object.position.x = 300;		 
		object.position.y = 0;				  
		object.position.z = 500;	
		object.rotation.y = 8.4;			   
		
		scene.add( gltf.scene );
		});	

	loader.load( './assets/models/low_poly_tree_concept/scene.gltf', function ( gltf ) { 
		var object = gltf.scene;				
		object.scale.set( 1.75, 1.75, 1.75 );			   
		object.position.x = 300;		 
		object.position.y = 0;				  
		object.position.z = 500;	
		object.rotation.y = 9;			   
		
		scene.add( gltf.scene );
		});	

	loader.load( './assets/models/low_poly_tree_concept/scene.gltf', function ( gltf ) { 
		var object = gltf.scene;				
		object.scale.set( 1.75, 2, 2 );			   
		object.position.x = 300;		 
		object.position.y = 0;				  
		object.position.z = -200;	
		object.rotation.y = 10.25;			   
		
		scene.add( gltf.scene );
		});	

function animate() {
	render();
	orbit.update();
	requestAnimationFrame( animate );
	}

function render() {
	renderer.render( scene, camera );
	}

render();
animate();

