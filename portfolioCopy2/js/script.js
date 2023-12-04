//Imports
import * as THREE from 'three';
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';




 //Load 3D Scene
 var scene = new THREE.Scene(); 
 scene.fog = new THREE. Fog( 0xcccccc, 10, 15 );

 //Load Camera Perspective
var camera = new THREE.PerspectiveCamera( 50, window.innerWidth / window.innerHeight, 1, 1000 );
camera.position.set( 1000, 1000, 2500 );

//Scene
const forest = document.getElementById("treescene");

//Storing treescene div width & height
let width = forest.offsetWidth;
let height = forest.offsetHeight;


 //Load a Renderer
var renderer = new THREE.WebGLRenderer({ alpha: false });
renderer.setClearColor( 0xC5C5C3 );
renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize(width, height);
// renderer.setSize(window.innerWidth, window.innerHeight);
forest.appendChild(renderer.domElement);
	
 // Load the Orbitcontroller
var orbit = new OrbitControls( camera, renderer.domElement ); 
orbit.autoRotate = true;
orbit.enableZoom = false;



var lightGreen = new THREE.Color( "rgb(174, 238, 235)" );
var lightBlue = new THREE.Color( "rgb(166, 226, 249)" );



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
	gltf.scene.scale.set( 2, 2, 2 );			   
	gltf.scene.position.x = 0;		 
        gltf.scene.position.y = 0;				  
	gltf.scene.position.z = 500;				   
	
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

