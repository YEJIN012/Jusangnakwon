import * as THREE from 'three';
// Scene 생성
const scene = new THREE.Scene();

// Camera 생성
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.set(0, 0, 5);

// Renderer 생성
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// Geometry 생성
const geometry = new THREE.SphereGeometry( 1, 32, 32 );

// Material 생성
const material = new THREE.MeshBasicMaterial( { color: 0xffff00 } );

// Mesh 생성
const sun = new THREE.Mesh( geometry, material );

// 태양의 빛 생성
const light = new THREE.PointLight( 0xffffff, 1, 0 );
light.position.set(0, 0, 0);
scene.add( light );

// 태양 추가
scene.add( sun );

// 렌더링
function render() {
  requestAnimationFrame( render );
  sun.rotation.y += 0.01;
  renderer.render( scene, camera );
}
render();