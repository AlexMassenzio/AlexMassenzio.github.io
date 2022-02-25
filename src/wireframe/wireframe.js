import '../css/style.css'

import * as THREE from 'three';
import * as TWEEN from '@tweenjs/tween.js'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

//Initalize environment and camera
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
})

renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize( window.innerWidth, window.innerHeight );
camera.position.setZ(0);


//Initialize geometry
const geometry = new THREE.CylinderGeometry(10, 10, 10, 10);
const material = new THREE.MeshBasicMaterial({color: 0xff6347, wireframe: true});
const cylinder = new THREE.Mesh(geometry, material);

scene.add(cylinder);
cylinder.rotateX(THREE.MathUtils.degToRad(90));

//Initalize Controls
//const controls = new OrbitControls(camera, renderer.domElement);

//Define Tween
const cameraZDest = 18
const tween1 = new TWEEN.Tween({z:0})
  .to({z:cameraZDest}, 3000)
  .delay(250)
  .easing(TWEEN.Easing.Cubic.InOut);

const tween2 = new TWEEN.Tween({y:0, z:0})
  .to({y:180, z:90}, 2500)
  .delay(250)
  .easing(TWEEN.Easing.Cubic.InOut);

//Tween Actions
let tween2ThresholdReached = false
tween1.onUpdate((twn) => {
  camera.position.setZ(twn.z);
  if(!tween2ThresholdReached && twn.z / cameraZDest >= 0.75) {
    tween2ThresholdReached = true;
    tween2.start();
  }
});

tween2.onUpdate((twn) => {
  cylinder.rotation.set(THREE.MathUtils.degToRad(90), THREE.MathUtils.degToRad(twn.y), THREE.MathUtils.degToRad(twn.z))
})

let scrollListenerFlag = false
tween2.onComplete(() => {
  scrollListenerFlag = true;
})

tween1.start();

let mouse;
//Update Loop
function animate() {
  requestAnimationFrame(animate);
  TWEEN.update();

  //console.log(camera.position);
  //controls.update();

  //Turn on menu controls
  if(scrollListenerFlag) {
    scrollListenerFlag = false;
    mouse = new THREE.Vector2();
    //document.addEventListener( 'mousedown', onDocumentMouseDown, false );
    document.addEventListener( 'mousewheel', onDocumentMouseWheel, false );

    var myElement = document.getElementById('bg');
    var hammertime = new Hammer(myElement);
    hammertime.get('swipe').set({ direction: Hammer.DIRECTION_VERTICAL });
    hammertime.on('swipeup swipedown', (e) => {
      console.log(e)
      onSwipe(e);
    });
  }

  renderer.render(scene, camera);
}

let menuScrollFinished = true;

function onDocumentMouseWheel( event ) {
  let angle;
  if(event.wheelDeltaY < 0){
    angle = '+36'
  } else {
    angle = '-36'
  }

  shiftMenu(angle)
}

function onSwipe(event) {
  let angle;
  if(event.type < 'swipeup'){
    angle = '+36'
  } else {
    angle = '-36'
  }

  shiftMenu(angle)
}

function shiftMenu(angle) {
  if (menuScrollFinished){
    menuScrollFinished = false;
    // console.log(THREE.MathUtils.radToDeg(cylinder.rotation.x));
    const tweenAngleDown = new TWEEN.Tween({angle: THREE.MathUtils.radToDeg(cylinder.rotation.x)})
    .to({angle: angle}, 500)
    .easing(TWEEN.Easing.Cubic.Out)
    .onUpdate((twn) => {
      // console.log("cylinder: " + THREE.MathUtils.radToDeg(cylinder.rotation.x));
      // console.log("tween: " + twn.angle);
      cylinder.rotation.set(THREE.MathUtils.degToRad(twn.angle), cylinder.rotation.y, cylinder.rotation.z);
    })
    .onComplete(() => {menuScrollFinished = true});

    tweenAngleDown.start();
  }
}

animate();