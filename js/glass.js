
var camera, scene,s, controls, renderer;
var cameraControls,cube;

var windowHalfX = window.innerWidth / 2;
var windowHalfY = window.innerHeight / 2;
var loader = new THREE.CTMLoader();
var material;


var front_light;
var back_light;
var right_light;
var count=1;
var len,index =0;
var refCube,body_material;
function glassLoad( geometry, s, material, x, y, z, ry,name,visi ) {
           glassMesh = new THREE.Mesh( geometry, material );
            glassMesh.position.set( x, y, z );
            glassMesh.scale.set( s, s, s );
            glassMesh.rotation.y = ry;
			glassMesh.visible=false;
			glassMesh.name = name;
			scene.add(glassMesh);
			console.log(glassMesh.name)
        }
		
function init() {


// SCENE

scene = new THREE.Scene();
var refCube = new THREE.CubeTextureLoader()
					.setPath( 'img/' )					
					.load( [ 'px.jpg', 'nx.jpg', 'py.jpg', 'ny.jpg', 'pz.jpg', 'nz.jpg' ] );

	
metal_material = new THREE.MeshLambertMaterial({ envMap:refCube,color:0xa4a5a4,reflectivity: 1,specular:1,combine: THREE.MixOperation,side: THREE.DoubleSide});
glass_material = new THREE.MeshPhongMaterial({  color:0x61a060,envMap:refCube,transparent:true,opacity:.2,reflectivity: .5,specular:1,combine: THREE.MixOperation,side: THREE.DoubleSide});
// LIGHTS

var ambientLight= new THREE.AmbientLight(0x858585);//858585
		scene.add(ambientLight);
	
/*	
var hemiLight = new THREE.HemisphereLight(0xffffff, 0xB0B0B0, 1);
        hemiLight.position.set(0, 30, 0);
        scene.add(hemiLight);
dlightHelper = new THREE.HemisphereLightHelper(hemiLight , 10); // 50 is helper size
		scene.add(dlightHelper);
		*/

front_light = new THREE.DirectionalLight(0xffffff);
				front_light.position.set( 20, 10, 30 );
				
				//front_light.castShadow =true;
				//front_light.shadowCameraVisible = true;
				//front_light.shadowDarkness = 1;
				//front_light.shadowMapWidth = 1024;
				//front_light.shadowMapHeight = 1024;

				front_light.shadow.camera.far =500.5;
				front_light.shadow.camera.left = -300;
				front_light.shadow.camera.right = 300;
				front_light.shadow.camera.top = 300;
				front_light.shadow.camera.bottom = -300;
				front_light.intensity =1;
				scene.add( front_light );

back_light = new THREE.DirectionalLight(0xffffff);
				back_light.position.set( 0, 10, -50 );
				
				//back_light.castShadow =true;
				
				//back_light.shadowDarkness = 2;
				
				back_light.shadow.camera.far =100.5;
				back_light.shadow.camera.left = -300;
				back_light.shadow.camera.right = 300;
				back_light.shadow.camera.top = 300;
				back_light.shadow.camera.bottom = -300;
				back_light.intensity =1;
				scene.add( back_light );	


 right_light = new THREE.DirectionalLight(0xffffff);
				right_light.position.set( 20, 10, -10 );
				
				right_light.castShadow =true;
				
				right_light.shadowDarkness = 2;
				
				right_light.shadow.camera.far =100.5;
				right_light.shadow.camera.left = -300;
				right_light.shadow.camera.right = 300;
				right_light.shadow.camera.top = 300;
				right_light.shadow.camera.bottom = -300;
				right_light.intensity =.5;
				scene.add( right_light );				
		/*
		dlightHelper = new THREE.DirectionalLightHelper(front_light , 10); // 50 is helper size
		scene.add(dlightHelper);
		
		dlightHelper = new THREE.DirectionalLightHelper(back_light , 30); // 50 is helper size
		scene.add(dlightHelper);
			
		dlightHelper = new THREE.DirectionalLightHelper(right_light , 10); // 50 is helper size
		scene.add(dlightHelper);
		
		*/





/*
controls.minDistance = 30;
controls.maxDistance =80;
*/
//LIGHTS
		



container = document.getElementById( 'threeCanvas' );
document.body.appendChild( container );
var w = container.offsetWidth;
    var h = container.offsetHeight;
//document.body.appendChild( renderer.domElement );
//window.addEventListener( 'resize', onWindowResize, false );


// RENDERER

renderer = new THREE.WebGLRenderer({antialias: true });
renderer.setSize(w, h);
renderer.setPixelRatio( window.devicePixelRatio );
renderer.setClearColor(0xffffff);
renderer.shadowMapEnabled = true;
renderer.shadowMapSoft = true;
renderer.shadowMapType = THREE.PCFSoftShadowMap;
//renderer.gammaInput = true;
//renderer.gammaOutput = true;
renderer.physicallyBasedShading = true;
container.appendChild( renderer.domElement );
//window.addEventListener( 'resize', onWindowResize, false );



//CAMERA 
camera = new THREE.PerspectiveCamera( 30, w / h,    1, 20000 );
camera.position.z = 30;
camera.position.x = 20;
camera.position.y = 10;
camera.lookAt(new THREE.Vector3(0,0,0));
controls = new THREE.OrbitControls( camera , threeCanvas );
controls.maxPolarAngle = Math.PI/2 * 115/120;
camera.add(front_light);
cube = new THREE.Mesh( new THREE.BoxGeometry( 0, 0, 0), new THREE.MeshNormalMaterial() );
cube.position.y = 0;
scene.add(cube);
cube.add(camera);

defaultLoad();

}

setTimeout(function () {
		console.log(scene.children);
		scene.children[4].traverse(function (child) {
			if (child instanceof THREE.Mesh) {
				var geometry = new THREE.Geometry().fromBufferGeometry(child.geometry);
				child.geometry = geometry;
				for (var i = 0; i < child.geometry.vertices.length; i++) {
					console.log(child.geometry.vertices[i]);
				}
			}
		});
		scene.children[5].traverse(function (child) {
			if (child instanceof THREE.Mesh) {
				var geometry = new THREE.Geometry().fromBufferGeometry(child.geometry);
				child.geometry = geometry;
				for (var i = 0; i < child.geometry.vertices.length; i++) {

				}
			}
		});
		scene.children[6].traverse(function (child) {
			if (child instanceof THREE.Mesh) {
				var geometry = new THREE.Geometry().fromBufferGeometry(child.geometry);
				child.geometry = geometry;
				for (var i = 0; i < child.geometry.vertices.length; i++) {

				}
			}
		});
		scene.children[7].traverse(function (child) {
			if (child instanceof THREE.Mesh) {
				var geometry = new THREE.Geometry().fromBufferGeometry(child.geometry);
				child.geometry = geometry;
				for (var i = 0; i < child.geometry.vertices.length; i++) {

				}
			}
		});
	}
	, 900);


function defaultLoad(){
	len = glassCtm.length;
	(function(){		
		 function load(){
			 //console.log(sctm)
			 if ( index < len){
					 var name = glassCtm[index].substring(0,glassCtm[index].lastIndexOf('.'));
					 loader.load("ctm/"+glassCtm[index], function(geometry){
						 var c = name.split("_");						
						 if( c[c.length-1] == "A"||c[c.length-1] == "B"||c[c.length-1] == "C"||c[c.length-1] == "D" ){			 
									glassLoad( geometry, 1.5, glass_material, 0, -5, 0,  0,name,false );						
						 }
						 else if( c[c.length-1] == "metal" ){			 
									glassLoad( geometry, 1.5, metal_material, 0, -5, 0,  0,name,false );						
						 }
 		  ++index;
 		  load(); // for looping the function
            
//alert();
},{ useWorker: true });
				}   	
    }

    load();

})();

}

function glassChange(getId){
	var glassSplit = getId.split("_");
	var glass = glassSplit[glassSplit.length-1];
		scene.traverse( function (glassMesh) {
			if ( glassMesh instanceof THREE.Mesh ) {
				var s = glassMesh.name.split("_");
				if(s[s.length-1] == glass){
					glassMesh.visible = true;
				}
			}
		});
}
function metalChange(getId){
	var glassSplit = getId.split("_");
	var glass = glassSplit[glassSplit.length-1];
	var metal = "05_metal";
			scene.traverse( function (glassMesh) {
			if ( glassMesh instanceof THREE.Mesh ) {
					var s = glassMesh.name.split("_");
						if(s[s.length-1] == glass ){
							glassMesh.visible = true;
						}
						if(metal == glassMesh.name){
							glassMesh.visible = true;
						}
				}
		});
}
function clickAnim(){
	count++;	
}
function cameraReset(){
	camera.position.z = 30;
	camera.position.x = 20;
	camera.position.y = 10;
	cube.rotation.y = 0;
}
function onWindowResize() {

				camera.aspect = window.innerWidth / window.innerHeight ;
				camera.updateProjectionMatrix();
				renderer.setSize(window.innerWidth, window.innerHeight );

			}
function animate() {

requestAnimationFrame( animate );

controls.update();

render();

}


function render() {
	

	//alert(anim);
	 if((count%2)==0){
		 cube.rotation.y += 0.01;
	 }
	 

renderer.render( scene, camera );

}

init();
animate();
