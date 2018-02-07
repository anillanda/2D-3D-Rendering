var camera, scene, s, controls, renderer;
var cameraControls, cube;
var windowHalfX = $("#threeCanvas").innerWidth();
var windowHalfY = $("#threeCanvas").innerHeight();
var loader = new THREE.CTMLoader();
var material;
var front_light;
var back_light;
var right_light;
var count = 1;
var len, index = 0;
var refCube, body_material;
var glassMesh;
var glassA_point1=[], glassA_point2=[], glassA_point3=[], glassA_point4=[];
var glassB_point1=[], glassB_point2=[], glassB_point3=[], glassB_point4=[];
var glassC_point1=[], glassC_pointBetween_p1_p2=[], glassC_pointBetween_p1_p6=[], glassC_point2=[], glassC_point3=[], glassC_point4=[], glassC_point5=[], glassC_point6=[];
var glassD_point1=[], glassD_point2=[], glassD_point3=[], glassD_point4=[];

function glassLoad(_0xb59ex14, s, material, _0xb59ex15, _0xb59ex16, _0xb59ex17, _0xb59ex18, _0xb59ex19) {
    glassMesh = new THREE.Mesh(_0xb59ex14, material);
    glassMesh['position']['set'](_0xb59ex15, _0xb59ex16, _0xb59ex17);
    glassMesh['scale']['set'](s, s, s);
    glassMesh['visible'] = true;
    glassMesh['rotation']['y'] = _0xb59ex18;
    glassMesh['name'] = _0xb59ex19;
    this.glassMesh= glassMesh;
    scene['add'](glassMesh);
   // console.log(glassMesh);

}

function init() {
    scene = new THREE.Scene();
   var refCube = new THREE.CubeTextureLoader()['setPath']('img/')['load'](['px.jpg', 'nx.jpg', 'py.jpg', 'ny.jpg', 'pz.jpg', 'nz.jpg']);
    var _0xb59ex1b = THREE['ImageUtils']['loadTexture']('tex/ao_Map.jpg');
    tyre_material = new THREE.MeshLambertMaterial({
        envMap: refCube,
        color: 0xa4a5a4,
        reflectivity: 1,
        specular: 1,
        combine: THREE['MixOperation'],
        side: THREE['DoubleSide']
    });
    body_material = new THREE.MeshPhongMaterial({
        color: 0x61a060,
        envMap: refCube,
        transparent: true,
        opacity: 0.2,
        reflectivity: 0.5,
        specular: 1,
        combine: THREE['MixOperation'],
        side: THREE['DoubleSide']
    });
    var _0xb59ex1c = new THREE.AmbientLight(0x858585);
    scene['add'](_0xb59ex1c);
    front_light = new THREE.DirectionalLight(0xffffff);
    front_light['position']['set'](20, 10, 30);
    front_light['shadow']['camera']['far'] = 500.5;
    front_light['shadow']['camera']['left'] = -300;
    front_light['shadow']['camera']['right'] = 300;
    front_light['shadow']['camera']['top'] = 300;
    front_light['shadow']['camera']['bottom'] = -300;
    front_light['intensity'] = 1;
    scene['add'](front_light);
    back_light = new THREE.DirectionalLight(0xffffff);
    back_light['position']['set'](0, 10, -50);
    back_light['shadow']['camera']['far'] = 100.5;
    back_light['shadow']['camera']['left'] = -300;
    back_light['shadow']['camera']['right'] = 300;
    back_light['shadow']['camera']['top'] = 300;
    back_light['shadow']['camera']['bottom'] = -300;
    back_light['intensity'] = 1;
    scene['add'](back_light);
    right_light = new THREE.DirectionalLight(0xffffff);
    right_light['position']['set'](20, 10, -10);
    right_light['castShadow'] = true;
    right_light['shadowDarkness'] = 2;
    right_light['shadow']['camera']['far'] = 100.5;
    right_light['shadow']['camera']['left'] = -300;
    right_light['shadow']['camera']['right'] = 300;
    right_light['shadow']['camera']['top'] = 300;
    right_light['shadow']['camera']['bottom'] = -300;
    right_light['intensity'] = 0.5;
    scene['add'](right_light);
    renderer = new THREE.WebGLRenderer({
        antialias: true
    });
    renderer['setSize']($("#threeCanvas").innerWidth(), $("#threeCanvas").innerHeight());
    renderer['setPixelRatio'](window['devicePixelRatio']);
    renderer['setClearColor'](0xffffff);
    renderer['shadowMapEnabled'] = true;
    renderer['shadowMapSoft'] = true;
    renderer['shadowMapType'] = THREE['PCFSoftShadowMap'];
    renderer['physicallyBasedShading'] = true;
    document.getElementById("threeCanvas")['appendChild'](renderer['domElement']);
    window['addEventListener']('resize', onWindowResize, false);
    camera = new THREE.PerspectiveCamera(30, $("#threeCanvas").innerWidth() / $("#threeCanvas").innerHeight(), 1, 20000);
    camera['position']['z'] = 30;
    camera['position']['x'] = 20;
    camera['position']['y'] = 10;
    camera['lookAt'](new THREE.Vector3(0, 0, 0));
    controls = new THREE.OrbitControls(camera, renderer['domElement']);
    controls['maxPolarAngle'] = Math['PI'] / 2 * 115 / 120;
    camera['add'](front_light);
    cube = new THREE.Mesh(new THREE.BoxGeometry(0, 0, 0), new THREE.MeshNormalMaterial());
    cube['position']['y'] = 0;
    scene['add'](cube);
    cube['add'](camera);
    defaultLoad()
}

function defaultLoad() {
    len = carCtm['length'];
    (function() {
        function _0xb433x21() {
            if (index < len) {
                var _0xb433x1a = carCtm[index]['substring'](0, carCtm[index]['lastIndexOf']('.'));
                loader['load']('ctm/' + carCtm[index], function(_0xb433x15) {
                    var _0xb433x22 = _0xb433x1a['split']('_');
                    if (_0xb433x22[_0xb433x22['length'] - 1] == 'A' || _0xb433x22[_0xb433x22['length'] - 1] == 'B' || _0xb433x22[_0xb433x22['length'] - 1] == 'C' || _0xb433x22[_0xb433x22['length'] - 1] == 'D') {
                        glassLoad(_0xb433x15, 1.5, body_material, 0, -5, 0, 0, _0xb433x1a, true)
                    } else {
                        if (_0xb433x22[_0xb433x22['length'] - 1] == 'metal') {
                            glassLoad(_0xb433x15, 1.5, tyre_material, 0, -5, 0, 0, _0xb433x1a, true)
                        }
                    };
                    ++index;
                    _0xb433x21()
                }, {
                    useWorker: true
                })
            }
        }
        _0xb433x21()
    })()
}

setTimeout(function () {
        //console.log(scene.children);
        scene.children[4].traverse(function (child) {
            if (child instanceof THREE.Mesh) {
                var geometry = new THREE.Geometry().fromBufferGeometry(child.geometry);
                child.geometry = geometry;
                for (var i = 0; i < child.geometry.vertices.length; i++) {
					console.log(child.geometry.vertices.length);
                    if( child.geometry.vertices[i].z>3 && child.geometry.vertices[i].y>4){
                        glassA_point1.push( child.geometry.vertices[i]);
						
						
                    }
					
                    if( child.geometry.vertices[i].z>3  && child.geometry.vertices[i].y<4){
                        glassA_point2.push( child.geometry.vertices[i]);
						
                    }
                    if( child.geometry.vertices[i].z<3 && child.geometry.vertices[i].y>6){
                        glassA_point4.push( child.geometry.vertices[i]);
						
                    }
                    if( child.geometry.vertices[i].z<3 && child.geometry.vertices[i].y<6){
                        glassA_point3.push( child.geometry.vertices[i]);
						
                    }
                }
            }
        });
        scene.children[5].traverse(function (child) {
            if (child instanceof THREE.Mesh) {
                var geometry = new THREE.Geometry().fromBufferGeometry(child.geometry);
                child.geometry = geometry;
                for (var i = 0; i < child.geometry.vertices.length; i++) {
                    if( child.geometry.vertices[i].z<0 && child.geometry.vertices[i].y<1){
                        glassB_point3.push( child.geometry.vertices[i]);
						
                    }
                    if( child.geometry.vertices[i].z<0 && child.geometry.vertices[i].y>6){
                        glassB_point4.push( child.geometry.vertices[i]);
							
                    }
                    if( child.geometry.vertices[i].z>0 && child.geometry.vertices[i].y<1){
                        glassB_point2.push( child.geometry.vertices[i]);
							
                    }
                    if( child.geometry.vertices[i].z>0 && child.geometry.vertices[i].y>6){
                        glassB_point1.push( child.geometry.vertices[i]);
						
                    }
                }
            }
        });
        scene.children[6].traverse(function (child) {
            if (child instanceof THREE.Mesh) {
                var geometry = new THREE.Geometry().fromBufferGeometry(child.geometry);
                child.geometry = geometry;
                for (var i = 0; i < child.geometry.vertices.length; i++) {
						 
                    if( child.geometry.vertices[i].z<-4  && child.geometry.vertices[i].y<4){
                        glassC_point5.push( child.geometry.vertices[i]);
						
                    }
                    if( child.geometry.vertices[i].z<-4  && child.geometry.vertices[i].y>6){
                        glassC_point6.push( child.geometry.vertices[i]);
						
                    }
                    if( child.geometry.vertices[i].z<-2.5 && child.geometry.vertices[i].z>-3 && child.geometry.vertices[i].y>6){
                        glassC_pointBetween_p1_p6.push(child.geometry.vertices[i]);
						
                    }
                    if( child.geometry.vertices[i].z<-2.5 && child.geometry.vertices[i].z>-3 && child.geometry.vertices[i].y<6 && child.geometry.vertices[i].y>2){
                        glassC_point4.push(child.geometry.vertices[i]);
						
                    }
                    if( child.geometry.vertices[i].z<-2.5 && child.geometry.vertices[i].z>-3 && child.geometry.vertices[i].y<1){
                        glassC_point3.push(child.geometry.vertices[i]);
						

                    }
                    if( child.geometry.vertices[i].z>-2 && child.geometry.vertices[i].y<1 ){
                        glassC_point2.push(child.geometry.vertices[i]);
						

                    }
                    if( child.geometry.vertices[i].z>-2 && child.geometry.vertices[i].y>1 && child.geometry.vertices[i].y<4 ){
                        glassC_pointBetween_p1_p2.push(child.geometry.vertices[i]);
						
                    }
                    if( child.geometry.vertices[i].z>-2 && child.geometry.vertices[i].y>6 ){
                         glassC_point1.push(child.geometry.vertices[i]);
						 console.log(glassC_point1);
                    }
                }
            }
        });
        scene.children[7].traverse(function (child) {
            if (child instanceof THREE.Mesh) {
                var geometry = new THREE.Geometry().fromBufferGeometry(child.geometry);
                child.geometry = geometry;
                for (var i = 0; i < child.geometry.vertices.length; i++) {
                   
                    if(  child.geometry.vertices[i].y<4 && child.geometry.vertices[i].x<-1){
                         glassD_point3.push(child.geometry.vertices[i]);
						 
                    }
                    if(  child.geometry.vertices[i].y<4 && child.geometry.vertices[i].x>-1){
                         glassD_point2.push(child.geometry.vertices[i]);
						
                    }
                    if ( child.geometry.vertices[i].y>4 && child.geometry.vertices[i].x<-1){
                        glassD_point4.push(child.geometry.vertices[i]);
						
                        // child.geometry.vertices[i].z +=10;

                    }
                    if(  child.geometry.vertices[i].y>4 && child.geometry.vertices[i].x>-1){
                        glassD_point1.push(child.geometry.vertices[i]);
						 
                    }

                }
            }
        });

    }
    , 1000);

function metalChange(_0xb433x24) {
    var _0xb433x25 = _0xb433x24['split']('_');
    var _0xb433x26 = _0xb433x25[_0xb433x25['length'] - 1];
    var _0xb433x29 = '05_metal';
    scene['traverse'](function(_0xb433x27) {
        if (_0xb433x27 instanceof THREE['Mesh']) {
            var s = _0xb433x27['name']['split']('_');
            if (s[s['length'] - 1] == _0xb433x26) {
                _0xb433x27['visible'] = true
            };
            if (_0xb433x29 == _0xb433x27['name']) {
                _0xb433x27['visible'] = true
            }
        }
    })
}

function glassChange(_0xb433x24) {
    var _0xb433x25 = _0xb433x24['split']('_');
    var _0xb433x26 = _0xb433x25[_0xb433x25['length'] - 1];
    scene['traverse'](function(_0xb433x27) {
        if (_0xb433x27 instanceof THREE['Mesh']) {
            var s = _0xb433x27['name']['split']('_');
            if (s[s['length'] - 1] == _0xb433x26) {
                _0xb433x27['visible'] = true
            }
        }
    })
}

function onWindowResize() {
    windowHalfX = $("#threeCanvas").innerWidth() ;
    windowHalfY = $("#threeCanvas").innerHeight();
    camera['aspect'] = $("#threeCanvas").innerWidth() / $("#threeCanvas").innerHeight();
    camera['updateProjectionMatrix']();
    renderer['setSize']($("#threeCanvas").innerWidth(), $("#threeCanvas").innerHeight())
}
function cameraReset() {
    camera['position']['z'] = 30;
    camera['position']['x'] = 20;
    camera['position']['y'] = 10;
    cube['rotation']['y'] = 0
}
function expand(){
	newwindow=window.open("preview.html",'name','height=600,width=1000',"_blank");//'name','height=600,width=800'
	if (window.focus) {
			newwindow.focus();
		}
}
function clickAnim() {
    count++
}



function camIn(){    
      camera.position.z-=1;
      camera.position.x-=1;
      camera.position.y-=1;	
}
function camOut(){    
      camera.position.z+=1;
      camera.position.x+=1;
      camera.position.y+=1;	
}
function animate() {
    requestAnimationFrame(animate);
    controls['update']();
    render();
}

function render() {
    if ((count % 2) == 0) {
        cube['rotation']['y'] += 0.01
    };
    renderer['render'](scene, camera)
}
init();
animate();

