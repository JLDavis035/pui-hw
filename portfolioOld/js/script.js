import * as THREE from 'three';
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';


 // Load 3D Scene
 var scene = new THREE.Scene(); 

 // Load Camera Perspektive
var camera = new THREE.PerspectiveCamera( 25, window.innerWidth / window.innerHeight, 1, 20000 );
camera.position.set( 1, 1, 20 );
	
 // Load a Renderer
var renderer = new THREE.WebGLRenderer({ alpha: false });
renderer.setClearColor( 0xC5C5C3 );
renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
	
 // Load the Orbitcontroller
var controls = new OrbitControls( camera, renderer.domElement ); 
			
 // Load Light
var ambientLight = new THREE.AmbientLight( 0xcccccc );
scene.add( ambientLight );
			
var directionalLight = new THREE.DirectionalLight( 0xffffff );
directionalLight.position.set( 0, 1, 1 ).normalize();
scene.add( directionalLight );				

 // glTf 2.0 Loader
var loader = new GLTF2Loader();				
	loader.load( './three/models/Test/Box.gltf', function ( gltf ) {              <<--------- Model Path
	var object = gltf.scene;				
	gltf.scene.scale.set( 2, 2, 2 );			   
	gltf.scene.position.x = 0;				    //Position (x = right+ left-) 
        gltf.scene.position.y = 0;				    //Position (y = up+, down-)
	gltf.scene.position.z = 0;				    //Position (z = front +, back-)
	
	scene.add( gltf.scene );
	});	 

function animate() {
	render();
	requestAnimationFrame( animate );
	}

function render() {
	renderer.render( scene, camera );
	}

render();
animate();

// const loader = new GLTFLoader();


// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

// const treeScene = document.getElementById("treeScene");
// const renderer = new THREE.WebGLRenderer();


// loader.load("./threejs/threejs/assets/shiba/scene.gltf", 


// 	function ( gltf ) {
// 		scene.add( gltf.scene );
// 		gltf.scene.scale.set(10, 10, 10);

// 	},
// 	// called while loading is progressing
// 	function ( xhr ) {

// 		console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

// 	},
// 	// called when loading has errors
// 	function ( error ) {

// 		console.log( 'An error happened' );

// 	}
// );
// renderer.setSize(screen.width, screen.height)
// treeScene.appendChild( renderer.domElement );

// // const geometry = new THREE.BoxGeometry( 1, 1, 1 );
// // const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
// // const cube = new THREE.Mesh( geometry, material );
// // scene.add( cube );

// camera.position.z = 50;
// const aspect = screen.width / screen.height;

// renderer.outputColorSpace = THREE.SRGBColorSpace;

// renderer.render(scene, camera);
