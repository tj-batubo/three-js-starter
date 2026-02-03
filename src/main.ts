import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/Addons.js';

// ==========================================
// 1. CORE ENVIRONMENT SETUP
// ==========================================
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  100
);

const container = document.getElementById("container");
if (container) {
  container.appendChild(renderer.domElement);
}













// ==========================================
// 2. ENVIRONMENT PROPERTIES & CONTROLS
// ==========================================
scene.background = new THREE.Color(0x222222);

camera.position.set(0, 0, 5);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.1;

// Lighting (Essential for MeshStandardMaterial)
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1.0);
directionalLight.position.set(5, 5, 5);
scene.add(directionalLight);
















// ==========================================
// 3. OBJECT CREATION (The "Art")
// ==========================================
const geometry = new THREE.IcosahedronGeometry(3, 15);
const material = new THREE.MeshStandardMaterial({
  color: 0xcfcfcf,
  roughness: 0.4,
  metalness: 0.3
});

const ico = new THREE.Mesh(geometry, material);
scene.add(ico);

















// ==========================================
// 4. RENDERING & ANIMATION LOOP
// ==========================================
function render() {
  requestAnimationFrame(render);

  // Update controls for smooth damping
  controls.update();

  // Any object-specific animation can go here
  // ico.rotation.y += 0.005;

  renderer.render(scene, camera);
}













// Handle window resizing
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

render();

